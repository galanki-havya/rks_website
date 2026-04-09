import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Standardized Brand Palette
const colors = { 
  midnight: "#001B36", 
  premiumGold: "#C5A059", // Slightly more muted "Luxury" Gold
  softGold: "rgba(197, 160, 89, 0.1)",
  white: "#FFFFFF",
  slate: "#475569",
  offWhite: "#F8FAFC",
  border: "rgba(0, 27, 54, 0.08)",
  glass: "rgba(255, 255, 255, 0.7)"
};

// --- ANIMATION VARIANTS ---
const containerVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVar = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Academics = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const levels = [
    {
      title: "Primary School",
      grades: "Grades I - V",
      focus: "Foundational Literacy",
      description: "Activity-based learning designed to spark curiosity and build a strong foundation in core concepts.",
      icon: "🌱"
    },
    {
      title: "Middle School",
      grades: "Grades VI - VIII",
      focus: "Exploration & Skills",
      description: "Integrated IIT/NEET foundation courses begin here, fostering critical thinking and analytical research.",
      icon: "📘"
    },
    {
      title: "High School",
      grades: "Grades IX - X",
      focus: "Excellence & Boards",
      description: "Rigorous academic preparation combined with advanced competitive exam coaching.",
      icon: "🎓"
    },
    {
      title: "Higher Secondary",
      grades: "Grades XI - XII",
      focus: "Specialization",
      description: "Stream-specific expertise (MPC/BiPC) designed to bridge the gap between school and university.",
      icon: "🚀"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVar}
      style={styles.pageWrapper}
    >
      {/* --- HERO HEADER --- */}
      <section style={{...styles.hero, padding: isMobile ? "120px 20px 60px" : "160px 20px 100px"}}>
        <motion.div variants={itemVar} style={styles.container}>
          <span style={styles.accent}>CURRICULUM & PEDAGOGY</span>
          <h1 style={{...styles.heroTitle, fontSize: isMobile ? "34px" : "52px"}}>
            Academic <span style={{color: colors.premiumGold}}>Excellence</span>
          </h1>
          <p style={styles.heroSubtitle}>
            A balanced curriculum that merges innovation with discipline, 
            preparing students for global challenges.
          </p>
          <div style={styles.underline} />
        </motion.div>
      </section>

      <div style={styles.container}>
        {/* --- METHODOLOGY SECTION (GLASSMORPHISM) --- */}
        <motion.section variants={itemVar} style={styles.sectionMargin}>
          <div style={{...styles.philosophyCard, padding: isMobile ? "30px 20px" : "45px"}}>
            <div style={styles.flexRow}>
              <div style={styles.philText}>
                <h3 style={styles.sectionTitle}>The RKS Methodology</h3>
                <p style={styles.text}>
                  At RKS Next Gen, we follow an integrated curriculum that combines 
                  national standards with modern pedagogical techniques. Our 
                  <strong> "Innovation • Discipline • Success"</strong> framework ensures 
                  true conceptual understanding.
                </p>
              </div>
              <div style={styles.philStats}>
                <div style={styles.miniStat}>
                  <span style={styles.statVal}>15:1</span>
                  <span style={styles.statLab}>Ratio</span>
                </div>
                <div style={styles.miniStat}>
                  <span style={styles.statVal}>100%</span>
                  <span style={styles.statLab}>Digital</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- ACADEMIC LEVELS GRID --- */}
        <div style={{
          ...styles.grid, 
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
          gap: isMobile ? "15px" : "25px"
        }}>
          {levels.map((level, index) => (
            <motion.div 
              key={index} 
              variants={itemVar}
              whileHover={{ y: -5 }}
              style={styles.card}
            >
              <div style={styles.iconCircle}>{level.icon}</div>
              <h3 style={styles.cardTitle}>{level.title}</h3>
              <p style={styles.grades}>{level.grades}</p>
              <div style={styles.focusBadge}>Focus: {level.focus}</div>
              <p style={styles.cardDesc}>{level.description}</p>
            </motion.div>
          ))}
        </div>

        {/* --- KEY HIGHLIGHTS --- */}
        <motion.section variants={itemVar} style={{...styles.featuresSection, padding: isMobile ? "40px 20px" : "60px 50px"}}>
          <div style={styles.sectionHeader}>
            <h3 style={{...styles.sectionTitleLight, fontSize: isMobile ? "26px" : "32px"}}>Academic Highlights</h3>
            <p style={{color: 'rgba(255,255,255,0.5)', fontSize: "14px"}}>Built for the 21st-century learner.</p>
          </div>
          <div style={{...styles.featureGrid, gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)"}}>
            {[
              "Digitally enabled smart classrooms",
              "Personalized attention & remedial support",
              "Olympiad & Foundation coaching",
              "Advanced Science & Computer Labs",
              "Language labs for communication",
              "Comprehensive Library center"
            ].map((feature, i) => (
              <div key={i} style={styles.featureItem}>
                <span style={styles.check}>✓</span> {feature}
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- HOLISTIC SECTION --- */}
        <section style={styles.holisticSection}>
          <motion.div variants={itemVar} style={styles.centeredHeader}>
            <h3 style={styles.sectionTitle}>Beyond the Classroom</h3>
            <p style={styles.textCenter}>Empowering passions through professional coaching.</p>
          </motion.div>
          <div style={{...styles.holisticGrid, gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)"}}>
            {[
              { t: "Sports", d: "Professional training in basketball and football.", i: "🏆" },
              { t: "Arts", d: "Dedicated studios for music and visual arts.", i: "🎨" },
              { t: "Leadership", d: "Student Council and public speaking clubs.", i: "📢" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVar}
                whileHover={{ y: -5 }}
                style={styles.holisticItem}
              >
                <h4 style={styles.hTitle}>{item.i} {item.t}</h4>
                <p style={styles.hDesc}>{item.d}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

const styles = {
  pageWrapper: { backgroundColor: "#FFFFFF", minHeight: "100vh", paddingBottom: "60px" },
  hero: { backgroundColor: colors.midnight, color: colors.white, textAlign: "center" },
  accent: { color: colors.premiumGold, letterSpacing: '4px', fontSize: '12px', fontWeight: '800', marginBottom: '10px', display: 'block' },
  heroTitle: { fontWeight: "900", margin: "0 0 15px 0", letterSpacing: "-1px" },
  heroSubtitle: { fontSize: "17px", maxWidth: "600px", margin: "auto", color: "rgba(255,255,255,0.6)", lineHeight: "1.6" },
  underline: { width: '40px', height: '4px', background: colors.premiumGold, margin: '20px auto 0' },
  container: { maxWidth: "1140px", margin: "0 auto", padding: "0 20px" },
  sectionMargin: { marginTop: "-40px", marginBottom: "50px" },
  philosophyCard: {
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    border: `1px solid ${colors.border}`,
    boxShadow: "0 15px 35px rgba(0,27,54,0.08)",
  },
  flexRow: { display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' },
  philText: { flex: '2', minWidth: '280px' },
  philStats: { flex: '1', display: 'flex', gap: '12px', minWidth: '200px' },
  miniStat: { textAlign: 'center', padding: '15px', background: colors.offWhite, borderRadius: '16px', flex: 1 },
  statVal: { display: 'block', fontSize: '22px', fontWeight: '900', color: colors.midnight },
  statLab: { fontSize: '11px', color: colors.premiumGold, fontWeight: '800', textTransform: 'uppercase' },
  sectionTitle: { color: colors.midnight, fontSize: "30px", fontWeight: '900', marginBottom: "15px" },
  text: { color: colors.slate, lineHeight: "1.7", fontSize: "16px" },
  grid: { display: "grid", marginBottom: "60px" },
  card: {
    background: colors.glass,
    backdropFilter: "blur(8px)",
    padding: "35px 25px",
    borderRadius: "24px",
    border: `1px solid ${colors.border}`,
    boxShadow: "0 8px 20px rgba(0,0,0,0.02)",
  },
  iconCircle: {
    width: '55px', height: '55px', background: colors.white, borderRadius: '16px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '28px', marginBottom: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
  },
  cardTitle: { color: colors.midnight, fontSize: '19px', fontWeight: '900', marginBottom: "6px" },
  grades: { color: colors.premiumGold, fontWeight: "800", fontSize: "12px", marginBottom: "12px", textTransform: 'uppercase', letterSpacing: '1px' },
  focusBadge: { display: 'inline-block', padding: '4px 10px', background: colors.softGold, color: colors.premiumGold, borderRadius: '6px', fontSize: '11px', fontWeight: '800', marginBottom: '15px' },
  cardDesc: { color: colors.slate, fontSize: "14px", lineHeight: "1.6" },
  featuresSection: {
    backgroundColor: colors.midnight,
    color: colors.white,
    borderRadius: "32px",
    marginBottom: "60px",
    boxShadow: "0 20px 40px rgba(0,27,54,0.2)"
  },
  sectionHeader: { textAlign: 'center', marginBottom: '35px' },
  sectionTitleLight: { fontWeight: '900', marginBottom: '5px' },
  featureGrid: { display: "grid", gap: "15px" },
  featureItem: { fontSize: "14px", display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.8)' },
  check: { color: colors.premiumGold, marginRight: '10px', fontWeight: 'bold' },
  holisticSection: { marginBottom: "60px" },
  centeredHeader: { textAlign: 'center', marginBottom: '35px' },
  textCenter: { color: colors.slate, fontSize: "16px", maxWidth: "500px", margin: "0 auto" },
  holisticGrid: { display: "grid", gap: "20px" },
  holisticItem: {
    padding: "25px",
    borderRadius: "20px",
    background: colors.white,
    border: `1px solid ${colors.border}`,
    boxShadow: '0 10px 25px rgba(0,0,0,0.03)'
  },
  hTitle: { color: colors.midnight, marginBottom: '8px', fontWeight: '900', fontSize: '18px' },
  hDesc: { color: colors.slate, fontSize: '14px', lineHeight: '1.6' }
};

export default Academics;