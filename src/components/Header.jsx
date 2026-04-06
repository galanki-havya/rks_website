import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";


const colors = {
  primary: "#002147",
  gold: "#C9A227",
  white: "#FFFFFF",
  text: "#333333",
  lightGray: "#F8F9FA",
  shadow: "rgba(0,0,0,0.1)"
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
      if (!mobile) setMenuOpen(false); // Close menu if screen is resized to desktop
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header style={{
      ...styles.headerWrapper,
      paddingTop: isScrolled ? "0px" : (isMobile ? "0px" : "5px"),
      boxShadow: (isScrolled || menuOpen) ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
    }}>
      
      {/* Top Utility Bar (Hidden on Mobile Scrolled) */}
      {!isMobile && (
        <div style={{
          ...styles.topBar,
          height: isScrolled ? "0px" : "35px",
          opacity: isScrolled ? 0 : 1,
          overflow: "hidden",
          transition: "all 0.3s ease"
        }}>
          <div style={styles.containerFlex}>
            <div style={styles.topBarLeft}>
              <span>📞 +91 77998 84561</span>
              <span style={styles.separator}>|</span>
              <span>✉️ admin@nextgenedap.com</span>
            </div>
            <div style={styles.topBarRight}>IIT-JEE | NEET FOUNDATION</div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div style={{...styles.mainHeader, padding: isMobile ? "12px 0" : "10px 0"}}>
        <div style={styles.containerFlex}>
          
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={styles.logoContainer}>
              <img 
                src={logo} 
                alt="Logo" 
                style={{
                  ...styles.logoImage,
                  height: isMobile ? "45px" : (isScrolled ? "50px" : "65px")
                }}
              />
              <div style={styles.brandText}>
                <h1 style={{...styles.schoolName, fontSize: isMobile ? "16px" : "20px"}}>RKS NEXT GEN SCHOOLS </h1>
                {!isMobile && <p style={styles.schoolSubtitle}>INTEGRITY • INNOVATION • EXCELLENCE</p>}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav>
              <ul style={styles.navList}>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onMouseEnter={() => setHovered(item.name)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        ...styles.navLink,
                        color: location.pathname === item.path || hovered === item.name ? colors.gold : colors.primary,
                      }}
                    >
                      {item.name}
                      <div style={{
                        ...styles.underline,
                        width: location.pathname === item.path || hovered === item.name ? "100%" : "0%"
                      }} />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/admissions" style={styles.enrollBtn}>ADMISSIONS</Link>
                </li>
              </ul>
            </nav>
          )}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              style={styles.menuBtn}
            >
              <div style={{...styles.burgerLine, transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"}} />
              <div style={{...styles.burgerLine, opacity: menuOpen ? 0 : 1}} />
              <div style={{...styles.burgerLine, transform: menuOpen ? "rotate(-45deg) translate(7px, -7px)" : "none"}} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div style={{
        ...styles.mobileDrawer,
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        opacity: menuOpen ? 1 : 0
      }}>
        <ul style={styles.mobileNavList}>
          {navItems.map((item) => (
            <li key={item.name} style={styles.mobileNavItem}>
              <Link to={item.path} style={styles.mobileNavLink}>
                {item.name}
              </Link>
            </li>
          ))}
          <li style={{marginTop: "20px"}}>
            <Link to="/admissions" style={styles.mobileEnrollBtn}>ADMISSIONS 2026-27</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

const styles = {
  headerWrapper: {
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 1000,
    backgroundColor: colors.white,
    transition: "all 0.4s ease",
  },
  containerFlex: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  topBar: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
  },
  topBarLeft: { display: "flex", gap: "20px" },
  separator: { opacity: 0.3 },
  topBarRight: { color: colors.gold, fontWeight: "700", fontSize: "11px" },
  
  mainHeader: { width: "100%", position: "relative", zIndex: 1001 },
  logoContainer: { display: "flex", gap: "10px", alignItems: "center" },
  logoImage: { width: "auto", objectFit: "contain", transition: "height 0.3s ease" },
  brandText: { display: "flex", flexDirection: "column" },
  schoolName: { margin: 0, color: colors.primary, fontWeight: "900", lineHeight: "1.1" },
  schoolSubtitle: { fontSize: "8px", color: colors.gold, margin: "2px 0 0 0", fontWeight: "700", letterSpacing: "1px" },
  
  // Desktop Styles
  navList: { display: "flex", gap: "25px", listStyle: "none", alignItems: "center", margin: 0, padding: 0 },
  navLink: { textDecoration: "none", fontSize: "13px", fontWeight: "700", position: "relative", textTransform: "uppercase" },
  underline: { height: "2px", backgroundColor: colors.gold, position: "absolute", bottom: "-2px", left: 0, transition: "width 0.3s ease" },
  enrollBtn: { background: colors.gold, color: colors.primary, padding: "10px 18px", borderRadius: "4px", textDecoration: "none", fontWeight: "800", fontSize: "12px" },

  // Mobile Styles
  menuBtn: {
    background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "6px", padding: "10px"
  },
  burgerLine: {
    width: "25px", height: "3px", backgroundColor: colors.primary, transition: "all 0.3s ease", borderRadius: "2px"
  },
  mobileDrawer: {
    position: "fixed", top: 0, right: 0, width: "80%", height: "100vh", backgroundColor: colors.white,
    zIndex: 999, transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", padding: "100px 40px",
    boxShadow: "-10px 0 30px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column"
  },
  mobileNavList: { listStyle: "none", padding: 0, margin: 0 },
  mobileNavItem: { marginBottom: "25px", borderBottom: `1px solid ${colors.lightGray}`, paddingBottom: "15px" },
  mobileNavLink: { textDecoration: "none", color: colors.primary, fontSize: "18px", fontWeight: "800", textTransform: "uppercase" },
  mobileEnrollBtn: {
    display: "block", textAlign: "center", background: colors.primary, color: colors.white,
    padding: "15px", borderRadius: "6px", textDecoration: "none", fontWeight: "800"
  }
};

export default Header;