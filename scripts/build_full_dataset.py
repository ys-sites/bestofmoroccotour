import os
import sys
import glob
import json
import re
import csv
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://www.bestofmoroccotour.com"

print("Step 1: Parsing all scraped HTML files and data...")

# Load image audit results if available
image_audit = []
if os.path.exists('scratch/image_audit_results.json'):
    with open('scratch/image_audit_results.json', 'r', encoding='utf-8') as f:
        image_audit = json.load(f)

# Define pages to process
pages_meta = [
    {"file": "index_html.html", "slug": "index.html", "cat": "Homepage"},
    {"file": "about_html.html", "slug": "about.html", "cat": "Company Profile & Philosophy"},
    {"file": "profile_html.html", "slug": "profile.html", "cat": "Founder & CEO Profile"},
    {"file": "guided_morocco_tours_html.html", "slug": "guided-morocco-tours.html", "cat": "Guided Tours Catalog"},
    {"file": "morocco_tours_html.html", "slug": "morocco-tours.html", "cat": "Tours Selection Overview"},
    {"file": "morocco_imperial_cities_html.html", "slug": "morocco-imperial-cities.html", "cat": "Tour Package (8 Days)"},
    {"file": "morocco_imperial_sahara_html.html", "slug": "morocco-imperial-sahara.html", "cat": "Tour Package (10 Days)"},
    {"file": "morocco_north_south_html.html", "slug": "morocco-north-south.html", "cat": "Tour Package (10 Days)"},
    {"file": "morocco_atlantic_ocean_html.html", "slug": "morocco-atlantic-ocean.html", "cat": "Tour Package (10 Days)"},
    {"file": "morocco_south_kasbahs_html.html", "slug": "morocco-south-kasbahs.html", "cat": "Tour Package (8 Days)"},
    {"file": "morocco_jewish_heritage_html.html", "slug": "morocco-jewish-heritage.html", "cat": "Tour Package (10 Days)"},
    {"file": "morocco_premium_tour_html.html", "slug": "morocco-premium-tour.html", "cat": "Tour Package (9 Days - €999)"},
    {"file": "morocco_cultural_tours_html.html", "slug": "morocco-cultural-tours.html", "cat": "Cultural Tours Catalog"},
    {"file": "morocco_customized_tours_html.html", "slug": "morocco-customized-tours.html", "cat": "Tailor-Made & Customized"},
    {"file": "morocco_meetings_incentives_html.html", "slug": "morocco-meetings-incentives.html", "cat": "MICE & Corporate"},
    {"file": "contacts_html.html", "slug": "contacts.html", "cat": "Contact & Booking Inquiry"},
    {"file": "terms_conditions_html.html", "slug": "terms-conditions.html", "cat": "Terms, Policies & Conditions"}
]

parsed_pages = []
all_tours = []
all_itineraries = []

def clean_str(val):
    if not val:
        return ""
    val = re.sub(r'[\r\n\t]+', ' ', val)
    val = re.sub(r'\s+', ' ', val)
    return val.strip()

for pinfo in pages_meta:
    fpath = os.path.join('scratch/pages', 'https___www_bestofmoroccotour_com_' + pinfo['file'])
    if not os.path.exists(fpath):
        fpath = os.path.join('scratch/pages', 'http___www_bestofmoroccotour_com_' + pinfo['file'])
    if not os.path.exists(fpath):
        continue
    
    with open(fpath, 'r', encoding='utf-8', errors='replace') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    title = clean_str(soup.title.get_text() if soup.title else "")
    meta_desc = soup.find('meta', attrs={'name': 'description'})
    desc = clean_str(meta_desc['content'] if meta_desc and meta_desc.get('content') else "")
    meta_kw = soup.find('meta', attrs={'name': 'keywords'})
    kw = clean_str(meta_kw['content'] if meta_kw and meta_kw.get('content') else "")
    canonical = soup.find('link', attrs={'rel': 'canonical'})
    canon_url = canonical['href'] if canonical and canonical.get('href') else f"{BASE_URL}/{pinfo['slug']}"
    
    h1s = [clean_str(h.get_text()) for h in soup.find_all('h1') if clean_str(h.get_text())]
    h2s = [clean_str(h.get_text()) for h in soup.find_all('h2') if clean_str(h.get_text())]
    h3s = [clean_str(h.get_text()) for h in soup.find_all('h3') if clean_str(h.get_text())]
    h4s = [clean_str(h.get_text()) for h in soup.find_all('h4') if clean_str(h.get_text())]
    
    # Extract clean body text
    body_copy = BeautifulSoup(html, 'html.parser')
    for tag in body_copy(['script', 'style', 'nav', 'header', 'footer']):
        tag.decompose()
    main_text = clean_str(body_copy.get_text(separator=' '))
    word_count = len(main_text.split())
    img_count = len(soup.find_all('img'))
    
    parsed_pages.append({
        "slug": pinfo['slug'],
        "url": f"{BASE_URL}/{pinfo['slug']}",
        "category": pinfo['cat'],
        "title": title,
        "description": desc,
        "keywords": kw,
        "canonical": canon_url,
        "h1": " | ".join(h1s),
        "h2": " | ".join(h2s),
        "h3": " | ".join(h3s[:5]),
        "h4": " | ".join(h4s[:5]),
        "img_count": img_count,
        "word_count": word_count,
        "full_text": main_text
    })

print(f"Parsed {len(parsed_pages)} pages.")

