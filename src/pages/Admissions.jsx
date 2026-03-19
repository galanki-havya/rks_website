import React from 'react';
import { useNavigate } from "react-router-dom";

// Standardized Brand Palette
const colors = { 
  midnight: "#001B36", 
  premiumGold: "#B38B45", 
  softGold: "rgba(179, 139, 69, 0.1)",
  white: "#FFFFFF",
  slate: "#64748b",
  offWhite: "#F8FAFC",
  border: "rgba(0, 27, 54, 0.08)"
};

const Admissions = () => {
  const navigate = useNavigate();

  const steps = [
    { num: "01", title: "Enquiry", desc: "Visit our campus for a personalized walkthrough and collect the school prospectus." },
    { num: "02", title: "Interaction", desc: "A friendly session with the student and parents to align on educational goals." },
    { num: "03", title: "Registration", desc: "Submit the formal application along with the required processing documentation." },
    { num: "04", title: "Admission", desc: "Finalize the enrollment and secure the seat for the upcoming academic year." }
  ];

  const documents = [
    "Birth Certificate (Original + Copy)",
    "Transfer Certificate (Previous School)",
    "Previous Academic Progress Report",
    "4 Passport-size photographs",
    "Aadhar Card (Student & Parents)"
  ];

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        
        {/* --- HERO HEADER --- */}
        <header style={styles.header}>
          <span style={styles.accent}>ADMISSIONS 2026-27</span>
          <h1 style={styles.mainTitle}>Begin Your <span style={{color: colors.premiumGold}}>Journey</span></h1>
          <p style={styles.headerDesc}>
            Join a community dedicated to excellence. We are now accepting applications 
            for Play School through Grade X for the upcoming academic session.
          </p>
          <div style={styles.underline} />
        </header>

        {/* --- ADMISSION STEPS --- */}
        <section style={styles.sectionMargin}>
          <div style={styles.centeredHeader}>
            <h2 style={styles.sectionTitle}>The Enrollment Process</h2>
          </div>
          <div style={styles.stepGrid}>
            {steps.map((step, index) => (
              <div key={index} style={styles.stepCard}>
                <span style={styles.stepNumber}>{step.num}</span>
                <h3 style={styles.cardTitle}>{step.title}</h3>
                <p style={styles.cardText}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- ELIGIBILITY & DOCUMENTS --- */}
        <div style={styles.twoColumnGrid}>
          
          {/* Eligibility Table */}
          <div style={styles.contentBox}>
            <h3 style={styles.boxTitle}>Age Eligibility</h3>
            <p style={{ marginBottom: '20px', color: colors.slate, fontSize: '15px' }}>
              Minimum age requirement as of June 1st of the joining year:
            </p>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHead}>
                  <th style={styles.th}>Grade</th>
                  <th style={styles.th}>Minimum Age</th>
                </tr>
              </thead>
              <tbody>
                <tr style={styles.tr}><td style={styles.td}>Nursery</td><td style={styles.td}>3 Years</td></tr>
                <tr style={styles.tr}><td style={styles.td}>LKG / UKG</td><td style={styles.td}>4 / 5 Years</td></tr>
                <tr style={styles.tr}><td style={styles.td}>Grade I</td><td style={styles.td}>6 Years</td></tr>
              </tbody>
            </table>
          </div>

          {/* Document Checklist */}
          <div style={{ ...styles.contentBox, backgroundColor: colors.midnight, color: colors.white }}>
            <h3 style={{ ...styles.boxTitle, color: colors.premiumGold, borderBottomColor: 'rgba(255,255,255,0.1)' }}>
              Required Documents
            </h3>
            <ul style={styles.docList}>
              {documents.map((doc, i) => (
                <li key={i} style={styles.docItem}>
                  <span style={{color: colors.premiumGold, marginRight: '10px'}}>✓</span> {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- CALL TO ACTION --- */}
        <section style={styles.ctaBanner}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaH2}>Ready to experience our campus?</h2>
            <p style={styles.ctaP}>Schedule a visit to witness our learning environment firsthand.</p>
          </div>
          <button style={styles.ctaBtn} onClick={() => navigate("/contact")}>
            Schedule a Tour
          </button>
        </section>

      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: colors.white,
    minHeight: '100vh',
    paddingTop: '160px', // Increased from 120px to move content down
    paddingBottom: '80px',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 25px',
  },
  header: { 
    textAlign: 'center', 
    marginBottom: '60px', 
    maxWidth: '800px', 
    margin: '0 auto 60px' 
  },
  accent: { 
    color: colors.premiumGold, 
    letterSpacing: '3px', 
    fontSize: '11px', 
    fontWeight: '700', 
    marginBottom: '10px', 
    display: 'block' 
  },
  mainTitle: { 
    color: colors.midnight, 
    fontSize: 'clamp(32px, 5vw, 48px)', 
    fontWeight: '800', 
    lineHeight: '1.2', 
    marginBottom: '20px' 
  },
  headerDesc: { 
    color: colors.slate, 
    fontSize: '17px', 
    lineHeight: '1.6', 
    marginBottom: '25px' 
  },
  underline: { width: '50px', height: '3px', background: colors.premiumGold, margin: '0 auto' },
  
  sectionMargin: { marginBottom: '80px' },
  centeredHeader: { textAlign: 'center', marginBottom: '40px' },
  sectionTitle: { color: colors.midnight, fontSize: '32px', fontWeight: '800' },
  
  stepGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
  },
  stepCard: {
    backgroundColor: colors.offWhite,
    padding: '45px 30px',
    borderRadius: '20px',
    textAlign: 'left',
    position: 'relative',
    border: `1px solid ${colors.border}`,
  },
  stepNumber: {
    fontSize: '50px',
    fontWeight: '900',
    color: colors.softGold,
    position: 'absolute',
    top: '10px',
    right: '20px',
    lineHeight: 1
  },
  cardTitle: { color: colors.midnight, fontSize: '20px', fontWeight: '800', marginBottom: '12px', position: 'relative' },
  cardText: { color: colors.slate, fontSize: '15px', lineHeight: '1.6' },

  twoColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '80px',
  },
  contentBox: {
    padding: '45px',
    borderRadius: '25px',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
  },
  boxTitle: {
    fontSize: '22px',
    color: colors.midnight,
    marginBottom: '25px',
    borderBottom: `2px solid ${colors.softGold}`,
    paddingBottom: '10px',
    fontWeight: '800'
  },
  table: { width: '100%', borderCollapse: 'collapse' },
  tableHead: { textAlign: 'left' },
  th: { padding: '12px 8px', color: colors.midnight, fontSize: '14px', fontWeight: '700', textTransform: 'uppercase' },
  td: { padding: '15px 8px', borderBottom: `1px solid ${colors.border}`, color: colors.slate, fontSize: '15px' },
  
  docList: { listStyle: 'none', padding: 0 },
  docItem: { marginBottom: '18px', fontSize: '16px', display: 'flex', alignItems: 'center', lineHeight: '1.4' },
  
  ctaBanner: {
    background: `linear-gradient(135deg, ${colors.midnight} 0%, #003366 100%)`,
    padding: '50px',
    borderRadius: '25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '30px'
  },
  ctaContent: { flex: 1, minWidth: '300px' },
  ctaH2: { color: colors.white, fontSize: '28px', margin: '0 0 10px', fontWeight: '800' },
  ctaP: { color: 'rgba(255,255,255,0.7)', fontSize: '17px', margin: 0 },
  ctaBtn: {
    padding: '18px 45px',
    backgroundColor: colors.premiumGold,
    color: colors.midnight,
    border: 'none',
    borderRadius: '4px',
    fontWeight: '800',
    cursor: 'pointer',
    fontSize: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: '0.3s'
  }
};

export default Admissions;