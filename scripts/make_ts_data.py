import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("Best of Moral Coutures - Full Site Data.json", "r", encoding="utf-8") as f:
    raw = json.load(f)

# Build TypeScript code
ts_lines = [
    '// Best of Morocco Tours — Master Data Repository',
    '// Extracted directly from http://www.bestofmoroccotour.com',
    '',
    'export interface SiteConfig {',
    '  name: string;',
    '  tagline: string;',
    '  legalStructure: string;',
    '  phoneUsCa: string;',
    '  phoneMa: string;',
    '  email: string;',
    '  hours: string;',
    '  website: string;',
    '  stats: { value: string; label: string }[];',
    '}',
    '',
    'export interface Pillar {',
    '  id: string;',
    '  title: string;',
    '  subtitle: string;',
    '  description: string;',
    '  iconName: string;',
    '}',
    '',
    'export interface DayPlan {',
    '  day: number;',
    '  title: string;',
    '  desc: string;',
    '}',
    '',
    'export interface TourItem {',
    '  id: string;',
    '  name: string;',
    '  duration: string;',
    '  category: string;',
    '  badge: string;',
    '  image: string;',
    '  price: string;',
    '  priceSub?: string;',
    '  destinations: string[];',
    '  overview: string;',
    '  vehicles: string;',
    '  hotels: string;',
    '  inclusions: string[];',
    '  exclusions: string[];',
    '  itinerary: DayPlan[];',
    '  departures?: string[];',
    '  rating?: string;',
    '}',
    '',
    'export interface CatalogTour {',
    '  name: string;',
    '  duration: string;',
    '  category: string;',
    '  rating: string;',
    '  summary: string;',
    '  image: string;',
    '}',
    '',
    'export interface GuideProfile {',
    '  name: string;',
    '  role: string;',
    '  license: string;',
    '  education: string[];',
    '  experience: string;',
    '  background: string;',
    '  languages: string;',
    '  philosophy: string;',
    '  image?: string;',
    '}',
    '',
    'export interface Testimonial {',
    '  name: string;',
    '  date: string;',
    '  location: string;',
    '  role: string;',
    '  image: string;',
    '  quote: string;',
    '}',
    '',
    'export interface FAQItem {',
    '  question: string;',
    '  answer: string;',
    '}',
    ''
]

# 1. Site Config
site_config_ts = f"""export const siteConfig: SiteConfig = {{
  name: "Best of Morocco Tours",
  tagline: "Customized Private Morocco Tours",
  legalStructure: "Wholly Moroccan-owned Corporation (Incoming Tour Operator)",
  phoneUsCa: "{raw['site_overview']['phone_us_ca']}",
  phoneMa: "{raw['site_overview']['phone_ma']}",
  email: "{raw['site_overview']['email']}",
  hours: "{raw['site_overview']['hours']}",
  website: "{raw['site_overview']['website']}",
  stats: [
    {{ value: "20+", label: "Years Experience" }},
    {{ value: "12,000+", label: "Bus Kilometers" }},
    {{ value: "4,300+", label: "Hotel Nights" }},
    {{ value: "100%", label: "Moroccan Owned" }}
  ]
}};
"""
ts_lines.append(site_config_ts)

# 2. Six Pillars
pillars_ts = """export const sixPillars: Pillar[] = [
  {
    id: "price-guarantee",
    title: "Best Price Guarantee",
    subtitle: "5% Additional Discount Match",
    description: "Best of Morocco Tours guarantees the best service and best price! If you find a better advertised price elsewhere on an identical vacation package, we’ll match that price exactly and give you an extra 5% discount.",
    iconName: "ShieldCheck"
  },
  {
    id: "local-guides",
    title: "Professional Local Guides",
    subtitle: "Ministry of Tourism Certified",
    description: "From our selective recruitment efforts, we have assembled an outstanding team of official, licensed tour guides in Morocco. They are native Moroccans and the true pride and soul of our company.",
    iconName: "Compass"
  },
  {
    id: "moroccan-expert",
    title: "20+ Years Moroccan Expert",
    subtitle: "Wholly Moroccan-Owned Inbound Agency",
    description: "We don't operate a generic network across many countries. We focus solely on travel within Morocco with 20+ years of outstanding service, which makes us exceptionally good at it.",
    iconName: "Award"
  },
  {
    id: "sustainable-tourism",
    title: "Sustainable & Eco-Friendly",
    subtitle: "Supporting Indigenous Communities",
    description: "We work diligently towards protecting natural assets and sustaining indigenous Berber cultures. Tourism directly supports local economies, family cooperatives, and eco-friendly stays.",
    iconName: "Leaf"
  },
  {
    id: "monuments-vip",
    title: "Monuments & VIP Access",
    subtitle: "Zero Waiting in Lines",
    description: "Arrive at your destination with a seamless plan: no waiting in lines at museums and monuments, no transit confusion, and guaranteed warm personal hospitality throughout your stay.",
    iconName: "Landmark"
  },
  {
    id: "flexible-payment",
    title: "Flexible Payment Methods",
    subtitle: "Credit Cards, PayPal & Bank Wire",
    description: "We accept Credit cards (Visa, MasterCard), PayPal, and International bank wire transfers. As long as you are paid in full before departure, we are easy to work with on payment schedules.",
    iconName: "CreditCard"
  }
];
"""
ts_lines.append(pillars_ts)

