import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Ensure this path is correct in your project structure
import logo from "../assets/logo.png"; 

const colors = {
  primary: "#002147", // Deep Navy
  gold: "#C9A227",    // Premium Gold
  white: "#FFFFFF",
  text: "#333333",
  lightGray: "#F8F9FA",
  shadow: "rgba(0,0,0,0.1)"
};

function Header() {
  const [hovered, setHovered] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Sets scrolled state if user scrolls more than 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      // Dynamic height and shadow on scroll
      paddingTop: isScrolled ? "0px" : "5px",
      boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
      borderBottom: isScrolled ? "none" : `1px solid ${colors.lightGray}`
    }}>
      {/* Top Utility Bar */}
      <div style={{
        ...styles.topBar,
        height: isScrolled ? "0px" : "35px",
        opacity: isScrolled ? 0 : 1,
        overflow: "hidden",
        transition: "all 0.3s ease"
      }}>
        <div style={styles.containerFlex}>
          <div style={styles.topBarLeft}>
            <span style={styles.topItem}>📞 +91 77998 84561</span>
            <span style={styles.separator}>|</span>
            <span style={styles.topItem}>✉️ admin@nextgenedap.com</span>
          </div>
          <div style={styles.topBarRight}>
            <span>IIT-JEE | NEET FOUNDATION</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div style={styles.mainHeader}>
        <div style={styles.containerFlex}>
          
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={styles.logoContainer}>
              <img 
                src={logo} // Fixed: matches the import variable 'logo'
                alt="RKS Next Gen Schools Logo" 
                style={{
                    ...styles.logoImage,
                    height: isScrolled ? "50px" : "65px" // Logo shrinks on scroll
                }}
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
              <div style={styles.brandText}>
                <h1 style={styles.schoolName}>RKS NEXT GEN SCHOOLS</h1>
                <p style={styles.schoolSubtitle}>INTEGRITY • INNOVATION • EXCELLENCE</p>
              </div>
            </div>
          </Link>

          <nav>
            <ul style={styles.navList}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onMouseEnter={() => setHovered(item.name)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        ...styles.navLink,
                        color: isActive || hovered === item.name ? colors.gold : colors.primary,
                      }}
                    >
                      {item.name}
                      <div style={{
                        ...styles.underline,
                        width: isActive || hovered === item.name ? "100%" : "0%"
                      }} />
                    </Link>
                  </li>
                );
              })}
              
              <li>
                <Link 
                  to="/admissions" 
                  style={styles.enrollBtn}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.primary;
                    e.target.style.color = colors.white;
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.gold;
                    e.target.style.color = colors.primary;
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  ADMISSIONS 2026-27
                </Link>
              </li>
            </ul>
          </nav>
        </div>
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
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  containerFlex: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
  },
  topBar: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.5px",
    display: "flex",
    alignItems: "center",
  },
  topBarLeft: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  topItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  separator: {
    opacity: 0.3,
  },
  topBarRight: {
    color: colors.gold,
    fontWeight: "700",
    fontSize: "11px",
    letterSpacing: "1px"
  },
  mainHeader: {
    padding: "10px 0",
    backgroundColor: "transparent",
  },
  logoContainer: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  logoImage: {
    width: "auto",
    objectFit: "contain",
    transition: "height 0.3s ease",
  },
  brandText: {
    display: "flex",
    flexDirection: "column",
  },
  schoolName: {
    fontSize: "20px",
    margin: 0,
    color: colors.primary,
    fontWeight: "900",
    lineHeight: "1.1",
    letterSpacing: "-0.5px",
  },
  schoolSubtitle: {
    fontSize: "8px",
    color: colors.gold,
    margin: "2px 0 0 0",
    letterSpacing: "2px",
    fontWeight: "700",
  },
  navList: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "700",
    padding: "5px 0",
    position: "relative",
    transition: "color 0.3s ease",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  },
  underline: {
    height: "2px",
    backgroundColor: colors.gold,
    position: "absolute",
    bottom: "-2px",
    left: 0,
    transition: "width 0.3s ease",
  },
  enrollBtn: {
    background: colors.gold,
    color: colors.primary,
    padding: "12px 22px",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "12px",
    borderRadius: "4px",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    marginLeft: "10px",
    boxShadow: "0 4px 15px rgba(201, 162, 39, 0.2)",
    display: "inline-block"
  },
};

export default Header;