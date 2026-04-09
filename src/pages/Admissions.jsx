import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, FileText, UserPlus, ArrowRight } from 'lucide-react';

// --- UPDATED BRAND PALETTE (Aligned with Contact Page) ---
const colors = { 
  primary: "#002147",   // Deep Navy Blue
  accent: "#C9A227",    // Brand Gold
  textMain: "#0F172A",  // Deep Slate for headers
  textSub: "#475569",   // Professional Gray for body
  glassBg: "rgba(255, 255, 255, 0.7)",
  glassBorder: "rgba(255, 255, 255, 0.5)",
  pageBg: "#F0F4F8"     // Matches Contact Page background
};

const Admissions = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 820);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const steps = [
    { icon: <FileText size={22}/>, title: "Enquiry", desc: "Consultation with our academic advisors and campus overview." },
    { icon: <UserPlus size={22}/>, title: "Interaction", desc: "Holistic evaluation session involving students and parents." },
    { icon: <Calendar size={22}/>, title: "Registration", desc: "Formal documentation and application processing." },
    { icon: <CheckCircle2 size={22}/>, title: "Enrollment", desc: "Finalizing admission for the 2026-27 session." }
  ];

  const documents = [
    "Birth Certificate (Original + Copy)",
    "Transfer Certificate (Previous School)",
    "Academic Progress Records",
    "Passport-size Photographs (4)",
    "Aadhar Identification (Student & Parents)"
  ];

  // Animation Variants
  const containerFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div style={styles.pageWrapper}>
      <motion.div 
        style={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerFade}
      >
        {/* --- HEADER --- */}
        <motion.header variants={fadeInUp} style={styles.header}>
          <div style={styles.badge}>ADMISSIONS OPEN 2026-27</div>
          <h1 style={{...styles.mainTitle, fontSize: isMobile ? '32px' : '48px'}}>
            A Legacy of <span style={{color: colors.accent}}>Academic Distinction</span>
          </h1>
          <p style={styles.headerDesc}>
            Join our diverse learning community. We are currently accepting applications for the upcoming academic session.
          </p>
          <div style={styles.goldLine} />
        </motion.header>

        {/* --- PROCESS STEPS --- */}
        <section style={styles.sectionSpace}>
          <div style={{...styles.stepGrid, gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)'}}>
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp} 
                style={styles.glassCard}
                whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.9)", boxShadow: '0 20px 40px rgba(0,33,71,0.08)' }}
              >
                <div style={styles.iconCircle}>{step.icon}</div>
                <h3 style={styles.cardTitle}>{step.title}</h3>
                <p style={styles.cardText}>{step.desc}</p>
                <div style={styles.stepIndicator}>{index + 1}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <div style={{...styles.contentGrid, gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr'}}>
          
          {/* Age Criteria */}
          <motion.div variants={fadeInUp} style={styles.morphismBox}>
            <h3 style={styles.boxTitle}>Age Eligibility</h3>
            <p style={styles.boxSub}>Criteria calculated as of June 1st of the joining year.</p>
            <div style={styles.tableScroll}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Grade Level</th>
                    <th style={{...styles.th, textAlign: 'right'}}>Min. Age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={styles.tr}><td style={styles.td}>Nursery</td><td style={styles.tdValue}>3 Years</td></tr>
                  <tr style={styles.tr}><td style={styles.td}>LKG / UKG</td><td style={styles.tdValue}>4 / 5 Years</td></tr>
                  <tr style={styles.tr}><td style={styles.td}>Grade I</td><td style={styles.tdValue}>6 Years</td></tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Documents */}
          <motion.div 
            variants={fadeInUp} 
            style={{ ...styles.morphismBox, backgroundColor: colors.primary, color: 'white' }}
          >
            <h3 style={{ ...styles.boxTitle, color: colors.accent, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              Required Portfolio
            </h3>
            <ul style={styles.list}>
              {documents.map((doc, i) => (
                <li key={i} style={styles.listItem}>
                  <CheckCircle2 size={18} color={colors.accent} style={{marginRight: '12px', flexShrink: 0}} />
                  <span style={{color: 'rgba(255,255,255,0.85)', fontSize: '15px'}}>{doc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* --- CALL TO ACTION --- */}
        <motion.section 
          variants={fadeInUp} 
          style={{...styles.ctaBanner, textAlign: isMobile ? 'center' : 'left'}}
        >
          <div style={{flex: 1}}>
            <h2 style={styles.ctaTitle}>Plan Your Visit</h2>
            <p style={styles.ctaText}>Experience our campus infrastructure and meet our faculty.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={styles.ctaBtn} 
            onClick={() => navigate("/contact")}
          >
            Schedule Tour <ArrowRight size={18} style={{marginLeft: '10px'}}/>
          </motion.button>
        </motion.section>

      </motion.div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: colors.pageBg,
    minHeight: '100vh',
    paddingTop: '140px', 
    paddingBottom: '80px',
    fontFamily: "'Inter', sans-serif",
    backgroundImage: `radial-gradient(at 0% 0%, rgba(201, 162, 39, 0.05) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 33, 71, 0.05) 0, transparent 50%)`
  },
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 24px' },
  header: { textAlign: 'center', marginBottom: '60px' },
  badge: { 
    color: colors.accent, letterSpacing: '2px', fontSize: '11px', fontWeight: '800', 
    marginBottom: '16px', textTransform: 'uppercase', background: 'rgba(201, 162, 39, 0.1)',
    display: 'inline-block', padding: '6px 16px', borderRadius: '100px'
  },
  mainTitle: { color: colors.primary, fontWeight: '900', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px' },
  headerDesc: { color: colors.textSub, fontSize: '16px', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 24px' },
  goldLine: { width: '40px', height: '4px', background: colors.accent, margin: '0 auto' },
  
  sectionSpace: { marginBottom: '80px' },
  stepGrid: { display: 'grid', gap: '24px' },
  glassCard: {
    backgroundColor: colors.glassBg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: '40px 28px',
    borderRadius: '24px',
    border: `1px solid ${colors.glassBorder}`,
    position: 'relative',
    transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 30px -10px rgba(0,33,71,0.05)'
  },
  iconCircle: {
    width: '46px', height: '46px', borderRadius: '12px',
    backgroundColor: colors.primary, color: colors.accent,
    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
  },
  cardTitle: { color: colors.primary, fontSize: '20px', fontWeight: '800', marginBottom: '12px' },
  cardText: { color: colors.textSub, fontSize: '14px', lineHeight: '1.6', fontWeight: '500' },
  stepIndicator: { 
    position: 'absolute', top: '20px', right: '25px', 
    fontSize: '44px', fontWeight: '900', color: 'rgba(0, 33, 71, 0.03)' 
  },

  contentGrid: { display: 'grid', gap: '30px', marginBottom: '60px' },
  morphismBox: {
    padding: '40px', borderRadius: '30px',
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: 'blur(20px)',
    border: `1px solid ${colors.glassBorder}`,
    boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
  },
  boxTitle: { fontSize: '22px', color: colors.primary, marginBottom: '24px', fontWeight: '800', paddingBottom: '16px' },
  boxSub: { marginBottom: '20px', color: colors.textSub, fontSize: '14px', fontWeight: '600' },
  
  tableScroll: { overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { padding: '16px 0', color: colors.primary, fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', borderBottom: `2px solid ${colors.primary}` },
  tr: { transition: '0.2s' },
  td: { padding: '20px 0', borderBottom: '1px solid #E2E8F0', color: colors.textMain, fontSize: '15px', fontWeight: '700' },
  tdValue: { padding: '20px 0', borderBottom: '1px solid #E2E8F0', color: colors.accent, fontSize: '15px', fontWeight: '800', textAlign: 'right' },
  
  list: { listStyle: 'none', padding: 0 },
  listItem: { marginBottom: '20px', display: 'flex', alignItems: 'flex-start' },
  
  ctaBanner: {
    background: colors.primary,
    padding: '50px', borderRadius: '32px', display: 'flex', 
    justifyContent: 'space-between', alignItems: 'center', gap: '30px',
    flexWrap: 'wrap', boxShadow: '0 30px 60px -15px rgba(0, 33, 71, 0.3)'
  },
  ctaTitle: { color: '#FFF', fontSize: '28px', margin: '0 0 8px', fontWeight: '900' },
  ctaText: { color: 'rgba(255,255,255,0.6)', fontSize: '16px', margin: 0 },
  ctaBtn: {
    padding: '16px 36px', backgroundColor: colors.accent, color: colors.primary, border: 'none', borderRadius: '14px',
    fontWeight: '800', cursor: 'pointer', fontSize: '15px', display: 'flex', alignItems: 'center', textTransform: 'uppercase', letterSpacing: '1px',
    boxShadow: '0 10px 20px rgba(201, 162, 39, 0.2)'
  }
};

export default Admissions;