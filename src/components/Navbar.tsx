"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(13,17,23,0.95)" : "transparent",
      borderBottom: scrolled ? "1px solid #30363d" : "1px solid transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#e6edf3", letterSpacing: "-0.3px" }}>
          Portafolio<span style={{ color: "#388bfd" }}>.dev</span>
        </span>
        <ul style={{ display: "flex", gap: 4, listStyle: "none" }}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontSize: 13, color: "#8b949e", textDecoration: "none",
                padding: "6px 12px", borderRadius: 6, display: "block", transition: "color 0.15s, background 0.15s"
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#e6edf3"; e.currentTarget.style.background = "#161b22"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#8b949e"; e.currentTarget.style.background = "transparent"; }}
              >{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}