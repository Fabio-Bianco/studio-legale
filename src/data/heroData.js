// src/data/heroData.js

import heroImg1 from "../assets/hero-img.png";
import heroImg2 from "../assets/hero-img-2.png";

/**
 * Dati per Hero Section
 * Contenuti e immagini della sezione principale homepage
 */

export const heroData = {
  // Titoli
  title: "Studio Livieri Tenore",
  subtitle: "Due Professioniste, Una Visione",
  
  // Descrizione principale
  description: "Quando il diritto diventa strumento di protezione e non di ostacolo.",
  descriptionBold: "Offriamo consulenza legale strategica con un approccio umano e soluzioni mirate",
  
  // CTA (Call to Action)
  cta: {
    text: "Consulenza Gratuita Ora",
    textMobile: "Consulenza Gratuita",
    subtext: "Rispondiamo entro le 24h",
    link: "/consultation"
  },
  
  // Trust badges
  trustBadges: [
    "Nessun impegno",
    "Consulenza gratuita"
  ],
  
  // Immagini
  images: {
    left: heroImg2,
    right: heroImg1,
    altLeft: "Studio Legale Livieri-Tenore - Professionisti",
    altRight: "Avvocati specializzati Bari"
  },
  
  // Sticky CTA mobile
  stickyCTA: {
    text: "Consulenza Gratuita",
    arrow: "→"
  }
};
