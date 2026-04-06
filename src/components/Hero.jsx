import React, { useEffect, useState } from "react";
import GallerySlider from "../components/GallerySlider";

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.margin = "0";
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {/* 1. BACKGROUND SLIDER LAYER */}
      <div style={styles.bgWrapper}>
        <GallerySlider />
        <div style={styles.premiumOverlay}></div>
      </div>

      {/* 2. LEFT CONTENT PANEL */}
      <div
        style={{
          ...styles.content,
          opacity: show ? 1 : 0,
          transform: show ? "translateX(0)" : "translateX(-50px)",
        }}
      >
        <p style={styles.topLine}>BUILDING A FOUNDATION FOR EXCELLENCE</p>

        <h1 style={styles.title}>
          <span style={{ color: "#fff" }}>Empowering</span> 
          <br /> 
          <span style={{ color: "#C5A059" }}>Future Leaders</span>
        </h1>

        <div style={styles.goldLine}></div>

        <p style={styles.subtitle}>
          Empowering students with innovation, knowledge, and strong values to
          shape future leaders in a dynamic world.
        </p>

        <div style={styles.quoteWrapper}>
          <div style={styles.quoteVerticalLine}></div>
          <p style={styles.quoteText}>
            "Arise, awake, and stop not until the goal is reached."
          </p>
        </div>

        <div style={styles.buttons}>
          <button 
            style={styles.primaryBtn}
            onMouseOver={(e) => e.target.style.background = "#D4AF37"}
            onMouseOut={(e) => e.target.style.background = "#C5A059"}
          >
            Admissions 2026-27
          </button>
          <button 
            style={styles.secondaryBtn}
            onMouseOver={(e) => e.target.style.background = "rgba(255,255,255,0.1)"}
            onMouseOut={(e) => e.target.style.background = "transparent"}
          >
            Learn More
          </button>
        </div>
      </div>

      <style>{`
        button { transition: all 0.3s ease-in-out !important; }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#001F3F", 
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  bgWrapper: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
  },
  premiumOverlay: {
    position: "absolute",
    inset: 0,
    // Darker on the far left to ensure the text is razor-sharp against images
    background: "linear-gradient(to right, rgba(0, 31, 63, 1) 0%, rgba(0, 31, 63, 0.8) 30%, rgba(0, 31, 63, 0.4) 60%, rgba(0, 0, 0, 0.1) 100%)",
  },
  content: {
    position: "relative",
    zIndex: 10,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start", // Force all children to the left
    paddingLeft: "6%",         // Standard professional margin
    maxWidth: "800px", 
    color: "#fff",
    transition: "all 1.2s cubic-bezier(0.19, 1, 0.22, 1)",
    textAlign: "left",         // Explicit text alignment
  },
  topLine: {
    color: "#C5A059",
    letterSpacing: "4px",
    fontSize: "12px",
    marginBottom: "10px",
    fontWeight: "700",
    textTransform: "uppercase",
    marginRight: "auto",      // Pushes to left
  },
  title: {
    fontSize: "clamp(42px, 6vw, 72px)",
    fontWeight: "900",
    lineHeight: "1.05",
    margin: 0,
    textAlign: "left",
  },
  goldLine: {
    width: "70px",
    height: "5px",
    background: "#C5A059",
    margin: "25px 0",
    borderRadius: "2px",
  },
  subtitle: {
    fontSize: "20px",
    lineHeight: "1.6",
    color: "rgba(255,255,255,0.9)",
    maxWidth: "550px",
    fontWeight: "400",
    margin: "0 0 20px 0",     // Bottom margin only to keep left align
    textAlign: "left",
  },
  quoteWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginTop: "10px",
    justifyContent: "flex-start",
  },
  quoteVerticalLine: {
    width: "3px",
    height: "30px",
    background: "#C5A059",
  },
  quoteText: {
    fontStyle: "italic",
    fontSize: "15px",
    color: "rgba(255,255,255,0.6)",
    margin: 0,
    textAlign: "left",
  },
  buttons: {
    marginTop: "40px",
    display: "flex",
    gap: "20px",
    justifyContent: "flex-start",
  },
  primaryBtn: {
    padding: "16px 35px",
    background: "#C5A059",
    color: "#001F3F",
    border: "none",
    fontWeight: "800",
    textTransform: "uppercase",
    fontSize: "13px",
    letterSpacing: "1px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  secondaryBtn: {
    padding: "16px 35px",
    border: "2px solid rgba(255,255,255,0.3)",
    background: "transparent",
    color: "#fff",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: "13px",
    letterSpacing: "1px",
    cursor: "pointer",
    borderRadius: "4px",
  }
};

export default Hero;