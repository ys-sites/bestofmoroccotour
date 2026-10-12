# Golf Packages Photo Audit

This document lists the image assets used in golf packages (IDs 10–16) in `data/itineraries.ts`, evaluates whether they match the destination, and proposes replacements where necessary.

| Package ID | Field | Current Image | Destination Match? | Proposed Replacement / Notes |
| :--- | :--- | :--- | :--- | :--- |
| **ID 10** (Rabat) | `image` | `/images/rgdes_parcours_rouge_18.jpg` | **Yes** (Rabat) | Already matches. |
| **ID 10** (Rabat) | `contentImage` | `/images/rgdes_parcours_rouge_09_17.jpg` | **Yes** (Rabat) | Already matches. |
| **ID 11** (Agadir) | `image` | `/images/tgz_course_ocean.jpg` | **Yes** (Agadir/Taghazout) | Already matches. |
| **ID 11** (Agadir) | `contentImage` | `/images/hilton_taghazout_1.avif` | **Yes** (Agadir/Taghazout) | Already matches (Hilton Taghazout photo). |
| **ID 12** (Agadir) | `image` | `/images/pickalbatros-white-beach-resort-in-agadir.jpg` | **Yes** (Agadir) | Already matches. |
| **ID 12** (Agadir) | `contentImage` | `/images/deluxe-room-sea-view.jpg` | **Yes** (Agadir White Beach) | Already matches. |
| **ID 13** (Agadir) | `image` | `/images/tgz_course_hotel.jpg` | **Yes** (Agadir/Taghazout) | Already matches. |
| **ID 13** (Agadir) | `contentImage` | `/images/hilton_taghazout_2.avif` | **Yes** (Agadir/Taghazout) | Already matches. |
| **ID 14** (Marrakech) | `image` | `/images/royal_golf_marrakech_1.jpg` | **Yes** (Marrakech) | Already matches. |
| **ID 14** (Marrakech) | `contentImage` | `/images/royal_golf_marrakech_2.jpg` | **Yes** (Marrakech) | Already matches. |
| **ID 15** (Marrakech) | `image` | `/images/marrakech_golf_blue5.jpg` | **Yes** (Marrakech) | Already matches. |
| **ID 15** (Marrakech) | `contentImage` | `/images/marrakech_sunset_hero.png` | **Yes** (Marrakech) | Already matches. |
| **ID 16** (Marrakech) | `image` | `/images/royal_golf_marrakech_2.jpg` | **Yes** (Marrakech) | Already matches. |
| **ID 16** (Marrakech) | `contentImage` | `/images/marrakech_golf_blue5.jpg` | **Yes** (Marrakech) | Already matches. |

> [!NOTE]
> All golf package primary images are coherent with their respective cities (Agadir packages use Taghazout/Agadir assets, Marrakech packages use Marrakech assets, and Rabat packages use Royal Golf Dar Es Salam/Ritz-Carlton Rabat assets).
> When the client uploads new assets to Google Drive, Jay will drop them in `/public/images` with destination prefixes (`agadir_*`, `marrakech_*`, `rabat_*`) for a final replacement pass.
