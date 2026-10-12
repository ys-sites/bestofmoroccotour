import os
import sys
import json
import requests
from urllib.parse import urljoin

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/images_data.json', 'r', encoding='utf-8') as f:
    images_dict = json.load(f)

print(f"Auditing and testing {len(images_dict)} images...")

os.makedirs('scratch/downloaded_images', exist_ok=True)
image_audit = []

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

for url, data in images_dict.items():
    try:
        r = requests.get(url, headers=headers, timeout=10)
        status = r.status_code
        size = len(r.content) if status == 200 else 0
        content_type = r.headers.get('Content-Type', '')
        
        # Save image locally
        filename = os.path.basename(data['src'].split('?')[0])
        # handle subpaths like slides/slide_1.jpg
        subpath = data['src'].replace('/', '_')
        local_path = os.path.join('scratch/downloaded_images', subpath)
        if status == 200:
            with open(local_path, 'wb') as img_f:
                img_f.write(r.content)
                
        image_audit.append({
            "url": url,
            "relative_path": data['src'],
            "alt": data['alt'],
            "title": data['title'],
            "dimensions": data['dimensions'],
            "pages": data['pages'],
            "http_status": status,
            "size_bytes": size,
            "content_type": content_type,
            "local_file": local_path if status == 200 else None
        })
        print(f"[{status}] {data['src']} ({size} bytes) - {content_type}")
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        image_audit.append({
            "url": url,
            "relative_path": data['src'],
            "alt": data['alt'],
            "title": data['title'],
            "dimensions": data['dimensions'],
            "pages": data['pages'],
            "http_status": 0,
            "size_bytes": 0,
            "content_type": "error",
            "error": str(e)
        })

with open('scratch/image_audit_results.json', 'w', encoding='utf-8') as f:
    json.dump(image_audit, f, indent=2)

print(f"Audit completed. Total images checked: {len(image_audit)}")
