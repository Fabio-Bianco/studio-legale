// src/data/studioData.js

/**
 * Informazioni generali dello Studio Legale
 * Dati centralizzati per brand, contatti e informazioni professionali
 */

export const studioInfo = {
    // Brand
    name: "Studio Legale Livieri - Tenore",
    nameMobile: "Studio Legale<br/>Livieri - Tenore",
    shortName: "Livieri - Tenore",
    subtitle: "Esperienza • Competenza • Risultati",
    tagline: "Due Professioniste, Una Visione",

    mission: "Quando il diritto diventa strumento di protezione e non di ostacolo. Offriamo consulenza legale strategica con un approccio umano e soluzioni mirate.",

    contact: {
        phone: "+39 3478847904, +39 3488534386",
        email: "info@studiolegalelivieritenore@gmail.com"
    },

    address: {
        street: "Via Cuneo, 89",
        city: "Mesagne",
        province: "BR",
        postalCode: "72023",
        country: "Italia",
        fullAddress: "Via Cuneo, 89 - 72023 Mesagne (BR) - Italia"
    },

    hours: {
        weekdays: "Lun-Ven: 9:00 - 18:00",
        saturday: "Sabato: Su appuntamento",
        sunday: "Domenica: Chiuso",
        formatted: "Lun-Ven: 9:00 - 18:00 | Sabato: Su appuntamento"
    },

    professional: {
        order: "Foro di Brindisi",
        orderFull: "Ordine degli Avvocati di Brindisi",
        piva: "IT123456789012",
        codFisc: "123456789012",
        foundedYear: ""
    },

    social: {
        facebook: "",
        linkedin: "",
        instagram: ""
    },

    seo: {
        keywords: [
        // BRAND
        "studio legale livieri tenore",
        "livieri tenore avvocati",
        "studio legale livieri tenore mesagne",

        // LOCAL SEO GENERICO
        "studio legale mesagne",
        "avvocato mesagne",
        "avvocato a mesagne",
        "studio legale brindisi",
        "avvocato brindisi",
        "studio legale puglia",
        "avvocato puglia",

        // CITTADINANZA E IMMIGRAZIONE
        "avvocato cittadinanza",
        "avvocato cittadinanza italiana",
        "avvocato cittadinanza mesagne",
        "avvocato cittadinanza brindisi",
        "avvocato immigrazione",
        "avvocato immigrazione mesagne",
        "avvocato immigrazione brindisi",
        "cittadinanza italiana puglia",
        "pratiche cittadinanza mesagne",
        "assistenza legale immigrazione mesagne",

        // DIRITTO DI FAMIGLIA
        "avvocato diritto di famiglia",
        "avvocato diritto di famiglia mesagne",
        "avvocato separazione mesagne",
        "avvocato divorzio mesagne",
        "avvocato affidamento figli mesagne",
        "diritto di famiglia brindisi",

        // RECUPERO CREDITI
        "recupero crediti",
        "recupero crediti mesagne",
        "avvocato recupero crediti brindisi",
        "recupero crediti puglia",
        "assistenza legale recupero crediti",

        // SOVRAINDEBITAMENTO
        "sovraindebitamento",
        "sovraindebitamento mesagne",
        "avvocato ovraindebitamento brindisi",
        "legge sul sovraindebitamento",
        "crisi da sovraindebitamento puglia",

        // LONG TAIL
        "avvocato per cittadinanza italiana a mesagne",
        "studio legale specializzato in immigrazione a mesagne",
        "avvocato diritto di famiglia a mesagne",
        "avvocato per separazione e divorzio a mesagne",
        "avvocato per recupero crediti a brindisi",
        "avvocato per sovraindebitamento a mesagne"
    ],
        metaDescription: "Studio Legale Livieri-Tenore a Mesagne: specializzati in diritto di famiglia, recupero crediti, sovraindebitamento e immigrazione. Consulenza gratuita."
    }
};


/**
 * Servizi in evidenza per footer
 */
export const featuredServices = [
    "Diritto di Famiglia",
    "Recupero Crediti",
    "Sovraindebitamento",
    "Immigrazione",
    "Diritto del Lavoro",
    "Diritto Contrattuale"
];

/**
 * Menu di navigazione principale
 */
export const mainNavigation = [
    { label: "Home", path: "/" },
    { label: "Servizi Legali", path: "/services" },
    { label: "Chi Siamo", path: "/about" },
    { label: "Contatti", path: "/contact" },
    { label: "Consulenza Gratuita", path: "/consultation", cta: true }
];

/**
 * Links secondari per footer
 */
export const secondaryLinks = [
    { label: "Chi Siamo", path: "/about" },
    { label: "Consulenza", path: "/consultation" },
    { label: "Contatti", path: "/contact" }
];

/**
 * Links legali per footer
 */
export const legalLinks = [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Termini di Servizio", path: "/terms" },
    { label: "Mappa del Sito", path: "/sitemap" }
];

/**
 * CTA (Call to Action) messages
 */
export const ctaMessages = {
    primary: "Consulenza Gratuita Ora",
    primarySub: "Rispondiamo entro le 24h",
    trust: "✓ Nessun impegno  ✓ Consulenza gratuita",
    mobile: "Consulenza Gratuita",
    notFound: "Non trovi il servizio che cerchi?",
    notFoundDesc: "Il nostro studio offre assistenza legale a 360°. Contattaci per una consulenza personalizzata gratuita."
};
