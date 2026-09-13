import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GitFork, Link, Send } from "lucide-react";
import { personal } from "../data/portfolio";
import { SectionLabel } from "./About";

const contactInfo = [
  { icon: <Mail size={18} />,   label: "Email",    value: personal.email,                      href: `mailto:${personal.email}`, color: "#818cf8" },
  { icon: <Phone size={18} />,  label: "Phone",    value: personal.phone,                      href: `tel:${personal.phone}`,    color: "#38bdf8" },
  { icon: <MapPin size={18} />, label: "Location", value: personal.location,                   href: null,                       color: "#fb7185" },
  { icon: <GitFork size={18} />,label: "GitHub",   value: "github.com/Jananga07",              href: personal.github,            color: "#34d399" },
  { icon: <Link size={18} />,   label: "LinkedIn", value: "linkedin.com/in/jananga-chandima",  href: personal.linkedin,          color: "#38bdf8" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, delay },
});

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "7rem 1.5rem", background: "#0d1117" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div {...fadeUp()} style={{ marginBottom: "3rem", textAlign: "center" }}>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#f1f5f9", marginTop: "0.6rem", marginBottom: "1rem" }}>
            Let's Work Together
          </h2>
          <p style={{ color: "#64748b", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8 }}>
            Actively looking for internship opportunities in Full Stack Development, QA, or Business Analysis. My inbox is always open.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="contact-grid">

          {/* Contact list */}
          <motion.div {...fadeUp(0.1)} style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {contactInfo.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  background: "#161b27", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px", padding: "0.9rem 1.25rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: "10px",
                  background: item.color + "18",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: item.color, flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: "0.72rem", color: "#475569", marginBottom: "0.1rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{ color: "#e2e8f0", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, wordBreak: "break-all", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = item.color)}
                      onMouseLeave={e => (e.currentTarget.style.color = "#e2e8f0")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#e2e8f0" }}>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA card */}
          <motion.div {...fadeUp(0.2)}
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(56,189,248,0.07))",
              border: "1px solid rgba(99,102,241,0.2)", borderRadius: "20px",
              padding: "2.5rem 2rem",
              display: "flex", flexDirection: "column",
              justifyContent: "center", alignItems: "center",
              textAlign: "center", gap: "1.25rem",
              boxShadow: "0 4px 32px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{
              width: 64, height: 64, borderRadius: "18px",
              background: "linear-gradient(135deg, #6366f1, #38bdf8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 8px 28px rgba(99,102,241,0.4)",
            }}>
              <Send size={26} color="#fff" />
            </div>
            <div>
              <p style={{ fontWeight: 800, fontSize: "1.15rem", color: "#f1f5f9", marginBottom: "0.5rem" }}>
                Open to Opportunities
              </p>
              <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.7 }}>
                Looking for internship roles in Full Stack Development, QA, or Business Analysis.
              </p>
            </div>
            <motion.a href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(99,102,241,0.5)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.85rem 2rem",
                background: "linear-gradient(135deg, #6366f1, #38bdf8)",
                color: "#fff", borderRadius: "12px", textDecoration: "none",
                fontWeight: 700, fontSize: "0.95rem",
                boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                display: "inline-block",
              }}
            >
              Send an Email
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
