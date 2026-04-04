import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import CampusSection from "../components/CampusSection";
import rks from "../assets/rks.png";

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

      {/* --- STATS --- */}
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

      {/* --- CHAIRMAN --- */}
      <section style={styles.topSection}>
        <div style={styles.container}>
          <div style={styles.signatureCard}>
            <div style={styles.quoteMark}>“</div>
            <p style={styles.quoteBody}>
              Every child discovers their potential and blossoms into a confident, 
              purposeful individual. Together, let's nurture tomorrow's leaders.
            </p>
            <div style={styles.chairmanMeta}>
              <div style={styles.signatureName}>Dr. T. Rama Krishna Reddy</div>
              <div style={styles.signatureRole}>Chairman | M.Sc, M.Ed., Ph.D</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION (THE ENHANCEMENT) --- */}
      <section style={styles.standardSection}>
        <div style={styles.container}>
          <div style={{ ...styles.splitGrid, ...(isMobile ? styles.flexColumn : {}) }}>
            
            {/* ROYAL IMAGE COMPOSITION */}
            <div style={styles.visualSide}>
              {/* Decorative Gold Brackets */}
              <div style={styles.goldBracketTop} />
              <div style={styles.goldBracketBottom} />
              
              <div style={styles.imageContainer}>
                <div style={{ 
                  ...styles.mainFrame, 
                  backgroundImage: `url(${rks})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  <div style={styles.floatingTag}>ESTD. 2011</div>
                </div>
              </div>

              {/* Floating "Excellence" Badge */}
              <div style={styles.royalBadge}>
                <div style={styles.badgeLine} />
                <span style={styles.badgeText}>PREMIUM EDUCATION</span>
              </div>
            </div>

            <div style={styles.contentSide}>
              <span style={styles.preTitle}>WELCOME TO RKS NEXT GEN</span>
              <h2 style={styles.h2}>Shaping Global <span style={styles.goldText}>Citizens</span></h2>
              <p style={styles.p}>
                Under the guidance of <strong>RK Group of Educational Institutions</strong>, we provide 
                a learning environment that nurtures academic discipline, life skills, 
                and strong character.
              </p>
              <ul style={styles.featureList}>
                <li><span style={{color: colors.premiumGold, marginRight: '10px'}}>✦</span> Concept-Based Learning</li>
                <li><span style={{color: colors.premiumGold, marginRight: '10px'}}>✦</span> Activity & Project Oriented</li>
                <li><span style={{color: colors.premiumGold, marginRight: '10px'}}>✦</span> English Communication Focus</li>
              </ul>
              <button style={styles.luxuryBtn} onClick={() => navigate("/about")}>
                Our Legacy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACADEMICS --- */}
      <section style={styles.darkSection}>
        <div style={styles.container}>
          <div style={styles.centeredHeader}>
            <h2 style={styles.h2Light}>Academic <span style={{color: colors.premiumGold}}>Pathways</span></h2>
            <p style={styles.pLight}>Modern teaching methodologies for young, curious minds.</p>
          </div>
          <div style={styles.cardGrid}>
            {[
              { i: "🌱", t: "Play School", d: "A nurturing start with activity-based exploration." },
              { i: "📐", t: "Primary (I-V)", d: "Building a strong foundation in Math & Science." },
              { i: "🚀", t: "Secondary (VI-X)", d: "Specialized IIT-JEE & NEET foundation programs." }
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

      <section style={styles.ctaSection}>
        <div style={styles.ctaBanner}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaH2}>Admissions Open for 2026-27</h2>
            <p style={styles.ctaP}>Play School to Grade X | Day & Residential Campus</p>
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
  container: { maxWidth: "1150px", margin: "0 auto", padding: "0 20px" },

  // Stats
  statsOverlap: { marginTop: "-45px", position: "relative", zIndex: 10 },
  statsGrid: {
    background: colors.white, display: "flex", justifyContent: "space-between",
    padding: "20px 30px", borderRadius: "12px", boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    maxWidth: "850px", margin: "0 auto", border: `1px solid ${colors.border}`
  },
  statBox: { textAlign: "center", flex: 1 },
  statNum: { display: "block", fontSize: "24px", fontWeight: "800", color: colors.midnight },
  statLabel: { fontSize: "11px", color: colors.slate, textTransform: "uppercase", letterSpacing: "1px" },
  statDivider: { width: "1px", background: colors.border },

  // --- NEW ROYAL IMAGE STYLES ---
  visualSide: { flex: 1, position: "relative", padding: "30px" },
  imageContainer: {
    position: "relative",
    zIndex: 2,
    transition: "transform 0.4s ease",
    ":hover": { transform: "scale(1.02)" }
  },
  mainFrame: { 
    height: "420px", 
    backgroundColor: "#f1f5f9", 
    borderRadius: "4px", // Shorter radius for a more formal/royal look
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    border: `1px solid ${colors.border}`
  },
  goldBracketTop: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100px",
    height: "100px",
    borderTop: `4px solid ${colors.premiumGold}`,
    borderLeft: `4px solid ${colors.premiumGold}`,
    zIndex: 1
  },
  goldBracketBottom: {
    position: "absolute",
    bottom: "0px",
    right: "0px",
    width: "100px",
    height: "100px",
    borderBottom: `4px solid ${colors.premiumGold}`,
    borderRight: `4px solid ${colors.premiumGold}`,
    zIndex: 1
  },
  royalBadge: {
    position: "absolute",
    bottom: "60px",
    left: "-10px",
    background: colors.midnight,
    padding: "12px 20px",
    boxShadow: "10px 10px 20px rgba(0,0,0,0.2)",
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  badgeLine: { width: "20px", height: "2px", background: colors.premiumGold },
  badgeText: { color: colors.white, fontSize: "10px", fontWeight: "700", letterSpacing: "2px" },
  floatingTag: {
    position: "absolute", top: "20px", right: "20px", background: colors.premiumGold,
    color: colors.white, padding: "5px 12px", fontSize: "11px", fontWeight: "700"
  },
  // -----------------------------

  contentSide: { flex: 1.1, paddingLeft: "30px" },
  preTitle: { color: colors.premiumGold, letterSpacing: "3px", fontSize: "11px", fontWeight: "700", marginBottom: "10px", display: "block" },
  h2: { fontSize: "36px", color: colors.midnight, fontWeight: "800", lineHeight: "1.2", margin: "0 0 15px" },
  goldText: { color: colors.premiumGold },
  p: { fontSize: "16px", color: colors.slate, lineHeight: "1.6", marginBottom: "20px" },
  featureList: { listStyle: "none", padding: 0, marginBottom: "25px", color: colors.midnight, fontWeight: "600", fontSize: "15px" },
  luxuryBtn: {
    padding: "15px 35px", background: colors.midnight, color: colors.white, border: "none",
    borderRadius: "2px", cursor: "pointer", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px"
  },

  // Sections
  topSection: { padding: "50px 0 30px" },
  standardSection: { padding: "60px 0" },
  darkSection: { padding: "70px 0", background: colors.midnight },
  campusWrapper: { padding: "10px 0" },
  splitGrid: { display: "flex", gap: "50px", alignItems: "center" },
  flexColumn: { flexDirection: "column" },

  // Chairman
  signatureCard: {
    background: colors.offWhite, padding: "50px 40px", borderRadius: "20px",
    textAlign: "center", position: "relative", maxWidth: "900px", margin: "0 auto",
    borderBottom: `4px solid ${colors.premiumGold}`
  },
  quoteMark: { fontSize: "80px", color: colors.softGold, position: "absolute", top: "5px", left: "50%", transform: "translateX(-50%)", lineHeight: 1 },
  quoteBody: { fontSize: "20px", color: colors.midnight, fontStyle: "italic", lineHeight: "1.6", position: "relative", zIndex: 2, marginBottom: "25px" },
  signatureName: { fontSize: "18px", fontWeight: "800", color: colors.midnight },
  signatureRole: { color: colors.premiumGold, fontSize: "12px", fontWeight: "600", textTransform: "uppercase" },

  // Academics
  centeredHeader: { textAlign: "center", marginBottom: "40px" },
  h2Light: { fontSize: "30px", color: colors.white, fontWeight: "800" },
  pLight: { color: "rgba(255,255,255,0.6)", fontSize: "16px" },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" },
  glassCard: {
    background: "rgba(255,255,255,0.03)", padding: "35px 30px", borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)", textAlign: "left"
  },
  cardIcon: { fontSize: "32px", marginBottom: "15px" },
  cardTitle: { color: colors.white, fontSize: "18px", marginBottom: "10px" },
  cardDesc: { color: "rgba(255,255,255,0.5)", lineHeight: "1.5", fontSize: "14px" },

  // CTA
  ctaSection: { padding: "30px 20px 70px" },
  ctaBanner: {
    background: `linear-gradient(135deg, ${colors.midnight} 0%, #003366 100%)`,
    padding: "40px 50px", borderRadius: "15px", display: "flex", justifyContent: "space-between",
    alignItems: "center", flexWrap: "wrap", gap: "20px"
  },
  ctaH2: { color: colors.white, fontSize: "24px", margin: 0 },
  ctaP: { color: "rgba(255,255,255,0.7)", fontSize: "16px", margin: 0 },
  ctaBtn: {
    padding: "16px 40px", background: colors.premiumGold, color: colors.midnight,
    fontWeight: "800", borderRadius: "2px", border: "none", cursor: "pointer", fontSize: "14px", textTransform: "uppercase"
  }
};

export default Home;