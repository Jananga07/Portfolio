import { motion } from "framer-motion";
import { GitFork } from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionLabel } from "./About";

// remap project colors to dark-friendly palette
const darkColors = { "#6c63ff": "#818cf8", "#00d4ff": "#38bdf8", "#ff6b6b": "#fb7185" };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, delay },
});

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 1.5rem", background: "#0d1117" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div {...fadeUp()} style={{ marginBottom: "3rem" }}>
          <SectionLabel>Projects</SectionLabel>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#f1f5f9", marginTop: "0.6rem" }}>
            Things I've Built
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p, i) => {
            const col = darkColors[p.color] || p.color;
            return (
              <motion.div key={p.title} {...fadeUp(i * 0.12)}
                whileHover={{ y: -6, boxShadow: `0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px ${col}30` }}
                style={{
                  background: "#161b27", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "20px", padding: "1.75rem",
                  display: "flex", flexDirection: "column", gap: "1rem",
                  position: "relative", overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: `linear-gradient(90deg, ${col}, ${col}44)`,
                }} />

                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    fontSize: "0.72rem", fontWeight: 700, color: col,
                    background: col + "18", padding: "0.25rem 0.65rem",
                    borderRadius: "6px", letterSpacing: "0.05em", textTransform: "uppercase",
                  }}>
                    {p.stack}
                  </span>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#475569", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = col)}
                    onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
                  >
                    <GitFork size={18} />
                  </a>
                </div>

                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.3 }}>{p.title}</h3>

                <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.75 }}>{p.description}</p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ fontSize: "0.82rem", color: "#475569", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <span style={{ color: col, fontWeight: 700, flexShrink: 0 }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: "0.75rem", fontFamily: "'Fira Code', monospace",
                      color: "#475569", background: "rgba(255,255,255,0.04)",
                      padding: "0.2rem 0.55rem", borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
