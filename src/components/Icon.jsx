import React from "react";

export default function Icon({ name, className = "", size = 24 }) {
  const icons = {
    sparkles: <path d="M12 2l1.7 5.1L19 9l-5.3 1.9L12 16l-1.7-5.1L5 9l5.3-1.9L12 2zm7 11l.9 2.6L23 17l-3.1 1.4L19 21l-.9-2.6L15 17l3.1-1.4L19 13zM5 13l.9 2.6L9 17l-3.1 1.4L5 21l-.9-2.6L1 17l3.1-1.4L5 13z" />,
    arrow: <path d="M5 12h14m-6-6l6 6-6 6" />,
    check: <path d="M9 12l2 2 4-5m6 3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    brain: <path d="M9 3a3 3 0 00-3 3v1a3 3 0 00-2 5.24V13a4 4 0 004 4h1m6-14a3 3 0 013 3v1a3 3 0 012 5.24V13a4 4 0 01-4 4h-1M9 17v2a2 2 0 004 0v-7m2 5v2a2 2 0 01-4 0" />,
    heart: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />,
    building: <path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16M3 21h18M8 7h4M8 11h4M8 15h4M16 9h2a2 2 0 012 2v10" />,
    child: <path d="M12 7a3 3 0 100-6 3 3 0 000 6zm-5 15v-7a5 5 0 0110 0v7M8 13l-4 2m12-2l4 2" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-10l2 2 4-4" />,
    award: <path d="M12 15a6 6 0 100-12 6 6 0 000 12zm-3 0l-1 7 4-2 4 2-1-7" />,
    phone: <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2.1z" />,
    mail: <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm18 4l-10 6L2 8" />,
    linkedin: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />,
    calendar: <path d="M7 2v4m10-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />,
    whatsapp: <path d="M20 11.5a8 8 0 01-11.9 7L4 20l1.4-4.2A8 8 0 1112 20m-3.1-10.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3-.1.5.3.6.8 1.2 1.3 1.6.7.6 1.3.8 1.5.9.2.1.4 0 .5-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.3.4.5 0 .4-.3 1.2-.8 1.5-.5.4-1.4.5-2.4.2-1.3-.4-2.7-1.2-3.8-2.3-1.1-1.1-2-2.5-2.4-3.8-.3-.8-.2-1.4.1-1.8z" />
  };

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === "sparkles" ? "currentColor" : "none"}
      stroke={name === "sparkles" ? "none" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name] || icons.sparkles}
    </svg>
  );
}
