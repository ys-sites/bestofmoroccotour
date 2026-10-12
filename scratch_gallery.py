import os
import sys
from PIL import Image

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
except ImportError:
    pass

sys.stdout.reconfigure(encoding='utf-8')

src_dir = 'c:/Users/Sharafath/Desktop/Website/Travel agent/Client Request'
dest_thumb_dir = 'c:/Users/Sharafath/Desktop/Website/Travel agent/public/temp_thumbnails'
os.makedirs(dest_thumb_dir, exist_ok=True)

html_content = """<!DOCTYPE html>
<html>
<head>
    <title>Client Request Image Gallery</title>
    <style>
        body { font-family: sans-serif; background: #1a1a1a; color: #fff; padding: 20px; }
        .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
        .card { background: #2a2a2a; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 1px solid #333; }
        .card img { width: 100%; height: 180px; object-fit: cover; display: block; }
        .info { padding: 10px; font-size: 12px; word-break: break-all; }
        .info h3 { margin: 0 0 5px 0; font-size: 14px; color: #ffaf40; }
    </style>
</head>
<body>
    <h1>Client Request Image Gallery</h1>
    <div class="gallery">
"""

valid_extensions = ('.jpg', '.jpeg', '.png', '.heic', '.webp', '.tif', '.tiff', '.avif')

image_count = 0
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.lower().endswith(valid_extensions):
            full_path = os.path.join(root, f)
            rel_path = os.path.relpath(full_path, src_dir)
            thumb_name = rel_path.replace(os.sep, '_').replace(' ', '_').lower() + '.jpg'
            thumb_path = os.path.join(dest_thumb_dir, thumb_name)
            
            # Generate thumbnail if not exists
            if not os.path.exists(thumb_path):
                try:
                    with Image.open(full_path) as img:
                        img.thumbnail((400, 400))
                        # convert RGBA to RGB for saving as JPEG
                        if img.mode in ('RGBA', 'LA', 'P'):
                            img = img.convert('RGB')
                        img.save(thumb_path, 'JPEG', quality=80)
                except Exception as e:
                    print(f"Error creating thumbnail for {rel_path}: {e}")
                    continue
            
            # Add to HTML
            img_src = f"temp_thumbnails/{thumb_name}"
            html_content += f"""
            <div class="card">
                <img src="{img_src}" alt="{f}">
                <div class="info">
                    <h3>{f}</h3>
                    <p>Path: {rel_path}</p>
                </div>
            </div>
            """
            image_count += 1

html_content += """
    </div>
</body>
</html>
"""

with open('c:/Users/Sharafath/Desktop/Website/Travel agent/public/gallery.html', 'w', encoding='utf-8') as hf:
    hf.write(html_content)


print(f"Generated gallery.html with {image_count} images.")