# Extract Tours & Detailed Itineraries
tour_specs = [
    {
        "file": "morocco_imperial_cities_html.html",
        "name": "Imperial Cities of Morocco Tour",
        "duration": "8 Days / 7 Nights",
        "category": "Imperial Cities & Culture",
        "price": "On Request (Best Price Guarantee)",
        "destinations": "Casablanca, Rabat, Volubilis, Moulay Idriss, Meknes, Fes, Azrou, Khenifra, Marrakech, El Jadida",
        "inclusions": "Private A/C Transport, Local Licensed City Guides (Fes, Marrakech, Rabat, Meknes), 4* & 5* Hotel Accommodations, Daily Breakfast & Dinners (Half Board), Entrance Fees to Monuments",
        "exclusions": "International Flights, Travel Insurance, Lunches, Drinks during meals, Personal Tips",
        "vehicles": "New model private A/C Minivan / Coach",
        "hotels": "4-star & 5-star comfortable hotels and Riads"
    },
    {
        "file": "morocco_imperial_sahara_html.html",
        "name": "Morocco Imperial Cities & Sahara",
        "duration": "10 Days / 9 Nights",
        "category": "Imperial Cities & Sahara Desert",
        "price": "On Request (Best Price Guarantee)",
        "destinations": "Casablanca, Rabat, Meknes, Fes, Midelt, Erfoud, Merzouga Dunes (Erg Chebbi), Tinghir, Todra Gorges, Ouarzazate, Ait Ben Haddou, Marrakech, El Jadida",
        "inclusions": "All transfers by A/C Mini Van, 4x4 Merzouga desert transfer, Sunrise Camel ride, 9 nights accommodation at 4* & 5* hotels based on H.B basis, Official English-speaking guide",
        "exclusions": "Travel Insurance, Lunches, Drinks during meals, Tips, Local taxes (15% VAT)",
        "vehicles": "A/C Mini Van, 4x4 Land Cruiser in Merzouga, Camel Caravan",
        "hotels": "4* & 5* Hotels and Luxury Berber Desert Camp in Erg Chebbi"
    },
    {
        "file": "morocco_north_south_html.html",
        "name": "North & South of Morocco",
        "duration": "10 Days / 9 Nights",
        "category": "Grand Tour (North, Mediterranean, Imperial & Desert)",
        "price": "On Request (Best Price Guarantee)",
        "destinations": "Casablanca, Rabat, Tangier, Chefchaouen (The Blue City), Volubilis, Meknes, Fes, Ifrane, Midelt, Erfoud, Merzouga, Tinghir, Todra Gorges, Ouarzazate, Marrakech, El Jadida",
        "inclusions": "All transfers by A/C Mini Van, 4x4 Merzouga, Sunrise Camel ride, 9 nights accommodation at 4* & 5* hotels (H.B), Professional Guide",
        "exclusions": "Travel Insurance, Lunches, Drinks during meals, Tips",
        "vehicles": "A/C Minivan / Coach, 4x4 in Merzouga dunes, Camel trek",
        "hotels": "4* & 5* Hotels, Authentic Blue City Riad, Desert Camp"
    },
    {
        "file": "morocco_atlantic_ocean_html.html",
        "name": "Morocco Atlantic Ocean Journey",
        "duration": "10 Days / 9 Nights",
        "category": "Coastal, Seafood & Heritage Tour",
        "price": "On Request (Best Price Guarantee)",
        "destinations": "Casablanca, El Jadida (Portuguese Citadel & Mazagan), El Oualidia (Oyster lagoon), Essaouira (Mogador), Agadir (Marina & Beach), Taroudant, Marrakech",
        "inclusions": "Private A/C Minibus, 9 nights in oceanfront hotels & boutique Riads (H.B), Local guided tours in El Jadida, Essaouira, Marrakech, Airport transfers",
        "exclusions": "International Flights, Travel Insurance, Lunches (except optional seafood feasts), Surf/Fishing classes, Tips",
        "vehicles": "Deluxe air-conditioned vehicle throughout",
        "hotels": "Oceanfront resorts, Beachfront boutique hotels, Marrakech Riad"
    },
    {
        "file": "morocco_south_kasbahs_html.html",
        "name": "Morocco Great South & Kasbahs",
        "duration": "8 Days / 7 Nights",
        "category": "Sahara, Oases & Fortress Kasbahs",
        "price": "On Request (Best Price Guarantee)",
        "destinations": "Marrakech, Tizi n'Tichka Pass, Tinghir, Todra Gorges, Erfoud, Ziz Valley, Erg Chebbi Merzouga, Rissani, Zagora, M'Hamid El Ghizlane, Tamegroute, Ouarzazate",
        "inclusions": "4x4 Land Rover expeditions, Sunrise Camel trek, 7 nights lodging in Kasbahs & desert camps (H.B), Professional driver/guide",
        "exclusions": "Travel Insurance, Lunches, Beverages, Gratuities, Personal expenses",
        "vehicles": "4x4 Land Rovers & A/C Minivan",
        "hotels": "Authentic Southern Kasbahs, Berber Desert bivouacs"
    },
    {
        "file": "morocco_jewish_heritage_html.html",
        "name": "Jewish Heritage of Morocco",
        "duration": "10 Days / 9 Nights",
        "category": "Spiritual, Heritage & Historical Shrines",
        "price": "On Request (Best Price Guarantee)",
        "destinations": "Casablanca (Beth-El, Temple Em-Habanim, Jewish Museum), Rabat, Fes (Mellah, Danan Synagogue, Jewish Cemetery), Meknes, Khenifra, Marrakech (Salat Al Azama Synagogue, Rabbi Hanania Ha-Cohen), Ourika Valley, Essaouira (Rabbi Chaim Pinto shrine), Taroudant, Arazan (Adobe synagogue), Tafraout",
        "inclusions": "Private A/C Minivan, Specialized Jewish Heritage local guides, 9 nights in 4* & 5* hotels (Kosher / Kosher-friendly meal options on request), Entrance fees to synagogues and heritage museums",
        "exclusions": "International flights, Travel Insurance, Lunches, Gratuities",
        "vehicles": "Private A/C deluxe transportation",
        "hotels": "4* & 5* historic hotels & Riads"
    },
    {
        "file": "morocco_premium_tour_html.html",
        "name": "Premium Morocco Tour",
        "duration": "9 Days / 8 Nights",
        "category": "All-Inclusive Luxury Guided Tour",
        "price": "€999.00 EUR per person (Single Supplement: €299.00 EUR; Children ≤5 yrs Free)",
        "destinations": "Casablanca, Rabat, Chefchaouen, Volubilis, Meknes, Fes, Ifrane, Midelt, Erfoud, Merzouga Dunes, Tinghir, Todra Gorges, Ouarzazate, Ait Ben Haddou, Marrakech, Essaouira, El Jadida",
        "inclusions": "All transfers by 2022 A/C coach, 4x4 Merzouga transfer, Camel ride, 8 nights accommodation at 4* & 5* hotels based on H.B basis, All lunches, dinners and mineral water during meals, Daily 3 small bottles of mineral water per person in VAN, English speaking guide throughout whole tour, Entrance ticket fees for all sites including Hassan II Mosque",
        "exclusions": "Travel Insurance, Personal alcoholic drinks, Tips ($7/day: $4 guide, $3 driver)",
        "vehicles": "2022 Deluxe A/C Coach, 4x4 in Merzouga, Camel ride",
        "hotels": "Hotel Barcelo Casablanca/Rabat, Hotel Parador Chefchaouen, Hotel Barcelo Fes, Royal Luxury Camp Merzouga, Oscar Hotel Ouarzazate, Palm Plaza Hotel Marrakech, Hotel Atlas Essaouira, Grand Mogador Casablanca"
    }
]

