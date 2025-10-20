// src/components/layout/Icons.jsx
import React from "react";

const cx = (...c) => c.filter(Boolean).join(" ");

export const ScaleIcon = ({ className = "", ...rest }) => (
  <svg
    className={cx("icon", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    <path d="M12 3v18M5 7h14" />
    <path d="M7.5 7 4 14a4 4 0 0 0 8 0l-3.5-7" />
    <path d="M16.5 7 13 14a4 4 0 0 0 8 0l-3.5-7" />
  </svg>
);

export const BriefcaseIcon = ({ className = "", ...rest }) => (
  <svg
    className={cx("icon", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M2 13h20" />
  </svg>
);

export const FileTextIcon = ({ className = "", ...rest }) => (
  <svg
    className={cx("icon", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8M16 17H8M10 9H8" />
  </svg>
);

export const BuildingIcon = ({ className = "", ...rest }) => (
  <svg
    className={cx("icon", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    <path d="M3 21h18" />
    <path d="M4 21V7a2 2 0 0 1 2-2h6v16" />
    <path d="M20 21V10a2 2 0 0 0-2-2h-6" />
    <path d="M8 11h2M8 15h2M14 11h2M14 15h2" />
  </svg>
);
