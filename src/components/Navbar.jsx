import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 2rem", height: "64px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "rgba(13,17,23,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <motion.a href="#home" whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: "'Fira Code', monospace", fontSize: "1.1rem", fontWeight: 700,
            background: "linear-gradient(135deg, #6366f1, #38bdf8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            textDecoration: "none",
          }}
        >
          &lt;JC /&gt;
        </motion.a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "0.2rem" }} className="nav-desktop">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              style={{
                color: "#94a3b8", textDecoration: "none", fontSize: "0.875rem",
                fontWeight: 500, padding: "0.4rem 0.85rem", borderRadius: "8px",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.12)"; e.currentTarget.style.color = "#a5b4fc"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#94a3b8"; }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} className="nav-mobile-btn"
          style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", display: "none", padding: "0.25rem" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed", top: 0, right: 0, bottom: 0, width: "260px",
              background: "rgba(13,17,23,0.97)", backdropFilter: "blur(24px)",
              zIndex: 99, display: "flex", flexDirection: "column",
              justifyContent: "center", alignItems: "center", gap: "1.75rem",
              borderLeft: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "-8px 0 32px rgba(0,0,0,0.5)",
            }}
          >
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setOpen(false)}
                style={{ color: "#e2e8f0", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