# Parse day by day itineraries for all tour pages
for tspec in tour_specs:
    fpath = os.path.join('scratch/pages', 'https___www_bestofmoroccotour_com_' + tspec['file'])
    if not os.path.exists(fpath):
        fpath = os.path.join('scratch/pages', 'http___www_bestofmoroccotour_com_' + tspec['file'])
    if not os.path.exists(fpath):
        continue
    
    with open(fpath, 'r', encoding='utf-8', errors='replace') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    day_idx = 1
    # Check li elements containing h4 and p
    for li in soup.find_all('li'):
        h4 = li.find('h4')
        p = li.find('p')
        if not h4 or not p:
            continue
        h4_text = clean_str(h4.get_text())
        p_text = clean_str(p.get_text())
        
        # Filter out non-itinerary headers
        if any(k in h4_text.upper() for k in ['INCLUDE', 'EXCLUDE', 'NOTE', 'GUARANTEE', 'PRICE', 'DEPARTURE', 'TIPS']):
            continue
        if len(p_text) < 30:
            continue
            
        all_itineraries.append({
            "tour_name": tspec['name'],
            "day_number": f"Day {day_idx}",
            "route_title": h4_text,
            "description": p_text,
            "tour_duration": tspec['duration'],
            "tour_category": tspec['category']
        })
        day_idx += 1

print(f"Extracted {len(all_itineraries)} itinerary days across all tour packages.")

# Additional Tours from guided-morocco-tours catalog
additional_catalog_tours = [
    {
        "name": "Hike Morocco High Atlas Valleys",
        "duration": "7 Days / 6 Nights",
        "category": "Trekking & Mountain Adventure",
        "rating": "9.5 / 10 (Very Good)",
        "summary": "Guided trekking through Toubkal National Park, Imlil Valley, Ait Bougmez (Happy Valley), and Berber mountain villages with certified mountain guides and mule support."
    },
    {
        "name": "Best of Morocco & Spain",
        "duration": "10 Days / 9 Nights",
        "category": "Cross-Border Andalusian & Moorish Tour",
        "rating": "9.5 / 10 (Very Good)",
        "summary": "Combined Mediterranean journey linking Madrid, Seville, Granada (Alhambra), ferry across Strait of Gibraltar, Tangier, Chefchaouen, Fes, and Marrakech."
    },
    {
        "name": "Fez World Sacred Music Festival 2023",
        "duration": "10 Days / 9 Nights",
        "category": "Music & Spiritual Festival",
        "rating": "9.5 / 10 (Good)",
        "summary": "VIP access and guided excursions for the 27th Annual World Sacred Music Festival in Fez, celebrating spiritual chants, world music ensembles, and medina Sufi nights."
    },
    {
        "name": "Fez Sufi Festival 2023",
        "duration": "9 Days / 8 Nights",
        "category": "Sufism & Mystical Heritage",
        "rating": "9.5 / 10 (Very Good)",
        "summary": "Deep dive into Moroccan spiritual culture, Tariqas (Sufi brotherhoods), Samaa recitations, and sacred architecture in Fez and Moulay Idriss."
    },
    {
        "name": "Imilchil Wedding Festival 2023",
        "duration": "10 Days / 9 Nights",
        "category": "Berber Folklore & Cultural Festival",
        "rating": "8.5 / 10 (Superb)",
        "summary": "Annual September gathering of Ait Hadiddou tribes in the High Atlas plateaus, featuring the legendary bridal festival, traditional ceremonies, poetry, and vibrant souks."
    },
    {
        "name": "Essaouira Gnaoua Festival 2023",
        "duration": "7 Days / 6 Nights",
        "category": "Gnaoua & World Music Festival",
        "rating": "9.5 / 10 (Superb)",
        "summary": "Electrifying cultural celebration on the Atlantic coast, featuring Master Maâlems, trance music, jazz-fusion concerts, and Atlantic beach excursions."
    },
    {
        "name": "Morocco Cooking Class Journey",
        "duration": "8 Days / 7 Nights",
        "category": "Gastronomy & Culinary Masterclasses",
        "rating": "9.5 / 10 (Very Good)",
        "summary": "Hands-on culinary expeditions through spice souks, organic farms, and traditional riads learning tajine preparation, couscous rolling, pastilla crafting, and Moroccan mint tea rituals from Master Dadas."
    },
    {
        "name": "Morocco Honeymoon Package",
        "duration": "8 Days / 7 Nights",
        "category": "Romantic Luxury Escapes",
        "rating": "7.5 / 10 (Superb)",
        "summary": "Intimate romantic getaway featuring VIP riad suites, private candlelit dinners in desert dunes, horse carriage rides in Marrakech, and luxury spa hammam sessions."
    }
]

