// src/components/common/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll istantaneo all'inizio della pagina quando cambia la route
    window.scrollTo(0, 0);
    
    // Alternative con scroll fluido (commenta la riga sopra e decommenta sotto se preferisci)
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    
  }, [pathname]);

  return null; // Questo componente non renderizza nulla, serve solo per l'effetto
}