"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
      background: scrolled ? "rgba(0,0,0,0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>Arael Amador</span>
        <ul style={{ display: "flex", gap: 32, listStyle: "none" }}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}
                style={{ fontSize: 13, color: "#666", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#666")}
              >{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}