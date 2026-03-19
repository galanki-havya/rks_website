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

const facilityList = [
  { title: "Smart Classrooms", desc: "Digital interactive boards with high-speed internet to facilitate visual learning and global connectivity.", icon: "📺" },
  { title: "Advanced Labs", desc: "Fully equipped Physics, Chemistry, and Biology laboratories designed for higher secondary experimentation.", icon: "🔬" },
  { title: "STEM Center", desc: "Modern computer labs featuring coding modules, robotics kits, and the latest educational software suite.", icon: "💻" },
  { title: "The Knowledge Hub", desc: "An expansive library with 10,000+ volumes, digital archives, and dedicated research zones.", icon: "📚" },
  { title: "Secure Transport", desc: "A fleet of GPS-enabled buses with real-time tracking and female attendants for student safety.", icon: "🚌" },
  { title: "Indoor Arena", desc: "Multi-purpose hall for Table Tennis, Yoga, and Martial Arts to build focus and physical agility.", icon: "♟️" },
];

const Facilities = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* --- HERO HEADER --- */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <span style={styles.accent}>WORLD-CLASS INFRASTRUCTURE</span>
          <h1 style={styles.heroTitle}>
            <span style={{color: colors.white}}>Campus</span> <span style={{color: colors.premiumGold}}>Facilities</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Providing a secure, technologically advanced, and inspiring environment 
            designed to foster holistic development and creative thinking.
          </p>
          <div style={styles.underline} />
        </div>
      </section>

      <div style={styles.container}>
        {/* --- MAIN FACILITIES GRID --- */}
        <section style={styles.sectionMargin}>
          <div style={styles.grid}>
            {facilityList.map((item, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.iconCircle}>{item.icon}</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SPORTS INFRASTRUCTURE --- */}
        <section style={styles.wideSection}>
          <div style={styles.centeredHeader}>
            <h2 style={styles.sectionTitle}>Outdoor Sports Infrastructure</h2>
            <div style={styles.goldDivider} />
          </div>
          <div style={styles.sportsGrid}>
             <div style={styles.sportCard}>
               <span style={styles.sportIcon}>🏟️</span>
               <div>
                 <h4 style={styles.sportName}>Athletic Track</h4>
                 <p style={styles.sportDesc}>Professional 200m track for track and field excellence.</p>
               </div>
             </div>
             <div style={styles.sportCard}>
               <span style={styles.sportIcon}>🏀</span>
               <div>
                 <h4 style={styles.sportName}>Basketball Court</h4>
                 <p style={styles.sportDesc}>Full-sized court with international standard synthetic flooring.</p>
               </div>
             </div>
             <div style={styles.sportCard}>
               <span style={styles.sportIcon}>🏏</span>
               <div>
                 <h4 style={styles.sportName}>Cricket Academy</h4>
                 <p style={styles.sportDesc}>Professional practice nets with bowling machine facilities.</p>
               </div>
             </div>
             <div style={styles.sportCard}>
               <span style={styles.sportIcon}>⚽</span>
               <div>
                 <h4 style={styles.sportName}>Football Turf</h4>
                 <p style={styles.sportDesc}>Expansive lush green field for tournament-level gameplay.</p>
               </div>
             </div>
          </div>
        </section>

        {/* --- HEALTH & SAFETY (Dark Section) --- */}
        <section style={styles.safetySection}>
           <div style={styles.safetyContent}>
              <h2 style={styles.safetyTitle}>Health & Safety First</h2>
              <p style={styles.safetyText}>
                The safety of our students is our highest priority. Our campus is monitored 24/7 by 
                <strong> high-definition CCTV</strong> and trained security personnel. We maintain 
                a fully-equipped <strong>Medical Infirmary</strong> with a qualified nurse on duty 
                to ensure immediate care.
              </p>
              <div style={styles.badgeGrid}>
                <div style={styles.safetyBadge}>🛡️ 24/7 CCTV Monitoring</div>
                <div style={styles.safetyBadge}>🔥 Fire Safety Certified</div>
                <div style={styles.safetyBadge}>💧 RO Purified Water</div>
                <div style={styles.safetyBadge}>🩹 On-campus Nurse</div>
              </div>
           </div>
        </section>

        {/* --- DINING SECTION --- */}
        <section style={styles.diningSection}>
           <h3 style={styles.sectionTitle}>Nutritional Dining</h3>
           <p style={styles.textCenter}>
             Our cafeteria serves hygienic, balanced, and dietitian-approved vegetarian meals, 
             prepared in a state-of-the-art kitchen to ensure students stay healthy and energized.
           </p>
        </section>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: { backgroundColor: colors.white, minHeight: "100vh", paddingBottom: "80px" },
  hero: { backgroundColor: colors.midnight, color: colors.white, padding: "160px 20px 100px", textAlign: "center" },
  accent: { color: colors.premiumGold, letterSpacing: '3px', fontSize: '11px', fontWeight: '700', marginBottom: '10px', display: 'block' },
  heroTitle: { fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "800", margin: "0 0 20px 0" },
  heroSubtitle: { fontSize: "18px", maxWidth: "750px", margin: "auto", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" },
  underline: { width: '50px', height: '3px', background: colors.premiumGold, margin: '25px auto 0' },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 25px" },
  
  sectionMargin: { marginTop: "-50px", marginBottom: "80px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },
  card: {
    background: colors.white,
    padding: "45px 30px",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
    border: `1px solid ${colors.border}`,
    textAlign: "center",
  },
  iconCircle: {
    width: '70px', height: '70px', background: colors.offWhite, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '32px', margin: '0 auto 20px', color: colors.midnight,
    border: `1px solid ${colors.softGold}`
  },
  cardTitle: { color: colors.midnight, fontSize: '20px', fontWeight: '800', marginBottom: '15px' },
  cardDesc: { color: colors.slate, fontSize: "15px", lineHeight: "1.6" },

  wideSection: {
    padding: "60px 40px",
    backgroundColor: colors.offWhite,
    borderRadius: "25px",
    marginBottom: "80px",
    border: `1px solid ${colors.border}`
  },
  centeredHeader: { textAlign: 'center', marginBottom: '40px' },
  sectionTitle: { color: colors.midnight, fontSize: "30px", fontWeight: '800', marginBottom: "10px" },
  goldDivider: { width: '40px', height: '3px', background: colors.premiumGold, margin: '0 auto' },
  
  sportsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
    gap: "20px",
  },
  sportCard: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    background: colors.white,
    borderRadius: "15px",
    borderLeft: `5px solid ${colors.premiumGold}`
  },
  sportIcon: { fontSize: "30px" },
  sportName: { color: colors.midnight, margin: '0 0 5px 0', fontWeight: '700' },
  sportDesc: { color: colors.slate, fontSize: '14px', margin: 0 },

  safetySection: {
    backgroundColor: colors.midnight,
    padding: "60px 50px",
    borderRadius: "25px",
    marginBottom: "80px",
  },
  safetyContent: { maxWidth: "900px", margin: "0 auto", textAlign: "center" },
  safetyTitle: { color: colors.white, fontSize: "32px", fontWeight: '800', marginBottom: "20px" },
  safetyText: { color: "rgba(255,255,255,0.7)", lineHeight: "1.8", fontSize: "17px", marginBottom: "40px" },
  badgeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  safetyBadge: {
    background: "rgba(255,255,255,0.05)",
    padding: "15px",
    borderRadius: "12px",
    color: colors.white,
    fontSize: "14px",
    fontWeight: '600',
    border: "1px solid rgba(255,255,255,0.1)",
  },

  diningSection: { textAlign: "center", marginBottom: "80px" },
  textCenter: { color: colors.slate, fontSize: "17px", maxWidth: "750px", margin: "20px auto", lineHeight: "1.7" }
};

export default Facilities;