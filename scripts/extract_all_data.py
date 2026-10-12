import os
import sys
import glob
import re
import json
from urllib.parse import urljoin
from bs4 import BeautifulSoup

# Ensure utf-8 output
sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://www.bestofmoroccotour.com"

# We have 17 unique pages:
PAGES_CONFIG = [
    {
        "file": "index_html.html",
        "url": "https://www.bestofmoroccotour.com/index.html",
        "category": "Home"
    },
    {
        "file": "about_html.html",
        "url": "https://www.bestofmoroccotour.com/about.html",
        "category": "About Us"
    },
    {
        "file": "profile_html.html",
        "url": "https://www.bestofmoroccotour.com/profile.html",
        "category": "Leadership / Team"
    },
    {
        "file": "guided_morocco_tours_html.html",
        "url": "https://www.bestofmoroccotour.com/guided-morocco-tours.html",
        "category": "Guided Tours & Guides"
    },
    {
        "file": "morocco_tours_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-tours.html",
        "category": "Tours Overview"
    },
    {
        "file": "morocco_cultural_tours_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-cultural-tours.html",
        "category": "Cultural Tours"
    },
    {
        "file": "morocco_imperial_cities_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-imperial-cities.html",
        "category": "Tour Package (8 Days)"
    },
    {
        "file": "morocco_imperial_sahara_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-imperial-sahara.html",
        "category": "Tour Package (10 Days)"
    },
    {
        "file": "morocco_north_south_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-north-south.html",
        "category": "Tour Package (10 Days)"
    },
    {
        "file": "morocco_atlantic_ocean_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-atlantic-ocean.html",
        "category": "Tour Package (10 Days)"
    },
    {
        "file": "morocco_south_kasbahs_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-south-kasbahs.html",
        "category": "Tour Package (8 Days)"
    },
    {
        "file": "morocco_jewish_heritage_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-jewish-heritage.html",
        "category": "Tour Package (10 Days)"
    },
    {
        "file": "morocco_premium_tour_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-premium-tour.html",
        "category": "Tour Package (9 Days)"
    },
    {
        "file": "morocco_customized_tours_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-customized-tours.html",
        "category": "Customized Tours"
    },
    {
        "file": "morocco_meetings_incentives_html.html",
        "url": "https://www.bestofmoroccotour.com/morocco-meetings-incentives.html",
        "category": "MICE & Events"
    },
    {
        "file": "contacts_html.html",
        "url": "https://www.bestofmoroccotour.com/contacts.html",
        "category": "Contact Us"
    },
    {
        "file": "terms_conditions_html.html",
        "url": "https://www.bestofmoroccotour.com/terms-conditions.html",
        "category": "Terms & Conditions"
    }
]

def clean_text(text):
    if not text:
        return ""
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

print("Ready to extract data from all 17 pages...")
