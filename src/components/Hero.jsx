import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import GallerySlider from "../components/GallerySlider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
  },
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // 2. Initialize navigate function

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.bgWrapper}>
        <GallerySlider />
        <div style={{
          ...styles.premiumOverlay,
          background: isMobile 
            ? "linear-gradient(to top, rgba(0, 27, 54, 1) 0%, rgba(0, 27, 54, 0.6) 40%, rgba(0, 27, 54, 0.2) 100%)" 
            : "linear-gradient(to right, rgba(0, 27, 54, 0.95) 0%, rgba(0, 27, 54, 0.4) 50%, transparent 100%)"
        }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          ...styles.content,
          padding: isMobile ? "0 20px 100px 20px" : "0 8%",
          justifyContent: isMobile ? "flex-end" : "center",
          alignItems: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <motion.p variants={itemVariants} style={{
          ...styles.topLine,
          fontSize: isMobile ? "11px" : "13px",
        }}>
          BUILDING A FOUNDATION FOR EXCELLENCE
        </motion.p>

        <motion.h1 variants={itemVariants} style={{
          ...styles.title,
          fontSize: isMobile ? "38px" : "clamp(45px, 5.5vw, 68px)", 
        }}>
          <span style={{ color: "#fff" }}>Empowering</span> 
          <br /> 
          <span style={{ color: "#C5A059" }}>Future Leaders</span>
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: isMobile ? "40px" : "80px" }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{...styles.goldLine, margin: isMobile ? "15px auto" : "25px 0"}} 
        />

        <motion.p variants={itemVariants} style={{
          ...styles.subtitle,
          fontSize: isMobile ? "15px" : "18px",
          maxWidth: isMobile ? "100%" : "520px",
        }}>
          Nurturing students with innovation, knowledge, and values to 
          become the visionary leaders of tomorrow.
        </motion.p>

        <motion.div variants={itemVariants} style={{
          ...styles.buttons,
          flexDirection: isMobile ? "column" : "row",
          width: isMobile ? "100%" : "auto",
          gap: isMobile ? "12px" : "15px"
        }}>
          {/* 3. Redirect to Admissions */}
          <motion.button 
            onClick={() => navigate("/admissions")} 
            whileHover={{ scale: 1.02, backgroundColor: "#D4AF37" }}
            whileTap={{ scale: 0.98 }}
            style={{...styles.primaryBtn, width: isMobile ? "100%" : "auto"}}
          >
            Admissions 2026-27
          </motion.button>
          
          {/* 4. Redirect to About */}
          <motion.button 
            onClick={() => navigate("/about")}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.98 }}
            style={{...styles.secondaryBtn, width: isMobile ? "100%" : "auto"}}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          ...styles.quoteWrapper,
          bottom: isMobile ? "25px" : "50px",
          left: isMobile ? "20px" : "auto",
          right: isMobile ? "20px" : "8%",
          maxWidth: isMobile ? "none" : "320px",
          textAlign: isMobile ? "center" : "left",
          background: isMobile ? "rgba(255,255,255,0.05)" : "transparent",
          padding: isMobile ? "12px 20px" : "0 0 0 20px",
          backdropFilter: isMobile ? "blur(8px)" : "none",
          borderRadius: isMobile ? "4px" : "0",
          borderLeft: isMobile ? "none" : "3px solid #C5A059",
          borderTop: isMobile ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >

      </motion.div>
    </div>
  );
};

// ... Styles remain the same

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#001B36", 
    fontFamily: "'Inter', sans-serif",
  },
  bgWrapper: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
  },
  premiumOverlay: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
  },
  content: {
    position: "relative",
    zIndex: 10,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
  },
  topLine: {
    color: "#C5A059",
    letterSpacing: "4px",
    marginBottom: "8px",
    fontWeight: "800",
    textTransform: "uppercase",
  },
  title: {
    fontWeight: "900",
    lineHeight: "1.1",
    margin: 0,
    letterSpacing: "-1px",
    textTransform: "uppercase",
  },
  goldLine: {
    height: "4px",
    background: "#C5A059",
    borderRadius: "2px",
  },
  subtitle: {
    lineHeight: "1.6",
    color: "rgba(255,255,255,0.9)",
    fontWeight: "400",
    margin: "0 0 35px 0",
  },
  quoteWrapper: {
    position: "absolute",
    zIndex: 20,
  },
  quoteText: {
    fontStyle: "italic",
    color: "rgba(255,255,255,0.8)",
    margin: 0,
    lineHeight: "1.5",
  },
  author: {
    display: "block",
    marginTop: "4px",
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#C5A059",
  },
  buttons: {
    display: "flex",
  },
  primaryBtn: {
    padding: "16px 32px",
    background: "#C5A059",
    color: "#001B36",
    border: "none",
    fontWeight: "900",
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "1px",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "0.3s all",
  },
  secondaryBtn: {
    padding: "16px 32px",
    border: "1px solid rgba(255,255,255,0.4)",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    color: "#fff",
    fontWeight: "800",
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "1px",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "0.3s all",
  }
};

export default Hero;