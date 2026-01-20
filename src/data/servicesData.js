// src/data/servicesData.js

// Importazione immagini per i servizi
import imgFamily from '../assets/diritto-di-famiglia.jpg';
import imgContract from '../assets/diritto-contrattuale.jpg';
import imgLabor from '../assets/diritto-lavoro.jpg';
import imgImmigration from '../assets/immigrazione.jpg';
import imgDebtRecovery from '../assets/recupero-crediti.jpg';
import imgOverIndebt from '../assets/sovraindebbitamento.jpg';

/**
 * Dati dei Servizi Legali
 * Array completo di tutti i servizi offerti dallo studio
 */
export const legalServices = [
  {
    id: 'famiglia',
    title: 'Diritto di Famiglia',
    image: imgFamily,
    shortDesc: 'Supporto completo per famiglie in difficoltà',
    description: 'Assistenza specializzata in separazioni, divorzi consensuali, affidamento minori e mediazione familiare.',
    features: [
      'Separazioni consensuali e giudiziali',
      'Divorzi e scioglimento unioni civili',
      'Affidamento e mantenimento figli',
      'Mediazione familiare'
    ],
    category: 'Privati'
  },
  {
    id: 'recupero-crediti',
    title: 'Recupero Crediti',
    image: imgDebtRecovery,
    shortDesc: 'Strategie efficaci per il recupero dei tuoi crediti',
    description: 'Procedure mirate per il recupero di crediti commerciali e privati con approccio sia stragiudiziale che giudiziale.',
    features: [
      'Recupero crediti stragiudiziale',
      'Azioni monitorie e esecutive',
      'Decreto ingiuntivo',
      'Pignoramento beni mobili e immobili'
    ],
    category: 'Aziende'
  },
  {
    id: 'sovraindebitamento',
    title: 'Sovraindebitamento',
    image: imgOverIndebt,
    shortDesc: 'Soluzioni per uscire dalla crisi debitoria',
    description: 'Procedure di composizione della crisi da sovraindebitamento per privati e piccole imprese.',
    features: [
      'Piano del consumatore',
      'Accordo di composizione della crisi',
      'Liquidazione controllata',
      'Esdebitazione'
    ],
    category: 'Privati'
  },
  {
    id: 'immigrazione',
    title: 'Immigrazione e Cittadinanza',
    image: imgImmigration,
    shortDesc: 'Assistenza completa per pratiche di immigrazione',
    description: 'Supporto legale per permessi di soggiorno, ricongiungimenti familiari e acquisizione della cittadinanza.',
    features: [
      'Permessi di soggiorno',
      'Ricongiungimenti familiari',
      'Cittadinanza italiana',
      'Ricorsi contro dinieghi'
    ],
    category: 'Privati'
  },
  {
    id: 'lavoro',
    title: 'Diritto del Lavoro',
    image: imgLabor,
    shortDesc: 'Tutela dei diritti dei lavoratori e delle aziende',
    description: 'Assistenza in materia di rapporti di lavoro, licenziamenti, mobbing e controversie lavorative.',
    features: [
      'Contratti di lavoro',
      'Licenziamenti e dimissioni',
      'Mobbing e discriminazioni',
      'Contenzioso lavorativo'
    ],
    category: 'Lavoratori'
  },
  {
    id: 'contrattuale',
    title: 'Diritto Contrattuale',
    image: imgContract,
    shortDesc: 'Consulenza specializzata in materia contrattuale',
    description: 'Redazione, revisione e gestione di contratti commerciali e civili per privati e aziende.',
    features: [
      'Redazione contratti commerciali',
      'Revisione contratti esistenti',
      'Risoluzione controversie contrattuali',
      'Responsabilità civile'
    ],
    category: 'Aziende'
  },
  {
    id: 'immobiliare',
    title: 'Diritto Immobiliare',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Compravendite e gestione patrimonio immobiliare',
    description: 'Assistenza completa in compravendite immobiliari, locazioni, condominio e diritti reali.',
    features: [
      'Compravendite e preliminari',
      'Contratti di locazione',
      'Diritto condominiale',
      'Usucapione e servitù'
    ],
    category: 'Privati'
  },
  {
    id: 'penale',
    title: 'Diritto Penale',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Difesa penale professionale e specializzata',
    description: 'Difesa penale in procedimenti presso tribunali e corti d\'appello, reati contro la persona e patrimonio.',
    features: [
      'Difesa in procedimenti penali',
      'Reati contro la persona',
      'Reati economici e finanziari',
      'Ricorsi in Cassazione'
    ],
    category: 'Privati'
  },
  {
    id: 'successioni',
    title: 'Successioni e Testamenti',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Pianificazione successoria e tutela patrimoni',
    description: 'Assistenza in successioni ereditarie, redazione testamenti e pianificazione patrimoniale.',
    features: [
      'Successioni ereditarie',
      'Redazione testamenti',
      'Donazioni e liberalità',
      'Pianificazione patrimoniale'
    ],
    category: 'Privati'
  },
  {
    id: 'amministrativo',
    title: 'Diritto Amministrativo',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Rapporti con la Pubblica Amministrazione',
    description: 'Assistenza nei rapporti con enti pubblici, ricorsi amministrativi e autorizzazioni.',
    features: [
      'Ricorsi amministrativi',
      'Autorizzazioni e licenze',
      'Appalti pubblici',
      'Contenzioso amministrativo'
    ],
    category: 'Aziende'
  },
  {
    id: 'societario',
    title: 'Diritto Societario',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Costituzione e gestione società',
    description: 'Costituzione società, modifiche statutarie, governance aziendale e compliance.',
    features: [
      'Costituzione società',
      'Modifiche statutarie',
      'Governance aziendale',
      'Compliance e privacy'
    ],
    category: 'Aziende'
  },
  {
    id: 'bancario',
    title: 'Diritto Bancario',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Controversie bancarie e finanziarie',
    description: 'Assistenza in controversie con istituti bancari, anatocismo e usura.',
    features: [
      'Controversie bancarie',
      'Anatocismo e usura',
      'Mutui e finanziamenti',
      'Revocatorie bancarie'
    ],
    category: 'Privati'
  }
];

/**
 * Categorie dei servizi per filtri
 */
export const serviceCategories = ['Tutti', 'Privati', 'Aziende', 'Lavoratori'];

/**
 * Servizi principali per homepage (top 6)
 */
export const mainServices = legalServices.slice(0, 6);
