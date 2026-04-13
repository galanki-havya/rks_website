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
  slate: "#475569",
  bgLight: "#F8FAFC",
  glassWhite: "rgba(255, 255, 255, 0.98)",
  borderSoft: "rgba(0, 27, 54, 0.12)", 
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
  }
};

const photoAnimation = {
  hidden: { scale: 0.8, opacity: 0, rotate: -5 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
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

  const sectionPadding = isMobile ? "60px 20px" : "100px 0";

  const PhilosophyImage = ({ mobileMode = false }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      viewport={{ once: true }}
      style={{ 
        position: "relative", 
        width: "100%", 
        maxWidth: mobileMode ? "100%" : "500px",
        margin: mobileMode ? "25px auto" : "0 auto"
      }}
    >
      <div style={{ 
        ...styles.mainFrame, 
        backgroundImage: `url(${rks})`, 
        height: isMobile ? "260px" : "460px",
        boxShadow: isMobile ? "0 15px 30px rgba(0,0,0,0.15)" : styles.mainFrame.boxShadow,
        border: `1px solid ${colors.borderSoft}`
      }}>
      </div>
      {!mobileMode && (
        <motion.div 
          animate={{ y: [0, -12, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
          style={{ ...styles.badgeFloating, left: "20px" }}
        >
          <span style={{ fontSize: "24px", fontWeight: "900", color: colors.premiumGold }}>13+</span>
          <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1px" }}>YEARS</span>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.bgPattern} />
      <Hero />

      {/* --- STATS BAR --- */}
      <section style={{ marginTop: isMobile ? "-40px" : "-50px", position: "relative", zIndex: 10, padding: "0 20px" }}>
        <div style={styles.container}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            style={{ ...styles.statsGrid, flexDirection: isMobile ? "column" : "row" }}
          >
            {[{ n: "13+", l: "Years of Legacy" }, { n: "IIT/NEET", l: "Elite Foundations" }, { n: "CBSE", l: "Global Standards" }].map((stat, i) => (
              <React.Fragment key={i}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  style={{ flex: 1, textAlign: "center", padding: isMobile ? "15px 0" : "0" }}
                >
                  <span style={{ ...styles.statNum, fontSize: isMobile ? "24px" : "32px", color: colors.premiumGold }}>{stat.n}</span>
                  <span style={styles.statLabel}>{stat.l}</span>
                </motion.div>
                {i < 2 && !isMobile && <div style={styles.statDivider} />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- LEADERSHIP SECTION --- */}
      <section style={{ padding: sectionPadding, position: "relative" }}>
        <div style={styles.container}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} style={styles.centeredHeader}>
            <span style={styles.preTitle}>THE VISIONARIES</span>
            <h2 style={{ ...styles.h2, fontSize: isMobile ? "32px" : "48px" }}>Guidance from our <span style={styles.goldText}>Mentors</span></h2>
            <div style={styles.titleUnderline} />
          </motion.div>
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            style={{ 
              ...styles.mentorGrid, 
              flexDirection: isMobile ? "column" : "row", 
              gap: isMobile ? "120px" : "40px", 
              alignItems: "center"
            }}
          >
            {[
              { img: chairmanImg, name: "Dr. T Rama Krishna Reddy", role: "Chairman", text: "Education is the most powerful weapon which you can use to change the world. We believe in crafting not just scholars, but citizens of character." },
              { img: adminImg, name: "Mrs. RK Vimala", role: "Admin Director", text: "We nurture character and competence in a safe, intellectually vibrant home where every child is encouraged to reach their peak potential." }
            ].map((leader, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                whileHover={{ y: -15, borderColor: colors.premiumGold, boxShadow: "0 25px 50px rgba(179,139,69,0.2)" }} 
                style={styles.mentorCard}
              >
                <motion.div variants={photoAnimation} style={styles.avatarWrapper}>
                  <div style={styles.photoCircle}>
                    <img src={leader.img} alt={leader.role} style={styles.imgCover} />
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    style={styles.photoRing} 
                  />
                </motion.div>
                <div style={styles.cardContent}>
                  <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} style={styles.quoteBody}>
                    "{leader.text}"
                  </motion.p>
                  <div style={styles.mentorMeta}>
                    <div style={styles.signatureName}>{leader.name}</div>
                    <div style={styles.signatureRole}>{leader.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section style={{ padding: sectionPadding, background: "rgba(241, 245, 249, 0.6)", borderTop: `1px solid ${colors.borderSoft}`, borderBottom: `1px solid ${colors.borderSoft}` }}>
        <div style={styles.container}>
          <div style={{ ...styles.splitGrid, flexDirection: isMobile ? "column" : "row", gap: isMobile ? "60px" : "80px" }}>
            {!isMobile && <div style={{ flex: 1, display: "flex", justifyContent: "center" }}><PhilosophyImage /></div>}
            
            <motion.div initial={{ opacity: 0, x: isMobile ? 0 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ flex: 1.2, textAlign: isMobile ? "center" : "left" }}>
              <span style={styles.preTitle}>THE RKS PROMISE</span>
              <h2 style={{ ...styles.h2, fontSize: isMobile ? "30px" : "42px" }}>Nurturing the <span style={styles.goldText}>Future Leaders</span></h2>
              <p style={styles.p}>As Tirupati’s premier educational landmark, we blend ancient wisdom with 21st-century technology to create well-rounded global citizens prepared for the challenges of tomorrow.</p>
              
              {isMobile && <PhilosophyImage mobileMode={true} />}

              <div style={{ ...styles.featureGrid, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", textAlign: "left" }}>
                {["Concept-Based Pedagogy", "Integrated Curriculum", "Digital Smart Classrooms", "Elite Sports Academy"].map((feat, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 8, color: colors.premiumGold }} 
                    key={i} 
                    style={styles.featureItem}
                  >
                    <span style={{ color: colors.premiumGold, marginRight: "12px", fontSize: "18px" }}>✦</span>{feat}
                  </motion.div>
                ))}
              </div>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: colors.premiumGold }} 
                whileTap={{ scale: 0.95 }}
                style={{ ...styles.luxuryBtn, width: isMobile ? "100%" : "auto" }} 
                onClick={() => navigate("/about")}
              >
                Explore Our Journey
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <CampusSection />

      {/* --- CTA --- */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 0" }}>
        <div style={styles.container}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 20 }}
            style={{ ...styles.ctaBanner, flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left", padding: isMobile ? "40px 30px" : "60px 80px" }}
          >
            <div style={{ marginBottom: isMobile ? "30px" : "0" }}>
              <h2 style={{ color: "#fff", margin: 0, fontSize: isMobile ? "28px" : "36px", fontWeight: "900" }}>Admissions Open 2026-27</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "17px", marginTop: "10px" }}>Secure your child's seat in the legacy of excellence.</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(179,139,69,0.5)" }} 
              whileTap={{ scale: 0.95 }} 
              style={styles.ctaBtn} 
              onClick={() => navigate("/contact")}
            >
              Apply Online Now
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
  container: { maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 },
  statsGrid: { 
    background: colors.glassWhite, 
    backdropFilter: "blur(20px)", 
    display: "flex", 
    padding: "35px", 
    borderRadius: "24px", 
    boxShadow: "0 20px 50px rgba(0,27,54,0.08)", 
    border: `1.5px solid ${colors.borderSoft}`
  },
  statNum: { display: "block", fontWeight: "900", lineHeight: 1 },
  statLabel: { fontSize: "12px", color: colors.slate, textTransform: "uppercase", fontWeight: "800", marginTop: "8px", display: "block", letterSpacing: "1.5px" },
  statDivider: { width: "1px", height: "50px", background: "rgba(0,0,0,0.1)", margin: "0 40px" },
  h2: { color: colors.midnight, fontWeight: "900", margin: 0, lineHeight: 1.2 },
  goldText: { background: colors.goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  preTitle: { color: colors.premiumGold, letterSpacing: "4px", fontSize: "12px", fontWeight: "800", display: "block", marginBottom: "12px" },
  centeredHeader: { textAlign: "center", marginBottom: "40px" },
  titleUnderline: { height: "5px", width: "60px", background: colors.premiumGold, margin: "20px auto 0", borderRadius: "10px" },
  
  mentorGrid: { 
    display: "flex", 
    marginTop: "120px", // Increased to make room for photo overlap
    maxWidth: "1000px",
    margin: "120px auto 0",
    justifyContent: "center",
    width: "100%"
  },
  mentorCard: { 
    flex: 1, 
    background: "#fff", 
    padding: "70px 30px 40px", // Reduced top padding to move text up relative to image
    borderRadius: "32px", 
    position: "relative", 
    border: `2px solid ${colors.borderSoft}`, 
    textAlign: "center", 
    boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
    height: "fit-content",
    margin: "10px", 
    transition: "all 0.4s ease",
    maxWidth: "450px" 
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "25px"
  },
  avatarWrapper: { 
    position: "absolute", 
    top: "-75px", // Moved higher up to match the second image placement
    left: "50%", 
    transform: "translateX(-50%)",
    zIndex: 5
  },
  photoCircle: { 
    width: "140px", // Slightly larger for better visual break
    height: "140px", 
    borderRadius: "50%", 
    background: "#fff",
    border: `3px solid ${colors.premiumGold}`,
    padding: "6px",
    boxSizing: "border-box",
    overflow: "hidden", 
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    position: "relative",
    zIndex: 2
  },
  photoRing: {
    position: "absolute",
    top: "-12px",
    left: "-12px",
    right: "-12px",
    bottom: "-12px",
    borderRadius: "50%",
    border: `1.5px dashed ${colors.premiumGold}44`,
    pointerEvents: "none"
  },
  imgCover: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" },
  quoteBody: { 
    fontStyle: "italic", 
    color: colors.slate, 
    fontSize: "16px", 
    lineHeight: "1.8",
    fontWeight: "500",
    margin: 0
  },
  mentorMeta: { 
    borderTop: `1.5px solid ${colors.borderSoft}`, 
    paddingTop: "20px" 
  },
  signatureName: { fontWeight: "900", color: colors.midnight, fontSize: "20px" },
  signatureRole: { fontSize: "12px", color: colors.premiumGold, fontWeight: "800", marginTop: "4px", textTransform: "uppercase", letterSpacing: "1.5px" },
  
  splitGrid: { display: "flex", alignItems: "center", justifyContent: "center" },
  mainFrame: { backgroundSize: "cover", backgroundPosition: "center", borderRadius: "24px", position: "relative", boxShadow: "25px 25px 0px rgba(179,139,69,0.12)" },
  badgeFloating: { position: "absolute", bottom: "-20px", background: colors.midnight, color: "#fff", padding: "15px 25px", borderRadius: "15px", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", zIindex: 5 },
  p: { fontSize: "18px", color: colors.slate, lineHeight: "1.8", marginBottom: "25px" },
  featureGrid: { display: "grid", gap: "16px", marginBottom: "35px" },
  featureItem: { fontSize: "15px", fontWeight: "700", color: colors.midnight, display: "flex", alignItems: "center", transition: "all 0.3s ease" },
  luxuryBtn: { padding: "18px 40px", background: colors.midnight, color: "#fff", border: "none", borderRadius: "10px", fontWeight: "800", cursor: "pointer", fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px", transition: "all 0.3s ease" },
  ctaBanner: { 
    background: `linear-gradient(135deg, ${colors.midnight} 0%, #003366 100%)`, 
    borderRadius: "32px", 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    boxShadow: "0 30px 60px rgba(0,27,54,0.4)" 
  },
  ctaBtn: { padding: "18px 45px", background: colors.premiumGold, color: "#fff", fontWeight: "900", borderRadius: "12px", border: "none", cursor: "pointer", fontSize: "15px", textTransform: "uppercase", transition: "all 0.3s ease" },
};

export default Home;