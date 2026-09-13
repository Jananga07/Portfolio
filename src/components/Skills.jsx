import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { SectionLabel } from "./About";

const categoryColors = {
  "Languages":        "#818cf8",
  "Web Development":  "#38bdf8",
  "Frameworks":       "#fb7185",
  "Databases":        "#fbbf24",
  "Tools & Platforms":"#34d399",
  "Core Concepts":    "#c084fc",
  "QA & BA":          "#f472b6",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, delay },
});

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "7rem 1.5rem", background: "#0a0e18" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div {...fadeUp()} style={{ marginBottom: "3rem" }}>
          <SectionLabel>Technical Skills</SectionLabel>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#f1f5f9", marginTop: "0.6rem" }}>
            What I Work With
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {skills.map((group, i) => {
            const color = categoryColors[group.category] || "#818cf8";
            return (
              <motion.div key={group.category} {...fadeUp(i * 0.07)}
                whileHover={{ scale: 1.02, borderColor: color + "44" }}
                style={{
                  background: "#161b27",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "18px", padding: "1.5rem",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
                  transition: "all 0.25s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
                  <div style={{ width: 6, height: 28, borderRadius: "3px", background: color, flexShrink: 0 }} />
                  <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#e2e8f0" }}>{group.category}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.items.map((skill) => (
                    <span key={skill} style={{
                      padding: "0.3rem 0.75rem", borderRadius: "8px",
                      fontSize: "0.8rem", fontWeight: 600,
                      background: color + "15", color: color,
                      border: `1px solid ${color}28`,
                    }}>
                      {skill}
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