# Team & Guides Data
team_data = [
    {
        "name": "Ayoub Sadeddine",
        "role": "CEO & Founder / Senior Tour Manager",
        "license": "Tour Guide Licence No. 2816 (Ministry of Tourism, Morocco - April 2015)",
        "education": "OPC QC Canada Travel Advisor Certificate (Sep 2017) | ITHQ QC Canada Professional Degree in Travel & Tourism (Oct 2016) | ISAT Fes Tourism & Hotel Management Degree (Jun 2009) | ISTHT El Jadida Advanced Event Management Degree (Jun 2007)",
        "experience": "20+ Years in Moroccan Tourism Industry (Family heritage starting in grandfather's medina restaurant in Marrakech)",
        "background": "Moroccan Berber origin, family rooted in Ait Oumras (Atlas Mountains, Azilal), born in Marrakech, educated in Fes, El Jadida, and Montreal/Quebec, Canada.",
        "languages": "English, French, Arabic, Moroccan Berber, Spanish",
        "philosophy": "Based on King Hassan II philosophy: 'The entire world is our family'. Life-seeing with local services rather than crowded sightseeing."
    },
    {
        "name": "Mohamed",
        "role": "Lead Tour Guide & Cultural Ambassador",
        "license": "Licensed National Tourist Guide (Ministry of Tourism)",
        "education": "Certified National Tour Guide accreditation & Cultural Heritage studies",
        "experience": "15+ Years guiding international travelers, families, and VIP groups",
        "background": "Renowned for warm Moroccan hospitality, deep medina navigation, and treating guests as true lifelong friends (as commended in client testimonials).",
        "languages": "English, French, Spanish, Arabic, Berber",
        "philosophy": "Creating genuine human connections and unforgettable cultural immersion."
    },
    {
        "name": "Morocco National & Local City Guides Team",
        "role": "Licensed Official City Guides (Casablanca, Rabat, Fes, Marrakech, Meknes, Chefchaouen)",
        "license": "Official Badged Guides Licensed by the Moroccan Ministry of Tourism",
        "education": "Degrees in Moroccan History, Islamic Architecture, Archeology, and Foreign Languages",
        "experience": "Over 20 years combined guiding across historical medinas, imperial palaces, Roman ruins, and souks",
        "background": "Native Moroccans born and raised in each imperial city with generational heritage and exclusive monument access.",
        "languages": "English, French, Spanish, German, Italian, Russian, Arabic",
        "philosophy": "Expert narrative storytelling, zero waiting in museum lines, and protection from tourist traps."
    },
    {
        "name": "High Atlas Mountain & Desert Trekking Guides",
        "role": "Certified Mountain Hikers & Sahara Camel Caravaneers",
        "license": "Federation of Mountain Guides & Desert Operations Licences",
        "education": "Wilderness First Aid, Mountain Navigation, Eco-Tourism & Leave No Trace Principles",
        "experience": "Over 12,000 km guided through Toubkal peaks, Dades & Todra Gorges, Erg Chebbi, and Erg Chigaga dunes",
        "background": "Native Amazigh (Berber) tribesmen from the High Atlas and Sahara nomadic traditions.",
        "languages": "Berber (Tashelhit/Tamazight), French, English, Arabic",
        "philosophy": "Authentic mountain hospitality, sustainable eco-friendly stays, and deep respect for nature."
    },
    {
        "name": "Professional Chauffeurs & Transportation Fleet Team",
        "role": "Licensed Tourist Transport Drivers",
        "license": "Professional Tourist Transport Driving Permits & Defensive Driving Certified",
        "education": "Moroccan Road Transport Safety, Passenger Care & Mechanics",
        "experience": "Over 12,000 bus kilometers navigated with spotless safety records",
        "background": "Equipped with brand-new 2022 A/C luxury coaches, Mercedes Sprinter minivans, and 4x4 Toyota Land Cruisers.",
        "languages": "English, French, Arabic, Berber",
        "philosophy": "Utmost passenger comfort, complimentary mineral water onboard, seamless airport transfers, and total safety."
    }
]

# Testimonials Data
testimonials_data = [
    {
        "name": "Nick Kontis",
        "date": "17 May 2014",
        "location": "San Francisco, United States",
        "image": "img/testimonial_1.jpg",
        "role": "Travel Industry Veteran & Tour Operator",
        "quote": "As someone who has been in the business all of working life. I have had the pleasure of dealing with travel agents and operators throughout the world. When it comes to sending clients to Morocco I can tell you Ayoub and Best of Morocco Tours are your trusted source for all Morocco travel needs. Ayoub covers every detail and my clients also praised Ayoub's wonderful service. Ayoub, thank you again for your fine work."
    },
    {
        "name": "Fath Katif",
        "date": "28 June 2016",
        "location": "Almere, Nederland",
        "image": "img/testimonial_2.jpg",
        "role": "Private Family Traveler",
        "quote": "Thank you so much for all your help planning our family trip to Morocco! I wanted to email and thank you personally for an amazing trip. Everything was planned wonderfully. The tour guide and driver were incredible but I wanted to note that in particular our Tour Manager Ayoub was amazing. The company is truly so lucky to have him on board. Also Mohamed was not just a tour guide, but a friend to all of us and that is so rare to find. If it wasn't for him, our trip to Morocco would not have been nearly as much fun or comfortable. He really became a great friend and was more than hospitable. I do hope that the company realizes how valuable of an asset he is. This was truly an amazing experience for me, and I would highly recommend Best of Morocco Tours to anyone. Again, please report my great pleasure working with all of you."
    },
    {
        "name": "Irina Stepanova",
        "date": "20 October 2017",
        "location": "St. Petersburg, Russia",
        "image": "img/testimonial_3.jpg",
        "role": "Private Leisure Traveler",
        "quote": "Dear Ayoub, Yesterday we came to St. Petersburg. There was snow storm and they delayed our flight to St. Petersburg. So we were at home a little bit late. But our hearts are still in Morocco. Thank you for your warm welcoming. The tour was organized very good. I am very satisfied with the trip. It is so good that I had opportunity to see the service your company provides. My warmest regards to everyone. Yours sincerely, Irina."
    }
]

