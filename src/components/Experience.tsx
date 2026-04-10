"use client";

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Secretaría de Educación del Estado de Querétaro",
    period: "2023 — 2025",
    description: "Configuración de servidores en un VPS para el despliegue en producción, utilizando Docker. Implementación de pipelines de integración y entrega continua (CI/CD) para automatizar pruebas, builds y despliegues. Integración y administración de bases de datos para el almacenamiento y consulta eficiente de información.Aplicación de patrones de diseño para garantizar escalabilidad y mantenimiento",
  
}
];

export default function Experience() {
  return (
    <section id="experiencia" style={{ padding: "0 24px 120px", maxWidth: 860, margin: "0 auto" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.12em", color: "#444", textTransform: "uppercase", marginBottom: 40 }}>experiencia</p>
      <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 12, overflow: "hidden" }}>
        {experience.map((e, i) => (
          <div key={e.company} style={{
            padding: "32px 40px",
            borderBottom: i < experience.length - 1 ? "1px solid #1a1a1a" : "none",
            display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, alignItems: "start",
          }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: "#ccc", marginBottom: 4 }}>{e.role}</p>
              <p style={{ fontSize: 12, color: "#444", marginBottom: 2 }}>{e.company}</p>
              <p style={{ fontSize: 11, color: "#333", letterSpacing: "0.05em" }}>{e.period}</p>
            </div>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.75 }}>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}