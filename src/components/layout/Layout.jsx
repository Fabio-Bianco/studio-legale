// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from '../desktop/ScrollProgress';

export default function Layout({ 
  children, 
  className = '', 
  showScrollProgress = true 
}) {
  return (
    <div className={`app-layout ${className}`}>
      {/* Componenti Desktop Premium */}
      {showScrollProgress && <ScrollProgress />}
      
      {/* Struttura Base */}
      <Header />
      
      <main className="page-content">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}