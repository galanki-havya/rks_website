import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const colors = {
  midnight: "#001B36", 
  premiumGold: "#B38B45", 
  white: "#FFFFFF",
  platinum: "#E0E0E0",
  borderMuted: "rgba(179, 139, 69, 0.3)"
};

function Hero() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={styles.hero}>
      {/* Visual Enhancements */}
      <div style={styles.overlay}></div>
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>
      
      <div style={{
        ...styles.container,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease, transform 1s ease"
      }}>
        <div style={styles.content}>
          <div style={styles.badge}>ESTABLISHED EXCELLENCE</div>
          
          <h1 style={styles.title}>
            Inspiring Young Minds <br /> 
            <span style={{ color: colors.premiumGold, position: 'relative' }}>
                To Shine Tomorrow.
            </span>
          </h1>

          <p style={styles.subtitle}>
            RKS Next Gen School (Play School - Grade X) provides a world-class 
            foundation through <span style={{color: colors.white, fontWeight: '500'}}>concept-based learning</span> and IIT-JEE / NEET orientation, 
            preparing the leaders of the next generation.
          </p>

          <div style={styles.btnContainer}>
            <button
              style={{
                ...styles.btn,
                ...(isHovered ? styles.btnHover : {}),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => navigate("/admissions")}
            >
              Admissions Open 2026-27
            </button>
            <button 
              style={styles.secondaryBtn}
              onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.1)"}
              onMouseLeave={(e) => e.target.style.background = "transparent"}
              onClick={() => navigate("/about")}
            >
              View Prospectus
            </button>
          </div>
          
          <div style={styles.trustFooter}>
            <div style={styles.footerItem}>
                <span style={styles.check}>✓</span>
                <span style={styles.footerText}>CBSE CURRICULUM</span>
            </div>
            <span style={styles.dot}>•</span>
            <div style={styles.footerItem}>
                <span style={styles.check}>✓</span>
                <span style={styles.footerText}>13 YEARS EXCELLENCE</span>
            </div>
            <span style={styles.dot}>•</span>
            <div style={styles.footerItem}>
                <span style={styles.check}>✓</span>
                <span style={styles.footerText}>DAY CUM RESIDENTIAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    width: "100%",
    minHeight: "100vh", // Full screen height for more impact
    background: colors.midnight,
    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(179, 139, 69, 0.05) 0%, transparent 50%), 
                      linear-gradient(135deg, ${colors.midnight} 0%, #000D1A 100%)`,
    display: "flex",
    alignItems: "center", // Centered vertically for a hero feel
    justifyContent: "flex-start",
    position: "relative",
    overflow: "hidden",
    paddingTop: "80px", 
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')", // Subtle texture
    opacity: 0.1,
    pointerEvents: "none",
  },
  container: {
    width: "100%",
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 60px",
    zIndex: 2,
  },
  content: {
    maxWidth: "850px", 
    textAlign: "left",
  },
  badge: {
    color: colors.premiumGold,
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "3px",
    marginBottom: "20px",
    display: "inline-block",
    borderLeft: `3px solid ${colors.premiumGold}`,
    paddingLeft: "12px",
  },
  blob1: {
    position: "absolute",
    width: "800px",
    height: "800px",
    background: "rgba(179, 139, 69, 0.07)",
    borderRadius: "50%",
    top: "-200px",
    right: "-100px",
    filter: "blur(120px)",
    animation: "pulse 10s infinite alternate",
  },
  blob2: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "rgba(0, 80, 150, 0.15)",
    borderRadius: "50%",
    bottom: "-150px",
    left: "-50px",
    filter: "blur(100px)",
  },
  title: {
    fontSize: "clamp(38px, 5vw, 64px)", // Slightly larger
    lineHeight: "1.1",
    fontWeight: "800",
    color: colors.white,
    marginBottom: "24px",
    letterSpacing: "-2px",
  },
  subtitle: {
    fontSize: "clamp(16px, 1.2vw, 20px)",
    marginBottom: "40px",
    color: colors.platinum,
    lineHeight: "1.8",
    maxWidth: "650px",
    fontWeight: "300",
    opacity: 0.9,
  },
  btnContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginBottom: "60px",
  },
  btn: {
    padding: "18px 36px",
    fontSize: "14px",
    fontWeight: "700",
    backgroundColor: colors.premiumGold,
    color: colors.midnight,
    border: "none",
    borderRadius: "6px", // Softer corners
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  },
  btnHover: {
    transform: "translateY(-3px)",
    backgroundColor: "#D4AF37",
    boxShadow: "0 12px 24px rgba(179, 139, 69, 0.3)",
  },
  secondaryBtn: {
    padding: "18px 36px",
    fontSize: "14px",
    fontWeight: "600",
    backgroundColor: "transparent",
    color: colors.white,
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    backdropFilter: "blur(5px)",
  },
  trustFooter: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "30px",
  },
  footerItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  check: {
    color: colors.premiumGold,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: "12px",
    fontWeight: "600",
    color: "rgba(255,255,255,0.6)",
    letterSpacing: "1px",
  },
  dot: {
    color: "rgba(255,255,255,0.2)",
    fontSize: "16px",
  }
};

export default Hero;