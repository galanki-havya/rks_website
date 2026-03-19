import React from 'react';

// Consistent Brand Palette
const colors = { 
  midnight: "#001B36", 
  premiumGold: "#B38B45", 
  softGold: "rgba(179, 139, 69, 0.1)",
  bg: "#F8FAFC", 
  white: "#ffffff",
  slate: "#64748b",
  border: "rgba(0, 27, 54, 0.08)"
};

const About = () => {
  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        
        {/* --- HERO HEADER --- */}
        <div style={styles.header}>
          <span style={styles.accent}>ESTABLISHED 2011</span>
          <h1 style={styles.mainTitle}>Shaping Future-Ready <br/><span style={{color: colors.premiumGold}}>Global Citizens</span></h1>
          <p style={styles.headerDesc}>
            Powered by RK Group of Educational Institutions, RKS Next Gen School is dedicated 
            to providing world-class education that nurtures academic excellence and strong character.
          </p>
          <div style={styles.underline} />
        </div>

        {/* --- MISSION & VISION --- */}
        <div style={styles.missionGrid}>
          <div style={styles.glassCard}>
            <div style={styles.iconCircle}>👁️</div>
            <h2 style={styles.cardTitle}>Our Vision</h2>
            <p style={styles.cardText}>
              To be a global leader in education by cultivating strong values, exceptional academic skills, 
              and holistic personality growth, ensuring every child discovers their full potential.
            </p>
          </div>
          <div style={styles.glassCard}>
            <div style={styles.iconCircle}>🎯</div>
            <h2 style={styles.cardTitle}>Our Mission</h2>
            <p style={styles.cardText}>
              To guide young minds through concept-based learning and activity-oriented education, 
              preparing them for a successful tomorrow with leadership qualities.
            </p>
          </div>
        </div>

        {/* --- THE RKS EDGE --- */}
        <section style={styles.contentSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.subTitle}>The RKS Edge</h2>
            <p style={styles.subTitleDesc}>Modern teaching across our Day Cum Residential campuses.</p>
          </div>
          
          <div style={styles.featureGrid}>
            {[
              { t: "IIT-JEE & NEET Foundation", d: "Specialized integrated coaching starting from Grade VI.", i: "🚀" },
              { t: "Concept-Based Learning", d: "Focus on deep understanding & practical application.", i: "💡" },
              { t: "Skill Development", d: "Abacus, Vedic Mathematics, and Speed Maths programs.", i: "🧠" },
              { t: "Digital Excellence", d: "Smart classrooms and advanced Science/Computer labs.", i: "💻" },
              { t: "Holistic Wellness", d: "Yoga, Meditation, and Physical Training.", i: "🧘" },
              { t: "Safe Environment", d: "Pollution-free campus with safe transport.", i: "🌳" }
            ].map((f, idx) => (
              <div key={idx} style={styles.featureItem}>
                <div style={styles.featureIcon}>{f.i}</div>
                <div style={styles.featureText}>
                  <h3 style={styles.featureTitle}>{f.t}</h3>
                  <p style={styles.featureDesc}>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- STATS / PILLARS --- */}
        <div style={styles.pillarsContainer}>
          {[
            { n: "13+", l: "Years Excellence" },
            { n: "100%", l: "Individual Focus" },
            { n: "2", l: "Modern Campuses" },
            { n: "10+", l: "Activities" }
          ].map((p, i) => (
            <div key={i} style={styles.pillar}>
              <h3 style={styles.pillarNum}>{p.n}</h3>
              <p style={styles.pillarText}>{p.l}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const styles = {
  pageWrapper: { 
    paddingTop: '100px', // Reduced from 160px
    paddingBottom: '60px', // Reduced from 100px
    background: colors.white, 
    minHeight: '100vh',
  },
  container: { 
    maxWidth: '1100px', 
    margin: '0 auto', 
    padding: '0 25px' 
  },
  header: { 
    textAlign: 'center', 
    marginBottom: '50px', // Reduced from 80px
    maxWidth: '800px', 
    margin: '0 auto 50px' 
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
    fontSize: 'clamp(28px, 4.5vw, 44px)', 
    fontWeight: '800', 
    lineHeight: '1.2', 
    marginBottom: '15px' 
  },
  headerDesc: { 
    color: colors.slate, 
    fontSize: '16px', 
    lineHeight: '1.5', 
    marginBottom: '20px' 
  },
  underline: { width: '50px', height: '3px', background: colors.premiumGold, margin: '0 auto' },
  
  missionGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '20px', // Reduced from 30px
    marginBottom: '60px' // Reduced from 100px
  },
  glassCard: { 
    background: colors.offWhite, 
    padding: '35px 30px', // Tightened
    borderRadius: '20px', 
    textAlign: 'center',
    border: `1px solid ${colors.border}`,
  },
  iconCircle: { 
    width: '60px', height: '60px', background: colors.white, borderRadius: '15px', 
    display: 'flex', alignItems: 'center', justifyContent: 'center', 
    fontSize: '28px', margin: '0 auto 20px', boxShadow: '0 8px 15px rgba(0,0,0,0.05)'
  },
  cardTitle: { color: colors.midnight, fontSize: '20px', fontWeight: '800', marginBottom: '10px' },
  cardText: { color: colors.slate, lineHeight: '1.6', fontSize: '15px' },
  
  contentSection: { 
    background: colors.midnight, 
    padding: '50px 40px', // Reduced from 80/60
    borderRadius: '25px', 
    marginBottom: '60px',
    color: colors.white
  },
  sectionHeader: { textAlign: 'center', marginBottom: '40px' },
  subTitle: { fontSize: '30px', fontWeight: '800', marginBottom: '8px' },
  subTitleDesc: { color: 'rgba(255,255,255,0.6)', fontSize: '16px' },
  
  featureGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '30px' 
  },
  featureItem: { display: 'flex', alignItems: 'flex-start', gap: '15px' },
  featureIcon: { 
    fontSize: '24px', 
    background: 'rgba(255,255,255,0.05)', 
    minWidth: '50px', 
    height: '50px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  featureText: { flex: 1 },
  featureTitle: { color: colors.premiumGold, fontSize: '17px', fontWeight: '700', margin: '0 0 5px' },
  featureDesc: { color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.5', margin: 0 },
  
  pillarsContainer: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    flexWrap: 'wrap', 
    gap: '20px', 
    textAlign: 'center',
    padding: '10px 0'
  },
  pillar: { flex: 1, minWidth: '140px' },
  pillarNum: { color: colors.midnight, fontSize: '32px', fontWeight: '900', margin: 0 },
  pillarText: { fontSize: '12px', color: colors.premiumGold, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }
};

export default About;