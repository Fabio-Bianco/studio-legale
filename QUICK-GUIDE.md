# 📖 Guida Rapida - Modifica Dati

## 🎯 Come Modificare i Dati del Sito

Questa guida mostra come modificare i contenuti del sito in modo semplice e veloce.

---

## 📞 Modificare Contatti Studio

**File:** `src/data/studioData.js`

### Telefono
```javascript
export const studioInfo = {
  contact: {
    phone: "+39 080 512 3456",          // ← Cambia qui
    phoneFormatted: "+39 080 512 3456", // ← Cambia qui
  }
};
```

### Email
```javascript
export const studioInfo = {
  contact: {
    email: "info@studiolegalelivieritenorebari.it", // ← Cambia qui
  }
};
```

### Indirizzo
```javascript
export const studioInfo = {
  address: {
    street: "Via Amendola, 162/B",  // ← Cambia qui
    city: "Bari",                   // ← Cambia qui
    province: "BA",                 // ← Cambia qui
    postalCode: "70126",            // ← Cambia qui
  }
};
```

### Orari
```javascript
export const studioInfo = {
  hours: {
    weekdays: "Lun-Ven: 9:00 - 18:00",      // ← Cambia qui
    saturday: "Sabato: Su appuntamento",     // ← Cambia qui
  }
};
```

**Effetto:** Modifiche visibili in Header, Footer, Contact page

---

## 🎨 Modificare Hero Homepage

**File:** `src/data/heroData.js`

### Titolo
```javascript
export const heroData = {
  title: "Studio Livieri Tenore",        // ← Cambia qui
  subtitle: "Due Professioniste, Una Visione", // ← Cambia qui
};
```

### Descrizione
```javascript
export const heroData = {
  description: "Quando il diritto diventa strumento di protezione", // ← Cambia qui
  descriptionBold: "Offriamo consulenza legale strategica",         // ← Cambia qui
};
```

### CTA Button
```javascript
export const heroData = {
  cta: {
    text: "Consulenza Gratuita Ora",    // ← Cambia qui
    subtext: "Rispondiamo entro le 24h", // ← Cambia qui
    link: "/consultation"                // ← Cambia qui
  }
};
```

---

## ⚖️ Aggiungere Nuovo Servizio

**File:** `src/data/servicesData.js`

### 1. Importa immagine (se locale)
```javascript
import imgNuovoServizio from '../assets/nuovo-servizio.jpg';
```

### 2. Aggiungi servizio all'array
```javascript
export const legalServices = [
  // ... servizi esistenti
  {
    id: 'nuovo-servizio',                           // ID univoco
    title: 'Titolo Nuovo Servizio',                // Titolo card
    image: imgNuovoServizio,                        // Immagine
    shortDesc: 'Breve descrizione servizio',       // Descrizione breve
    description: 'Descrizione completa dettagliata del servizio', // Descrizione lunga
    features: [                                     // Lista caratteristiche
      'Caratteristica 1',
      'Caratteristica 2',
      'Caratteristica 3',
      'Caratteristica 4'
    ],
    category: 'Privati'  // Privati | Aziende | Lavoratori
  }
];
```

**Effetto:** Servizio appare automaticamente in:
- Homepage (se nei primi 6)
- Pagina Servizi
- Filtri per categoria

---

## 🧑‍💼 Modificare Servizi in Evidenza

**File:** `src/data/studioData.js`

```javascript
export const featuredServices = [
  "Diritto di Famiglia",      // ← Cambia qui
  "Recupero Crediti",         // ← Cambia qui
  "Sovraindebitamento",       // ← Cambia qui
  "Immigrazione",             // ← Cambia qui
  "Diritto del Lavoro",       // ← Cambia qui
  "Diritto Contrattuale"      // ← Cambia qui
];
```

**Effetto:** Lista servizi nel Footer

---

## 🧭 Modificare Menu Navigazione

**File:** `src/data/studioData.js`

```javascript
export const mainNavigation = [
  { label: "Home", path: "/" },
  { label: "Servizi Legali", path: "/services" },
  { label: "Chi Siamo", path: "/about" },
  { label: "Contatti", path: "/contact" },
  { label: "Consulenza Gratuita", path: "/consultation", cta: true }
  // Aggiungi nuova voce qui ↓
  // { label: "Nuovo Link", path: "/nuova-pagina" }
];
```

