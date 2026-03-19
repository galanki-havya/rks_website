import React from "react";

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

const Academics = () => {
  const levels = [
    {
      title: "Primary School",
      grades: "Grades I - V",
      focus: "Foundational Literacy & Numeracy",
      description: "Activity-based learning designed to spark curiosity and build a strong foundation in core concepts.",
      icon: "🌱"
    },
    {
      title: "Middle School",
      grades: "Grades VI - VIII",
      focus: "Exploration & Skill Building",
      description: "Integrated IIT/NEET foundation courses begin here, fostering critical thinking and analytical research.",
      icon: "📘"
    },
    {
      title: "High School",
      grades: "Grades IX - X",
      focus: "Excellence & Board Readiness",
      description: "Rigorous academic preparation combined with advanced competitive exam coaching and counseling.",
      icon: "🎓"
    },
    {
      title: "Higher Secondary",
      grades: "Grades XI - XII",
      focus: "Specialization & Mastery",
      description: "Stream-specific expertise (MPC/BiPC) designed to bridge the gap between school and university life.",
      icon: "🚀"
    }
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* --- HERO HEADER --- */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <span style={styles.accent}>CURRICULUM & PEDAGOGY</span>
          {/* UPDATED COLOR HERE: Academic is now White */}
          <h1 style={styles.heroTitle}>
            <span style={{color: colors.white}}>Academic</span> <span style={{color: colors.premiumGold}}>Excellence</span>
          </h1>
          <p style={styles.heroSubtitle}>
            A balanced curriculum that merges innovation with discipline, 
            preparing students for global challenges through conceptual clarity.
          </p>
          <div style={styles.underline} />
        </div>
      </section>

      <div style={styles.container}>
        {/* --- METHODOLOGY SECTION --- */}
        <section style={styles.sectionMargin}>
          <div style={styles.philosophyCard}>
            <div style={styles.flexRow}>
              <div style={styles.philText}>
                <h3 style={styles.sectionTitle}>The RKS Methodology</h3>
                <p style={styles.text}>
                  At RKS Next Gen, we follow an integrated curriculum that combines 
                  national standards with modern pedagogical techniques. Our 
                  <strong> "Innovation • Discipline • Success"</strong> framework ensures 
                  that students aren't just memorizing, but truly understanding.
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
        </section>

        {/* --- ACADEMIC LEVELS GRID --- */}
        <div style={styles.grid}>
          {levels.map((level, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconCircle}>{level.icon}</div>
              <h3 style={styles.cardTitle}>{level.title}</h3>
              <p style={styles.grades}>{level.grades}</p>
              <div style={styles.focusBadge}>Focus: {level.focus}</div>
              <p style={styles.cardDesc}>{level.description}</p>
            </div>
          ))}
        </div>

        {/* --- KEY HIGHLIGHTS (Dark Section) --- */}
        <section style={styles.featuresSection}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitleLight}>Academic Highlights</h3>
            <p style={{color: 'rgba(255,255,255,0.6)'}}>Built for the 21st-century learner.</p>
          </div>
          <div style={styles.featureGrid}>
            {[
              "Digitally enabled smart classrooms",
              "Personalized attention & remedial support",
              "Olympiad & Foundation integrated coaching",
              "Advanced Science & Computer Laboratories",
              "Language labs for communication mastery",
              "Comprehensive Library & Research center"
            ].map((feature, i) => (
              <div key={i} style={styles.featureItem}>
                <span style={styles.check}>✓</span> {feature}
              </div>
            ))}
          </div>
        </section>

        {/* --- HOLISTIC SECTION --- */}
        <section style={styles.holisticSection}>
          <div style={styles.centeredHeader}>
            <h3 style={styles.sectionTitle}>Beyond the Classroom</h3>
            <p style={styles.textCenter}>
              We empower students to explore their passions through professional coaching and leadership programs.
            </p>
          </div>
          <div style={styles.holisticGrid}>
            <div style={styles.holisticItem}>
              <h4 style={styles.hTitle}>🏆 Sports & Athletics</h4>
              <p style={styles.hDesc}>Professional training in basketball, football, and swimming to foster teamwork.</p>
            </div>
            <div style={styles.holisticItem}>
              <h4 style={styles.hTitle}>🎨 Arts & Culture</h4>
              <p style={styles.hDesc}>Dedicated studios for music, dance, and visual arts to encourage creativity.</p>
            </div>
            <div style={styles.holisticItem}>
              <h4 style={styles.hTitle}>📢 Leadership</h4>
              <p style={styles.hDesc}>Student Council and Debate Clubs to build public speaking and confidence.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: colors.white,
    minHeight: "100vh",
    paddingBottom: "80px",
  },
  hero: {
    backgroundColor: colors.midnight,
    color: colors.white,
    padding: "160px 20px 100px",
    textAlign: "center",
  },
  accent: { 
    color: colors.premiumGold, 
    letterSpacing: '3px', 
    fontSize: '11px', 
    fontWeight: '700', 
    marginBottom: '10px', 
    display: 'block' 
  },
  heroTitle: {
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: "800",
    margin: "0 0 20px 0",
  },
  heroSubtitle: {
    fontSize: "18px",
    maxWidth: "700px",
    margin: "auto",
    color: "rgba(255,255,255,0.7)",
    lineHeight: "1.6"
  },
  underline: { width: '50px', height: '3px', background: colors.premiumGold, margin: '25px auto 0' },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 25px",
  },
  sectionMargin: { marginTop: "-50px", marginBottom: "60px" },
  philosophyCard: {
    backgroundColor: colors.white,
    padding: "45px",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
    border: `1px solid ${colors.border}`,
  },
  flexRow: { display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center' },
  philText: { flex: '2', minWidth: '300px' },
  philStats: { 
    flex: '1', 
    display: 'flex', 
    gap: '15px', 
    minWidth: '200px',
    justifyContent: 'center'
  },
  miniStat: {
    textAlign: 'center',
    padding: '20px',
    background: colors.offWhite,
    borderRadius: '15px',
    flex: 1
  },
  statVal: { display: 'block', fontSize: '24px', fontWeight: '800', color: colors.midnight },
  statLab: { fontSize: '12px', color: colors.premiumGold, fontWeight: '700', textTransform: 'uppercase' },
  sectionTitle: { color: colors.midnight, fontSize: "28px", fontWeight: '800', marginBottom: "15px" },
  text: { color: colors.slate, lineHeight: "1.7", fontSize: "16px" },
  
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
    marginBottom: "80px",
  },
  card: {
    backgroundColor: colors.offWhite,
    padding: "40px 30px",
    borderRadius: "20px",
    border: `1px solid ${colors.border}`,
    transition: '0.3s'
  },
  iconCircle: {
    width: '60px', height: '60px', background: colors.white, borderRadius: '15px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '30px', marginBottom: '20px', boxShadow: '0 8px 15px rgba(0,0,0,0.03)'
  },
  cardTitle: { color: colors.midnight, fontSize: '20px', fontWeight: '800', marginBottom: "8px" },
  grades: { color: colors.premiumGold, fontWeight: "700", fontSize: "13px", marginBottom: "15px", textTransform: 'uppercase' },
  focusBadge: { 
    display: 'inline-block', padding: '5px 12px', background: colors.softGold, 
    color: colors.premiumGold, borderRadius: '6px', fontSize: '12px', fontWeight: '700', marginBottom: '15px' 
  },
  cardDesc: { color: colors.slate, fontSize: "14px", lineHeight: "1.6" },

  featuresSection: {
    backgroundColor: colors.midnight,
    color: colors.white,
    padding: "60px 50px",
    borderRadius: "25px",
    marginBottom: "80px",
  },
  sectionHeader: { textAlign: 'center', marginBottom: '40px' },
  sectionTitleLight: { color: colors.white, fontSize: "30px", fontWeight: '800', marginBottom: "10px" },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  featureItem: { fontSize: "15px", display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.8)' },
  check: { color: colors.premiumGold, marginRight: '10px', fontWeight: 'bold' },

  holisticSection: { marginBottom: "80px" },
  centeredHeader: { textAlign: 'center', marginBottom: '40px' },
  textCenter: { color: colors.slate, fontSize: "17px", maxWidth: "600px", margin: "0 auto" },
  holisticGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  holisticItem: {
    padding: "30px",
    borderRadius: "20px",
    backgroundColor: colors.white,
    border: `1px solid ${colors.border}`,
    boxShadow: '0 10px 25px rgba(0,0,0,0.02)'
  },
  hTitle: { color: colors.midnight, marginBottom: '12px', fontWeight: '800' },
  hDesc: { color: colors.slate, fontSize: '14px', lineHeight: '1.6' }
};

export default Academics;