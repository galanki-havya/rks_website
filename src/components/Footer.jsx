import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const colors = {
  primary: "#002147",
  gold: "#C9A227",
  white: "#FFFFFF",
  muted: "rgba(255, 255, 255, 0.6)",
  border: "rgba(255, 255, 255, 0.1)",
};

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const contactNumbers = ["+91 77998 84561", "+91 77998 84562", "+91 77998 84563", "+91 77998 84564"];

  return (
    <footer style={styles.footerWrapper}>
      <div style={styles.shapeDivider}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={styles.svg}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{...styles.footerContent, padding: isMobile ? "20px 20px" : "40px 20px 20px"}}
      >
        <div style={{
          ...styles.grid, 
          gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr 1fr 1.5fr",
          textAlign: isMobile ? "center" : "left"
        }}>

          {/* Column 1: Brand */}
          <motion.div variants={itemVariants} style={styles.column}>
            <h2 style={styles.brandTitle}>RKS NEXT GEN</h2>
            <p style={styles.description}>Redefining educational excellence since 2011.</p>
           
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} style={styles.column}>
            <h3 style={styles.columnHeading}>Explore</h3>
            <div style={styles.linkList}>
              {['Home', 'About', 'Academics', 'Admissions'].map((link) => (
                <Link key={link} to={`/${link.toLowerCase()}`} style={styles.link}>
                  <motion.span 
                    style={{ display: "inline-block" }}
                    whileHover={{ x: 5, color: colors.gold }}
                  >
                    {link}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Locations with Proper Links */}
          <motion.div variants={itemVariants} style={styles.column}>
            <h3 style={styles.columnHeading}>Campuses</h3>
            
            <motion.a 
              href="https://maps.app.goo.gl/35n6uLwLtMqLJsZU7" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.locationLink}
              whileHover={{ x: 5 }}
            >
              <div style={styles.campusItem}>
                <p style={styles.campusName}>RK NextGen Campus</p>
                <p style={styles.campusAddr}>A. Rangampeta, Tirupati</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://maps.app.goo.gl/QUWafe2zz48TCRvt5" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.locationLink}
              whileHover={{ x: 5 }}
            >
              <div style={styles.campusItem}>
                <p style={styles.campusName}>Veeksha Campus</p>
                <p style={styles.campusAddr}>Near Bairagipatteda Arch, Tirupati</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={itemVariants} style={styles.column}>
            <h3 style={styles.columnHeading}>Contact Us</h3>
            <div style={{
              ...styles.numberGrid,
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              justifyItems: isMobile ? "center" : "start"
            }}>
              {contactNumbers.map((num, index) => (
                <motion.a 
                  key={index} 
                  href={`tel:${num.replace(/\s+/g, '')}`} 
                  style={styles.contactLink}
                  whileHover={{ scale: 1.02, color: colors.gold }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span style={styles.contactIcon}>📞</span> {num}
                </motion.a>
              ))}
            </div>
            <motion.a 
              href="mailto:admin@nextgenedap.com" 
              style={{
                ...styles.mailLink,
                justifyContent: isMobile ? "center" : "flex-start"
              }}
              whileHover={{ scale: 1.02, color: colors.gold }}
            >
              <span style={styles.contactIcon}>✉</span> admin@nextgenedap.com
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} style={styles.bottomBar}>
          <div style={{...styles.bottomContainer, flexDirection: isMobile ? "column" : "row"}}>
            <p style={styles.copyright}>© {currentYear} RKS Next Gen School. All Rights Reserved.</p>
            <motion.div 
              style={{...styles.badge, marginTop: isMobile ? "15px" : "0"}}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              STATE BOARD AFFILIATED
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

const styles = {
  footerWrapper: { backgroundColor: colors.primary, position: "relative", width: "100%", overflow: "hidden" },
  shapeDivider: { width: "100%", lineHeight: 0 },
  svg: { display: "block", width: "100%", height: "40px" },
  footerContent: { maxWidth: "1200px", margin: "0 auto" },
  grid: { display: "grid", gap: "30px", paddingBottom: "30px" },
  column: { display: "flex", flexDirection: "column" },
  brandTitle: { color: colors.gold, fontSize: "20px", fontWeight: "900", margin: "0 0 10px 0", letterSpacing: "1px" },
  description: { fontSize: "13px", color: colors.muted, lineHeight: "1.6", margin: "0 0 20px 0", maxWidth: "260px" },
  columnHeading: { color: colors.white, fontSize: "13px", fontWeight: "700", textTransform: "uppercase", marginBottom: "15px", letterSpacing: "1px" },
  linkList: { display: "flex", flexDirection: "column", gap: "8px" },
  link: { color: colors.muted, textDecoration: "none", fontSize: "13px", transition: "color 0.3s ease" },
  locationLink: { textDecoration: "none", display: "block" },
  campusItem: { marginBottom: "15px", cursor: "pointer" },
  campusName: { color: colors.gold, fontSize: "13px", fontWeight: "700", margin: 0 },
  campusAddr: { color: colors.muted, fontSize: "12px", margin: "2px 0 0 0" },
  numberGrid: { display: "grid", gap: "10px 20px", width: "100%" },
  contactLink: { color: colors.white, textDecoration: "none", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" },
  mailLink: { color: colors.white, textDecoration: "none", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px", marginTop: "15px" },
  contactIcon: { color: colors.gold, fontSize: "12px" },
  badge: { border: `1px solid ${colors.gold}88`, color: colors.gold, fontSize: "9px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px" },
  socialRow: { display: "flex", gap: "10px" },
  socialCircle: { width: "30px", height: "30px", borderRadius: "50%", border: `1px solid ${colors.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: colors.white, fontSize: "12px", cursor: "pointer", transition: "all 0.3s ease" },
  bottomBar: { borderTop: `1px solid ${colors.border}`, paddingTop: "20px", marginTop: "10px" },
  bottomContainer: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  copyright: { fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: 0 },
};

export default Footer;