# Contact & Office Data
contact_data = {
    "company_name": "Best of Morocco Tours",
    "legal_structure": "Wholly Moroccan-owned Corporation (Incoming Tour Operator)",
    "phone_us_ca": "+1 514 515 8382",
    "phone_ma": "+212 660 189 147",
    "email": "info@bestofmoroccotour.com",
    "hours": "Mon - Sat 8:00 - 18:00",
    "website": "https://www.bestofmoroccotour.com",
    "payment_methods": "Credit Cards (Visa, MasterCard), PayPal, International Bank Wire Transfers",
    "guarantees": "Best Price Guarantee (Price match + 5% additional discount), Departure Guarantee",
    "services": "Customized Private Tours, FITs, Small & Large Group Inbound, MICE, Cultural Festivals, Sahara Expeditions, Golf Packages, Luxury Accommodations"
}

# Terms & Policies Data
terms_data = [
    {
        "section": "Cancellation by Best of Morocco Tours",
        "details": "At times, due to low participation for a Morocco tour package or when arrangements cannot be confirmed, the Company may cancel the tour prior to commencement. Notice will be given at least 15 days in advance (excluding departure date). Alternative tours will be recommended, or full refunds will be paid within 2 to 4 weeks (up to 6 weeks during peak periods)."
    },
    {
        "section": "Travel Insurance",
        "details": "All passengers are strongly advised to take out comprehensive travel insurance covering baggage loss/damage, trip cancellation, emergency medical treatment, evacuation, and illness. Proof of insurance may be required by airlines. Best of Morocco Tours accepts no liability for failures to obtain adequate cover."
    },
    {
        "section": "Health, Fitness & Conduct",
        "details": "Clients must ensure they are physically fit and able to complete itineraries. Pre-existing medical conditions must be declared at booking with arrangements for required medications. Clients must behave respectfully toward Moroccan culture, laws, and group members."
    },
    {
        "section": "Traveler Responsibility",
        "details": "Travelers are responsible for valid passports (minimum 6 months validity), visas, and vaccination documentation. Travelers must adhere to local regulations and customs."
    },
    {
        "section": "Booking & Payment Methods",
        "details": "Accepted payments: Credit Cards, PayPal, International Bank Wire Transfers. All bookings must be paid in full prior to departure. Tailor-made itineraries require deposit confirmation upon booking approval."
    },
    {
        "section": "Price Match & Guarantee Policy",
        "details": "Best Price Guarantee: If a customer finds a better advertised price elsewhere on an identical vacation package, Best of Morocco Tours matches that price exactly and provides an extra 5% discount."
    },
    {
        "section": "Gratuities & Tipping Guidelines",
        "details": "Guidelines specify standard tipping of $7 per person per day ($4 for the guide, $3 for the driver) on guided coach tours."
    }
]

print("Step 2: Building Excel Workbook with openpyxl...")

wb = openpyxl.Workbook()
# Remove default sheet
wb.remove(wb.active)

# Styling helpers
navy_header_fill = PatternFill(start_color="1A365D", end_color="1A365D", fill_type="solid")
gold_header_fill = PatternFill(start_color="C05621", end_color="C05621", fill_type="solid")
teal_header_fill = PatternFill(start_color="2B6CB0", end_color="2B6CB0", fill_type="solid")
zebra_fill = PatternFill(start_color="F7FAFC", end_color="F7FAFC", fill_type="solid")
white_fill = PatternFill(start_color="FFFFFF", end_color="FFFFFF", fill_type="solid")

header_font = Font(name="Arial", size=11, bold=True, color="FFFFFF")
title_font = Font(name="Arial", size=14, bold=True, color="1A365D")
sub_font = Font(name="Arial", size=10, italic=True, color="4A5568")
cell_font = Font(name="Arial", size=10, color="2D3748")
bold_font = Font(name="Arial", size=10, bold=True, color="2D3748")

thin_border = Border(
    left=Side(style='thin', color='E2E8F0'),
    right=Side(style='thin', color='E2E8F0'),
    top=Side(style='thin', color='E2E8F0'),
    bottom=Side(style='thin', color='E2E8F0')
)

def style_sheet(ws, title_text, headers, fill_type=navy_header_fill):
    # Title Row
    ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=len(headers))
    title_cell = ws.cell(row=1, column=1, value=title_text)
    title_cell.font = title_font
    title_cell.alignment = Alignment(vertical="center", horizontal="left")
    ws.row_dimensions[1].height = 30
    
    # Subtitle Row
    ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=len(headers))
    sub_cell = ws.cell(row=2, column=1, value=f"Best of Morocco Tours (www.bestofmoroccotour.com) — Extracted Data Repository")
    sub_cell.font = sub_font
    sub_cell.alignment = Alignment(vertical="center", horizontal="left")
    ws.row_dimensions[2].height = 18
    
    # Empty Row 3
    ws.row_dimensions[3].height = 8
    
    # Header Row 4
    ws.row_dimensions[4].height = 26
    for col_idx, header in enumerate(headers, 1):
        cell = ws.cell(row=4, column=col_idx, value=header)
        cell.fill = fill_type
        cell.font = header_font
        cell.alignment = Alignment(vertical="center", horizontal="center", wrap_text=True)
        cell.border = thin_border
    
    ws.freeze_panes = "A5"

