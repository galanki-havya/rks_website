import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const campuses = [
  {
    name: "RK NextGen Campus",
    branch: "Main Branch",
    location: "A Rangampeta Circle, Tirupati",
    grades: "Play School to Grade X",
    facilities: "Smart Labs, Library, Sports Ground",
    phone: "+91 99895 00074",
    color: "#001B36",
  },
  {
    name: "Veeksha Campus",
    branch: "New Campus",
    location: "Near Bairagipatteda Arch, Tirupati",
    grades: "Play School to Grade X",
    facilities: "Digital Classrooms, Arts Studio, GPS Transport",
    phone: "+91 90009 76246",
    color: "#B38B45",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function CampusSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={styles.textCenter}>
          <span style={styles.preTitle}>ADMINISTRATIVE OFFICES</span>
          <h2 style={{...styles.title, fontSize: isMobile ? "26px" : "36px"}}>Our <span style={styles.goldText}>Campuses</span></h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "50px" }} transition={{ delay: 0.5, duration: 0.8 }} style={styles.titleUnderline} />
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{...styles.grid, gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)"}}>
          {campuses.map((campus, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }} style={styles.card}>
              <div style={{...styles.cardHeader, backgroundColor: campus.color}}>
                <div style={styles.headerFlex}>
                  <h3 style={styles.campusName}>{campus.name}</h3>
                  <span style={styles.badge}>{campus.branch}</span>
                </div>
              </div>
              <div style={styles.cardBody}>
                <div style={styles.infoGrid}>
                  <InfoRow label="Address" value={campus.location} icon="📍" isMobile={isMobile} />
                  <InfoRow label="Curriculum" value={campus.grades} icon="🎓" isMobile={isMobile} />
                  <InfoRow label="Facilities" value={campus.facilities} icon="✨" isMobile={isMobile} isLast />
                </div>
                <div style={{...styles.actionArea, flexDirection: isMobile ? "column" : "row", gap: isMobile ? "15px" : "0"}}>
                  <div style={styles.contactInfo}>
                    <p style={styles.contactLabel}>Admissions Helpline</p>
                    <p style={styles.phoneNumber}>{campus.phone}</p>
                  </div>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{...styles.outlineBtn, borderColor: campus.color, color: campus.color, width: isMobile ? "100%" : "auto"}} onClick={() => window.open(`tel:${campus.phone.replace(/\s/g, '')}`)}>Contact Office</motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const InfoRow = ({ label, value, icon, isMobile, isLast }) => (
  <div style={{...styles.infoRow, borderBottom: isLast ? "none" : "1px solid #EDF2F7"}}>
    <div style={{...styles.labelCol, width: isMobile ? "100px" : "130px"}}>
      <span style={styles.rowIcon}>{icon}</span>
      <span style={styles.rowLabel}>{label}</span>
    </div>
    <div style={styles.valueCol}><span style={styles.rowValue}>{value}</span></div>
  </div>
);

const styles = {
  section: { padding: "80px 0", background: "#F2F4F7" },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 20px" },
  textCenter: { textAlign: "center", marginBottom: "50px" },
  preTitle: { color: "#64748B", letterSpacing: "3px", fontSize: "11px", fontWeight: "700", display: "block", marginBottom: "8px" },
  title: { color: "#001B36", fontWeight: "900", margin: 0, textTransform: "uppercase" },
  goldText: { color: "#B38B45" },
  titleUnderline: { height: "4px", background: "#001B36", margin: "12px auto 0", borderRadius: "2px" },
  grid: { display: "grid", gap: "30px" },
  card: { background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)", border: "1px solid #E2E8F0", transition: "box-shadow 0.3s ease" },
  cardHeader: { padding: "25px", color: "#fff" },
  headerFlex: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  campusName: { fontSize: "1.4rem", fontWeight: "800", margin: 0 },
  badge: { fontSize: "9px", fontWeight: "800", background: "rgba(255,255,255,0.2)", padding: "6px 14px", borderRadius: "100px", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.3)" },
  cardBody: { padding: "0" },
  infoGrid: { display: "flex", flexDirection: "column" },
  infoRow: { display: "flex" },
  labelCol: { background: "#F8FAFC", padding: "18px 20px", display: "flex", alignItems: "center", gap: "10px", borderRight: "1px solid #EDF2F7" },
  rowIcon: { fontSize: "14px" },
  rowLabel: { fontSize: "10px", fontWeight: "700", color: "#64748B", textTransform: "uppercase" },
  valueCol: { flex: 1, padding: "18px 22px", display: "flex", alignItems: "center" },
  rowValue: { fontSize: "14px", color: "#334155", fontWeight: "600", lineHeight: "1.5" },
  actionArea: { padding: "25px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", borderTop: "1px solid #EDF2F7" },
  contactInfo: { display: "flex", flexDirection: "column" },
  contactLabel: { margin: 0, fontSize: "10px", color: "#94A3B8", fontWeight: "700", textTransform: "uppercase" },
  phoneNumber: { margin: "4px 0 0 0", fontSize: "18px", fontWeight: "900", color: "#001B36" },
  outlineBtn: { padding: "12px 28px", background: "transparent", border: "2px solid", borderRadius: "12px", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s ease" }
};

export default CampusSection;