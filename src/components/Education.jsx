import { motion } from "framer-motion";
import { education, achievements } from "../data/portfolio";
import { SectionLabel } from "./About";

export default function Education() {
  return (
    <section id="education" style={{ padding: "7rem 1.5rem", background: "#0a0e18" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <SectionLabel>Education & Achievements</SectionLabel>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#f1f5f9", marginTop: "0.6rem" }}>
            My Background
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="edu-grid">

          {/* ── Education Timeline ── */}
          <div>
            <p style={{
              fontFamily: "'Fira Code', monospace", fontSize: "0.78rem", fontWeight: 700,
              color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: "1.75rem", background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.2)", display: "inline-block",
              padding: "0.25rem 0.75rem", borderRadius: "6px",
            }}>
              Education
            </p>

            <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
              {/* Timeline line */}
              <div style={{
                position: "absolute", left: "5px", top: "8px", bottom: "8px", width: "2px",
                background: "linear-gradient(to bottom, #6366f1, #38bdf8, rgba(255,255,255,0.05))",
                borderRadius: "2px",
              }} />

              {education.map((item, i) => (
                <motion.div key={item.degree}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  style={{ position: "relative", marginBottom: i < education.length - 1 ? "1.75rem" : 0 }}
                >
                  {/* Dot */}
                  <div style={{
                    position: "absolute", left: "-1.75rem", top: "1rem",
                    width: 12, height: 12, borderRadius: "50%",
                    background: item.status === "current" ? "#6366f1" : "#161b27",
                    border: `2px solid ${item.status === "current" ? "#6366f1" : "rgba(255,255,255,0.15)"}`,
                    boxShadow: item.status === "current" ? "0 0 0 4px rgba(99,102,241,0.2)" : "none",
                  }} />

                  <div style={{
                    background: "#161b27", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "16px", padding: "1.25rem 1.5rem",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
                    borderLeft: item.status === "current" ? "3px solid #6366f1" : "3px solid transparent",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
                      <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#e2e8f0" }}>{item.degree}</p>
                      {item.period && (
                        <span style={{
                          fontSize: "0.75rem", color: "#818cf8",
                          background: "rgba(99,102,241,0.12)", padding: "0.2rem 0.65rem",
                          borderRadius: "6px", whiteSpace: "nowrap", fontWeight: 600,
                          border: "1px solid rgba(99,102,241,0.2)",
                        }}>
                          {item.period}
                        </span>
                      )}
                    </div>
                    <p style={{ color: "#64748b", fontSize: "0.85rem" }}>{item.institution}</p>
                    {item.status === "current" && (
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.6rem" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }} />
                        <span style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: 600 }}>Currently Enrolled</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Achievements ── */}
          <div>
            <p style={{
              fontFamily: "'Fira Code', monospace", fontSize: "0.78rem", fontWeight: 700,
              color: "#38bdf8", letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: "1.75rem", background: "rgba(56,189,248,0.1)",
              border: "1px solid rgba(56,189,248,0.2)", display: "inline-block",
              padding: "0.25rem 0.75rem", borderRadius: "6px",
            }}>
              Achievements
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {achievements.map((a, i) => (
                <motion.div key={a.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: "1rem",
                    background: "#161b27", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "16px", padding: "1.5rem",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
                    transition: "transform 0.2s",
                  }}
                >
                  <div style={{
                    fontSize: "1.75rem", width: 52, height: 52, borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(56,189,248,0.15))",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    {a.icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: "0.4rem" }}>{a.title}</p>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.7 }}>{a.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(56,189,248,0.07))",
                  border: "1px solid rgba(99,102,241,0.2)", borderRadius: "16px",
                  padding: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem",
                }}
              >
                {[
                  { value: "3+", label: "Projects Built" },
                  { value: "2×", label: "Pull Shark" },
                  { value: "MERN", label: "Primary Stack" },
                  { value: "2023", label: "Started SLIIT" },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: "center" }}>
                    <p style={{
                      fontSize: "1.7rem", fontWeight: 900,
                      background: "linear-gradient(135deg, #818cf8, #38bdf8)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    }}>
                      {stat.value}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "#64748b", marginTop: "0.2rem", fontWeight: 500 }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      <style>{`@media (max-width: 768px) { .edu-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
