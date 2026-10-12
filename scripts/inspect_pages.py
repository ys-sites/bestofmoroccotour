import glob, os
from bs4 import BeautifulSoup

pages = [
    'index_html.html',
    'about_html.html',
    'profile_html.html',
    'guided_morocco_tours_html.html',
    'morocco_tours_html.html',
    'morocco_imperial_sahara_html.html',
    'morocco_imperial_cities_html.html',
    'morocco_north_south_html.html',
    'morocco_atlantic_ocean_html.html',
    'morocco_south_kasbahs_html.html',
    'morocco_jewish_heritage_html.html',
    'morocco_cultural_tours_html.html',
    'morocco_premium_tour_html.html',
    'morocco_customized_tours_html.html',
    'morocco_meetings_incentives_html.html',
    'contacts_html.html',
    'terms_conditions_html.html'
]

for p in pages:
    fpath = os.path.join('scratch/pages', 'https___www_bestofmoroccotour_com_' + p)
    if not os.path.exists(fpath):
        fpath = os.path.join('scratch/pages', 'http___www_bestofmoroccotour_com_' + p)
    if not os.path.exists(fpath):
        print(f"Missing: {p}")
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    title = soup.title.string.strip() if soup.title and soup.title.string else 'No title'
    h1s = [h.get_text(strip=True) for h in soup.find_all('h1')]
    h2s = [h.get_text(strip=True) for h in soup.find_all('h2')]
    h3s = [h.get_text(strip=True) for h in soup.find_all('h3')]
    h4s = [h.get_text(strip=True) for h in soup.find_all('h4')]
    imgs = [img.get('src') for img in soup.find_all('img') if img.get('src')]
    
    print(f"=== {p} ===")
    print(f"  Title: {title}")
    print(f"  H1: {h1s}")
    print(f"  H2: {h2s}")
    print(f"  H3s ({len(h3s)}): {h3s[:5]}")
    print(f"  H4s ({len(h4s)}): {h4s[:5]}")
    print(f"  Img count: {len(imgs)}")
