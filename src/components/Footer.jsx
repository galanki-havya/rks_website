import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const colors = {
  primary: "#002147",
  gold: "#C9A227",
  white: "#FFFFFF",
};

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footerStyles = {
    ...styles.footerContainer,
    padding: isMobile ? "40px 20px 20px" : "30px 20px 15px",
  };

  const gridStyles = {
    ...styles.contentGrid,
    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(180px, 1fr))",
    textAlign: isMobile ? "center" : "left",
    gap: isMobile ? "35px" : "25px",
  };

  const columnStyles = {
    ...styles.column,
    alignItems: isMobile ? "center" : "flex-start",
  };

  return (
    <footer style={footerStyles}>
      <div style={gridStyles}>

        {/* Column 1: Brand & Socials */}
        <div style={columnStyles}>
          <h3 style={{...styles.columnTitle, borderLeft: isMobile ? "none" : styles.columnTitle.borderLeft}}>
            RKS Next Gen
          </h3>
          <p style={styles.schoolDescription}>
            Nurturing discipline and innovation through educational excellence since 2011.
          </p>
          <div style={styles.socialIcons}>
            <span style={styles.iconCircle}>f</span>
            <span style={styles.iconCircle}>ig</span>
            <span style={styles.iconCircle}>yt</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div style={columnStyles}>
          <h3 style={{...styles.columnTitle, borderLeft: isMobile ? "none" : styles.columnTitle.borderLeft}}>
            Quick Links
          </h3>
          <ul style={{...styles.linkList, alignItems: isMobile ? "center" : "flex-start"}}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/about" style={styles.link}>About Us</Link></li>
            <li><Link to="/academics" style={styles.link}>Academics</Link></li>
            <li><Link to="/contact" style={styles.link}>Admissions</Link></li>
          </ul>
        </div>

        {/* Column 3: Locations */}
        <div style={columnStyles}>
          <h3 style={{...styles.columnTitle, borderLeft: isMobile ? "none" : styles.columnTitle.borderLeft}}>
            Our Campuses
          </h3>
          <p style={styles.contactItem}><b>Vinayaka:</b> A. Rangampeta, Tirupati</p>
          <p style={styles.contactItem}><b>Veeksha:</b> Bairagipatteda, Tirupati</p>
        </div>

        {/* Column 4: Contact */}
        <div style={columnStyles}>
          <h3 style={{...styles.columnTitle, borderLeft: isMobile ? "none" : styles.columnTitle.borderLeft}}>
            Contact Us
          </h3>
          <p style={styles.contactItem}>📞 +91 77998 84561</p>
          <p style={styles.contactItem}>✉ info@rksnextgen.com</p>
          <div style={{...styles.affiliationBadge, margin: isMobile ? "10px auto 0" : "5px 0 0"}}>
            Affiliated to State Board
          </div>
        </div>

      </div>

      <div style={styles.bottomBar}>
        <p style={styles.copy}>
          © {currentYear} RKS Next Gen School. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footerContainer: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontFamily: "'Inter', sans-serif",
  },
  contentGrid: {
    maxWidth: "1100px",
    margin: "auto",
    display: "grid",
    paddingBottom: "30px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  columnTitle: {
    fontSize: "18px",
    fontWeight: "700",
    borderLeft: `4px solid ${colors.gold}`,
    paddingLeft: "12px",
    color: colors.gold,
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  schoolDescription: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.6,
    margin: 0,
    maxWidth: "300px",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px", // Better touch spacing
  },
  link: {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s ease",
  },
  contactItem: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.8)",
    margin: 0,
    lineHeight: "1.6",
  },
  affiliationBadge: {
    border: `1px solid ${colors.gold}`,
    color: colors.gold,
    padding: "4px 12px",
    width: "fit-content",
    fontSize: "11px",
    fontWeight: "700",
    borderRadius: "2px",
    textTransform: "uppercase",
  },
  socialIcons: {
    display: "flex",
    gap: "12px",
    marginTop: "10px",
  },
  iconCircle: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: `1px solid rgba(255,255,255,0.3)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "12px",
    color: colors.white,
    transition: "all 0.3s ease",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    padding: "20px 0",
    textAlign: "center",
  },
  copy: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.4)",
    margin: 0,
    letterSpacing: "0.5px",
  },
};

export default Footer;