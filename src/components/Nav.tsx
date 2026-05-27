"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#prizes", label: "Prizes" },
  { href: "#schedule", label: "Schedule" },
  { href: "#format", label: "Format" },
  { href: "#venue", label: "Venue" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.2s, border-color 0.2s",
        background: scrolled ? "rgba(15, 13, 11, 0.92)" : "transparent",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 700,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.3px",
          }}
        >
          ✦ Reliquary Cards
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 4, marginRight: 8 }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="https://cubecobra.com/cube/list/mokecube"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cube-link"
          >
            Cube List ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
