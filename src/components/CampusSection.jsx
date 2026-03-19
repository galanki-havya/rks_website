import React from "react";

const campuses = [
  {
    name: "Vinayaka Campus",
    branch: "Branch - 1",
    location: "A Rangampeta Circle, Tirupati",
    landmark: "Vinayaka Vidhya Mandhir",
    grades: "Play School to Grade X",
    phone: "+91 77998 84561",
    type: "Main Branch",
    color: "#001B36" // Updated to match school brand midnight blue
  },
  {
    name: "Veeksha Campus",
    branch: "Branch - 2",
    location: "Near Bairagipatteda Arch, Tirupati",
    landmark: "Opp. Post Office",
    grades: "Play School to Grade X",
    phone: "+91 77998 84562",
    type: "New Campus",
    color: "#B38B45" // Updated to match school brand premium gold
  }
];

function CampusSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.textCenter}>
          <h2 style={styles.title}>Our Campuses</h2>
          <p style={styles.subtitle}>Choose your nearest RKS Next Gen location in Tirupati</p>
        </div>

        <div style={styles.grid}>
          {campuses.map((campus, index) => (
            <div key={index} style={styles.card}>
              <div style={{...styles.cardHeader, backgroundColor: campus.color}}>
                <div style={styles.headerTop}>
                   <span style={styles.badge}>{campus.type}</span>
                   <span style={styles.branchLabel}>{campus.branch}</span>
                </div>
                <h3 style={styles.campusName}>{campus.name}</h3>
              </div>
              
              <div style={styles.cardBody}>
                <div style={styles.infoRow}>
                  <span style={styles.icon}>📍</span>
                  <p style={styles.infoText}><strong>Address:</strong> {campus.location}</p>
                </div>
                <div style={styles.infoRow}>
                  <span style={styles.icon}>🏢</span>
                  <p style={styles.infoText}><strong>Landmark:</strong> {campus.landmark}</p>
                </div>
                <div style={styles.infoRow}>
                  <span style={styles.icon}>🎓</span>
                  <p style={styles.infoText}><strong>Classes:</strong> {campus.grades}</p>
                </div>
                <div style={styles.infoRow}>
                  <span style={styles.icon}>📞</span>
                  <p style={styles.infoText}><strong>Call:</strong> {campus.phone}</p>
                </div>
                
                <button 
                  style={{...styles.btn, borderColor: campus.color, color: campus.color}}
                  onClick={() => window.open(`tel:${campus.phone.replace(/\s/g, '')}`)}
                >
                  Contact Branch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#F7FAFC",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  textCenter: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.2rem",
    color: "#1A202C",
    fontWeight: "800",
    margin: 0,
  },
  subtitle: {
    color: "#718096",
    fontSize: "1rem",
    marginTop: "8px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 450px))", 
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease",
  },
  cardHeader: {
    padding: "20px 25px",
    color: "#fff",
    position: "relative",
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "0.7rem",
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  branchLabel: {
    fontSize: "0.75rem",
    fontWeight: "600",
    opacity: 0.9,
  },
  campusName: {
    margin: "10px 0 0 0",
    fontSize: "1.5rem",
    fontWeight: "700",
  },
  cardBody: {
    padding: "20px 25px",
  },
  infoRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "12px",
    alignItems: "flex-start",
  },
  icon: {
    fontSize: "1.1rem",
  },
  infoText: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#4A5568",
    lineHeight: "1.4",
  },
  btn: {
    marginTop: "15px",
    width: "100%",
    padding: "10px",
    backgroundColor: "transparent",
    border: "2px solid",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.2s ease",
  }
};

export default CampusSection;