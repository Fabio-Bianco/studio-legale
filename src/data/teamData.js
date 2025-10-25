// src/data/teamData.js
import avvLivieriImg from '../assets/avv_livieri.jpg';
import avvTenoreImg from '../assets/avv_tenore.jpg';

/**
 * Dati del team legale - Array strutturati per riutilizzo
 */

export const teamMembers = [
  {
    id: 1,
    name: "Avv. Patrizia Livieri",
    title: "Fondatrice dello Studio",
    role: "• Immigrazione • Diritto di Famiglia",
    description: `Svolgo la mia attività principalmente nella provincia di Brindisi, specializzandomi in diritto di famiglia e immigrazione. 

Il ruolo di traduttrice giurata nelle lingue inglese, francese e spagnolo, mi consente di offrire supporto qualificato in ambito di immigrazione, asilo e cittadinanza, accompagnando i clienti in ogni fase del percorso legale.

Credo profondamente nel valore del rapporto umano e diretto: ogni persona ha una storia unica che merita ascolto, rispetto e chiarezza. Per questo utilizzo sempre un linguaggio semplice ma preciso, perché comprendere è il primo passo verso una soluzione consapevole.

Considero il mio lavoro un privilegio: accompagnare le persone nei momenti più delicati della loro vita, offrendo competenza tecnica, empatia autentica e dedizione totale al loro benessere.`,
    contact: {
      email: "patrizia.livieri@gmail.com",
      pec: "livieri.patrizia@coabrindisi.legalmail.it",
    },
    philosophy: " Ogni caso è una storia unica che merita ascolto, rispetto e chiarezza.",
    avatar: avvLivieriImg,
    alt: "Avvocata Patrizia Livieri",
    achievements: [
      {
        number: "100+",
        label: "Famiglie Seguite",
      },
      {
        number: "95%",
        label: "Accordi raggiunti",
      },
    ],
    credentials: " • Laurea in Giurisprudenza, Università del Salento",
    specialties: [
      "Diritto di famiglia",
      "Immigrazione e cittadinanza",
      "Unioni civili",
      "Eredità e successioni",
      "Separazione",
      "Divorzio", 
      "Matrimonio",
      "Affidamento",
      "Tutela dei minori",
      "Incapacità giuridica",
      "Stalking e molestie",
      "Incidenti stradali",
      "Multe e contravvenzioni",
      "Mediazione",
      "Negoziazione assistita"
    ],
  },
  {
    id: 2,
    name: "Avv. Federica Tenore",
    title: "Curatore Minorile",
    role: "• Sovraindebitamento • Recupero Crediti",
    description: `Ho acquisito esperienza approfondita in diritto di famiglia, approfondendo gli aspetti civilistici e penalistici di questa materia complessa e delicata.

Mi occupo di procedure da sovraindebitamento, recupero crediti, tutela del consumatore, gestendo sinistri stradali, casi di malasanità e responsabilità medica con approccio tecnico e determinato.

La mia pratica spazia dalla responsabilità contrattuale ed extracontrattuale alle differenze retributive, dalle nomine di amministratori di sostegno agli sfratti, dai ricorsi ABF ai ricorsi amministrativi INPS.

Sono inserita nell'elenco degli Avvocati per il Patrocinio a Spese dello Stato per il settore civile, garantendo assistenza qualificata anche a chi ha difficoltà economiche, perché tutti meritano giustizia.`,
    contact: {
      email: "avv.federicatenore@gmail.com", 
      pec: "tenore.federica@coamilano.legalmail.it",
    },
    philosophy: "La precisione contrattuale è la migliore prevenzione legale.",
    avatar: avvTenoreImg,
    alt: "Avvocata Federica Tenore",
    achievements: [
      {
        number: "100+",
        label: "Pratiche Gestite",
      },
      {
        number: "87%",
        label: "Crediti Recuperati",
      },
    ],
    credentials: " • Laurea in Giurisprudenza, Università del Salento",
    specialties: [
      "Diritto di famiglia",
      "Diritto civile", 
      "Recupero crediti",
      "Tutela del consumatore",
      "Responsabilità medica",
      "Sovraindebitamento",
      "Stalking e molestie",
      "Unioni civili",
      "Separazione",
      "Divorzio",
      "Matrimonio",
      "Affidamento", 
      "Adozione",
      "Pignoramento",
      "Diritto del lavoro",
      "Diritto penale",
      "Violenza",
      "Truffe",
      "Incidenti stradali",
      "Multe e contravvenzioni",
      "Risarcimento danni",
      "Malasanità e responsabilità medica",
      "Mediazione",
      "Negoziazione assistita",
      "Domiciliazioni e sostituzioni"
    ],
  },
];

export const studioContacts = {
  general: {
   // phone: "+39 02 1234 567",
    email: ["patrizia.livieri@gmail.com", "avv.federicatenore@gmail.com"],
    pec: ["livieri.patrizia@coabrindisi.legalmail.it", "tenore.federica@coamilano.legalmail.it"],
    fax: "",
  },
  emergency: {
    phone: "",
    description: "Emergenze legali 24/7",
    availability: "Sempre disponibile",
  },
  office: {
    address: "Via Cuneo, Mesagne, 72023 (BR)",
    hours: "Lunedì-Venerdì: 9:00-12:00 16:00-20:00\nSabato: 9:00-13:00\nDomenica: Chiuso",
    parking: "",
    publicTransport: "",
  },
  social: {
    linkedin: "",
    website: "",
    facebook: "",
  },
};

export const studioValues = [
  {
    id: 1,
    name: "Trasparenza",
    text: "Costi chiari, tempi definiti, strategia condivisa. Nessuna sorpresa.",
  },
  {
    id: 2,
    name: "Fiducia",
    text: "Costruiamo relazioni durature basate su competenza e integrità professionale.",
  },
  {
    id: 3,
    name: "Efficienza",
    text: "Soluzioni rapide e concrete. Il vostro tempo è prezioso quanto il nostro.",
  },
];

export const studioStats = [
  {
    id: 1,
    number: "100+",
    label: "Casi Risolti",
    type: "essential",
  },
  {
    id: 2,
    number: "10+",
    label: "Anni Esperienza",
    type: "essential",
  },
  {
    id: 3,
    number: "98%",
    label: "Clienti Soddisfatti",
    type: "secondary",
  },
  {
    id: 4,
    number: "24h",
    label: "Tempo Risposta",
    type: "secondary",
  },
];

export const teamHeader = {
  badge: "Chi Siamo",
  title: {
    desktop: "Esperienza al Vostro Servizio",// da sistemare e rivedere
    mobile: "Le Nostre Esperte", // da sistemare e rivedere 
  },
  subtitle: {
    desktop:
      "10 anni di eccellenza legale — Un team di professioniste specializzate in diritto civile, famiglia, immigrazione, cittadinanza e contratti. La nostra missione è trasformare la complessità legale in soluzioni concrete e accessibili.",
    mobile: "10 anni di esperienza in diritto civile, immigrazione e cittadinanza.",
  },
};

// Dati dello studio per Header e branding
export const studioInfo = {
  name: "Studio Livieri Tenore",
  subtitle: "Esperte in diritto penale, civile e immigrazione",
  shortName: "Studio Legale LT", // Per versione mobile
  mobileSubtitle: "Esperte del Diritto Penale, Civile e dell'Immigrazione" // Per versione mobile
};