**Effetto:** Menu aggiornato in Header desktop e mobile

---

## 💼 Modificare Dati Professionali

**File:** `src/data/studioData.js`

```javascript
export const studioInfo = {
  professional: {
    order: "Foro di Bari",           // ← Cambia qui
    piva: "IT123456789012",          // ← Cambia qui
    codFisc: "123456789012",         // ← Cambia qui
    foundedYear: "1995"              // ← Cambia qui
  }
};
```

**Effetto:** Info professionali nel Footer

---

## 👩‍⚖️ Modificare Dati Team

**File:** `src/data/teamData.js`

### Aggiornare Email Avvocato
```javascript
export const teamMembers = [
  {
    id: 1,
    name: "Avv. Patrizia Livieri",
    contact: {
      email: "patrizia.livieri@gmail.com",  // ← Cambia qui
      pec: "livieri.patrizia@coabrindisi.legalmail.it", // ← Cambia qui
    },
    // ... resto dati
  }
];
```

### Aggiungere Specializzazione
```javascript
export const teamMembers = [
  {
    id: 1,
    name: "Avv. Patrizia Livieri",
    specialties: [
      "Diritto di famiglia",
      "Immigrazione e cittadinanza",
      "Nuova Specializzazione"  // ← Aggiungi qui
    ]
  }
];
```

---

## 🎯 Modificare Messaggi CTA

**File:** `src/data/studioData.js`

```javascript
export const ctaMessages = {
  primary: "Consulenza Gratuita Ora",        // ← CTA principale
  primarySub: "Rispondiamo entro le 24h",    // ← Sottotesto
  trust: "✓ Nessun impegno  ✓ Consulenza gratuita", // ← Trust badges
  mobile: "Consulenza Gratuita",             // ← CTA mobile
  notFound: "Non trovi il servizio che cerchi?", // ← Services page
  notFoundDesc: "Il nostro studio offre assistenza legale a 360°..." // ← Descrizione
};
```

---

## ✏️ Esempi Pratici Veloci

### Cambio Rapido Telefono
1. Apri `src/data/studioData.js`
2. Cerca `phone:`
3. Cambia numero
4. Salva → Hot reload automatico ✅

### Cambio Email Studio
1. Apri `src/data/studioData.js`
2. Cerca `email:`
3. Cambia indirizzo
4. Salva → Aggiornato ovunque ✅

### Aggiungi Servizio Top 6
1. Apri `src/data/servicesData.js`
2. Aggiungi nuovo servizio all'inizio dell'array
3. Salva → Appare in homepage ✅

### Cambia Orari Apertura
1. Apri `src/data/studioData.js`
2. Cerca `hours:`
3. Modifica orari
4. Salva → Footer aggiornato ✅

---

## ⚠️ Note Importanti

### ✅ Da Fare
- Modifica solo i valori tra virgolette
- Mantieni la struttura JSON corretta
- Salva il file dopo ogni modifica
- Verifica nel browser

### ❌ Non Fare
- Non modificare i nomi delle proprietà (`title:`, `email:`, ecc.)
- Non rimuovere virgole o parentesi graffe
- Non modificare file nella cartella `components/`
- Non dimenticare le virgolette sulle stringhe

---

## 🆘 Risoluzione Problemi

### Errore dopo modifica?
1. Controlla di non aver rimosso virgolette `"`
2. Verifica che tutte le parentesi `{}` siano chiuse
3. Controlla le virgole `,` alla fine di ogni riga
4. Riavvia server dev: `Ctrl+C` poi `npm run dev`

### Modifiche non visibili?
1. Salva il file (`Ctrl+S`)
2. Ricarica browser (`F5`)
3. Pulisci cache browser (`Ctrl+Shift+R`)

---

## 📚 Risorse

- **Guida Completa:** [DATA-STRUCTURE.md](DATA-STRUCTURE.md)
- **Riepilogo Tecnico:** [REFACTORING-SUMMARY.md](REFACTORING-SUMMARY.md)
- **README Progetto:** [README.md](README.md)

---

## 🎉 Fatto!

Ora puoi modificare tutti i contenuti del sito senza toccare il codice dei componenti! 🚀

**Ricorda:** Ogni modifica si riflette automaticamente in tutte le parti del sito dove quel dato viene usato.