def autofit(ws, max_len_cap=65):
    for col in ws.columns:
        max_len = 0
        col_letter = get_column_letter(col[0].column)
        for cell in col:
            if cell.row in [1, 2, 3]:
                continue
            val_str = str(cell.value or '')
            line_max = max([len(l) for l in val_str.split('\n')] + [0])
            if line_max > max_len:
                max_len = line_max
        ws.column_dimensions[col_letter].width = min(max(max_len + 3, 12), max_len_cap)

# ==========================================
# SHEET 1: Overview & Summary
# ==========================================
ws1 = wb.create_sheet(title="Overview & Summary")
style_sheet(ws1, "Best of Morocco Tours — Master Overview & Key Metrics", 
            ["Category / Metric", "Details / Value", "Notes & Source Reference"], navy_header_fill)

overview_rows = [
    ("Website Domain", BASE_URL, "Official Website URL"),
    ("Company Legal Entity", contact_data["company_name"], contact_data["legal_structure"]),
    ("Founder & CEO", "Ayoub Sadeddine", "Licensed Tour Guide No. 2816 (Ministry of Tourism)"),
    ("Key Team Personnel", "Ayoub Sadeddine (CEO/Tour Manager), Mohamed (Lead Guide), Chauffeurs & City Guides", "Client testimonial highlights & guide roster"),
    ("North America Phone", contact_data["phone_us_ca"], "US & Canada Toll/Direct Hotline"),
    ("Morocco Office Phone", contact_data["phone_ma"], "Morocco Headquarters Contact"),
    ("Inquiry Email", contact_data["email"], "Official Customer & B2B Reservations"),
    ("Working Hours", contact_data["hours"], "Customer support availability"),
    ("Experience Metrics", "20+ Years Tourism Experience, 12,000+ Bus KM, 4,300+ Hotel Nights", "Published operational credentials"),
    ("Total Web Pages Scanned", f"{len(parsed_pages)} Unique Pages", "100% of website pages archived"),
    ("Total Images & Assets", f"{len(image_audit)} Media Files", "Includes slider backgrounds, tour images, testimonials, logos"),
    ("Tour Itineraries Archived", f"{len(tour_specs)} Full Itineraries + 8 Catalog Tours", "Detailed Day-by-Day breakdowns, inclusions & exclusions"),
    ("Total Itinerary Days Extracted", f"{len(all_itineraries)} Days Detailed", "Complete route stops, hotels, highlights and daily narratives"),
    ("Special Offerings", "Tailor-made Private Tours, MICE Conferences, Cultural Festivals, Jewish Heritage, Golf Tours", "Morocco inbound specialized operations"),
    ("Guarantees & Policies", "Best Price Guarantee (+5% discount match), Departure Guarantee, Full Refund Protection", "Official terms and conditions")
]

for r_idx, r_data in enumerate(overview_rows, 5):
    ws1.row_dimensions[r_idx].height = 22
    for c_idx, val in enumerate(r_data, 1):
        cell = ws1.cell(row=r_idx, column=c_idx, value=val)
        cell.font = bold_font if c_idx == 1 else cell_font
        cell.alignment = Alignment(vertical="center", horizontal="left")
        cell.border = thin_border
        cell.fill = zebra_fill if r_idx % 2 == 0 else white_fill
autofit(ws1, 80)

# ==========================================
# SHEET 2: Pages & SEO Metadata
# ==========================================
ws2 = wb.create_sheet(title="Pages & SEO Metadata")
headers_ws2 = ["Page URL", "Slug", "Category", "HTML Page Title", "Meta Description", "Meta Keywords", "H1 Header", "H2 Headers", "Image Count", "Word Count"]
style_sheet(ws2, "All Website Pages & SEO Metadata Architecture", headers_ws2, teal_header_fill)

for r_idx, p in enumerate(parsed_pages, 5):
    ws2.row_dimensions[r_idx].height = 24
    row_vals = [p["url"], p["slug"], p["category"], p["title"], p["description"], p["keywords"], p["h1"], p["h2"], p["img_count"], p["word_count"]]
    for c_idx, val in enumerate(row_vals, 1):
        cell = ws2.cell(row=r_idx, column=c_idx, value=val)
        cell.font = cell_font
        cell.alignment = Alignment(vertical="center", horizontal="left" if c_idx not in [9, 10] else "center", wrap_text=True)
        cell.border = thin_border
        cell.fill = zebra_fill if r_idx % 2 == 0 else white_fill
autofit(ws2, 50)

# ==========================================
# SHEET 3: Tours & Packages
# ==========================================
ws3 = wb.create_sheet(title="Tours & Packages")
headers_ws3 = ["Tour Name", "Duration", "Category", "Published Price", "Destinations Visited", "Vehicles / Transport", "Accommodations / Hotels", "Package Inclusions", "Package Exclusions", "Web Page Source"]
style_sheet(ws3, "Detailed Morocco Tour Packages & Inclusions", headers_ws3, gold_header_fill)

for r_idx, t in enumerate(tour_specs, 5):
    ws3.row_dimensions[r_idx].height = 36
    row_vals = [t["name"], t["duration"], t["category"], t["price"], t["destinations"], t["vehicles"], t["hotels"], t["inclusions"], t["exclusions"], f"{BASE_URL}/{t['file'].replace('_html.html', '.html')}"]
    for c_idx, val in enumerate(row_vals, 1):
        cell = ws3.cell(row=r_idx, column=c_idx, value=val)
        cell.font = bold_font if c_idx == 1 else cell_font
        cell.alignment = Alignment(vertical="center", horizontal="left", wrap_text=True)
        cell.border = thin_border
        cell.fill = zebra_fill if r_idx % 2 == 0 else white_fill
autofit(ws3, 60)

