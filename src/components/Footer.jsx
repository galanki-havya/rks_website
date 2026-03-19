import React from "react";
import { Link } from "react-router-dom";

const colors = {
  primary: "#002147",
  gold: "#C9A227",
  white: "#FFFFFF",
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.contentGrid}>

        {/* Column 1: Brand & Socials */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>RKS Next Gen</h3>
          <p style={styles.schoolDescription}>
            Nurturing discipline and innovation through educational excellence.
          </p>
          <div style={styles.socialIcons}>
            <span style={styles.iconCircle}>f</span>
            <span style={styles.iconCircle}>ig</span>
            <span style={styles.iconCircle}>yt</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Links</h3>
          <ul style={styles.linkList}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/about" style={styles.link}>About</Link></li>
            <li><Link to="/contact" style={styles.link}>Admissions</Link></li>
          </ul>
        </div>

        {/* Column 3: Locations */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Campuses</h3>
          <p style={styles.contactItem}><b>Vinayaka:</b> A. Rangampeta, TPT</p>
          <p style={styles.contactItem}><b>Veeksha:</b> Bairagipatteda, TPT</p>
        </div>

        {/* Column 4: Contact */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Contact</h3>
          <p style={styles.contactItem}>📞 77998 84561</p>
          <p style={styles.contactItem}>✉ info@rks.com</p>
          <div style={styles.affiliationBadge}>Affiliated to State Board</div>
        </div>

      </div>

      <div style={styles.bottomBar}>
        <p style={styles.copy}>
          © {currentYear} RKS Next Gen School.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footerContainer: {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: "30px 20px 15px", // Reduced from 60px
    fontFamily: "Inter, sans-serif",
  },
  contentGrid: {
    maxWidth: "1100px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", // Slightly narrower columns
    gap: "25px", // Reduced gap
    paddingBottom: "25px", // Reduced from 40px
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "8px", // Tighter gap between items
  },
  columnTitle: {
    fontSize: "16px", // Smaller title
    fontWeight: "700",
    borderLeft: `3px solid ${colors.gold}`,
    paddingLeft: "10px",
    color: colors.white,
    marginBottom: "5px",
  },
  schoolDescription: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.4, // Tighter line height
    margin: 0,
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  link: {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    fontSize: "13px",
  },
  contactItem: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.8)",
    margin: 0,
  },
  affiliationBadge: {
    border: `1px solid ${colors.gold}`,
    color: colors.gold,
    padding: "3px 8px",
    width: "fit-content",
    fontSize: "10px", // Smaller badge
    marginTop: "2px",
    borderRadius: "3px",
  },
  socialIcons: {
    display: "flex",
    gap: "8px",
    marginTop: "5px",
  },
  iconCircle: {
    width: "28px", // Reduced size
    height: "28px", // Reduced size
    borderRadius: "50%",
    border: `1px solid ${colors.gold}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "11px",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "10px",
    textAlign: "center",
  },
  copy: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.5)",
    margin: 0,
  },
};

export default Footer;