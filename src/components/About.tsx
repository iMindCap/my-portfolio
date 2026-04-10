const stack = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker", "Git", "Python"];

export default function About() {
  return (
    <section id="sobre-mi" style={{ padding: "120px 24px", maxWidth: 860, margin: "0 auto" }}>
      <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 12, padding: "48px" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.12em", color: "#444", textTransform: "uppercase", marginBottom: 32 }}>sobre mí</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <p style={{ color: "#666", lineHeight: 1.85, marginBottom: 16 }}>
              Desarrollador con experiencia construyendo aplicaciones web escalables. Me especializo en el ecosistema JavaScript y disfruto convertir ideas en productos reales.
            </p>
            <p style={{ color: "#666", lineHeight: 1.85 }}>
              Cuando no programo, contribuyo a proyectos open source y aprendo sobre DevOps.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.1em", color: "#333", textTransform: "uppercase", marginBottom: 16 }}>stack</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {stack.map(t => (
                <span key={t} style={{ fontSize: 12, color: "#555", border: "1px solid #222", borderRadius: 4, padding: "4px 10px" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}