import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Monitor, Microscope, Cpu, Library, Bus, 
  Dumbbell, ShieldCheck, Waves, Droplets, HeartPulse,
  Sparkles 
} from 'lucide-react';

const colors = { 
  primary: "#002147",   
  accent: "#C9A227",    
  accentLight: "rgba(201, 162, 39, 0.12)",
  textMain: "#0F172A",  
  textSub: "#475569",   
  glassBg: "rgba(255, 255, 255, 0.7)", 
  glassBorder: "rgba(255, 255, 255, 0.5)",
  pageBg: "#F8FAFC"     
};

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const containerVar = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition }
};

const facilityList = [
  { title: "Smart Classrooms", desc: "Interactive digital ecosystems with immersive visual learning.", icon: <Monitor size={22}/> },
  { title: "Advanced Labs", desc: "Specialized Science labs meeting international research standards.", icon: <Microscope size={22}/> },
  { title: "STEM Center", desc: "Robotics modules, AI kits, and high-compute workstations.", icon: <Cpu size={22}/> },
  { title: "Knowledge Hub", desc: "Multi-level library with 10,000+ curated volumes.", icon: <Library size={22}/> },
  { title: "Secure Transport", desc: "Premium GPS-tracked fleet with real-time analytics.", icon: <Bus size={22}/> },
  { title: "Indoor Arena", desc: "Acoustically treated hall for Yoga and Martial Arts.", icon: <Dumbbell size={22}/> },
];

const Facilities = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVar}
        style={styles.container}
      >
        {/* --- HERO HEADER --- */}
        <motion.header variants={fadeInUp} style={styles.header}>
          <div style={styles.badge}>
            <Sparkles size={12} style={{ marginRight: 6 }} />
            Infrastructure
          </div>
          <h1 style={{...styles.mainTitle, fontSize: isMobile ? '30px' : '48px'}}>
            Environment for <span style={{color: colors.accent}}>Excellence</span>
          </h1>
          <p style={{...styles.headerDesc, fontSize: isMobile ? '14px' : '16px'}}>
            A secure, technologically advanced campus designed for holistic development.
          </p>
        </motion.header>

        {/* --- FACILITIES GRID --- */}
        <div style={{
          ...styles.grid, 
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? "12px" : "20px"
        }}>
          {facilityList.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp} 
              whileHover={!isMobile ? { y: -5, backgroundColor: "rgba(255,255,255,0.9)" } : {}}
              style={styles.glassCard}
            >
              <div style={styles.iconCircle}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- SPORTS --- */}
        <motion.section variants={fadeInUp} style={{...styles.wideSection, padding: isMobile ? "30px 16px" : "50px 40px"}}>
          <div style={styles.centeredHeader}>
            <h2 style={{...styles.sectionTitle, fontSize: isMobile ? "24px" : "32px"}}>Athletic Infrastructure</h2>
            <div style={styles.goldLine} />
          </div>
          
          <div style={{
            ...styles.sportsGrid, 
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "12px"
          }}>
            {[
              { n: "Olympic Track", d: "All-weather field surface.", i: "🏟️" },
              { n: "Basketball Pavilion", d: "Standard synthetic flooring.", i: "🏀" },
              { n: "Cricket Academy", d: "Practice nets & machines.", i: "🏏" },
              { n: "Football Turf", d: "Lush field for tournaments.", i: "⚽" }
            ].map((sport, idx) => (
              <motion.div key={idx} whileHover={{ x: 5 }} style={styles.sportCard}>
                <span style={{fontSize: "24px"}}>{sport.i}</span>
                <div>
                  <h4 style={styles.sportName}>{sport.n}</h4>
                  <p style={styles.cardText}>{sport.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- SAFETY --- */}
        <motion.section variants={fadeInUp} style={{...styles.safetySection, padding: isMobile ? "35px 20px" : "50px"}}>
          <div style={styles.safetyContent}>
            <h2 style={styles.safetyTitle}>Safety & Wellbeing</h2>
            <p style={styles.safetyDesc}>24/7 HD CCTV monitoring and on-campus medical infirmary.</p>
            <div style={{...styles.badgeRow, gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)"}}>
              {[
                { icon: <ShieldCheck size={14} />, text: "24/7 CCTV" },
                { icon: <Droplets size={14} />, text: "RO WATER" },
                { icon: <Waves size={14} />, text: "FIRE SAFE" },
                { icon: <HeartPulse size={14} />, text: "INFIRMARY" }
              ].map((b, i) => (
                <div key={i} style={styles.safetyBadge}>{b.icon} {b.text}</div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: colors.pageBg,
    minHeight: '100vh',
    padding: '80px 0 40px', 
    fontFamily: "'Inter', sans-serif",
    backgroundImage: `radial-gradient(at 0% 0%, rgba(201, 162, 39, 0.04) 0, transparent 50%)`
  },
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' },
  header: { textAlign: 'center', marginBottom: '40px' },
  badge: { 
    color: colors.accent, letterSpacing: '1px', fontSize: '10px', fontWeight: '800', 
    marginBottom: '12px', textTransform: 'uppercase', background: colors.accentLight,
    display: 'inline-flex', alignItems: 'center', padding: '6px 14px', borderRadius: '100px'
  },
  mainTitle: { color: colors.primary, fontWeight: '900', lineHeight: '1.2', marginBottom: '12px' },
  headerDesc: { color: colors.textSub, lineHeight: '1.6', maxWidth: '550px', margin: '0 auto' },
  
  grid: { display: "grid", marginBottom: "40px" },
  glassCard: {
    backgroundColor: colors.glassBg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: '30px 24px',
    borderRadius: '24px',
    border: `1px solid ${colors.glassBorder}`,
    boxShadow: '0 10px 30px -10px rgba(0,33,71,0.05)'
  },
  iconCircle: {
    width: '44px', height: '44px', borderRadius: '12px',
    backgroundColor: colors.primary, color: colors.accent,
    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px'
  },
  cardTitle: { color: colors.primary, fontSize: '18px', fontWeight: '800', marginBottom: '8px' },
  cardText: { color: colors.textSub, fontSize: '14px', lineHeight: '1.5' },

  wideSection: {
    background: "#FFF",
    borderRadius: "32px",
    border: `1px solid #E2E8F0`,
    marginBottom: "40px",
  },
  centeredHeader: { textAlign: 'center', marginBottom: '24px' },
  sectionTitle: { color: colors.primary, fontWeight: '900' },
  goldLine: { width: '40px', height: '3px', background: colors.accent, margin: '8px auto' },
  
  sportsGrid: { display: "grid" },
  sportCard: {
    display: "flex", alignItems: "center", gap: "16px", padding: "18px",
    background: "#F8FAFC", borderRadius: "20px", border: `1px solid #F1F5F9`
  },
  sportName: { color: colors.primary, margin: '0 0 2px 0', fontWeight: '800', fontSize: '16px' },

  safetySection: { background: colors.primary, borderRadius: "32px", color: '#FFF' },
  safetyContent: { textAlign: "center", maxWidth: "700px", margin: "0 auto" },
  safetyTitle: { color: colors.accent, fontWeight: '900', fontSize: "28px", marginBottom: "8px" },
  safetyDesc: { color: "rgba(255,255,255,0.7)", marginBottom: "24px", fontSize: '15px' },
  badgeRow: { display: "grid", gap: "10px" },
  safetyBadge: {
    background: "rgba(255,255,255,0.06)", padding: "14px", borderRadius: "12px",
    fontSize: '11px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
  }
};

export default Facilities;