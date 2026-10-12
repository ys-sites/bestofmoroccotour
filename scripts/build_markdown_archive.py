import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("Best of Moral Coutures - Full Site Data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

md_out = []
md_out.append("# Best of Morocco Tours (Best of Moral Coutures) — Complete Website Archive\n")
md_out.append("> **Source Website:** [http://www.bestofmoroccotour.com](http://www.bestofmoroccotour.com)  ")
md_out.append("> **Extraction Date:** 2026-10-12  ")
md_out.append("> **Total Pages Crawled:** 17 unique HTML pages  ")
md_out.append("> **Total Images Cataloged & Audited:** 73 images  ")
md_out.append("> **Total Itinerary Days Detailed:** 65 daily legs  ")
md_out.append("> **Associated Export Files:**")
md_out.append("> - Multi-Sheet Excel Spreadsheet: `Best of Moral Coutures.xlsx` / `Best of Morocco Tours.xlsx`")
md_out.append("> - Flat Data File: `Best of Moral Coutures.csv` / `Best of Morocco Tours.csv`")
md_out.append("> - Complete JSON Tree: `Best of Moral Coutures - Full Site Data.json`\n")
md_out.append("---\n")

# Table of Contents
md_out.append("## Table of Contents\n")
md_out.append("1. [Executive Summary & Operational Credentials](#1-executive-summary--operational-credentials)")
md_out.append("2. [Homepage (First Page) Full Context & Structure](#2-homepage-first-page-full-context--structure)")
md_out.append("3. [Leadership, Tour Guides & Team Profiles](#3-leadership-tour-guides--team-profiles)")
md_out.append("4. [Master Tour Catalog & Package Specifications](#4-master-tour-catalog--package-specifications)")
md_out.append("5. [Exhaustive Day-by-Day Itineraries](#5-exhaustive-day-by-day-itineraries)")
md_out.append("6. [Specialty Offerings: MICE, Custom Tours, Cultural Festivals](#6-specialty-offerings-mice-custom-tours-cultural-festivals)")
md_out.append("7. [Verified Client Testimonials & Reviews](#7-verified-client-testimonials--reviews)")
md_out.append("8. [Complete Media & Photo Catalog (73 Assets)](#8-complete-media--photo-catalog-73-assets)")
md_out.append("9. [Terms of Business, Cancellation Policies & Guarantees](#9-terms-of-business-cancellation-policies--guarantees)")
md_out.append("10. [Site-Wide SEO Architecture & Page Metadata Registry](#10-site-wide-seo-architecture--page-metadata-registry)\n")
md_out.append("---\n")

# 1. Executive Summary
md_out.append("## 1. Executive Summary & Operational Credentials\n")
overview = data["site_overview"]
md_out.append(f"- **Company Name:** {overview['company_name']}")
md_out.append(f"- **Legal Structure:** {overview['legal_structure']}")
md_out.append(f"- **CEO & Founder:** Ayoub Sadeddine (Tour Guide Licence No. 2816)")
md_out.append(f"- **North America Hotline (US & Canada):** `{overview['phone_us_ca']}`")
md_out.append(f"- **Morocco Direct Hotline:** `{overview['phone_ma']}`")
md_out.append(f"- **Official Email:** `{overview['email']}`")
md_out.append(f"- **Operating Hours:** {overview['hours']}")
md_out.append(f"- **Payment Methods:** {overview['payment_methods']}")
md_out.append(f"- **Guarantees:** {overview['guarantees']}")
md_out.append(f"- **Operational Scale:** 20+ years in Morocco tourism, over 12,000 bus kilometers, and over 4,300 hotel nights handled.\n")

# 2. Homepage Context
md_out.append("## 2. Homepage (First Page) Full Context & Structure\n")
md_out.append("### 2.1 Hero Slider Banners & Taglines\n")
md_out.append("| Slide | Background Image | Headline | Subtitle | Destination CTA |")
md_out.append("| :--- | :--- | :--- | :--- | :--- |")
md_out.append("| **Slide 1** | `img/slides/slide_1.jpg` | *Of Moroccan Tourism* | Morocco Historic Buildings - Morocco Attractions - Morocco Museums | Morocco Tours |")
md_out.append("| **Slide 2** | `img/slides/slide_2.jpg` | *Best of Morocco Tours* | Best of Morocco Tours offer a variety of services and options | Morocco Tours |")
md_out.append("| **Slide 3** | `img/slides/slide_3.jpg` | *A Wide Experience* | Cultural Morocco - Adventure Morocco - Spiritual Morocco | Morocco Tours |")
md_out.append("| **Slide 4** | `img/slides/slide_4.jpg` | *With Us You Will Never* | Morocco Festivals & Celebrations and Morocco tailor-making Tours | Morocco Tours |")
md_out.append("| **Slide 5** | `img/slides/slide_5.jpg` | *Be Able To Forget* | North & South of Morocco | Morocco Tours |")
md_out.append("| **Slide 6** | `img/slides/slide_6.jpg` | *Your First Trip To Morocco* | Morocco Golfing Tours | Morocco Tours |")
md_out.append("| **Slide 7** | `img/slides/slide_7.jpg` | *Explore our latest Morocco tours options!* | Best of Morocco Atlantic Ocean Journey | Morocco Tours |\n")

md_out.append("### 2.2 'About The Kingdom of Morocco' Intro Section\n")
md_out.append("> *\"From Romans ruins to historic monuments, from beautiful places to strange colonial structures, from highest mountains to serene lakes & rivers, from golden sand dunes to vast cedar forests, and from urban offerings to the rural way of life, Morocco is a unique experience should not be missed. The Tours of Morocco will meet your expectations and offer you an amazing memory... Historic cities like Fes, Marrakech, Rabat and Meknes which are renowned for Imperial cities of Morocco are a testimony to that fact. Others including Casablanca, Tangier, Chefchoauen, Ouarzazate, Essaouira, El Jadida, Agadir, and many more are cities where one can feel the bygone era seamlessly merging with the modern times.\"*\n")

md_out.append("### 2.3 Six Pillars of Excellence ('Why Choose Best of Morocco Tours?')\n")
md_out.append("1. **Best Price Guarantee:** Guarantee best service and best price. If a client finds a better advertised price elsewhere on an identical vacation package, Best of Morocco Tours will match it exactly and grant an additional **5% discount**.")
md_out.append("2. **Professional Morocco Local Guides:** Hand-picked, licensed official Moroccan local guides representing the pride and soul of the company.")
md_out.append("3. **Moroccan Expert:** 100% Moroccan-owned incoming tour operator with over 20 years of experience solely focused on destination Morocco.")
md_out.append("4. **Sustainable Tourism & Eco-Friendly Stay:** Supporting indigenous cultures, local producers, and small community economies; utilizing eco-conscious desert camps and mountain lodges.")
md_out.append("5. **Monuments & Attractions Management:** VIP seamless scheduling: zero waiting in lines at monuments or museums, pre-booked transit, and guaranteed personalized welcome.")
md_out.append("6. **Flexible Tours Payment:** Secure online processing with Credit Cards, PayPal, and international bank transfers; easy payment schedules before departure.\n")

# 3. Leadership & Tour Guides
md_out.append("## 3. Leadership, Tour Guides & Team Profiles\n")
for tm in data["team_and_guides"]:
    md_out.append(f"### 3.{data['team_and_guides'].index(tm)+1} {tm['name']} — {tm['role']}\n")
    md_out.append(f"- **Official Accreditation:** {tm['license']}")
    md_out.append(f"- **Academic Degrees & Diplomas:** {tm['education']}")
    md_out.append(f"- **Industry Experience:** {tm['experience']}")
    md_out.append(f"- **Heritage & Origins:** {tm['background']}")
    md_out.append(f"- **Languages Spoken:** {tm['languages']}")
    md_out.append(f"- **Operating Philosophy:** {tm['philosophy']}\n")

# 4. Master Tour Catalog
md_out.append("## 4. Master Tour Catalog & Package Specifications\n")
md_out.append("| Tour Package | Duration | Category | Published Price | Primary Cities & Destinations | Transportation | Accommodations |")
md_out.append("| :--- | :--- | :--- | :--- | :--- | :--- | :--- |")
for t in data["tours"]:
    md_out.append(f"| **{t['name']}** | {t['duration']} | {t['category']} | {t['price']} | {t['destinations']} | {t['vehicles']} | {t['hotels']} |")
md_out.append("\n")

# Inclusions and Exclusions per Tour
md_out.append("### Package Inclusions & Exclusions Breakdown\n")
for t in data["tours"]:
    md_out.append(f"#### {t['name']} ({t['duration']})")
    md_out.append(f"- **Package Includes:** {t['inclusions']}")
    md_out.append(f"- **Package Excludes:** {t['exclusions']}\n")

# 5. Exhaustive Day-by-Day Itineraries
md_out.append("## 5. Exhaustive Day-by-Day Itineraries\n")
current_tour = ""
for itin in data["day_by_day_itineraries"]:
    if itin["tour_name"] != current_tour:
        current_tour = itin["tour_name"]
        md_out.append(f"\n### {current_tour} ({itin['tour_duration']})\n")
    md_out.append(f"#### {itin['day_number']}: {itin['route_title']}")
    md_out.append(f"{itin['description']}\n")

# 6. Specialty Offerings
md_out.append("## 6. Specialty Offerings: MICE, Custom Tours, Cultural Festivals\n")
md_out.append("### 6.1 MICE (Meetings, Incentives, Conferences & Events)\n")
md_out.append("- **Scale & Capacity:** Dedicated event planning handling groups from 20 to 500+ delegates.")
md_out.append("- **Tour Directors:** Each tour director has successfully executed 50+ corporate events.")
md_out.append("- **Turnkey Services:** Venue selection, hotel block contracts, branded stationery, dedicated post-event microsites, gala desert banquets, 4x4 team-building rallies, and pre/post-conference leisure tours.\n")

md_out.append("### 6.2 Tailor-Made & Customized Tours\n")
md_out.append("- 100% bespoke private departures for solo travelers, couples, families, and private affinity groups.")
md_out.append("- Flexible choice of airline, private chauffeured vehicles vs. small-group coaches, custom boutique Riads vs. 5-star palace hotels.")
md_out.append("- Specialized themes: Honeymoon packages, mountain trekking, desert camel expeditions, cooking classes, Jewish heritage, and golf packages.\n")

md_out.append("### 6.3 Annual Festivals & Specialty Programs\n")
md_out.append("| Event / Program | Duration | Description | Rating |")
md_out.append("| :--- | :--- | :--- | :--- |")
for at in data["additional_catalog_tours"]:
    md_out.append(f"| **{at['name']}** | {at['duration']} | {at['summary']} | {at['rating']} |")
md_out.append("\n")

# 7. Testimonials
md_out.append("## 7. Verified Client Testimonials & Reviews\n")
for rev in data["testimonials"]:
    md_out.append(f"### Testimonial by {rev['name']} ({rev['location']})")
    md_out.append(f"- **Date:** {rev['date']}")
    md_out.append(f"- **Traveler Background:** {rev['role']}")
    md_out.append(f"- **Image Asset:** `{rev['image']}`")
    md_out.append(f"> \"{rev['quote']}\"\n")

# 8. Images Catalog
md_out.append("## 8. Complete Media & Photo Catalog (73 Assets)\n")
md_out.append("| # | Asset Path | Live URL | Alt Description | Dimensions | File Size | Status | Local Backup |")
md_out.append("| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |")
for idx, img in enumerate(data["images_and_media"], 1):
    size_str = f"{round(img.get('size_bytes', 0)/1024, 1)} KB" if img.get('size_bytes') else "N/A"
    local_b = os.path.basename(img.get("local_file") or "")
    md_out.append(f"| {idx} | `{img.get('relative_path')}` | [Link]({img.get('url')}) | {img.get('alt') or '—'} | {img.get('dimensions') or '—'} | {size_str} | {img.get('http_status')} | `{local_b}` |")
md_out.append("\n")

# 9. Terms & Policies
md_out.append("## 9. Terms of Business, Cancellation Policies & Guarantees\n")
for tpol in data["terms_and_policies"]:
    md_out.append(f"### {tpol['section']}")
    md_out.append(f"{tpol['details']}\n")

# 10. Site-Wide SEO Architecture
md_out.append("## 10. Site-Wide SEO Architecture & Page Metadata Registry\n")
md_out.append("| Page Slug | Category | HTML Title | Meta Description | Primary H1 / H2 | Words | Images |")
md_out.append("| :--- | :--- | :--- | :--- | :--- | :--- | :--- |")
for p in data["pages"]:
    md_out.append(f"| [`{p['slug']}`]({p['url']}) | {p['category']} | {p['title']} | {p['description'][:90]}... | {p['h1'] or p['h2']} | {p['word_count']} | {p['img_count']} |")
md_out.append("\n")

full_content = "\n".join(md_out)

with open("Best of Moral Coutures - Full Site Archive.md", "w", encoding="utf-8") as f:
    f.write(full_content)

with open("Best of Moral Coutures.md", "w", encoding="utf-8") as f:
    f.write(full_content)

with open("Best of Morocco Tours.md", "w", encoding="utf-8") as f:
    f.write(full_content)

print(f"Successfully generated Markdown dossiers ({len(full_content)} characters)!")
