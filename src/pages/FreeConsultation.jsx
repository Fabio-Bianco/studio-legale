// src/pages/FreeConsultation.jsx
import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import '../styles/FreeConsultation.css';

export default function FreeConsultation() {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    legalArea: '',
    message: '',
    urgency: '',
    preferredContact: 'phone'
  });

  // Form validation and accessibility
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' | 'error' | ''
  
  // Accessibility refs
  const formRef = useRef(null);
  const errorSummaryRef = useRef(null);
  const successMessageRef = useRef(null);

  // Focus management for accessibility
  useEffect(() => {
    // Focus error summary when errors appear
    if (Object.keys(errors).length > 0 && errorSummaryRef.current) {
      errorSummaryRef.current.focus();
    }
  }, [errors]);

  useEffect(() => {
    // Focus success message when form is submitted successfully
    if (submitStatus === 'success' && successMessageRef.current) {
      successMessageRef.current.focus();
    }
  }, [submitStatus]);

  // Form validation with accessibility
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Il nome deve contenere almeno 2 caratteri';
    }

    // Email validation (enhanced pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida (esempio: nome@dominio.it)';
    }

    // Phone validation (Italian format)
    const phonePattern = /^[+]?[0-9\s\-()]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Il numero di telefono è obbligatorio';
    } else if (!phonePattern.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Inserisci un numero di telefono valido';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'La descrizione della situazione è obbligatoria';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Descrivi la tua situazione con almeno 20 caratteri per ricevere assistenza adeguata';
    }

    return newErrors;
  };

  // Enhanced input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Real-time validation feedback
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Enhanced form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Announce errors to screen readers
      const errorCount = Object.keys(newErrors).length;
      const announcement = `Trovati ${errorCount} errori nel modulo. Controlla i campi evidenziati e riprova.`;
      
      // Create temporary live region for announcement
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'assertive');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.textContent = announcement;
      document.body.appendChild(liveRegion);
      
      // Remove after announcement
      setTimeout(() => {
        document.body.removeChild(liveRegion);
      }, 1000);
      
      return;
    }

    // Clear any previous errors
    setErrors({});
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success handling
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        legalArea: '',
        message: '',
        urgency: '',
        preferredContact: 'phone'
      });
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout className="consultation-page" showScrollProgress={false}>
      
      {/* Hero Section - Optimized for Conversion */}
      <section 
        className="consultation-hero"
        aria-labelledby="hero-title"
      >
        <div className="consultation-hero-container">
          <h1 
            id="hero-title"
            className="consultation-hero-title"
          >
            Consulenza Legale Gratuita
          </h1>
          
          <p className="consultation-hero-description">
            <strong>Descrivi la tua situazione</strong> e ricevi assistenza legale professionale entro 24 ore. 
            Consulenza telefonica completamente gratuita e senza impegno.
          </p>
          
          {/* Trust Indicators - Enhanced */}
          <div className="consultation-trust-grid">
            <div className="consultation-trust-item">
              <span className="consultation-trust-icon" aria-hidden="true">⚡</span>
              <div className="consultation-trust-title">Risposta Rapida</div>
              <div className="consultation-trust-subtitle">Entro 24 ore lavorative</div>
            </div>
            
            <div className="consultation-trust-item">
              <span className="consultation-trust-icon" aria-hidden="true">📞</span>
              <div className="consultation-trust-title">Consulenza Telefonica</div>
              <div className="consultation-trust-subtitle">Chiamata diretta con avvocato</div>
            </div>
            
            <div className="consultation-trust-item">
              <span className="consultation-trust-icon" aria-hidden="true">✅</span>
              <div className="consultation-trust-title">Totalmente Gratuita</div>
              <div className="consultation-trust-subtitle">Nessun costo o impegno</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - WCAG AAA Compliant */}
      <section 
        className="consultation-form-section"
        aria-labelledby="form-title"
      >
        <div className="consultation-form-container">
          
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div 
              ref={successMessageRef}
              role="status"
              aria-live="polite"
              tabIndex="-1"
              className="consultation-form-success-message"
            >
              <div className="consultation-form-success-title">
                ✅ Richiesta Inviata con Successo!
              </div>
              <p className="consultation-form-success-text">
                Ti contatteremo entro 24 ore lavorative al numero fornito. 
                Controlla anche la tua email per la conferma.
              </p>
            </div>
          )}

          {/* Error Summary for Screen Readers */}
          {Object.keys(errors).length > 0 && (
            <div 
              ref={errorSummaryRef}
              role="alert"
              aria-labelledby="error-summary-title"
              tabIndex="-1"
              className="consultation-form-error-summary"
            >
              <div id="error-summary-title" className="consultation-form-error-summary-title">
                <span aria-hidden="true">⚠️</span>
                Errori nel modulo ({Object.keys(errors).length})
              </div>
              <ul className="consultation-form-error-list">
                {Object.entries(errors).map(([field, message]) => (
                  <li key={field}>
                    <a 
                      href={`#${field}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(field)?.focus();
                      }}
                    >
                      {message}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="consultation-form-wrapper">
            <h2 
              id="form-title"
              className="consultation-form-title"
            >
              Descrivi la Tua Situazione Legale
            </h2>
            
            <p className="consultation-form-subtitle">
              Compila il modulo e riceverai una chiamata da uno dei nostri esperti. 
              Tutti i campi contrassegnati con * sono obbligatori.
            </p>

            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              noValidate
              className="consultation-form"
            >
              
              {/* Nome e Cognome */}
              <div className="consultation-form-group">
                <label 
                  htmlFor="name"
                  className={`consultation-form-label required ${errors.name ? 'error' : ''}`}
                >
                  Nome e Cognome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-describedby={`name-help ${errors.name ? 'name-error' : ''}`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  className={`consultation-form-input ${errors.name ? 'consultation-form-error' : ''}`}
                  placeholder="Inserisci il tuo nome completo"
                  maxLength="100"
                />
                <div id="name-help" className="consultation-form-help">
                  Inserisci nome e cognome per identificarti durante la consulenza
                </div>
                {errors.name && (
                  <div 
                    id="name-error" 
                    className="consultation-form-error-message"
                    role="alert"
                    aria-live="polite"
                  >
                    <span aria-hidden="true">⚠️</span>
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email e Telefono - Row */}
              <div className="consultation-form-row">
                <div className="consultation-form-group">
                  <label 
                    htmlFor="email"
                    className={`consultation-form-label required ${errors.email ? 'error' : ''}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-describedby={`email-help ${errors.email ? 'email-error' : ''}`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    className={`consultation-form-input ${errors.email ? 'consultation-form-error' : ''}`}
                    placeholder="nome@email.com"
                    maxLength="100"
                  />
                  <div id="email-help" className="consultation-form-help">
                    Ti invieremo una conferma della richiesta
                  </div>
                  {errors.email && (
                    <div 
                      id="email-error" 
                      className="consultation-form-error-message"
                      role="alert"
                      aria-live="polite"
                    >
                      <span aria-hidden="true">⚠️</span>
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="consultation-form-group">
                  <label 
                    htmlFor="phone"
                    className={`consultation-form-label required ${errors.phone ? 'error' : ''}`}
                  >
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-describedby={`phone-help ${errors.phone ? 'phone-error' : ''}`}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    className={`consultation-form-input ${errors.phone ? 'consultation-form-error' : ''}`}
                    placeholder="+39 123 456 7890"
                    maxLength="20"
                  />
                  <div id="phone-help" className="consultation-form-help">
                    Ti chiameremo per la consulenza gratuita
                  </div>
                  {errors.phone && (
                    <div 
                      id="phone-error" 
                      className="consultation-form-error-message"
                      role="alert"
                      aria-live="polite"
                    >
                      <span aria-hidden="true">⚠️</span>
                      {errors.phone}
                    </div>
                  )}
                </div>
              </div>

              {/* Area Legale e Urgenza - Row */}
              <div className="consultation-form-row">
                <div className="consultation-form-group">
                  <label htmlFor="legalArea" className="consultation-form-label">
                    Area Legale di Interesse
                  </label>
                  <select
                    id="legalArea"
                    name="legalArea"
                    value={formData.legalArea}
                    onChange={handleInputChange}
                    className="consultation-form-select"
                    aria-describedby="legalArea-help"
                  >
                    <option value="">Seleziona un'area (opzionale)</option>
                    <option value="famiglia">Diritto di Famiglia</option>
                    <option value="contratti">Diritto Contrattuale</option>
                    <option value="crediti">Recupero Crediti</option>
                    <option value="impresa">Diritto d'Impresa</option>
                    <option value="immobiliare">Diritto Immobiliare</option>
                    <option value="lavoro">Diritto del Lavoro</option>
                    <option value="penale">Diritto Penale</option>
                    <option value="altro">Altro</option>
                  </select>
                  <div id="legalArea-help" className="consultation-form-help">
                    Aiutaci a indirizzarti verso l'esperto più adatto
                  </div>
                </div>

                <div className="consultation-form-group">
                  <label htmlFor="urgency" className="consultation-form-label">
                    Livello di Urgenza
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="consultation-form-select"
                    aria-describedby="urgency-help"
                  >
                    <option value="">Seleziona urgenza</option>
                    <option value="bassa">Bassa - Posso attendere qualche giorno</option>
                    <option value="media">Media - Entro 24-48 ore</option>
                    <option value="alta">Alta - Entro oggi se possibile</option>
                    <option value="critica">Critica - Urgentissimo</option>
                  </select>
                  <div id="urgency-help" className="consultation-form-help">
                    Ci aiuta a prioritizzare la tua richiesta
                  </div>
                </div>
              </div>

              {/* Messaggio */}
              <div className="consultation-form-group">
                <label 
                  htmlFor="message"
                  className={`consultation-form-label required ${errors.message ? 'error' : ''}`}
                >
                  Descrivi la Tua Situazione
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-describedby={`message-help ${errors.message ? 'message-error' : ''}`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  className={`consultation-form-textarea ${errors.message ? 'consultation-form-error' : ''}`}
                  placeholder="Descrivi dettagliatamente la tua situazione legale. Più informazioni fornisci, migliore sarà l'assistenza che potremo offrirti..."
                  maxLength="2000"
                  rows="6"
                />
                <div id="message-help" className="consultation-form-help">
                  Minimo 20 caratteri. Sii specifico per ricevere consigli mirati 
                  ({formData.message.length}/2000 caratteri)
                </div>
                {errors.message && (
                  <div 
                    id="message-error" 
                    className="consultation-form-error-message"
                    role="alert"
                    aria-live="polite"
                  >
                    <span aria-hidden="true">⚠️</span>
                    {errors.message}
                  </div>
                )}
              </div>

              {/* Modalità di Contatto Preferita */}
              <fieldset className="consultation-form-group">
                <legend className="consultation-form-label">
                  Modalità di Contatto Preferita
                </legend>
                <div className="consultation-form-radio-group">
                  <label className="consultation-form-radio-label">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="consultation-form-radio"
                    />
                    <span>📞 Chiamata telefonica (consigliata)</span>
                  </label>
                  <label className="consultation-form-radio-label">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="consultation-form-radio"
                    />
                    <span>📧 Prima risposta via email</span>
                  </label>
                </div>
              </fieldset>

              {/* Privacy e Consenso */}
              <div className="consultation-form-checkbox-group">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="consultation-form-checkbox"
                  aria-describedby="privacy-help"
                />
                <label htmlFor="privacy" className="consultation-form-checkbox-label">
                  Accetto il trattamento dei dati personali secondo la <a href="/privacy" target="_blank">Privacy Policy</a> 
                  e autorizzo il contatto per la consulenza legale gratuita richiesta.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="consultation-form-submit"
                disabled={isSubmitting}
                aria-describedby="submit-help"
              >
                {isSubmitting ? (
                  <>
                    <span aria-hidden="true">⏳</span>
                    Invio in corso...
                  </>
                ) : (
                  <>
                    📋 Invia Richiesta di Consulenza
                  </>
                )}
              </button>
              
              <div id="submit-help" className="consultation-form-help consultation-form-submit-help">
                🔒 I tuoi dati sono protetti e non verranno condivisi con terzi
              </div>

            </form>
          </div>
        </div>
      </section>
      
    </Layout>
  );
}