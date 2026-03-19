import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoImg from "../assets/logo.jpg"; 

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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
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
      boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.15)" : "0 2px 10px rgba(0,0,0,0.05)"
    }}>
      <div style={styles.topBar}>
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

      <div style={styles.mainHeader}>
        <div style={styles.containerFlex}>
          
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={styles.logoContainer}>
              <img 
                src={LogoImg} 
                alt="RKS Next Gen School Logo" 
                style={styles.logoImage}
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
              <div style={styles.brandText}>
                <h1 style={styles.schoolName}>RKS NEXT GEN SCHOOL</h1>
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
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
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
    transition: "all 0.3s ease",
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
    padding: "8px 0",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.5px",
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
    padding: "12px 0",
    backgroundColor: colors.white,
  },
  logoContainer: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  logoImage: {
    height: "65px",
    width: "auto",
    objectFit: "contain",
  },
  brandText: {
    display: "flex",
    flexDirection: "column",
  },
  schoolName: {
    fontSize: "22px",
    margin: 0,
    color: colors.primary,
    fontWeight: "900",
    lineHeight: "1.1",
    letterSpacing: "-0.5px",
  },
  schoolSubtitle: {
    fontSize: "9px",
    color: colors.gold,
    margin: "2px 0 0 0",
    letterSpacing: "2.2px",
    fontWeight: "700",
  },
  navList: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "700",
    padding: "8px 0",
    position: "relative",
    transition: "color 0.3s ease",
    textTransform: "uppercase",
  },
  underline: {
    height: "2px",
    backgroundColor: colors.gold,
    position: "absolute",
    bottom: 0,
    left: 0,
    transition: "width 0.3s ease",
  },
  enrollBtn: {
    background: colors.gold,
    color: colors.primary,
    padding: "10px 20px",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "12px",
    borderRadius: "4px",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    marginLeft: "10px",
    boxShadow: "0 4px 10px rgba(201, 162, 39, 0.2)",
  },
};

export default Header;