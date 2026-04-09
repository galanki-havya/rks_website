import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- BRAND CONFIGURATION ---
const colors = { 
  midnight: "#001B36", 
  premiumGold: "#C5A059", 
  bg: "#FFFFFF", 
  white: "#ffffff",
  slate: "#475569",
  glass: "rgba(255, 255, 255, 0.7)",
  border: "rgba(197, 160, 89, 0.2)"
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

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVar}
      style={styles.pageWrapper}
    >
      <div style={styles.container}>
        
        {/* --- HERO SECTION --- */}
        <motion.div variants={itemVar} style={styles.header}>
          <span style={styles.accent}>SINCE 2011</span>
          <h1 style={{...styles.mainTitle, fontSize: isMobile ? '32px' : '52px'}}>
            Shaping Future-Ready <br/>
            <span style={{color: colors.premiumGold}}>Global Citizens</span>
          </h1>
          <p style={styles.headerDesc}>
            RKS Next Gen School blends traditional values with modern innovation 
            to build tomorrow's leaders through concept-based learning.
          </p>
          <div style={styles.underline} />
        </motion.div>

        {/* --- VISION & MISSION --- */}
        <div style={{
          ...styles.missionGrid, 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'
        }}>
          {[
            { t: "Our Vision", d: "To be a global leader in education by cultivating strong values, exceptional academic skills, and holistic growth.", i: "👁️" },
            { t: "Our Mission", d: "To guide young minds through concept-based learning, ensuring every child discovers their full potential.", i: "🎯" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVar}
              whileHover={{ y: -5 }}
              style={styles.morphismCard}
            >
              <div style={styles.iconCircle}>{item.i}</div>
              <h2 style={styles.cardTitle}>{item.t}</h2>
              <p style={styles.cardText}>{item.d}</p>
            </motion.div>
          ))}
        </div>

        {/* --- THE RKS EDGE --- */}
        <motion.section 
          variants={itemVar}
          style={{
            ...styles.edgeSection, 
            padding: isMobile ? '30px 20px' : '50px 60px'
          }}
        >
          <div style={styles.sectionHeader}>
            <h2 style={{...styles.subTitle, fontSize: isMobile ? '24px' : '36px'}}>The RKS Edge</h2>
            <p style={styles.subTitleDesc}>Standardizing Excellence Across Our Campuses</p>
          </div>
          
          <div style={{
            ...styles.featureGrid, 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)'
          }}>
            {[
              { t: "IIT-JEE & NEET Foundation", d: "Specialized integrated coaching starting from Grade VI.", i: "🚀" },
              { t: "Concept-Based Learning", d: "Deep understanding over rote memorization.", i: "💡" },
              { t: "Skill Development", d: "Vedic Maths, Abacus, and Public Speaking.", i: "🧠" },
              { t: "Digital Classrooms", d: "Smart labs and tech-integrated learning.", i: "💻" },
              { t: "Holistic Wellness", d: "Yoga, Physical Training, and Meditation.", i: "🧘" },
              { t: "Safe Campuses", d: "Eco-friendly environment with safe transport.", i: "🌳" }
            ].map((f, idx) => (
              <div key={idx} style={styles.featureItem}>
                <span style={styles.featureIcon}>{f.i}</span>
                <div>
                  <h3 style={styles.featureTitle}>{f.t}</h3>
                  <p style={styles.featureDesc}>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- STATS PILLARS --- */}
        <div style={{
          ...styles.statsContainer, 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'
        }}>
          {[
            { n: "13+", l: "Years of Legacy" },
            { n: "100%", l: "Child Focus" },
            { n: "2", l: "Smart Campuses" },
            { n: "15+", l: "Co-Curriculars" }
          ].map((p, i) => (
            <motion.div variants={itemVar} key={i} style={styles.pillar}>
              <h3 style={styles.pillarNum}>{p.n}</h3>
              <p style={styles.pillarText}>{p.l}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

// --- STYLES ---
const styles = {
  pageWrapper: { 
    paddingTop: '140px', // Pushed down further for header visibility
    paddingBottom: '60px', 
    background: "#FBFDFF", 
    minHeight: '100vh'
  },
  container: { 
    maxWidth: '1100px', 
    margin: '0 auto', 
    padding: '0 24px' 
  },
  header: { 
    textAlign: 'center', 
    marginBottom: '50px' 
  },
  accent: { 
    color: colors.premiumGold, 
    letterSpacing: '4px', 
    fontSize: '11px', 
    fontWeight: '800', 
    marginBottom: '10px', 
    display: 'block' 
  },
  mainTitle: { 
    color: colors.midnight, 
    fontWeight: '900', 
    lineHeight: '1.2', 
    margin: '0 0 15px 0' 
  },
  headerDesc: { 
    color: colors.slate, 
    fontSize: '15px', 
    lineHeight: '1.6', 
    maxWidth: '600px', 
    margin: '0 auto 20px' 
  },
  underline: { width: '40px', height: '3px', background: colors.premiumGold, margin: '0 auto' },
  
  missionGrid: { 
    display: 'grid', 
    gap: '20px', 
    marginBottom: '60px' 
  },
  morphismCard: { 
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    padding: '35px 25px', 
    borderRadius: '20px', 
    textAlign: 'center',
    border: `1px solid ${colors.border}`,
    boxShadow: "0 8px 24px -10px rgba(0,27,54,0.08)",
    transition: "0.3s ease"
  },
  iconCircle: { 
    width: '50px', height: '50px', background: colors.midnight, borderRadius: '14px', 
    display: 'flex', alignItems: 'center', justifyContent: 'center', 
    fontSize: '24px', margin: '0 auto 15px'
  },
  cardTitle: { color: colors.midnight, fontSize: '20px', fontWeight: '800', marginBottom: '10px' },
  cardText: { color: colors.slate, lineHeight: '1.5', fontSize: '14px', margin: 0 },
  
  edgeSection: { 
    background: colors.midnight, 
    borderRadius: '24px', 
    marginBottom: '60px',
    color: colors.white,
    boxShadow: "0 15px 35px -10px rgba(0,27,54,0.25)"
  },
  sectionHeader: { textAlign: 'center', marginBottom: '35px' },
  subTitle: { fontWeight: '900', marginBottom: '8px' },
  subTitleDesc: { color: 'rgba(255,255,255,0.4)', fontSize: '14px', letterSpacing: '1px' },
  
  featureGrid: { display: 'grid', gap: '30px' },
  featureItem: { display: 'flex', gap: '12px' },
  featureIcon: { fontSize: '20px' },
  featureTitle: { color: colors.premiumGold, fontSize: '17px', fontWeight: '700', margin: '0 0 4px' },
  featureDesc: { color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: '1.4', margin: 0 },
  
  statsContainer: { display: 'grid', textAlign: 'center', gap: '20px' },
  pillar: { padding: '5px' },
  pillarNum: { color: colors.midnight, fontSize: '36px', fontWeight: '900', margin: 0 },
  pillarText: { fontSize: '11px', color: colors.premiumGold, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px' }
};

export default About;