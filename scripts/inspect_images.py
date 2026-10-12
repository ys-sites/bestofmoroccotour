import sys
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup
import glob, os, json
from urllib.parse import urljoin
import requests

base_url = 'https://www.bestofmoroccotour.com/'
all_imgs = {}

for fpath in glob.glob('scratch/pages/https___*.html'):
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    page_name = fname.replace('https___www_bestofmoroccotour_com_', '').replace('.html', '')
    for img in soup.find_all('img'):
        src = img.get('src')
        if not src:
            continue
        full_url = urljoin(base_url, src)
        alt = img.get('alt', '').strip()
        title = img.get('title', '').strip()
        width = img.get('width', '')
        height = img.get('height', '')
        
        # Check context/surrounding
        parent = img.parent
        context = parent.get('class', [])
        
        if full_url not in all_imgs:
            all_imgs[full_url] = {
                'url': full_url,
                'src': src,
                'alt': alt,
                'title': title,
                'dimensions': f"{width}x{height}" if width or height else "",
                'pages': [page_name]
            }
        else:
            if page_name not in all_imgs[full_url]['pages']:
                all_imgs[full_url]['pages'].append(page_name)
            if not all_imgs[full_url]['alt'] and alt:
                all_imgs[full_url]['alt'] = alt

print(f"Total unique images: {len(all_imgs)}")
for u, info in sorted(all_imgs.items()):
    print(f"IMG: {info['src']} | ALT: {info['alt']} | PAGES: {', '.join(info['pages'])}")

with open('scratch/images_data.json', 'w', encoding='utf-8') as f:
    json.dump(all_imgs, f, indent=2)
