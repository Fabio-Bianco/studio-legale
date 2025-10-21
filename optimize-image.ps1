# Script PowerShell per ottimizzazione immagine
# Richiede ImageMagick installato

# Ridimensiona l'immagine mantenendo le proporzioni
magick "hero_figures_final.png" -resize 1200x800 -quality 85 "hero_figures_optimized.png"

# Converte a WebP per migliore compressione
magick "hero_figures_final.png" -resize 1200x800 -quality 85 "hero_figures_optimized.webp"

Write-Host "Immagini ottimizzate create:"
Write-Host "- hero_figures_optimized.png"
Write-Host "- hero_figures_optimized.webp"