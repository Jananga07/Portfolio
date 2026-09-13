import { motion } from "framer-motion";
import { GitFork, Link, Mail } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "2rem 1.5rem",
      background: "#0a0e18",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1rem",
      }}>
        <p style={{
          fontFamily: "'Fira Code', monospace", fontWeight: 700, fontSize: "0.9rem",
          background: "linear-gradient(135deg, #818cf8, #38bdf8)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          &lt;JC /&gt;
        </p>

        <p style={{ color: "#475569", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Jananga Chandima Wanniarachchi · Built with React
        </p>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          {[
            { icon: <GitFork size={16} />, href: personal.github },
            { icon: <Link size={16} />,    href: personal.linkedin },
            { icon: <Mail size={16} />,    href: `mailto:${personal.email}` },
          ].map((s, i) => (
            <motion.a key={i} href={s.href}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              style={{ color: "#475569", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#818cf8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
