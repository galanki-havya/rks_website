import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import CampusSection from "../components/CampusSection";

// --- ASSETS ---
import rks from "../assets/rks.png";
import chairmanImg from "../assets/chairman.png"; 
import adminImg from "../assets/admin.png"; 

const colors = {
  midnight: "#001B36",
  premiumGold: "#B38B45",
  goldGradient: "linear-gradient(135deg, #B38B45 0%, #FFD700 100%)",
  slate: "#475569", // Darker slate for better contrast
  bgLight: "#F8FAFC", // Soft professional off-white
  glassWhite: "rgba(255, 255, 255, 0.85)",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionPadding = isMobile ? "50px 15px" : "90px 0";

  const PhilosophyImage = ({ mobileMode = false }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      viewport={{ once: true }}
      style={{ position: "relative", width: "100%", margin: mobileMode ? "25px 0" : "0" }}
    >
      <div style={{ 
        ...styles.mainFrame, 
        backgroundImage: `url(${rks})`, 
        height: isMobile ? "260px" : "440px",
        boxShadow: isMobile ? "0 15px 30px rgba(0,0,0,0.15)" : styles.mainFrame.boxShadow
      }}>
      </div>
      {!mobileMode && (
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} 
          style={{ ...styles.badgeFloating, left: "20px" }}>
          <span style={{ fontSize: "22px", fontWeight: "900", color: colors.premiumGold }}>13+</span>
          <span style={{ fontSize: "10px", fontWeight: "700" }}>YEARS</span>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <div style={styles.pageWrapper}>
      {/* Background Pattern Overlay */}
      <div style={styles.bgPattern} />

      <Hero />

      {/* --- STATS BAR --- */}
      <section style={{ marginTop: isMobile ? "-35px" : "-55px", position: "relative", zIndex: 10, padding: "0 20px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ ...styles.statsGrid, flexDirection: isMobile ? "column" : "row" }}>
          {[{ n: "13+", l: "Years of Legacy" }, { n: "IIT/NEET", l: "Elite Foundations" }, { n: "CBSE", l: "Global Standards" }].map((stat, i) => (
            <React.Fragment key={i}>
              <div style={{ flex: 1, textAlign: "center", padding: isMobile ? "10px 0" : "0" }}>
                <span style={{ ...styles.statNum, fontSize: isMobile ? "22px" : "28px" }}>{stat.n}</span>
                <span style={styles.statLabel}>{stat.l}</span>
              </div>
              {i < 2 && !isMobile && <div style={styles.statDivider} />}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* --- LEADERSHIP --- */}
      <section style={{ padding: sectionPadding, position: "relative" }}>
        <div style={styles.container}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={styles.centeredHeader}>
            <span style={styles.preTitle}>THE VISIONARIES</span>
            <h2 style={{ ...styles.h2, fontSize: isMobile ? "28px" : "42px" }}>Pillars of <span style={styles.goldText}>Excellence</span></h2>
            <div style={styles.titleUnderline} />
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ ...styles.mentorGrid, flexDirection: isMobile ? "column" : "row", gap: isMobile ? "60px" : "30px" }}>
            {[{ img: chairmanImg, name: "Dr. T Rama Krishna Reddy", role: "Chairman", text: "Education is the most powerful weapon which you can use to change the world." },
              { img: adminImg, name: "Mrs. RK Vimala", role: "Admin Director", text: "We nurture character and competence in a safe, intellectually vibrant home." }
            ].map((leader, idx) => (
              <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -8 }} style={styles.mentorCard}>
                <div style={styles.avatarWrapper}><div style={styles.photoCircle}><img src={leader.img} alt={leader.role} style={styles.imgCover} /></div></div>
                <p style={styles.quoteBody}>"{leader.text}"</p>
                <div style={styles.mentorMeta}>
                  <div style={styles.signatureName}>{leader.name}</div>
                  <div style={styles.signatureRole}>{leader.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section style={{ padding: sectionPadding, background: "rgba(241, 245, 249, 0.5)", borderY: "1px solid #e2e8f0" }}>
        <div style={styles.container}>
          <div style={{ ...styles.splitGrid, flexDirection: isMobile ? "column" : "row", gap: isMobile ? "30px" : "60px" }}>
            {!isMobile && <div style={{ flex: 1 }}><PhilosophyImage /></div>}
            
            <motion.div initial={{ opacity: 0, x: isMobile ? 0 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ flex: 1.2 }}>
              <span style={styles.preTitle}>THE RKS PROMISE</span>
              <h2 style={{ ...styles.h2, fontSize: isMobile ? "28px" : "38px" }}>Nurturing the <span style={styles.goldText}>Future Leaders</span></h2>
              <p style={styles.p}>As Tirupati’s premier educational landmark, we blend ancient wisdom with 21st-century technology to create well-rounded global citizens.</p>
              
              {isMobile && <PhilosophyImage mobileMode={true} />}

              <div style={{ ...styles.featureGrid, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
                {["Concept-Based Pedagogy", "Integrated Curriculum", "Digital Smart Classrooms", "Elite Sports Academy"].map((feat, i) => (
                  <motion.div whileHover={{ x: 5 }} key={i} style={styles.featureItem}>
                    <span style={{ color: colors.premiumGold, marginRight: "10px" }}>✦</span>{feat}
                  </motion.div>
                ))}
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{ ...styles.luxuryBtn, width: isMobile ? "100%" : "auto" }} onClick={() => navigate("/about")}>
                Explore Our Journey
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PATHWAYS --- */}
      <section style={{ background: colors.midnight, padding: sectionPadding, position: "relative" }}>
        <div style={styles.darkPattern} />
        <div style={styles.container}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={styles.centeredHeader}>
            <h2 style={{ color: "#fff", fontWeight: "800" }}>Academic <span style={{ color: colors.premiumGold }}>Pathways</span></h2>
            <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "10px" }}>Specialized learning tracks for every age group.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "20px" }}>
            {[{ i: "🌱", t: "Foundation", d: "Early cognitive and social development." }, { i: "📐", t: "Primary", d: "CBSE integrated with creative arts." }, { i: "🚀", t: "Elite Prep", d: "Advanced coaching for IIT & NEET." }].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} style={styles.glassCard} whileHover={{ y: -10, background: "rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: "32px", marginBottom: "15px" }}>{item.i}</div>
                <h3 style={{ color: "#fff", fontSize: "20px", marginBottom: "10px" }}>{item.t}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: "1.5" }}>{item.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CampusSection />

      {/* --- CTA --- */}
      <section style={{ padding: isMobile ? "40px 15px" : "70px 0" }}>
        <div style={styles.container}>
          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
            style={{ ...styles.ctaBanner, flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left", padding: isMobile ? "30px 20px" : "45px 60px" }}>
            <div style={{ marginBottom: isMobile ? "25px" : "0" }}>
              <h2 style={{ color: "#fff", margin: 0, fontSize: isMobile ? "24px" : "32px" }}>Admissions Open 2026-27</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", marginTop: "8px" }}>Join the legacy of excellence in Tirupati.</p>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={styles.ctaBtn} onClick={() => navigate("/contact")}>
              Apply Online
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  pageWrapper: { 
    background: `radial-gradient(circle at top right, #FFFFFF 0%, ${colors.bgLight} 100%)`, 
    overflowX: "hidden", 
    position: "relative",
    minHeight: "100vh"
  },
  bgPattern: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundImage: `radial-gradient(${colors.midnight}15 0.5px, transparent 0.5px)`,
    backgroundSize: "30px 30px",
    opacity: 0.4,
    pointerEvents: "none"
  },
  darkPattern: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundImage: `radial-gradient(rgba(255,255,255,0.05) 0.5px, transparent 0.5px)`,
    backgroundSize: "40px 40px",
    pointerEvents: "none"
  },
  container: { maxWidth: "1140px", margin: "0 auto", position: "relative", zIndex: 2 },
  statsGrid: { 
    background: colors.glassWhite, 
    backdropFilter: "blur(15px)", 
    display: "flex", 
    padding: "30px", 
    borderRadius: "16px", 
    boxShadow: "0 20px 50px rgba(0,0,0,0.08)", 
    border: "1px solid rgba(255,255,255,0.5)" 
  },
  statNum: { display: "block", fontWeight: "900", color: colors.midnight, lineHeight: 1 },
  statLabel: { fontSize: "11px", color: colors.slate, textTransform: "uppercase", fontWeight: "800", marginTop: "6px", display: "block", letterSpacing: "1px" },
  statDivider: { width: "1px", height: "45px", background: "rgba(0,0,0,0.1)", margin: "0 30px" },
  h2: { color: colors.midnight, fontWeight: "900", margin: 0, lineHeight: 1.2 },
  goldText: { background: colors.goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  preTitle: { color: colors.premiumGold, letterSpacing: "3px", fontSize: "11px", fontWeight: "800", display: "block", marginBottom: "8px" },
  centeredHeader: { textAlign: "center", marginBottom: "45px" },
  titleUnderline: { height: "4px", width: "50px", background: colors.premiumGold, margin: "15px auto 0", borderRadius: "2px" },
  mentorGrid: { display: "flex", marginTop: "60px" },
  mentorCard: { 
    flex: 1, 
    background: "#fff", 
    padding: "60px 30px 35px", 
    borderRadius: "20px", 
    position: "relative", 
    border: "1px solid rgba(0,27,54,0.05)", 
    textAlign: "center", 
    boxShadow: "0 15px 35px rgba(0,0,0,0.03)" 
  },
  avatarWrapper: { position: "absolute", top: "-45px", left: "50%", transform: "translateX(-50%)" },
  photoCircle: { width: "90px", height: "90px", borderRadius: "50%", border: "5px solid #fff", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.12)" },
  imgCover: { width: "100%", height: "100%", objectFit: "cover" },
  quoteBody: { fontStyle: "italic", color: colors.slate, marginBottom: "20px", fontSize: "14px", lineHeight: "1.7" },
  mentorMeta: { borderTop: "1px solid #f1f5f9", paddingTop: "15px" },
  signatureName: { fontWeight: "800", color: colors.midnight, fontSize: "17px" },
  signatureRole: { fontSize: "11px", color: colors.premiumGold, fontWeight: "800", marginTop: "3px", textTransform: "uppercase" },
  splitGrid: { display: "flex", alignItems: "center" },
  mainFrame: { backgroundSize: "cover", backgroundPosition: "center", borderRadius: "16px", position: "relative", boxShadow: "20px 20px 0px rgba(179,139,69,0.1)" },
  floatingTag: { position: "absolute", top: "15px", right: "15px", background: colors.premiumGold, color: "#fff", padding: "5px 12px", fontSize: "10px", fontWeight: "900", borderRadius: "4px" },
  badgeFloating: { position: "absolute", bottom: "-15px", background: colors.midnight, color: "#fff", padding: "12px 20px", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 15px 30px rgba(0,0,0,0.25)", zIndex: 5 },
  p: { fontSize: "16px", color: colors.slate, lineHeight: "1.8", marginBottom: "20px" },
  featureGrid: { display: "grid", gap: "12px", marginBottom: "30px" },
  featureItem: { fontSize: "14px", fontWeight: "700", color: colors.midnight, display: "flex", alignItems: "center" },
  luxuryBtn: { padding: "16px 35px", background: colors.midnight, color: "#fff", border: "none", borderRadius: "8px", fontWeight: "800", cursor: "pointer", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px", boxShadow: "0 10px 20px rgba(0,27,54,0.15)" },
  glassCard: { 
    background: "rgba(255,255,255,0.06)", 
    backdropFilter: "blur(10px)", 
    padding: "40px 30px", 
    borderRadius: "16px", 
    border: "1px solid rgba(255,255,255,0.15)", 
    transition: "all 0.4s ease" 
  },
  ctaBanner: { 
    background: `linear-gradient(to right, ${colors.midnight}, #003366)`, 
    borderRadius: "24px", 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    boxShadow: "0 25px 50px rgba(0,27,54,0.4)" 
  },
  ctaBtn: { padding: "16px 40px", background: colors.premiumGold, color: "#fff", fontWeight: "900", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", textTransform: "uppercase", boxShadow: "0 8px 15px rgba(0,0,0,0.2)" },
};

export default Home;