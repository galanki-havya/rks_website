import React from "react";

const colors = {
  primary: "#002147",
  gold: "#C9A227",
  bg: "#F8FAFC",
  white: "#ffffff",
  text: "#555"
};

const Campuses = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Header Section */}
      <section style={styles.heroSection}>
        <div style={styles.headerContent}>
          <h4 style={styles.accentText}>EXPLORE OUR LOCATIONS</h4>
          <h2 style={styles.title}>Our <span style={{color: colors.gold}}>Premier</span> Campuses</h2>
          <p style={styles.subtitle}>
            Providing world-class infrastructure and a safe learning environment across two strategic locations in Tirupati.
          </p>
          <div style={styles.underline} />
        </div>
      </section>

      {/* Main Container */}
      <div style={styles.container}>
        
        {/* Campus Cards Grid */}
        <div style={styles.campusGrid}>
          
          {/* Vinayaka Campus */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.campusName}>Vinayaka Campus</h3>
              <span style={styles.badge}>Primary & Middle School</span>
            </div>
            <p style={styles.description}>
              Focused on the foundational years (Nursery to Class 7). This campus features 
              child-friendly architecture, vibrant play zones, and specialized activity rooms.
            </p>
            <div style={styles.infoBox}>
              <div style={styles.infoLine}>📍 Near Air Bypass Road, Tirupati</div>
              <div style={styles.infoLine}>📞 +91 99999 00000</div>
            </div>
          </div>

          {/* Veeksha Campus */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.campusName}>Veeksha Campus</h3>
              <span style={styles.badge}>High School & Excellence Center</span>
            </div>
            <p style={styles.description}>
              Our secondary education hub. Designed for rigorous academic excellence, featuring 
              advanced Science labs and dedicated spaces for IIT/NEET foundation coaching.
            </p>
            <div style={styles.infoBox}>
              <div style={styles.infoLine}>📍 Renigunta Road, Tirupati</div>
              <div style={styles.infoLine}>📞 +91 88888 00000</div>
            </div>
          </div>
        </div>

        {/* --- FACILITY HIGHLIGHTS --- */}
        <section style={styles.highlightsSection}>
          <h3 style={styles.sectionTitle}>Shared Campus Facilities</h3>
          <div style={styles.highlightsGrid}>
            {[
              { t: "Smart Class", d: "Interactive whiteboards.", i: "🖥️" },
              { t: "Transport", d: "Safe routes across Tirupati.", i: "🚌" },
              { t: "Sports", d: "Cricket, Skating, and Yoga.", i: "🎾" },
              { t: "Safety", d: "CCTV & 24/7 security.", i: "🛡️" }
            ].map((item, idx) => (
              <div key={idx} style={styles.highlightItem}>
                <span style={{fontSize: '22px'}}>{item.i}</span>
                <div style={{textAlign: 'left'}}>
                  <h4 style={{margin: '0', color: colors.primary, fontSize: '15px'}}>{item.t}</h4>
                  <p style={{margin: 0, fontSize: '12px', color: '#666'}}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: colors.bg,
    minHeight: "100vh",
    paddingTop: "140px", // Reduced from 160px for a tighter look
    paddingBottom: "60px",
  },
  heroSection: {
    textAlign: "center",
    marginBottom: "30px", // Reduced from 60px to remove "dead space"
    padding: "0 20px",
  },
  headerContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  accentText: { 
    color: colors.gold, 
    letterSpacing: '2px', 
    fontSize: '12px', 
    margin: '0 0 5px 0' 
  },
  title: {
    fontSize: "clamp(28px, 4vw, 38px)",
    margin: "0 0 10px 0",
    color: colors.primary,
    fontWeight: "800",
  },
  subtitle: {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: "1.5",
    margin: "0 auto",
  },
  underline: { 
    width: '40px', height: '3px', background: colors.gold, margin: '15px auto' 
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 20px",
  },
  campusGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px", // Reduced gap
    marginBottom: "40px",
  },
  card: {
    backgroundColor: colors.white,
    padding: "30px 25px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
    borderTop: `4px solid ${colors.gold}`,
  },
  cardHeader: { marginBottom: "15px" },
  campusName: {
    color: colors.primary,
    margin: "0 0 5px 0",
    fontSize: "22px",
    fontWeight: "700",
  },
  badge: {
    fontSize: "11px",
    backgroundColor: "#f0f4f8",
    color: colors.primary,
    padding: "4px 10px",
    borderRadius: "4px",
    fontWeight: "600",
  },
  description: {
    color: colors.text,
    lineHeight: "1.6",
    marginBottom: "20px",
    fontSize: "14px",
  },
  infoBox: {
    borderTop: "1px solid #f0f0f0",
    paddingTop: "15px",
  },
  infoLine: {
    fontWeight: "600",
    color: colors.primary,
    fontSize: "13px",
    marginBottom: "5px",
  },
  highlightsSection: {
    backgroundColor: colors.white,
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
  },
  sectionTitle: {
    color: colors.primary,
    fontSize: "20px",
    marginBottom: "20px",
  },
  highlightsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
  },
  highlightItem: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    padding: "12px",
    background: "#f9fbff",
    borderRadius: "10px",
  }
};

export default Campuses;