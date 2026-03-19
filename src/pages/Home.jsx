import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import CampusSection from "../components/CampusSection";

const colors = {
  midnight: "#001B36",
  premiumGold: "#B38B45",
  softGold: "rgba(179, 139, 69, 0.1)",
  white: "#FFFFFF",
  slate: "#64748b",
  offWhite: "#F8FAFC",
  border: "rgba(0, 27, 54, 0.08)"
};

function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <Hero />

      {/* --- FLOATING STATS --- */}
      <div style={styles.statsOverlap}>
        <div style={styles.statsGrid}>
          <div style={styles.statBox}>
            <span style={styles.statNum}>13+</span>
            <span style={styles.statLabel}>Years Excellence</span>
          </div>
          <div style={styles.statDivider} />
          <div style={styles.statBox}>
            <span style={styles.statNum}>IIT/NEET</span>
            <span style={styles.statLabel}>Foundation Focus</span>
          </div>
          <div style={styles.statDivider} />
          <div style={styles.statBox}>
            <span style={styles.statNum}>CBSE</span>
            <span style={styles.statLabel}>Curriculum</span>
          </div>
        </div>
      </div>

      {/* --- CHAIRMAN MESSAGE: Moved to top below Hero/Stats --- */}
      <section style={styles.topSection}>
        <div style={styles.container}>
          <div style={styles.signatureCard}>
            <div style={styles.quoteMark}>“</div>
            <p style={styles.quoteBody}>
              Every child discovers their potential and blossoms into a confident, 
              purposeful individual. Together, let's nurture tomorrow's leaders[cite: 60].
            </p>
            <div style={styles.chairmanMeta}>
              <div style={styles.signatureName}>Dr. T. Rama Krishna Reddy [cite: 64]</div>
              <div style={styles.signatureRole}>Chairman | M.Sc, M.Ed., Ph.D [cite: 64, 65]</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section style={styles.standardSection}>
        <div style={styles.container}>
          <div style={{ ...styles.splitGrid, ...(isMobile ? styles.flexColumn : {}) }}>
            <div style={styles.visualSide}>
              <div style={styles.mainFrame}>
                <div style={styles.imagePlaceholder}>RKS MODERN CAMPUS</div>
                <div style={styles.floatingTag}>Est. 2011 [cite: 34]</div>
              </div>
              <div style={styles.accentSquare} />
            </div>

            <div style={styles.contentSide}>
              <span style={styles.preTitle}>WELCOME TO RKS NEXT GEN [cite: 1, 3]</span>
              <h2 style={styles.h2}>Shaping Global <span style={styles.goldText}>Citizens</span> [cite: 32]</h2>
              <p style={styles.p}>
                Under the guidance of <strong>RK Group of Educational Institutions [cite: 11]</strong>, we provide 
                a learning environment that nurtures academic discipline, life skills, 
                and strong character[cite: 12, 31].
              </p>
              <ul style={styles.featureList}>
                <li>✓ Concept-Based Learning [cite: 14]</li>
                <li>✓ Activity & Project Oriented [cite: 15]</li>
                <li>✓ English Communication Focus [cite: 16]</li>
              </ul>
              <button style={styles.luxuryBtn} onClick={() => navigate("/about")}>
                Explore Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACADEMICS --- */}
      <section style={styles.darkSection}>
        <div style={styles.container}>
          <div style={styles.centeredHeader}>
            <h2 style={styles.h2Light}>Academic <span style={{color: colors.premiumGold}}>Pathways</span> [cite: 50]</h2>
            <p style={styles.pLight}>Modern teaching methodologies for young, curious minds[cite: 26, 48].</p>
          </div>
          <div style={styles.cardGrid}>
            {[
              { i: "🌱", t: "Play School", d: "A nurturing start with activity-based exploration[cite: 15, 24]." },
              { i: "📐", t: "Primary (I-V)", d: "Building a strong foundation in Math & Science[cite: 17]." },
              { i: "🚀", t: "Secondary (VI-X)", d: "Specialized IIT-JEE & NEET foundation programs[cite: 6, 75]." }
            ].map((item, idx) => (
              <div key={idx} style={styles.glassCard}>
                <div style={styles.cardIcon}>{item.i}</div>
                <h3 style={styles.cardTitle}>{item.t}</h3>
                <p style={styles.cardDesc}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={styles.campusWrapper}>
        <CampusSection />
      </div>

      {/* --- ADMISSIONS CTA --- */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaBanner}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaH2}>Admissions Open for 2026-27 [cite: 23, 24]</h2>
            <p style={styles.ctaP}>Play School to Grade X | Day & Residential Campus [cite: 22, 24]</p>
          </div>
          <button style={styles.ctaBtn} onClick={() => navigate("/contact")}>
            Apply for Enrollment
          </button>
        </div>
      </section>
    </div>
  );
}

