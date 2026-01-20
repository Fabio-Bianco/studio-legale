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
    urgency: ''
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
    if (Object.keys(errors).length > 0 && errorSummaryRef.current) {
      errorSummaryRef.current.focus();
    }
  }, [errors]);

  useEffect(() => {
    if (submitStatus === 'success' && successMessageRef.current) {
      successMessageRef.current.focus();
    }
  }, [submitStatus]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Il nome deve contenere almeno 2 caratteri';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }

    const phonePattern = /^[+]?[0-9\s\-()]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Il numero di telefono è obbligatorio';
    } else if (!phonePattern.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Inserisci un numero di telefono valido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'La descrizione è obbligatoria';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Descrivi la situazione con almeno 20 caratteri';
    }

    return newErrors;
  };

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        legalArea: '',
        message: '',
        urgency: ''
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
      
      {/* Hero Section - Clean & Professional */}
      <section className="consultation-hero" aria-labelledby="hero-title">
        <div className="consultation-hero-container">
          <div className="consultation-hero-content">
            
            <div className="consultation-urgency-badge">
              Risposta garantita entro 24 ore
            </div>

            <h1 id="hero-title" className="consultation-hero-title">
              Consulenza Legale Gratuita
            </h1>
            
            <p className="consultation-hero-description">
              Parla direttamente con un avvocato esperto. Descrivi la tua situazione 
              e ricevi una consulenza telefonica professionale, completamente gratuita.
            </p>

            <div className="consultation-hero-benefits">
              <div className="consultation-benefit">
                <span className="consultation-benefit-icon">⚡</span>
                <span>Risposta entro 24h</span>
              </div>
              <div className="consultation-benefit">
                <span className="consultation-benefit-icon">💯</span>
                <span>100% Gratuita</span>
              </div>
              <div className="consultation-benefit">
                <span className="consultation-benefit-icon">🛡️</span>
                <span>Senza impegno</span>
              </div>
            </div>

            <div className="consultation-social-proof">
              <div className="consultation-rating">
                <div className="consultation-stars">★★★★★</div>
                <span>4.9/5 · Oltre 500 consulenze gratuite</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="consultation-form-section" aria-labelledby="form-title">
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

          {/* Error Summary */}
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
            
            <div className="consultation-form-header">
              <h2 id="form-title" className="consultation-form-title">
                Richiedi la Tua Consulenza Gratuita
              </h2>
              
              <p className="consultation-form-subtitle">
                Compila i campi essenziali e ti contatteremo entro 24 ore per la consulenza gratuita. 
                <span className="consultation-time-estimate">⏱️ Richiede solo 2 minuti</span>
              </p>
            </div>

            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              noValidate
              className="consultation-form"
            >

              {/* Nome */}
              <div className="consultation-form-group">
                <label 
                  htmlFor="name"
                  className={`consultation-form-label required ${errors.name ? 'error' : ''}`}
                >
                  Il tuo nome
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
                  placeholder="Mario Rossi"
                  maxLength="100"
                  autoComplete="name"
                />
                <div id="name-help" className="consultation-form-help">
                  Come preferisci essere chiamato durante la consulenza
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

              {/* Email e Telefono */}
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
                    placeholder="mario.rossi@email.com"
                    maxLength="100"
                    autoComplete="email"
                  />
                  <div id="email-help" className="consultation-form-help">
                    Per confermarti la consulenza
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

                <div className="consultation-form-group consultation-primary-field">
                  <label 
                    htmlFor="phone"
                    className={`consultation-form-label required ${errors.phone ? 'error' : ''}`}
                  >
                    📱 Numero di telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-describedby={`phone-help ${errors.phone ? 'phone-error' : ''}`}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    className={`consultation-form-input consultation-primary-input ${errors.phone ? 'consultation-form-error' : ''}`}
                    placeholder="123 456 7890"
                    maxLength="20"
                    autoComplete="tel"
                  />
                  <div id="phone-help" className="consultation-form-help consultation-primary-help">
                    <strong>Ti chiamiamo noi</strong> - Inserisci il numero dove essere contattato
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

              {/* Area Legale e Urgenza */}
              <div className="consultation-form-row">
                <div className="consultation-form-group">
                  <label htmlFor="legalArea" className="consultation-form-label">
                    Area di interesse
                  </label>
                  <select
                    id="legalArea"
                    name="legalArea"
                    value={formData.legalArea}
                    onChange={handleInputChange}
                    className="consultation-form-select"
                    aria-describedby="legalArea-help"
                  >
                    <option value="">Seleziona (opzionale)</option>
                    <option value="famiglia">Famiglia</option>
                    <option value="contratti">Contratti</option>
                    <option value="crediti">Recupero Crediti</option>
                    <option value="impresa">Impresa</option>
                    <option value="immobiliare">Immobiliare</option>
                    <option value="lavoro">Lavoro</option>
                    <option value="penale">Penale</option>
                    <option value="altro">Altro</option>
                  </select>
                  <div id="legalArea-help" className="consultation-form-help">
                    Ci aiuta a indirizzarti al giusto esperto
                  </div>
                </div>

                <div className="consultation-form-group">
                  <label htmlFor="urgency" className="consultation-form-label">
                    Urgenza
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="consultation-form-select"
                    aria-describedby="urgency-help"
                  >
                    <option value="">Seleziona</option>
                    <option value="bassa">📅 Posso attendere</option>
                    <option value="media">⏰ Entro 1-2 giorni</option>
                    <option value="alta">🔥 Entro oggi</option>
                    <option value="critica">🚨 Urgentissimo</option>
                  </select>
                  <div id="urgency-help" className="consultation-form-help">
                    Per prioritizzare la richiesta
                  </div>
                </div>
              </div>

              {/* Messaggio */}
              <div className="consultation-form-group consultation-message-field">
                <label 
                  htmlFor="message"
                  className={`consultation-form-label required ${errors.message ? 'error' : ''}`}
                >
                  📝 Descrivi la tua situazione
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-describedby={`message-help ${errors.message ? 'message-error' : ''}`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  className={`consultation-form-textarea ${errors.message ? 'consultation-form-error' : ''}`}
                  placeholder="Esempio: Ho un problema con il mio datore di lavoro che non mi paga gli straordinari da 3 mesi. Cosa posso fare?"
                  maxLength="2000"
                  rows="5"
                />
                <div id="message-help" className="consultation-form-help">
                  <div className="consultation-help-tips">
                    <strong>💡 Suggerimenti:</strong> Includi date, importi, documenti che hai. 
                    Più dettagli = consigli più precisi.
                    <span className="consultation-character-count">({formData.message.length}/2000 caratteri)</span>
                  </div>
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

              {/* Privacy */}
              <div className="consultation-form-checkbox-group">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="consultation-form-checkbox"
                  aria-describedby="privacy-help"
                />
                <label htmlFor="privacy" className="consultation-form-checkbox-label">
                  Accetto la <a href="/privacy" target="_blank">Privacy Policy</a> 
                  e autorizzo il contatto per la consulenza gratuita.
                </label>
              </div>

              {/* Submit Button */}
              <div className="consultation-cta-section">
                <button
                  type="submit"
                  className="consultation-form-submit"
                  disabled={isSubmitting}
                  aria-describedby="submit-help"
                >
                  {isSubmitting ? (
                    <>
                      <span className="consultation-submit-icon">⏳</span>
                      <span className="consultation-submit-text">Invio in corso...</span>
                    </>
                  ) : (
                    <>
                      <span className="consultation-submit-icon">📞</span>
                      <span className="consultation-submit-text">Richiedi Consulenza Gratuita</span>
                      <span className="consultation-submit-time">Ti chiamiamo entro 24h</span>
                    </>
                  )}
                </button>
                
                <div id="submit-help" className="consultation-form-help consultation-form-submit-help">
                  <div className="consultation-submit-benefits">
                    <div className="consultation-submit-benefit">
                      <span>🔒</span> Dati protetti
                    </div>
                    <div className="consultation-submit-benefit">
                      <span>💯</span> Completamente gratuita
                    </div>
                    <div className="consultation-submit-benefit">
                      <span>❌</span> Nessun impegno
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>

          {/* FAQ Section */}
          <div className="consultation-faq">
            <h3 className="consultation-faq-title">Domande Frequenti</h3>
            <div className="consultation-faq-grid">
              <div className="consultation-faq-item">
                <div className="consultation-faq-question">
                  <span className="consultation-faq-icon">❓</span>
                  È davvero gratuita?
                </div>
                <div className="consultation-faq-answer">
                  Sì, completamente gratuita. Nessun costo nascosto e nessun obbligo.
                </div>
              </div>

              <div className="consultation-faq-item">
                <div className="consultation-faq-question">
                  <span className="consultation-faq-icon">⏰</span>
                  Quanto dura?
                </div>
                <div className="consultation-faq-answer">
                  15-20 minuti, tempo sufficiente per una prima valutazione professionale.
                </div>
              </div>

              <div className="consultation-faq-item">
                <div className="consultation-faq-question">
                  <span className="consultation-faq-icon">🛡️</span>
                  I dati sono sicuri?
                </div>
                <div className="consultation-faq-answer">
                  Protetti secondo GDPR e coperti dal segreto professionale.
                </div>
              </div>

              <div className="consultation-faq-item">
                <div className="consultation-faq-question">
                  <span className="consultation-faq-icon">📞</span>
                  Dopo la chiamata?
                </div>
                <div className="consultation-faq-answer">
                  Valutazione della situazione e preventivo trasparente se necessario.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      
    </Layout>
  );
}