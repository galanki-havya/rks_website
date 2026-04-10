import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const colors = {
  primary: "#002147",
  gold: "#C9A227",
  white: "#FFFFFF",
  text: "#333333",
  lightGray: "#F8F9FA",
  shadow: "rgba(0,0,0,0.1)",
  goldGradient: "linear-gradient(135deg, #C9A227 0%, #E5C76B 100%)",
  tagline: "#4A5568"
};

function Header() {
  const [hovered, setHovered] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Admissions", path: "/admissions" },
  ];

  const portalLink = "https://educampus360.com/login";

  return (
    <header style={{
      ...styles.headerWrapper,
      paddingTop: isScrolled ? "0px" : (isMobile ? "0px" : "5px"),
      boxShadow: (isScrolled || menuOpen) ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
    }}>
      {!isMobile && (
        <motion.div initial={false} animate={{ height: isScrolled ? 0 : 35, opacity: isScrolled ? 0 : 1 }} style={styles.topBar}>
          <div style={styles.containerFlex}>
            <div style={styles.topBarLeft}>
              <a href="tel:+917799884561" style={styles.topBarLink}>📞 +91 77998 84561</a>
              <span style={styles.separator}>|</span>
              <a href="mailto:admin@nextgenedap.com" style={styles.topBarLink}>✉️ admin@nextgenedap.com</a>
            </div>
            <div style={styles.topBarRight}>
              <span style={styles.separator}>|</span>
              IIT-JEE | NEET FOUNDATION
            </div>
          </div>
        </motion.div>
      )}
      <div style={{...styles.mainHeader, padding: isMobile ? "12px 0" : "10px 0"}}>
        <div style={styles.containerFlex}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={styles.logoContainer}>
              <img src={logo} alt="Logo" style={{...styles.logoImage, height: isMobile ? "45px" : (isScrolled ? "50px" : "70px")}} />
              <div style={styles.brandText}>
                <h1 style={{...styles.schoolName, fontSize: isMobile ? "16px" : "20px"}}>RKS NEXT GEN SCHOOLS</h1>
                <p style={{...styles.trustTagline, fontSize: isMobile ? "9px" : "11px", marginTop: isMobile ? "1px" : "2px"}}>(Under Vinayaka Vidhya Mandhir)</p>
                {!isMobile && <p style={styles.schoolSubtitle}>INTEGRITY • INNOVATION • EXCELLENCE</p>}
              </div>
            </div>
          </Link>
          {!isMobile && (
            <nav>
              <ul style={styles.navList}>
                {navItems.map((item) => (
                  <li key={item.name} style={{ position: "relative" }}>
                    <Link to={item.path} onMouseEnter={() => setHovered(item.name)} onMouseLeave={() => setHovered(null)} style={{...styles.navLink, color: location.pathname === item.path || hovered === item.name ? colors.gold : colors.primary}}>{item.name}
                      <motion.div initial={false} animate={{ width: (location.pathname === item.path || hovered === item.name) ? "100%" : "0%" }} style={styles.underline} />
                    </Link>
                  </li>
                ))}
                <li style={{ position: "relative" }}>
                  <a 
                    href={portalLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onMouseEnter={() => setHovered("erp")} 
                    onMouseLeave={() => setHovered(null)} 
                    style={{...styles.navLink, color: hovered === "erp" ? colors.gold : colors.primary}}
                  >
                    ERP SIGN IN
                    <motion.div initial={false} animate={{ width: hovered === "erp" ? "100%" : "0%" }} style={styles.underline} />
                  </a>
                </li>
              </ul>
            </nav>
          )}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={styles.menuBtn}>
              <motion.div animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} style={styles.burgerLine} />
              <motion.div animate={{ opacity: menuOpen ? 0 : 1 }} style={styles.burgerLine} />
              <motion.div animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} style={styles.burgerLine} />
            </button>
          )}
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} style={styles.mobileDrawer}>
            <ul style={styles.mobileNavList}>
              {navItems.map((item, i) => (
                <motion.li key={item.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} style={styles.mobileNavItem}>
                  <Link to={item.path} style={styles.mobileNavLink}>{item.name}</Link>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} style={styles.mobileNavItem}>
                <a href={portalLink} target="_blank" rel="noopener noreferrer" style={styles.mobileNavLink}>ERP SIGN IN</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const styles = {
  headerWrapper: { width: "100%", position: "fixed", top: 0, zIndex: 1000, backgroundColor: colors.white, transition: "all 0.4s ease" },
  containerFlex: { maxWidth: "1350px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" },
  topBar: { backgroundColor: colors.primary, color: colors.white, fontSize: "12px", display: "flex", alignItems: "center", overflow: "hidden" },
  topBarLeft: { display: "flex", gap: "20px" },
  topBarLink: { color: colors.white, textDecoration: "none", transition: "color 0.3s ease" },
  separator: { opacity: 0.3, margin: "0 15px" },
  topBarRight: { color: colors.gold, fontWeight: "700", fontSize: "11px", display: "flex", alignItems: "center" },
  mainHeader: { width: "100%", position: "relative", zIndex: 1001 },
  logoContainer: { display: "flex", gap: "12px", alignItems: "center" },
  logoImage: { width: "auto", objectFit: "contain", transition: "all 0.3s ease" },
  brandText: { display: "flex", flexDirection: "column" },
  schoolName: { margin: 0, color: colors.primary, fontWeight: "900", lineHeight: "1.1" },
  trustTagline: { margin: 0, color: colors.tagline, fontWeight: "600", fontStyle: "italic", letterSpacing: "0.5px" },
  schoolSubtitle: { fontSize: "8px", color: colors.gold, margin: "4px 0 0 0", fontWeight: "700", letterSpacing: "1px" },
  navList: { display: "flex", gap: "25px", listStyle: "none", alignItems: "center", margin: 0, padding: 0 },
  navLink: { textDecoration: "none", fontSize: "13px", fontWeight: "700", position: "relative", textTransform: "uppercase", transition: "color 0.3s ease" },
  underline: { height: "2px", backgroundColor: colors.gold, position: "absolute", bottom: "-4px", left: 0 },
  
  // Removed specific button styles, buttons now use navLink styles
  menuBtn: { background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "10px" },
  burgerLine: { width: "25px", height: "3px", backgroundColor: colors.primary, borderRadius: "2px" },
  mobileDrawer: { position: "fixed", top: 0, right: 0, width: "280px", height: "100vh", backgroundColor: colors.white, zIndex: 999, padding: "100px 30px", boxShadow: "-10px 0 30px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column" },
  mobileNavList: { listStyle: "none", padding: 0, margin: 0 },
  mobileNavItem: { marginBottom: "20px" },
  mobileNavLink: { textDecoration: "none", color: colors.primary, fontSize: "18px", fontWeight: "800" },
};

export default Header;