# 3. Master Tours
# Map tour specs and extract days
tour_images = {
    "Imperial Cities of Morocco Tour": "/images/bestofmorocco/img_tour_list_2.jpg",
    "Morocco Imperial Cities & Sahara": "/images/bestofmorocco/img_tour_list_1.jpg",
    "North & South of Morocco": "/images/bestofmorocco/img_tour_list_5.jpg",
    "Morocco Atlantic Ocean Journey": "/images/bestofmorocco/img_tour_list_7.jpg",
    "Morocco Great South & Kasbahs": "/images/bestofmorocco/img_tour_list_10.jpg",
    "Jewish Heritage of Morocco": "/images/bestofmorocco/img_tour_list_14.jpg",
    "Premium Morocco Tour": "/images/bestofmorocco/img_carousel_palace.jpg"
}

tours_list = []
for idx, t in enumerate(raw["tours"]):
    tid = t["file"].replace(".html", "").replace("_html", "").replace("morocco_", "").replace("_", "-")
    
    # get days for this tour
    itin_days = []
    day_num = 1
    for it in raw["day_by_day_itineraries"]:
        if it["tour_name"] == t["name"]:
            itin_days.append({
                "day": day_num,
                "title": it["route_title"],
                "desc": it["description"]
            })
            day_num += 1
            
    # parse destinations
    dests = [d.strip() for d in t["destinations"].split(",") if d.strip()]
    
    # parse inclusions / exclusions
    incls = [i.strip() for i in t["inclusions"].split(",") if i.strip()]
    excls = [e.strip() for e in t["exclusions"].split(",") if e.strip()]
    
    # badge & price sub
    badge = "Most Popular" if idx == 0 else "Bestseller" if idx == 1 else "Signature Tour" if idx == 2 else "Ocean Escape" if idx == 3 else "Adventure" if idx == 4 else "Cultural Heritage" if idx == 5 else "All-Inclusive €999"
    price_sub = "Best Price Guarantee (+5% match)" if "999" not in t["price"] else "Single Supplement: €299 | Kids ≤5 Free"
    
    tour_obj = {
        "id": tid,
        "name": t["name"],
        "duration": t["duration"],
        "category": t["category"],
        "badge": badge,
        "image": tour_images.get(t["name"], "/images/bestofmorocco/img_tour_list_1.jpg"),
        "price": t["price"],
        "priceSub": price_sub,
        "destinations": dests,
        "overview": f"A comprehensive {t['duration']} journey exploring {', '.join(dests[:4])} and beyond. Fully customized private tour operated with our licensed native guides and modern vehicles.",
        "vehicles": t["vehicles"],
        "hotels": t["hotels"],
        "inclusions": incls,
        "exclusions": excls,
        "itinerary": itin_days
    }
    
    if "Premium" in t["name"]:
        tour_obj["departures"] = ["12-20 April 2024", "2-10 May 2024", "11-19 Oct 2024", "27 Dec 2024 - 4 Jan 2025"]
        
    tours_list.append(tour_obj)

tours_json_str = json.dumps(tours_list, indent=2, ensure_ascii=False)
ts_lines.append(f"export const masterTours: TourItem[] = {tours_json_str};\n")

# 4. Catalog Tours
catalog_images = {
    "Hike Morocco High Atlas Valleys": "/images/bestofmorocco/img_tour_list_11.jpg",
    "Best of Morocco & Spain": "/images/bestofmorocco/img_tour_list_12.jpg",
    "Fez World Sacred Music Festival 2023": "/images/bestofmorocco/img_tour_list_13.jpg",
    "Fez Sufi Festival 2023": "/images/bestofmorocco/img_tour_list_3.jpg",
    "Imilchil Wedding Festival 2023": "/images/bestofmorocco/img_tour_list_4.jpg",
    "Essaouira Gnaoua Festival 2023": "/images/bestofmorocco/img_tour_list_6.jpg",
    "Morocco Cooking Class Journey": "/images/bestofmorocco/img_tour_list_9.jpg",
    "Morocco Honeymoon Package": "/images/bestofmorocco/img_tour_list_8.jpg"
}

