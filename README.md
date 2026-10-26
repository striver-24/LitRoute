# 💡 LitRoute

> *Safe night navigation web app prioritizing well-lit roads, open shops, police stations (PCRs), and instant SOS alerts.*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?style=for-the-badge&logo=leaflet)](https://leafletjs.com/)

---

## 🌟 About LitRoute

Standard navigation apps default to the fastest route, which often leads down unlit, isolated shortcuts. **LitRoute** is a safety-first navigation web application designed to empower women traveling alone at night. By integrating live geospatial data, LitRoute highlights active commercial hubs, 24/7 pharmacies, police control rooms, and offers a one-tap emergency broadcast system.

---

## 🚀 Core Features

- **Live GPS Centering:** Automatically detects and centers the map on the user's current location upon load.
- **Active Hubs Integration:** Dynamically queries OpenStreetMap (via Overpass API) to display nearby police stations, open shops, and pharmacies in real-time.
- **One-Tap SOS Emergency:** Instantly captures live GPS coordinates and generates a prefilled WhatsApp/Web Share emergency broadcast message to trusted contacts.
- **Responsive Night-Mode UI:** Built with a clean, high-contrast interface designed for quick readability in low-light environments.

---

## 🛠️ Tech Stack

- **Frontend & Framework:** Next.js (App Router) + React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Mapping & Geospatial:** Leaflet.js / React-Leaflet, OpenStreetMap Tiles, Overpass API

---

## ⚙️ Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/litroute.git
   cd litroute
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the app.

---

## 🗺️ Project Updates

* **[Upcoming]** Overpass API Integration to fetch and render nearby active hubs (Police Stations, Pharmacies & Open Shops) with custom color-coded map markers.
* **[Completed]** Fixed layout bugs and z-index overlap between SOS emergency trigger and top branding header.
* **[Completed]** Live browser geolocation tracking and automatic map centering.
* **[Completed]** One-tap emergency SOS button with WhatsApp coordinate sharing integration.
* **[Completed]** Base Next.js + TypeScript + Leaflet map setup and dark-mode branding layout.

**In Progress...**
