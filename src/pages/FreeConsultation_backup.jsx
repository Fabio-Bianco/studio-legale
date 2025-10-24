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
    const phonePattern = /^[\+]?[0-9\s\-\(\)]{8,15}$/;
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
    setIsSubmitting(true);
    
    // Validate form
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      
      // Announce errors to screen readers
      const errorCount = Object.keys(formErrors).length;
      const announcement = `Trovati ${errorCount} errori nel modulo. Si prega di correggere i campi evidenziati.`;
      
      // Create temporary announcement for screen readers
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'assertive');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.textContent = announcement;
      document.body.appendChild(announcer);
      
      setTimeout(() => {
        document.body.removeChild(announcer);
      }, 1000);
      
      return;
    }

    // Clear errors
    setErrors({});
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success handling
      setSubmitStatus('success');
      console.log('Form submitted successfully:', formData);
      
      // Reset form
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

          {/* Error Summary - WCAG AAA */}
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
              Tutti i campi contrassegnati con <span style={{ color: '#d63384' }}>*</span> sono obbligatori.
            </p>

            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              noValidate
              className="consultation-form"
            >
              
              {/* Nome e Cognome */}
              <div>
                <label 
                  htmlFor="name"
                  style={{ 
                    display: 'block', 
                    marginBottom: 'var(--space-2)',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    fontSize: 'var(--fs-body)'
                  }}
                >
                  Nome e Cognome <span style={{ color: '#d63384' }} aria-label="campo obbligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-describedby={errors.name ? "name-error" : "name-help"}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  style={{
                    width: '100%',
                    padding: 'var(--space-3)',
                    border: errors.name ? '2px solid #dc3545' : 'var(--border-1)',
                    borderRadius: '8px',
                    fontSize: 'var(--fs-body)',
                    fontFamily: 'var(--font-sans)',
                    backgroundColor: errors.name ? '#fff5f5' : 'var(--color-surface)'
                  }}
                  placeholder="Es: Mario Rossi"
                  autoComplete="name"
                />
                <div id="name-help" style={{ 
                  fontSize: 'var(--fs-small)', 
                  color: 'var(--color-muted)', 
                  marginTop: 'var(--space-1)' 
                }}>
                  Inserisci il tuo nome completo
                </div>
                {errors.name && (
                  <div 
                    id="name-error" 
                    role="alert"
                    style={{ 
                      color: '#dc3545', 
                      fontSize: 'var(--fs-small)', 
                      marginTop: 'var(--space-1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-1)'
                    }}
                  >
                    <span aria-hidden="true">⚠️</span>
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email e Telefono */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: 'var(--space-4)' 
              }}>
                {/* Email */}
                <div>
                  <label 
                    htmlFor="email"
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--space-2)',
                      fontWeight: '600',
                      color: 'var(--color-text)',
                      fontSize: 'var(--fs-body)'
                    }}
                  >
                    Email <span style={{ color: '#d63384' }} aria-label="campo obbligatorio">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-describedby={errors.email ? "email-error" : "email-help"}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    style={{
                      width: '100%',
                      padding: 'var(--space-3)',
                      border: errors.email ? '2px solid #dc3545' : 'var(--border-1)',
                      borderRadius: '8px',
                      fontSize: 'var(--fs-body)',
                      fontFamily: 'var(--font-sans)',
                      backgroundColor: errors.email ? '#fff5f5' : 'var(--color-surface)'
                    }}
                    placeholder="mario.rossi@email.com"
                    autoComplete="email"
                  />
                  <div id="email-help" style={{ 
                    fontSize: 'var(--fs-small)', 
                    color: 'var(--color-muted)', 
                    marginTop: 'var(--space-1)' 
                  }}>
                    Riceverai conferma via email
                  </div>
                  {errors.email && (
                    <div 
                      id="email-error" 
                      role="alert"
                      style={{ 
                        color: '#dc3545', 
                        fontSize: 'var(--fs-small)', 
                        marginTop: 'var(--space-1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-1)'
                      }}
                    >
                      <span aria-hidden="true">⚠️</span>
                      {errors.email}
                    </div>
                  )}
                </div>
                
                {/* Telefono */}
                <div>
                  <label 
                    htmlFor="phone"
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--space-2)',
                      fontWeight: '600',
                      color: 'var(--color-text)',
                      fontSize: 'var(--fs-body)'
                    }}
                  >
                    Telefono <span style={{ color: '#d63384' }} aria-label="campo obbligatorio">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-describedby={errors.phone ? "phone-error" : "phone-help"}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    style={{
                      width: '100%',
                      padding: 'var(--space-3)',
                      border: errors.phone ? '2px solid #dc3545' : 'var(--border-1)',
                      borderRadius: '8px',
                      fontSize: 'var(--fs-body)',
                      fontFamily: 'var(--font-sans)',
                      backgroundColor: errors.phone ? '#fff5f5' : 'var(--color-surface)'
                    }}
                    placeholder="+39 123 456 7890"
                    autoComplete="tel"
                  />
                  <div id="phone-help" style={{ 
                    fontSize: 'var(--fs-small)', 
                    color: 'var(--color-muted)', 
                    marginTop: 'var(--space-1)' 
                  }}>
                    Ti chiameremo su questo numero
                  </div>
                  {errors.phone && (
                    <div 
                      id="phone-error" 
                      role="alert"
                      style={{ 
                        color: '#dc3545', 
                        fontSize: 'var(--fs-small)', 
                        marginTop: 'var(--space-1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-1)'
                      }}
                    >
                      <span aria-hidden="true">⚠️</span>
                      {errors.phone}
                    </div>
                  )}
                </div>
              </div>

              {/* Area Legale e Urgenza */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: 'var(--space-4)' 
              }}>
                {/* Area Legale */}
                <div>
                  <label 
                    htmlFor="legalArea"
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--space-2)',
                      fontWeight: '600',
                      color: 'var(--color-text)',
                      fontSize: 'var(--fs-body)'
                    }}
                  >
                    Area Legale di Interesse
                  </label>
                  <select
                    id="legalArea"
                    name="legalArea"
                    value={formData.legalArea}
                    onChange={handleInputChange}
                    aria-describedby="legal-area-help"
                    style={{
                      width: '100%',
                      padding: 'var(--space-3)',
                      border: 'var(--border-1)',
                      borderRadius: '8px',
                      fontSize: 'var(--fs-body)',
                      fontFamily: 'var(--font-sans)',
                      backgroundColor: 'var(--color-surface)'
                    }}
                  >
                    <option value="">Seleziona un'area...</option>
                    <option value="famiglia">Diritto di Famiglia</option>
                    <option value="civile">Diritto Civile</option>
                    <option value="impresa">Diritto d'Impresa</option>
                    <option value="recupero-crediti">Recupero Crediti</option>
                    <option value="contratti">Contratti</option>
                    <option value="immobiliare">Diritto Immobiliare</option>
                    <option value="altro">Altro</option>
                  </select>
                  <div id="legal-area-help" style={{ 
                    fontSize: 'var(--fs-small)', 
                    color: 'var(--color-muted)', 
                    marginTop: 'var(--space-1)' 
                  }}>
                    Aiutaci a indirizzarti all'esperto giusto
                  </div>
                </div>

                {/* Urgenza */}
                <div>
                  <label 
                    htmlFor="urgency"
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--space-2)',
                      fontWeight: '600',
                      color: 'var(--color-text)',
                      fontSize: 'var(--fs-body)'
                    }}
                  >
                    Livello di Urgenza
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    aria-describedby="urgency-help"
                    style={{
                      width: '100%',
                      padding: 'var(--space-3)',
                      border: 'var(--border-1)',
                      borderRadius: '8px',
                      fontSize: 'var(--fs-body)',
                      fontFamily: 'var(--font-sans)',
                      backgroundColor: 'var(--color-surface)'
                    }}
                  >
                    <option value="">Seleziona urgenza...</option>
                    <option value="bassa">Non urgente (entro una settimana)</option>
                    <option value="media">Moderata (entro 2-3 giorni)</option>
                    <option value="alta">Urgente (entro 24 ore)</option>
                    <option value="critica">Molto urgente (oggi stesso)</option>
                  </select>
                  <div id="urgency-help" style={{ 
                    fontSize: 'var(--fs-small)', 
                    color: 'var(--color-muted)', 
                    marginTop: 'var(--space-1)' 
                  }}>
                    Ci aiuta a prioritizzare la tua richiesta
                  </div>
                </div>
              </div>

              {/* Preferenza di Contatto */}
              <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                <legend style={{
                  fontWeight: '600',
                  color: 'var(--color-text)',
                  fontSize: 'var(--fs-body)',
                  marginBottom: 'var(--space-3)'
                }}>
                  Preferenza di Contatto
                </legend>
                
                <div style={{ 
                  display: 'flex', 
                  gap: 'var(--space-4)', 
                  flexWrap: 'wrap' 
                }}>
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 'var(--space-2)',
                    cursor: 'pointer',
                    fontSize: 'var(--fs-body)'
                  }}>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      style={{ 
                        width: '18px', 
                        height: '18px',
                        accentColor: 'var(--color-accent)'
                      }}
                    />
                    <span>📞 Chiamata telefonica</span>
                  </label>
                  
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 'var(--space-2)',
                    cursor: 'pointer',
                    fontSize: 'var(--fs-body)'
                  }}>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      style={{ 
                        width: '18px', 
                        height: '18px',
                        accentColor: 'var(--color-accent)'
                      }}
                    />
                    <span>📧 Email dettagliata</span>
                  </label>
                  
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 'var(--space-2)',
                    cursor: 'pointer',
                    fontSize: 'var(--fs-body)'
                  }}>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="both"
                      checked={formData.preferredContact === 'both'}
                      onChange={handleInputChange}
                      style={{ 
                        width: '18px', 
                        height: '18px',
                        accentColor: 'var(--color-accent)'
                      }}
                    />
                    <span>📞📧 Entrambi</span>
                  </label>
                </div>
              </fieldset>

              {/* Descrizione Situazione */}
              <div>
                <label 
                  htmlFor="message"
                  style={{ 
                    display: 'block', 
                    marginBottom: 'var(--space-2)',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    fontSize: 'var(--fs-body)'
                  }}
                >
                  Descrivi la Tua Situazione <span style={{ color: '#d63384' }} aria-label="campo obbligatorio">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-describedby={errors.message ? "message-error" : "message-help"}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  style={{
                    width: '100%',
                    padding: 'var(--space-3)',
                    border: errors.message ? '2px solid #dc3545' : 'var(--border-1)',
                    borderRadius: '8px',
                    fontSize: 'var(--fs-body)',
                    fontFamily: 'var(--font-sans)',
                    resize: 'vertical',
                    minHeight: '150px',
                    backgroundColor: errors.message ? '#fff5f5' : 'var(--color-surface)'
                  }}
                  placeholder="Descrivi dettagliatamente la tua situazione legale. Includi:&#10;• Cosa è successo e quando&#10;• Quali documenti hai a disposizione&#10;• Qual è il risultato che vorresti ottenere&#10;• Eventuali scadenze o urgenze&#10;&#10;Più dettagli fornisci, più precisa sarà la nostra consulenza."
                />
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginTop: 'var(--space-1)'
                }}>
                  <div id="message-help" style={{ 
                    fontSize: 'var(--fs-small)', 
                    color: 'var(--color-muted)'
                  }}>
                    Più dettagli fornisci, più accurata sarà la consulenza
                  </div>
                  <div style={{ 
                    fontSize: 'var(--fs-small)', 
                    color: formData.message.length < 20 ? '#d63384' : 'var(--color-muted)'
                  }}>
                    {formData.message.length} caratteri (min. 20)
                  </div>
                </div>
                {errors.message && (
                  <div 
                    id="message-error" 
                    role="alert"
                    style={{ 
                      color: '#dc3545', 
                      fontSize: 'var(--fs-small)', 
                      marginTop: 'var(--space-1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-1)'
                    }}
                  >
                    <span aria-hidden="true">⚠️</span>
                    {errors.message}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? '#6c757d' : 'var(--color-accent)',
                  color: 'white',
                  padding: 'var(--space-4) var(--space-6)',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: 'var(--fs-body)',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  marginTop: 'var(--space-3)',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-sans)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-2)',
                  minHeight: '56px'
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = 'var(--color-accent-hover)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = 'var(--color-accent)';
                  }
                }}
                onFocus={(e) => {
                  e.target.style.outline = '2px solid var(--color-accent)';
                  e.target.style.outlineOffset = '2px';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                }}
              >
                {isSubmitting ? (
                  <>
                    <span aria-hidden="true">⏳</span>
                    Invio in corso...
                  </>
                ) : (
                  <>
                    <span aria-hidden="true">📋</span>
                    Richiedi Consulenza Gratuita
                  </>
                )}
              </button>

              {/* Privacy and Trust Section */}
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: 'var(--space-4)',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                marginTop: 'var(--space-3)'
              }}>
                <h3 style={{
                  fontSize: 'var(--fs-h3)',
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  <span aria-hidden="true">🔒</span>
                  La Tua Privacy è Protetta
                </h3>
                <ul style={{ 
                  margin: 0, 
                  paddingLeft: 'var(--space-4)',
                  color: 'var(--color-text)',
                  lineHeight: '1.6'
                }}>
                  <li>I tuoi dati sono protetti e crittografati</li>
                  <li>Utilizziamo le informazioni solo per contattarti</li>
                  <li>Non condividiamo i dati con terze parti</li>
                  <li>Puoi richiedere la cancellazione in qualsiasi momento</li>
                  <li>Consulenza completamente gratuita e senza impegno</li>
                </ul>
                
                <p style={{
                  fontSize: 'var(--fs-small)',
                  color: 'var(--color-muted)',
                  marginTop: 'var(--space-3)',
                  marginBottom: 0
                }}>
                  Inviando questo modulo accetti la nostra{' '}
                  <a href="/privacy" style={{ color: 'var(--color-accent)' }}>
                    Privacy Policy
                  </a>
                  {' '}e i{' '}
                  <a href="/terms" style={{ color: 'var(--color-accent)' }}>
                    Termini di Servizio
                  </a>
                  .
                </p>
              </div>

            </form>
          </div>
        </div>
      </section>

      {/* Additional Trust Section */}
      <section 
        style={{ 
          padding: 'var(--section-y) 0',
          backgroundColor: 'var(--color-page)'
        }}
        aria-labelledby="trust-title"
      >
        <div style={{ 
          maxWidth: 'var(--container-inline)', 
          margin: '0 auto', 
          padding: '0 var(--space-4)',
          textAlign: 'center'
        }}>
          <h2 
            id="trust-title"
            style={{
              fontSize: 'var(--fs-h2)',
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-5)',
              fontFamily: 'var(--font-display)'
            }}
          >
            Perché Scegliere la Nostra Consulenza Gratuita
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-5)'
          }}>
            <div style={{ padding: 'var(--space-4)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-3)' }} aria-hidden="true">🎯</div>
              <h3 style={{ 
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-2)',
                fontSize: 'var(--fs-h3)'
              }}>
                Consulenza Mirata
              </h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
                Analizziamo la tua situazione specifica e ti forniamo 
                consigli legali personalizzati e actionable.
              </p>
            </div>
            
            <div style={{ padding: 'var(--space-4)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-3)' }} aria-hidden="true">👨‍⚖️</div>
              <h3 style={{ 
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-2)',
                fontSize: 'var(--fs-h3)'
              }}>
                Avvocati Esperti
              </h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
                15+ anni di esperienza in diritto civile, famiglia e contratti. 
                Competenza verificata e risultati documentati.
              </p>
            </div>
            
            <div style={{ padding: 'var(--space-4)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-3)' }} aria-hidden="true">🤝</div>
              <h3 style={{ 
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-2)',
                fontSize: 'var(--fs-h3)'
              }}>
                Approccio Umano
              </h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
                Non siamo solo consulenti legali, ma partner che comprendono 
                le tue preoccupazioni e ti guidano passo dopo passo.
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}