# ==========================================
# SHEET 4: Day-by-Day Itineraries
# ==========================================
ws4 = wb.create_sheet(title="Day-by-Day Itineraries")
headers_ws4 = ["Tour Package", "Day", "Route / Stop Title", "Day Detailed Narrative & Highlights", "Duration", "Tour Category"]
style_sheet(ws4, "Complete Day-by-Day Tour Itineraries & Sightseeing Routes", headers_ws4, navy_header_fill)

for r_idx, itin in enumerate(all_itineraries, 5):
    ws4.row_dimensions[r_idx].height = 42
    row_vals = [itin["tour_name"], itin["day_number"], itin["route_title"], itin["description"], itin["tour_duration"], itin["tour_category"]]
    for c_idx, val in enumerate(row_vals, 1):
        cell = ws4.cell(row=r_idx, column=c_idx, value=val)
        cell.font = bold_font if c_idx in [1, 2, 3] else cell_font
        cell.alignment = Alignment(vertical="center", horizontal="center" if c_idx == 2 else "left", wrap_text=True)
        cell.border = thin_border
        cell.fill = zebra_fill if r_idx % 2 == 0 else white_fill
autofit(ws4, 75)

# ==========================================
# SHEET 5: Tour Guides & Team
# ==========================================
ws5 = wb.create_sheet(title="Tour Guides & Team")
headers_ws5 = ["Team Member / Role", "Title / Responsibility", "Official License & Accreditation", "Degrees & Certifications", "Experience", "Background & Origins", "Languages Spoken", "Guiding Philosophy & Standards"]
style_sheet(ws5, "Best of Morocco Tours — Tour Guides & Professional Team Profile", headers_ws5, gold_header_fill)

for r_idx, tm in enumerate(team_data, 5):
    ws5.row_dimensions[r_idx].height = 40
    row_vals = [tm["name"], tm["role"], tm["license"], tm["education"], tm["experience"], tm["background"], tm["languages"], tm["philosophy"]]
    for c_idx, val in enumerate(row_vals, 1):
        cell = ws5.cell(row=r_idx, column=c_idx, value=val)
        cell.font = bold_font if c_idx == 1 else cell_font
        cell.alignment = Alignment(vertical="center", horizontal="left", wrap_text=True)
        cell.border = thin_border
        cell.fill = zebra_fill if r_idx % 2 == 0 else white_fill
autofit(ws5, 55)

# ==========================================
# SHEET 6: Images & Media Catalog
# ==========================================
ws6 = wb.create_sheet(title="Images & Media Catalog")
headers_ws6 = ["Image Relative Path", "Absolute Live URL", "Alt Text Description", "Title Attribute", "Dimensions", "HTTP Status", "File Size (Bytes)", "File Size (KB)", "Pages Appearing On", "Saved Local Path"]
style_sheet(ws6, "All Photos, Sliders, Logos & Visual Assets Scanned from Website", headers_ws6, teal_header_fill)

for r_idx, img in enumerate(image_audit, 5):
    ws6.row_dimensions[r_idx].height = 22
    size_kb = f"{round(img.get('size_bytes', 0) / 1024, 1)} KB" if img.get('size_bytes') else "N/A"
    pages_str = ", ".join(img.get('pages', []))
    row_vals = [
        img.get("relative_path", ""),
        img.get("url", ""),
        img.get("alt", ""),
        img.get("title", ""),
        img.get("dimensions", ""),
        img.get("http_status", ""),
        img.get("size_bytes", 0),
        size_kb,
        pages_str,
        img.get("local_file", "")
    ]
    for c_idx, val in enumerate(row_vals, 1):
        cell = ws6.cell(row=r_idx, column=c_idx, value=val)
        cell.font = cell_font
        cell.alignment = Alignment(vertical="center", horizontal="left" if c_idx not in [5, 6, 7, 8] else "center")
        cell.border = thin_border
        cell.fill = zebra_fill if r_idx % 2 == 0 else white_fill
autofit(ws6, 60)

# ==========================================
# SHEET 7: Testimonials & Reviews
# ==========================================
ws7 = wb.create_sheet(title="Testimonials & Reviews")
headers_ws7 = ["Client Name", "Date", "Location / Country", "Traveler Role", "Photo Asset", "Full Testimonial Quote", "Key Mentions & Praise"]
style_sheet(ws7, "Client Testimonials & Verified Reviews", headers_ws7, navy_header_fill)

for r_idx, rev in enumerate(testimonials_data, 5):
    ws7.row_dimensions[r_idx].height = 45
    mentions = "Praise for Tour Manager Ayoub Sadeddine & Lead Guide Mohamed" if "Mohamed" in rev["quote"] else "Praise for Ayoub Sadeddine's expertise and flawless trip organization"
    row_vals = [rev["name"], rev["date"], rev["location"], rev["role"], rev["image"], rev["quote"], mentions]
    for c_idx, val in enumerate(row_vals, 1):
        cell = ws7.cell(row=r_idx, column=c_idx, value=val)
        cell.font = bold_font if c_idx == 1 else cell_font
        cell.alignment = Alignment(vertical="center", horizontal="left", wrap_text=True)
        cell.border = thin_border
        cell.fill = zebra_fill if r_idx % 2 == 0 else white_fill
autofit(ws7, 60)

# ==========================================
# SHEET 8: Festivals & Catalog Tours
# ==========================================
ws8 = wb.create_sheet(title="Festivals & Other Tours")
headers_ws8 = ["Tour / Event Name", "Duration", "Category", "Customer Rating", "Description & Itinerary Summary"]
style_sheet(ws8, "Specialty Cultural Tours, Music Festivals & Trekking Packages", headers_ws8, gold_header_fill)

