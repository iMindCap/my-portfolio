"use client";

export default function Contact() {
  return (
    <section id="contacto" style={{ padding: "0 24px 120px", maxWidth: 860, margin: "0 auto" }}>
      <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 12, padding: "64px 48px" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.12em", color: "#444", textTransform: "uppercase", marginBottom: 24 }}>contacto</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-1px", color: "#ddd", marginBottom: 16 }}>
          Hablemos.
        </h2>
        <p style={{ fontSize: 14, color: "#555", maxWidth: 400, lineHeight: 1.75, marginBottom: 40 }}>
          ¿Tienes un proyecto interesante o una oportunidad? Mi bandeja de entrada siempre está abierta.
        </p>
        <a href="mailto:tu@email.com"
          style={{ display: "inline-block", fontSize: 13, color: "#fff", textDecoration: "none", border: "1px solid #333", borderRadius: 6, padding: "10px 20px", marginBottom: 48, transition: "border-color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "#666")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "#333")}
        >arael.amadorlp@email.com</a>

        <div style={{ display: "flex", gap: 24, borderTop: "1px solid #1a1a1a", paddingTop: 32 }}>
          {[
            { label: "GitHub", href: "https://github.com/iMindCap" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/arael-amador/" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: "#444", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#444")}
            >{s.label} ↗</a>
          ))}
        </div>
      </div>
      <p style={{ marginTop: 48, fontSize: 11, color: "#2a2a2a", textAlign: "center" }}>
        © {new Date().getFullYear()} Arael Amador — Hecho con Next.js
      </p>
    </section>
  );
}