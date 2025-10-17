// Icons.js
import React from "react";

/** Icona Home */
export const HomeIcon = ({ className = "", ...rest }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    <path d="M3 9.75L12 3l9 6.75" />
    <path d="M4.5 10.5v9a1.5 1.5 0 001.5 1.5h4.5V14h3v7.5h4.5a1.5 1.5 0 001.5-1.5v-9" />
  </svg>
);

/** Icona Utenti / Chi siamo */
export const UsersIcon = ({ className = "", ...rest }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    <circle cx="8" cy="8" r="2.5" />
    <circle cx="16" cy="8" r="2.5" />
    <path d="M4 18c0-2.5 1.5-4 4-4" />
    <path d="M20 18c0-2.5-1.5-4-4-4" />
    <path d="M4 18h16" />
  </svg>
);

/** Icona Bilancia / Aree */
export const ScaleIcon = ({ className = "", ...rest }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    <line x1="12" y1="4" x2="12" y2="19" />
    <line x1="6" y1="7" x2="18" y2="7" />
    <path d="M5 7l-2.5 6h5z" />
    <path d="M21 7l-2.5 6h5z" />
  </svg>
);

/** Icona Blog / Documento */
export const BlogIcon = ({ className = "", ...rest }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
    <line x1="7" y1="9" x2="17" y2="9" />
    <line x1="7" y1="13" x2="17" y2="13" />
    <line x1="7" y1="17" x2="17" y2="17" />
  </svg>
);

/** Icona Mail / Contatti */
export const MailIcon = ({ className = "", ...rest }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
    <polyline points="3,5 12,13 21,5" />
  </svg>
);

/** Icona Telefono (utile per sezioni future) */
export const PhoneIcon = ({ className = "", ...rest }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    <path d="M4.5 3.5h15a1 1 0 011 1v15a1 1 0 01-1 1h-15a1 1 0 01-1-1v-15a1 1 0 011-1z" />
    <path d="M9 1h6v2H9z" />
    <path d="M9 21h6v2H9z" />
  </svg>
);
