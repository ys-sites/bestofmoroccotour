import os, sys
from PIL import Image

src = 'c:/Users/Sharafath/Desktop/Website/Travel agent/Client Request'
dst = 'c:/Users/Sharafath/Desktop/Website/Travel agent/public/images'

def save_optimized(img_path, dest_path, max_size=1920, quality=85):
    try:
        img = Image.open(img_path)
        if img.mode in ('RGBA', 'LA', 'P'):
            img = img.convert('RGB')
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        w, h = img.size
        if w > max_size or h > max_size:
            ratio = min(max_size/w, max_size/h)
            img = img.resize((int(w*ratio), int(h*ratio)), Image.LANCZOS)
        img.save(dest_path, 'JPEG', quality=quality, optimize=True)
        print(f'OK: {os.path.basename(dest_path)}')
    except Exception as e:
        print(f'ERR: {dest_path}: {e}')

# Taghazout course images
taghazout_files = [
    ('tgz 10 side.jpg', 'tgz_course_1.jpg'),
    ('tgz 17 zoom.jpg', 'tgz_course_ocean.jpg'),
    ('tgz 18 hotel.jpg', 'tgz_course_hotel.jpg'),
    ('tgz 8th high.jpg', 'tgz_course_aerial.jpg'),
    ('_XC_0779 copie.jpg', 'tgz_course_2.jpg'),
    ('_XC_0808 copie.jpg', 'tgz_course_3.jpg'),
    ('_XC_0856 copie.jpg', 'tgz_course_4.jpg'),
    ('7bleu TGP.JPG', 'tgz_course_bleu7.jpg'),
    ('9BLEU MATIN.JPG', 'tgz_course_bleu9.jpg'),
    ('PARADISE OF FLOWERS .JPG', 'taghazout_flowers.jpg'),
]
for src_name, dst_name in taghazout_files:
    save_optimized(f'{src}/{src_name}', f'{dst}/{dst_name}')

# Marrakech Royal Golf images
mkch_direct = [
    ('IMG_3723.JPG', 'royal_golf_marrakech_1.jpg'),
    ('IMG_3752.JPG', 'royal_golf_marrakech_2.jpg'),
    ('CLUB HOUSE .JPG', 'royal_golf_clubhouse.jpg'),
    ('soleil couchant.JPG', 'royal_golf_sunset.jpg'),
    ("coucher d'ete.jpg", 'royal_golf_evening.jpg'),
    ('AKENZA-102.jpg', 'akenza_golf_1.jpg'),
    ('AKENZA-139.jpg', 'akenza_golf_2.jpg'),
    ('Akenza teeshot 2.jpg', 'akenza_golf_3.jpg'),
    ('5 BLUE COURSE.JPG', 'marrakech_golf_blue5.jpg'),
    ('9 JAUNE.JPG', 'marrakech_golf_yellow9.jpg'),
    ('10 parcours BLEU.jpg', 'marrakech_golf_blue10.jpg'),
    ('18 parcours rouge.jpg', 'marrakech_golf_rouge18.jpg'),
    ('PARCOURS ROUGE Trous n\u00b011.jpg', 'royal_golf_rouge11.jpg'),
]
for src_name, dst_name in mkch_direct:
    src_path = f'{src}/{src_name}'
    if os.path.exists(src_path):
        save_optimized(src_path, f'{dst}/{dst_name}')
    else:
        print(f'SKIP (not found): {src_name}')

# Handle coucher d'ete separately since apostrophe may cause issues
coucher_path = os.path.join(src, "coucher d'\u00e9t\u00e9.jpg")
if os.path.exists(coucher_path):
    save_optimized(coucher_path, f'{dst}/royal_golf_evening.jpg')
else:
    # try listing
    for f in os.listdir(src):
        if 'coucher' in f.lower():
            save_optimized(os.path.join(src, f), f'{dst}/royal_golf_evening.jpg')
            break

# Al Maaden images (wetransfer folder)
wt_src = f'{src}/wetransfer_img_5158-jpg_2026-06-03_1513'
almaaden_files = [
    ('IMG_5158.JPG', 'almaaden_golf_1.jpg'),
    ('IMG_6768.JPG', 'almaaden_golf_2.jpg'),
    ('IMG_6787-modifier.JPG', 'almaaden_golf_3.jpg'),
    ('IMG_6793-modifier.JPG', 'almaaden_golf_4.jpg'),
    ('IMG_7238-modifier.JPG', 'almaaden_golf_5.jpg'),
    ('IMG_7243.JPG', 'almaaden_golf_6.jpg'),
    ('IMG_8435.JPG', 'almaaden_golf_7.jpg'),
    ('IMG_9776.JPG', 'almaaden_golf_8.jpg'),
    ('IMG_9832.JPG', 'almaaden_restaurant1.jpg'),
    ('IMG_9944.JPG', 'almaaden_restaurant2.jpg'),
]
for src_name, dst_name in almaaden_files:
    src_path = f'{wt_src}/{src_name}'
    if os.path.exists(src_path):
        save_optimized(src_path, f'{dst}/{dst_name}')
    else:
        # try case-insensitive search
        for f in os.listdir(wt_src):
            if f.upper() == src_name.upper():
                save_optimized(os.path.join(wt_src, f), f'{dst}/{dst_name}')
                break
        else:
            print(f'SKIP (not found): {src_name}')

# More Info DJI aerial shots (Royal Golf de Marrakech aerials)
more_info_src = f'{src}/More Info'
if os.path.exists(more_info_src):
    dji_files = [f for f in os.listdir(more_info_src) if 'dji' in f.lower()]
    for i, f in enumerate(sorted(dji_files)[:6], 1):
        save_optimized(os.path.join(more_info_src, f), f'{dst}/royal_golf_aerial_{i}.jpg')

print('ALL DONE')
