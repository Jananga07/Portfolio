import { motion } from "framer-motion";
import { GitFork, Link, Mail, MapPin, Phone } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", position: "relative", overflow: "hidden",
      padding: "80px 1.5rem 0",
      background: "linear-gradient(160deg, #0d1117 0%, #111827 50%, #0f172a 100%)",
    }}>

      {/* ── Background ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {/* Glowing orbs */}
        <div style={{
          position: "absolute", top: "-10%", right: "-5%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(56,189,248,0.06) 50%, transparent 70%)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute", bottom: "-5%", left: "-8%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        {/* Floating blobs */}
        <FloatingBlob style={{ top: "15%", left: "8%", width: 60, height: 60, background: "rgba(99,102,241,0.1)" }} delay={0} />
        <FloatingBlob style={{ top: "60%", left: "5%", width: 40, height: 40, background: "rgba(56,189,248,0.1)" }} delay={1.5} />
        <FloatingBlob style={{ top: "25%", right: "12%", width: 80, height: 80, background: "rgba(244,63,94,0.07)" }} delay={0.8} />
        <FloatingBlob style={{ top: "70%", right: "8%", width: 50, height: 50, background: "rgba(99,102,241,0.08)" }} delay={2} />
      </div>

      {/* ── Two-column layout ── */}
      <div className="hero-inner">

        {/* Left: text */}
        <div className="hero-text">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: 100, padding: "0.4rem 1.2rem",
              fontSize: "0.8rem", color: "#a5b4fc", marginBottom: "1.5rem",
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "#22c55e",
              display: "inline-block", boxShadow: "0 0 8px #22c55e",
              animation: "blink 2s infinite",
            }} />
            Available for Internship
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 900,
              lineHeight: 1.1, marginBottom: "0.75rem", letterSpacing: "-0.03em",
              color: "#f1f5f9",
            }}
          >
            {"Hi, I'm "}
            <span style={{
              background: "linear-gradient(135deg, #818cf8, #38bdf8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Jananga
            </span>
          </motion.h1>

          {/* Full name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: "0.92rem", color: "#64748b", marginBottom: "0.75rem", fontWeight: 500 }}
          >
            Jananga Chandima Wanniarachchi
          </motion.p>

          {/* Accent underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            style={{
              height: 3, borderRadius: 2, marginBottom: "1.25rem",
              background: "linear-gradient(90deg, #6366f1, #38bdf8)",
              transformOrigin: "left", maxWidth: 180,
            }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", color: "#94a3b8", marginBottom: "0.75rem", fontWeight: 500 }}
          >
            Full Stack Developer · QA Engineer · Business Analyst
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              display: "flex", alignItems: "center", gap: "0.4rem",
              color: "#475569", fontSize: "0.875rem", marginBottom: "2rem",
            }}
          >
            <MapPin size={14} color="#6366f1" />
            {personal.location}
          </motion.p>

          {/* Tech pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", marginBottom: "2rem" }}
          >
            {["React", "Node.js", "MongoDB", "Express", "Java"].map((tech, i) => (
              <motion.span key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 + i * 0.07 }}
                style={{
                  padding: "0.28rem 0.75rem", borderRadius: 8, fontSize: "0.78rem",
                  fontWeight: 600, background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8",
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}
          >
            <motion.a href="#projects"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.85rem 2rem",
                background: "linear-gradient(135deg, #6366f1, #38bdf8)",
                color: "#fff", borderRadius: 12, textDecoration: "none",
                fontWeight: 700, fontSize: "0.9rem",
                boxShadow: "0 4px 24px rgba(99,102,241,0.4)",
                display: "inline-block",
              }}
            >
              View Projects
            </motion.a>
            <motion.a href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.85rem 2rem",
                background: "rgba(255,255,255,0.05)", color: "#e2e8f0",
                borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: "0.9rem",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "inline-block",
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            style={{ display: "flex", gap: "0.65rem" }}
          >
            {[
              { icon: <GitFork size={18} />, href: personal.github, label: "GitHub" },
              { icon: <Link size={18} />, href: personal.linkedin, label: "LinkedIn" },
              { icon: <Mail size={18} />, href: `mailto:${personal.email}`, label: "Email" },
              { icon: <Phone size={18} />, href: `tel:${personal.phone}`, label: "Phone" },
            ].map((s) => <SocialBtn key={s.label} {...s} />)}
          </motion.div>
        </div>

        {/* Right: profile image */}
        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          {/* Spinning gradient ring */}
          <div style={{
            position: "absolute", inset: -12, borderRadius: "50%",
            background: "conic-gradient(from 0deg, #6366f1, #38bdf8, #f43f5e, #6366f1)",
            animation: "spinRing 6s linear infinite",
            zIndex: 0,
          }} />
          {/* Dark gap */}
          <div style={{
            position: "absolute", inset: -4, borderRadius: "50%",
            background: "#0d1117", zIndex: 1,
          }} />
          {/* Photo */}
          <img
            src="/profile.jpg"
            alt="Jananga Chandima Wanniarachchi"
            style={{
              position: "relative", zIndex: 2,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "top center",
              borderRadius: "50%", display: "block",
            }}
          />
          {/* Online dot */}
          <div style={{
            position: "absolute", bottom: 14, right: 14, zIndex: 3,
            width: 20, height: 20, borderRadius: "50%",
            background: "#22c55e", border: "3px solid #0d1117",
            boxShadow: "0 0 12px rgba(34,197,94,0.6)",
            animation: "blink 2s infinite",
          }} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
          color: "#475569", fontSize: "0.7rem", letterSpacing: "0.12em",
        }}
      >
        <span>SCROLL</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, #6366f1, transparent)" }} />
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes spinRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .hero-inner {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 4rem;
          align-items: center;
          max-width: 1100px;
          width: 100%;
          padding-bottom: 4rem;
        }
        .hero-text { text-align: left; }
        .hero-image-wrap {
          position: relative;
          width: 300px; height: 300px;
          border-radius: 50%; flex-shrink: 0;
          justify-self: center;
        }
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr !important;
            text-align: center; gap: 2.5rem; justify-items: center;
          }
          .hero-text { text-align: center; order: 2; }
          .hero-image-wrap { width: 220px !important; height: 220px !important; order: 1; }
        }
        @media (max-width: 480px) {
          .hero-image-wrap { width: 180px !important; height: 180px !important; }
        }
      `}</style>
    </section>
  );
}

function FloatingBlob({ style, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 7 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ position: "absolute", borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%", ...style }}
    />
  );
}

function SocialBtn({ icon, href, label }) {
  return (
    <motion.a href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.12, y: -2 }}
      title={label}
      style={{
        width: 44, height: 44, borderRadius: 12,
        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#64748b", textDecoration: "none", transition: "color 0.2s, border-color 0.2s",
      }}
      onMouseEnter={e => { e.currentTarget.style.color = "#818cf8"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; }}
      onMouseLeave={e => { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
    >
      {icon}
    </motion.a>
  );
}
