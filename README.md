# Studio Legale Livieri - Tenore

Sito web professionale realizzato con **React** e **JavaScript**, dedicato allo Studio Legale Livieri - Tenore di Bari.  
Design moderno, responsive e ottimizzato per conversioni con focus su esperienza utente e professionalità.

---

## 🚀 Tech Stack

- **Frontend:** React 18 + Vite
- **Linguaggio:** JavaScript (ES6+)
- **Styling:** CSS3 personalizzato con design system
- **Routing:** React Router v6
- **Gestione pacchetti:** npm
- **Icons:** Emoji nativi per performance ottimale

---

## ⚙️ Installazione e Avvio

```bash
# Clona il progetto
git clone https://github.com/Fabio-Bianco/studio-legale.git
cd studio-legale

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Preview del build
npm run preview
```

Il sito sarà disponibile su `http://localhost:5173` (o porta alternativa se occupata).

---

## 🏗️ Struttura del Progetto

```
src/
├── components/
│   ├── common/           # Componenti riutilizzabili
│   │   └── ScrollToTop.jsx
│   ├── desktop/          # Componenti desktop-specific
│   │   └── ScrollProgress.jsx
│   ├── layout/           # Layout e navigazione
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── Icons.jsx
│   └── sections/         # Sezioni pagine
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Hero.jsx
│       ├── Main.jsx
│       └── Team.jsx
├── pages/                # Pagine principali
│   ├── Home.jsx
│   ├── About.jsx
│   ├── LegalServices.jsx
│   ├── Contact.jsx
│   ├── FreeConsultation.jsx
│   ├── Privacy.jsx       # ✨ Nuovo
│   ├── Terms.jsx         # ✨ Nuovo
│   └── Sitemap.jsx       # ✨ Nuovo
├── data/
│   └── teamData.js
├── assets/               # Immagini ottimizzate
├── styles/               # CSS modulari
│   ├── tokens.css        # Design system
│   ├── Header.css
│   ├── Footer.css
│   ├── Hero.css
│   ├── Main.css
│   ├── Pages.css         # Stili pagine legali
│   └── ...
└── App.jsx              # Router principale
```

---

## 🌐 Pagine e Funzionalità

### � **Pagine Principali**
- **/** - Homepage con hero section e panoramica servizi
- **/about** - Informazioni sullo studio e team di professionisti
- **/services** - 12 aree di specializzazione legale con filtri
- **/contact** - Informazioni di contatto complete
- **/consultation** - Form per consulenza gratuita (CTA principale)

### 📋 **Pagine Legali** ✨ Nuove
- **/privacy** - Privacy Policy GDPR compliant
- **/terms** - Termini di Servizio completi
- **/sitemap** - Mappa del sito per navigazione facilitata

### ⚖️ **Aree di Specializzazione**
1. **Diritto di Famiglia** - Separazioni, divorzi, affidamento
2. **Recupero Crediti** - Strategie per crediti commerciali
3. **Sovraindebitamento** - Procedure di composizione crisi
4. **Immigrazione e Cittadinanza** - Permessi e naturalizzazione
5. **Diritto del Lavoro** - Tutela lavoratori e aziende
6. **Diritto Contrattuale** - Redazione e gestione contratti
7. **Diritto Immobiliare** - Compravendite e locazioni
8. **Diritto Penale** - Difesa penale specializzata
9. **Successioni e Testamenti** - Pianificazione successoria
10. **Diritto Amministrativo** - Rapporti con PA
11. **Diritto Societario** - Costituzione e governance
12. **Diritto Bancario** - Controversie bancarie

---

## 🎨 Design System

### **Palette Colori**
- **Primary Navy:** `#0B3C5D` - Professionalità e fiducia
- **Accent Gold:** `#C79E46` - Prestigio e qualità
- **Surface:** `#FFFFFF` - Pulizia e chiarezza
- **Background:** `#F8F9FA` - Delicatezza e leggibilità

### **Tipografia**
- **Display:** Playfair Display (serif elegante)
- **Body:** Inter (sans-serif moderna)
- **Sistema fluido:** `clamp()` per responsive perfetto

### **Componenti UI**
- Border radius coerente: **12px**
- Effetti hover discreti e professionali
- Animazioni fluide con `cubic-bezier`
- Focus states per accessibilità

---

## 📱 Responsive Design

- **Mobile First:** Ottimizzato per dispositivi mobili
- **Breakpoints:**
  - Mobile: `< 768px`
  - Tablet: `768px - 1024px`
  - Desktop: `1025px+`
  - Large Desktop: `1400px+`

### **Funzionalità Mobile**
- Touch-friendly (min 44px target)
- Navigation hamburger menu
- Card system responsive
- Filtri servizi ottimizzati

---

## ⚡ Performance e Ottimizzazioni

- **Componenti ottimizzati** con lazy loading
- **Immagini ottimizzate** (WebP, dimensioni multiple)
- **CSS minimalista** con design system
- **Scroll automatico** tra pagine
- **Progressive enhancement**

---

## 🔍 SEO e Accessibilità

### **SEO**
- Meta tags ottimizzati
- Struttura semantica HTML5
- URL puliti e descrittivi
- Sitemap navigabile

### **Accessibilità**
- ARIA labels appropriati
- Contrasto colori AA compliant
- Focus management
- Screen reader friendly
- Reduced motion support

---

## 🛡️ Compliance e Legalità

### **GDPR Compliance**
- Privacy Policy completa
- Cookie policy integrata
- Gestione consensi trasparente
- Diritti utente chiaramente esposti

### **Conformità Professionale**
- Termini di servizio legali
- Informazioni professionali complete
- Codice deontologico rispettato
- Trasparenza tariffaria

---

## 📊 Stato del Progetto

🟢 **Completato e Funzionale**

### ✅ **Implementato**
- [x] Design system completo
- [x] Tutte le pagine principali
- [x] 12 servizi legali con filtri
- [x] Footer professionale con dati reali
- [x] Pagine legali (Privacy, Terms, Sitemap)
- [x] Responsive design perfetto
- [x] Navigation e routing completi
- [x] Scroll-to-top automatico
- [x] Accessibilità ottimizzata

### 🔄 **Possibili Sviluppi Futuri**
- [ ] Blog/News section
- [ ] Sistema prenotazioni online
- [ ] Area clienti riservata
- [ ] Integrazione CRM
- [ ] Chatbot assistenza
- [ ] Multilingual support

---

## 📞 Informazioni Studio

**Studio Legale Livieri - Tenore**  
📍 Via Amendola, 162/B - 70126 Bari (BA)  
📞 +39 080 512 3456  
📧 info@studiolegalelivieritenorebari.it  
🕒 Lun-Ven: 9:00-18:00, Sabato su appuntamento

**Specializzazioni:** Diritto Civile, Penale, Amministrativo  
**Foro di appartenenza:** Bari  
**Attivo dal:** 1995

---

## 👨‍💻 Sviluppo

**Sviluppatore:** Fabio Bianco (alias b_bot)  
📧 Email: [inserire email]  
� GitHub: [@Fabio-Bianco](https://github.com/Fabio-Bianco)  

### **Tecnologie Utilizzate**
- React 18 con Hooks moderni
- CSS3 avanzato con Custom Properties
- JavaScript ES6+ con best practices
- Vite per build ottimizzato
- Git per version control

---

## 📄 Licenza

Questo progetto è proprietario dello Studio Legale Livieri - Tenore.  
Tutti i diritti riservati © 2025

---

## 🚀 Quick Start

```bash
npm install && npm run dev
```

Il sito sarà immediatamente accessibile e completamente funzionale! ✨