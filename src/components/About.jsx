import { motion } from "framer-motion";
import { User, Code2, TestTube, BarChart3, MapPin, Mail, Phone } from "lucide-react";
import { summary, personal } from "../data/portfolio";

const cards = [
  { icon: <Code2 size={22} />, title: "Full Stack Development", desc: "MERN stack applications with clean architecture, RESTful APIs, and modern UI.", color: "#818cf8" },
  { icon: <TestTube size={22} />, title: "Quality Assurance", desc: "Manual testing, test case design, and functional testing concepts.", color: "#38bdf8" },
  { icon: <BarChart3 size={22} />, title: "Business Analysis", desc: "Requirements gathering, documentation, SDLC & Agile methodologies.", color: "#fb7185" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, delay },
});

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 1.5rem", background: "#0d1117" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <motion.div {...fadeUp()} style={{ marginBottom: "3rem" }}>
          <SectionLabel>About Me</SectionLabel>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#f1f5f9", marginTop: "0.6rem" }}>
            Who I Am
          </h2>
        </motion.div>

        {/* Photo + Summary row */}
        <div className="about-top" style={{ marginBottom: "2rem" }}>

          {/* Profile photo */}
          <motion.div {...fadeUp(0.1)} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 200, height: 200, flexShrink: 0 }}>
              <div style={{
                position: "absolute", inset: -3, borderRadius: "24px",
                background: "linear-gradient(135deg, #6366f1, #38bdf8)", zIndex: 0,
              }} />
              <img
                src="/profile.jpg"
                alt="Jananga Chandima"
                style={{
                  position: "relative", zIndex: 1,
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "top center",
                  borderRadius: "22px", display: "block",
                  border: "3px solid #0d1117",
                }}
              />
              <div style={{
                position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
                background: "#161b27", borderRadius: 20, padding: "0.3rem 0.85rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)",
                whiteSpace: "nowrap", zIndex: 2,
                display: "flex", alignItems: "center", gap: "0.35rem",
                fontSize: "0.75rem", fontWeight: 600, color: "#e2e8f0",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }} />
                Open to Work
              </div>
            </div>
          </motion.div>

          {/* Summary card */}
          <motion.div {...fadeUp(0.15)} style={{ flex: 1 }}>
            <div style={{
              background: "#161b27",
              border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "2rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)", height: "100%",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{
                  width: 42, height: 42, borderRadius: "12px",
                  background: "linear-gradient(135deg, #6366f1, #38bdf8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <User size={20} color="#fff" />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "1rem", color: "#f1f5f9" }}>Professional Summary</p>
                  <p style={{ fontSize: "0.78rem", color: "#64748b" }}>IT Undergraduate · SLIIT</p>
                </div>
              </div>
              <p style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: "0.92rem" }}>{summary}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                {[
                  { icon: <MapPin size={13} />, text: personal.location, color: "#fb7185" },
                  { icon: <Mail size={13} />, text: personal.email, color: "#818cf8" },
                  { icon: <Phone size={13} />, text: personal.phone, color: "#38bdf8" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.78rem", color: "#64748b" }}>
                    <span style={{ color: item.color }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Role cards */}
        <div className="about-cards">
          {cards.map((c, i) => (
            <motion.div key={c.title} {...fadeUp(0.1 + i * 0.1)}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              style={{
                display: "flex", alignItems: "flex-start", gap: "1rem",
                background: "#161b27", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px", padding: "1.25rem 1.5rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
                transition: "box-shadow 0.2s, transform 0.2s", cursor: "default",
                borderTop: `3px solid ${c.color}`,
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: "12px",
                background: c.color + "18", border: `1.5px solid ${c.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, color: c.color,
              }}>
                {c.icon}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: "0.3rem" }}>{c.title}</p>
                <p style={{ color: "#64748b", fontSize: "0.875rem" }}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .about-top { display: grid; grid-template-columns: 220px 1fr; gap: 2rem; align-items: start; }
        .about-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; margin-top: 2rem; }
        @media (max-width: 900px) {
          .about-top { grid-template-columns: 1fr !important; }
          .about-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ children }) {
  return (
    <span style={{
      display: "inline-block",
      fontFamily: "'Fira Code', monospace", fontSize: "0.78rem",
      color: "#818cf8", letterSpacing: "0.12em", textTransform: "uppercase",
      background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)",
      padding: "0.25rem 0.75rem", borderRadius: "6px", fontWeight: 600,
    }}>
      {children}
    </span>
  );
}