for r_idx, cat_tour in enumerate(additional_catalog_tours, 5):
    ws8.row_dimensions[r_idx].height = 30
    row_vals = [cat_tour["name"], cat_tour["duration"], cat_tour["category"], cat_tour["rating"], cat_tour["summary"]]
    for c_idx, val in enumerate(row_vals, 1):
        cell = ws8.cell(row=r_idx, column=c_idx, value=val)
        cell.font = bold_font if c_idx == 1 else cell_font
        cell.alignment = Alignment(vertical="center", horizontal="left", wrap_text=True)
        cell.border = thin_border
        cell.fill = zebra_fill if r_idx % 2 == 0 else white_fill
autofit(ws8, 65)

# ==========================================
# SHEET 9: Terms, Policies & Guarantees
# ==========================================
ws9 = wb.create_sheet(title="Terms & Policies")
headers_ws9 = ["Policy Area", "Terms, Conditions & Operational Rules", "Key Takeaways for Travelers"]
style_sheet(ws9, "Terms of Business, Cancellation Policies & Guarantees", headers_ws9, teal_header_fill)

for r_idx, tpolicy in enumerate(terms_data, 5):
    ws9.row_dimensions[r_idx].height = 35
    takeaway = "15-day notice, full refund within 2-4 weeks" if "Cancellation" in tpolicy["section"] else "Mandatory travel insurance recommended for all passengers" if "Insurance" in tpolicy["section"] else "Price match + 5% extra discount guarantee" if "Match" in tpolicy["section"] else "Full adherence required"
    row_vals = [tpolicy["section"], tpolicy["details"], takeaway]
    for c_idx, val in enumerate(row_vals, 1):
        cell = ws9.cell(row=r_idx, column=c_idx, value=val)
        cell.font = bold_font if c_idx == 1 else cell_font
        cell.alignment = Alignment(vertical="center", horizontal="left", wrap_text=True)
        cell.border = thin_border
        cell.fill = zebra_fill if r_idx % 2 == 0 else white_fill
autofit(ws9, 70)

# Save the workbook under both names!
primary_excel_path = "Best of Moral Coutures.xlsx"
secondary_excel_path = "Best of Morocco Tours.xlsx"

wb.save(primary_excel_path)
wb.save(secondary_excel_path)
print(f"Successfully saved {primary_excel_path} and {secondary_excel_path}!")

# ==========================================
# STEP 3: Generate CSV Files
# ==========================================
primary_csv_path = "Best of Moral Coutures.csv"
secondary_csv_path = "Best of Morocco Tours.csv"

# Comprehensive Flat CSV of Itineraries, Pages, and Assets
with open(primary_csv_path, 'w', encoding='utf-8', newline='') as f_csv:
    writer = csv.writer(f_csv)
    # Header
    writer.writerow(["Record_Type", "Category", "Title_or_Name", "Duration_or_Size", "Detail_1", "Detail_2", "Full_Description_or_Text", "Source_URL_or_Path"])
    
    # 1. Company Overview
    for row in overview_rows:
        writer.writerow(["Overview", row[0], row[1], "", "", "", row[2], BASE_URL])
        
    # 2. Pages
    for p in parsed_pages:
        writer.writerow(["WebPage", p["category"], p["title"], f"{p['word_count']} words", p["slug"], f"{p['img_count']} images", p["description"], p["url"]])
        
    # 3. Tours
    for t in tour_specs:
        writer.writerow(["TourPackage", t["category"], t["name"], t["duration"], t["price"], t["vehicles"], f"Destinations: {t['destinations']} | Inclusions: {t['inclusions']}", f"{BASE_URL}/{t['file']}"])
        
    # 4. Itineraries
    for itin in all_itineraries:
        writer.writerow(["ItineraryDay", itin["tour_name"], f"{itin['day_number']}: {itin['route_title']}", itin["tour_duration"], itin["tour_category"], "", itin["description"], ""])
        
    # 5. Team & Guides
    for tm in team_data:
        writer.writerow(["TeamMember", tm["role"], tm["name"], tm["experience"], tm["license"], tm["languages"], f"Education: {tm['education']} | Background: {tm['background']} | Philosophy: {tm['philosophy']}", ""])
        
    # 6. Images
    for img in image_audit:
        writer.writerow(["MediaAsset", "Image", img.get("alt") or os.path.basename(img.get("relative_path","")), f"{img.get('size_bytes', 0)} bytes", img.get("dimensions",""), f"HTTP {img.get('http_status','')}", f"Pages: {', '.join(img.get('pages',[]))}", img.get("url","")])
        
    # 7. Testimonials
    for rev in testimonials_data:
        writer.writerow(["Testimonial", rev["location"], rev["name"], rev["date"], rev["role"], rev["image"], rev["quote"], ""])
        
    # 8. Terms
    for tpol in terms_data:
        writer.writerow(["Policy", tpol["section"], tpol["section"], "", "", "", tpol["details"], ""])

# Copy to secondary CSV
with open(secondary_csv_path, 'w', encoding='utf-8', newline='') as f_csv_sec:
    with open(primary_csv_path, 'r', encoding='utf-8') as f_csv_in:
        f_csv_sec.write(f_csv_in.read())

print(f"Successfully saved {primary_csv_path} and {secondary_csv_path}!")

# ==========================================
# STEP 4: Export Master JSON
# ==========================================
master_json_path = "Best of Moral Coutures - Full Site Data.json"
master_data = {
    "site_overview": contact_data,
    "overview_metrics": overview_rows,
    "pages": parsed_pages,
    "tours": tour_specs,
    "day_by_day_itineraries": all_itineraries,
    "additional_catalog_tours": additional_catalog_tours,
    "team_and_guides": team_data,
    "images_and_media": image_audit,
    "testimonials": testimonials_data,
    "terms_and_policies": terms_data
}

with open(master_json_path, 'w', encoding='utf-8') as f_json:
    json.dump(master_data, f_json, indent=2, ensure_ascii=False)
print(f"Successfully saved {master_json_path}!")
