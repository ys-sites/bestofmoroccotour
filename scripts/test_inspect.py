import os
import sys
import glob
import json
import re
from bs4 import BeautifulSoup
from urllib.parse import urljoin

sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://www.bestofmoroccotour.com"

# Let's inspect each HTML file in scratch/pages/
html_files = glob.glob('scratch/pages/https___*.html')

print(f"Analyzing {len(html_files)} HTML files...")

for fpath in sorted(html_files):
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    title = soup.title.get_text(strip=True) if soup.title else ""
    meta_desc = soup.find('meta', attrs={'name': 'description'})
    desc = meta_desc['content'].strip() if meta_desc and meta_desc.get('content') else ""
    
    # check if tour page (has itinerary timeline or h4 days)
    h4s = [h4.get_text(strip=True) for h4 in soup.find_all('h4')]
    days = [h for h in h4s if any(k in h.upper() for k in ['DAY', 'CASABLANCA', 'MARRAKECH', 'FES', 'RABAT', 'MERZOUGA', 'EL JADIDA', 'TANGIER'])]
    
    print(f"\nFILE: {fname}")
    print(f"  Title: {title}")
    print(f"  Desc: {desc[:100]}...")
    if days:
        print(f"  Tour Stops ({len(days)}): {days[:4]}...")