const styles = {
  pageWrapper: { background: colors.white, overflowX: "hidden" },
  container: { maxWidth: "1200px", margin: "0 auto", padding: "0 40px" },

  // Stats Overlap
  statsOverlap: { 
    marginTop: "-50px", 
    position: "relative", 
    zIndex: 10,
    padding: "0 20px"
  },
  statsGrid: {
    background: colors.white,
    display: "flex",
    justifyContent: "space-between",
    padding: "25px 30px",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    margin: "0 auto",
  },
  statBox: { textAlign: "center", flex: 1 },
  statNum: { display: "block", fontSize: "28px", fontWeight: "800", color: colors.midnight },
  statLabel: { fontSize: "12px", color: colors.slate, textTransform: "uppercase", letterSpacing: "1px" },
  statDivider: { width: "1px", background: colors.border },

  // Tightened Sections
  topSection: { padding: "60px 0 40px" }, // Reduced padding to pull content up
  standardSection: { padding: "60px 0" },
  darkSection: { padding: "80px 0", background: colors.midnight },
  campusWrapper: { padding: "20px 0" },

  // Split Grid (About)
  splitGrid: { display: "flex", gap: "60px", alignItems: "center" },
  visualSide: { flex: 1, position: "relative" },
  mainFrame: { 
    height: "400px", 
    background: "#e2e8f0", 
    borderRadius: "20px", 
    position: "relative", 
    zIndex: 2,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#94a3b8"
  },
  accentSquare: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: colors.softGold,
    top: "20px",
    left: "-20px",
    borderRadius: "20px",
    zIndex: 1
  },
  floatingTag: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    background: colors.premiumGold,
    color: colors.white,
    padding: "8px 16px",
    borderRadius: "50px",
    fontSize: "13px",
    fontWeight: "600"
  },

  contentSide: { flex: 1.2 },
  preTitle: { color: colors.premiumGold, letterSpacing: "3px", fontSize: "11px", fontWeight: "700", marginBottom: "12px", display: "block" },
  h2: { fontSize: "38px", color: colors.midnight, fontWeight: "800", lineHeight: "1.2", margin: "0 0 20px" },
  goldText: { color: colors.premiumGold },
  p: { fontSize: "17px", color: colors.slate, lineHeight: "1.7", marginBottom: "20px" },
  featureList: { listStyle: "none", padding: 0, marginBottom: "30px", color: colors.midnight, fontWeight: "600" },
  luxuryBtn: {
    padding: "16px 36px",
    background: colors.midnight,
    color: colors.white,
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  // Academics
  centeredHeader: { textAlign: "center", marginBottom: "50px" },
  h2Light: { fontSize: "32px", color: colors.white, fontWeight: "800" },
  pLight: { color: "rgba(255,255,255,0.6)", fontSize: "17px" },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" },
  glassCard: {
    background: "rgba(255,255,255,0.03)",
    padding: "40px 35px",
    borderRadius: "15px",
    border: "1px solid rgba(255,255,255,0.1)",
    textAlign: "left"
  },
  cardIcon: { fontSize: "36px", marginBottom: "18px" },
  cardTitle: { color: colors.white, fontSize: "20px", marginBottom: "12px" },
  cardDesc: { color: "rgba(255,255,255,0.5)", lineHeight: "1.5", fontSize: "15px" },

  // Chairman Card (Signature Style)
  signatureCard: {
    background: colors.offWhite,
    padding: "60px 40px",
    borderRadius: "30px",
    textAlign: "center",
    position: "relative",
    maxWidth: "1000px",
    margin: "0 auto"
  },
  quoteMark: { fontSize: "100px", color: colors.softGold, position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", lineHeight: 1 },
  quoteBody: { fontSize: "22px", color: colors.midnight, fontStyle: "italic", lineHeight: "1.6", position: "relative", zIndex: 2, marginBottom: "30px" },
  signatureName: { fontSize: "19px", fontWeight: "800", color: colors.midnight },
  signatureRole: { color: colors.premiumGold, fontSize: "13px", fontWeight: "600", textTransform: "uppercase" },

  // CTA
  ctaSection: { padding: "40px 40px 80px" },
  ctaBanner: {
    background: `linear-gradient(135deg, ${colors.midnight} 0%, #003366 100%)`,
    padding: "50px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "25px"
  },
  ctaH2: { color: colors.white, fontSize: "28px", margin: "0 0 8px" },
  ctaP: { color: "rgba(255,255,255,0.7)", fontSize: "17px", margin: 0 },
  ctaBtn: {
    padding: "18px 45px",
    background: colors.premiumGold,
    color: colors.midnight,
    fontWeight: "800",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    textTransform: "uppercase"
  }
};

export default Home;