cat_list = []
for ct in raw["additional_catalog_tours"]:
    cat_list.append({
        "name": ct["name"],
        "duration": ct["duration"],
        "category": ct["category"],
        "rating": ct["rating"],
        "summary": ct["summary"],
        "image": catalog_images.get(ct["name"], "/images/bestofmorocco/img_tour_list_1.jpg")
    })

cat_json_str = json.dumps(cat_list, indent=2, ensure_ascii=False)
ts_lines.append(f"export const catalogTours: CatalogTour[] = {cat_json_str};\n")

# 5. Team Guides
team_list = []
for tm in raw["team_and_guides"]:
    ed_items = [e.strip() for e in tm["education"].split("|") if e.strip()]
    img = "/images/bestofmorocco/img_team_team-1.jpg" if "Ayoub" in tm["name"] else "/images/bestofmorocco/img_team_team-profile.jpg" if "Mohamed" in tm["name"] else None
    team_list.append({
        "name": tm["name"],
        "role": tm["role"],
        "license": tm["license"],
        "education": ed_items,
        "experience": tm["experience"],
        "background": tm["background"],
        "languages": tm["languages"],
        "philosophy": tm["philosophy"],
        "image": img
    })

team_json_str = json.dumps(team_list, indent=2, ensure_ascii=False)
ts_lines.append(f"export const teamGuides: GuideProfile[] = {team_json_str};\n")

# 6. Testimonials
testim_list = []
for tv in raw["testimonials"]:
    testim_list.append({
        "name": tv["name"],
        "date": tv["date"],
        "location": tv["location"],
        "role": tv["role"],
        "image": f"/images/bestofmorocco/{tv['image'].replace('/', '_')}",
        "quote": tv["quote"]
    })
testim_json_str = json.dumps(testim_list, indent=2, ensure_ascii=False)
ts_lines.append(f"export const clientTestimonials: Testimonial[] = {testim_json_str};\n")

# 7. FAQs
faqs_list = [
    {
        "question": "What is the Best Price Guarantee offered by Best of Morocco Tours?",
        "answer": "Best of Morocco Tours guarantees both top service and the most competitive pricing. If you find a better advertised price elsewhere on an identical Morocco vacation package, we will match that price exactly and provide you with an extra 5% discount."
    },
    {
        "question": "Who are your tour guides and what are their qualifications?",
        "answer": "All our city and regional guides are officially licensed and certified by the Moroccan Ministry of Tourism. Our founder, Ayoub Sadeddine (Tour Guide Licence No. 2816), holds professional degrees from ITHQ and OPC in Canada, ISAT Fes, and ISTHT El Jadida. Our guides are native Moroccans and fluent in English, French, Spanish, German, Italian, and Arabic."
    },
    {
        "question": "Can your Morocco tours be customized for our private group?",
        "answer": "Yes! All our tour itineraries can be completely customized to fit your specific group size, dates, budget, and travel preferences. You can choose private chauffeured minivans or 4x4s, preferred hotel categories (from luxury boutique Riads to 5-star palace hotels), or book accommodations separately if you prefer our guided transport services only."
    },
    {
        "question": "What is your cancellation and refund policy?",
        "answer": "If Best of Morocco Tours must cancel a tour prior to commencement due to unforeseen circumstances, we notify travelers at least 15 days in advance (excluding departure date). We will either provide alternative arrangements or issue a full refund within 2 to 4 weeks (up to 6 weeks during peak seasons)."
    },
    {
        "question": "What payment methods do you accept?",
        "answer": "We accept major Credit Cards (Visa, MasterCard), PayPal, and International bank wire transfers. As long as your package is paid in full before departure, we provide flexible and clear payment milestones."
    },
    {
        "question": "Do I need travel insurance for my trip to Morocco?",
        "answer": "We strongly advise all passengers to obtain comprehensive travel insurance covering baggage loss, trip cancellation, emergency medical care, and medical evacuation prior to departure."
    }
]
faqs_json_str = json.dumps(faqs_list, indent=2, ensure_ascii=False)
ts_lines.append(f"export const siteFaqs: FAQItem[] = {faqs_json_str};\n")

with open("data/bestOfMoroccoData.ts", "w", encoding="utf-8") as f:
    f.write("\n".join(ts_lines))

print(f"Generated data/bestOfMoroccoData.ts successfully!")
