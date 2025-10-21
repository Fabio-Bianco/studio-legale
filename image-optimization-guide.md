# Guida Ottimizzazione Immagine Hero

## Problema Identificato
L'immagine `hero_figures_final.png` non si ridimensiona responsivamente con l'hero section.

## Soluzioni Raccomandate

### 1. Dimensioni Ottimali per Web
- **Desktop:** 1400x933px (ratio 3:2)
- **Tablet:** 1024x683px 
- **Mobile:** 768x512px

### 2. Formati Consigliati
- **WebP:** Migliore compressione (25-50% più piccolo)
- **PNG:** Compatibilità universale
- **JPG:** Se non serve trasparenza

### 3. Strumenti per Ottimizzazione
- **Online:** squoosh.app, tinypng.com
- **Software:** Photoshop, GIMP, Figma

### 4. Specifiche Tecniche
- **Risoluzione:** 72 DPI
- **Peso target:** < 500KB
- **Qualità:** 80-85% per JPG/WebP

### 5. Nome File Suggerito
- `hero_figures_optimized.webp`
- `hero_figures_optimized.png`

### 6. Test di Verifica
Dopo l'ottimizzazione, sostituire il file e testare:
- Responsive scaling su desktop
- Caricamento su tablet/mobile
- Qualità visiva mantenuta