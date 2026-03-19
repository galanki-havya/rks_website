import React, { useState } from "react";
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

  return (
    <div style={styles.hero}>
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>
      
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>
            Inspiring Young Minds <br /> 
            <span style={{ color: colors.premiumGold }}>To Shine Tomorrow.</span>
          </h1>

          <p style={styles.subtitle}>
            RKS Next Gen School (Play School - Grade X) provides a world-class 
            foundation through concept-based learning and IIT-JEE / NEET orientation, 
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
              onClick={() => navigate("/about")}
            >
              View Prospectus
            </button>
          </div>
          
          <div style={styles.trustFooter}>
            <span style={styles.footerText}>✓ CBSE CURRICULUM</span>
            <span style={styles.dot}>•</span>
            <span style={styles.footerText}>✓ 13 YEARS EXCELLENCE</span>
            <span style={styles.dot}>•</span>
            <span style={styles.footerText}>✓ DAY CUM RESIDENTIAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    width: "100%",
    minHeight: "80vh",
    background: `linear-gradient(135deg, ${colors.midnight} 0%, #000D1A 100%)`,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
    overflow: "hidden",
    paddingTop: "120px", 
    paddingBottom: "40px", 
  },
  container: {
    width: "100%",
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 60px",
    zIndex: 2,
  },
  content: {
    maxWidth: "900px", 
    textAlign: "left",
  },
  blob1: {
    position: "absolute",
    width: "800px",
    height: "800px",
    background: "rgba(179, 139, 69, 0.04)",
    borderRadius: "50%",
    top: "-200px",
    right: "-200px",
    filter: "blur(120px)",
  },
  blob2: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "rgba(0, 43, 89, 0.25)",
    borderRadius: "50%",
    bottom: "-150px",
    left: "10%",
    filter: "blur(100px)",
  },
  title: {
    fontSize: "clamp(30px, 4.5vw, 52px)", 
    lineHeight: "1.2",
    fontWeight: "800",
    color: colors.white,
    marginBottom: "18px",
    letterSpacing: "-1px",
  },
  subtitle: {
    fontSize: "clamp(15px, 1.8vw, 18px)",
    marginBottom: "35px",
    color: colors.platinum,
    lineHeight: "1.7",
    maxWidth: "600px",
    fontWeight: "300",
  },
  btnContainer: {
    display: "flex",
    gap: "15px",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginBottom: "40px", // Reduced from 60px to move trust footer up
  },
  btn: {
    padding: "14px 32px",
    fontSize: "13px",
    fontWeight: "700",
    backgroundColor: colors.premiumGold,
    color: colors.midnight,
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  btnHover: {
    transform: "translateY(-2px)",
    backgroundColor: "#C69F56",
    boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
  },
  secondaryBtn: {
    padding: "14px 32px",
    fontSize: "13px",
    fontWeight: "600",
    backgroundColor: "transparent",
    color: colors.white,
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "0.3s",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  trustFooter: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "25px",
  },
  footerText: {
    fontSize: "11px",
    fontWeight: "600",
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "1.5px",
  },
  dot: {
    color: colors.premiumGold,
    fontSize: "16px",
    opacity: 0.6,
  }
};

export default Hero;