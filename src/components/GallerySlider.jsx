import React, { useEffect, useState, useCallback } from "react";

// --- ASSET IMPORTS (Using your asset list) ---
import event1 from "../assets/events_4.png";
import annual1 from "../assets/annual.png";
import academics1 from "../assets/academics.png";
import sports from "../assets/sports.png";

const images = [
  { url: event1, title: "Modern Campus Infrastructure" },
  { url: annual1, title: "Annual Day Celebrations 2025" },
  { url: academics1, title: "Interactive Learning Environments" },
  { url: sports, title: "Sports & Extracurricular Excellence" }
];

function GallerySlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Define handleNext with useCallback so it can be used in useEffect safely
  const handleNext = useCallback(() => {
    // 1. Instantly hide content with a rapid transition
    setFade(false);

    // 2. Short pause for the snap-away effect (100ms)
    setTimeout(() => {
      // 3. Change image index
      setIndex((prev) => (prev + 1) % images.length);
      // 4. Instantly fade content back in with a rapid transition
      setFade(true);
    }, 150); // SHORTENED for snap feel (matches CSS)
  }, []);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 150); // SHORTENED for snap feel (matches CSS)
  };

  // DOT NAVIGATION (Allows instant jumping)
  const jumpToIndex = (newIndex) => {
    if (newIndex === index) return;
    setFade(false);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(true);
    }, 150);
  };

  useEffect(() => {
    // Autoplay interval (slightly longer since transition is faster)
    const timer = setInterval(() => handleNext(), 7000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div style={styles.sliderWrapper}>
      <div 
        style={styles.imageViewer}
        key={index} // Force re-render for clean keyframe start
      >
        {/* Navigation Arrows with Hover Glow */}
        <button 
            onClick={handlePrev} 
            style={styles.arrowLeft}
            onMouseOver={(e) => (e.target.style.background = "rgba(255,255,255,0.85)")}
            onMouseOut={(e) => (e.target.style.background = "rgba(255,255,255,0.65)")}
        >&#10229;</button>
        <button 
            onClick={handleNext} 
            style={styles.arrowRight}
            onMouseOver={(e) => (e.target.style.background = "rgba(255,255,255,0.85)")}
            onMouseOut={(e) => (e.target.style.background = "rgba(255,255,255,0.65)")}
        >&#10230;</button>

        {/* 1. Dynamic Snap Transition applied HERE */}
        <img 
            src={images[index].url} 
            alt={images[index].title} 
            style={{ 
                ...styles.image, 
                // Combines fast fade with a snap back to full size
                opacity: fade ? 1 : 0,
                transform: fade ? "scale(1) translateY(0px)" : "scale(1.03) translateY(-10px)",
                // Fast ease-out for a snapping action
                transition: "opacity 0.2s ease-out, transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)"
            }} 
        />
        
        {/* Navigation Dots */}
        <div style={styles.dotContainer}>
            {images.map((_, i) => (
            <div 
                key={i} 
                onClick={() => jumpToIndex(i)}
                style={{
                ...styles.dot, 
                // 2. Added gold border and pulse style to active dot
                backgroundColor: i === index ? "#C9A227" : "rgba(255,255,255,0.4)",
                width: i === index ? "24px" : "8px",
                border: i === index ? "2px solid #fff" : "none",
                transform: i === index ? "scale(1.1)" : "scale(1)"
                }} 
            />
            ))}
        </div>
      </div>

      {/* Clean Centered Caption Section */}
      <div style={{
          ...styles.captionBox,
          // Caption also snaps in
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0px)" : "translateY(10px)",
          transition: "opacity 0.2s ease-out, transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)"
      }}>
        <div style={styles.captionAccent}></div>
        <p style={styles.caption}>{images[index].title}</p>
      </div>
    </div>
  );
}

const styles = {
  sliderWrapper: { 
    width: "100%", 
    maxWidth: "1350px", // Slightly widened
    margin: "0 auto", 
    position: "relative",
    paddingBottom: "10px",
    cursor: "default"
  },
  imageViewer: { 
    position: "relative",
    width: "100%", 
    height: "550px", // Optimal height for high-impact presence
    borderRadius: "24px", // Extra modern smooth corners
    overflow: "hidden", 
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)", // Deepened shadow for depth
    backgroundColor: "#f5f5f5", // Light base for fast loading perception
  },
  image: { 
    width: "100%", 
    height: "100%", 
    objectFit: "cover",
    // We moved the transition logic inline to combine with state
  },
  // Navigation
  arrowLeft: { 
    position: "absolute", left: "25px", top: "50%", transform: "translateY(-50%)", 
    zIndex: 10, background: "rgba(255, 255, 255, 0.65)", color: "#002147", width: "50px", height: "50px", 
    borderRadius: "50%", cursor: "pointer", fontSize: "20px", transition: "0.2s ease", border: "none",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },
  arrowRight: { 
    position: "absolute", right: "25px", top: "50%", transform: "translateY(-50%)", 
    zIndex: 10, background: "rgba(255, 255, 255, 0.65)", color: "#002147", width: "50px", height: "50px", 
    borderRadius: "50%", cursor: "pointer", fontSize: "20px", transition: "0.2s ease", border: "none",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },
  // Dots
  dotContainer: { 
    position: "absolute", bottom: "20px", right: "25px", display: "flex", gap: "8px", zIndex: 5 
  },
  dot: { 
      height: "8px", 
      borderRadius: "10px", 
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", 
      cursor: "pointer",
      boxSizing: "border-box"
  },

  // Clean Caption Box below the image
  captionBox: { 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    gap: "12px", 
    padding: "25px 0" 
  },
  captionAccent: { 
    width: "5px", // Slightly wider line
    height: "30px", // Tall line for premium look
    backgroundColor: "#C9A227", 
    borderRadius: "3px"
  },
  caption: { 
    color: "#002147", 
    fontSize: "1.3rem", // Slightly larger
    fontWeight: "800", // Bolder
    margin: 0, 
    fontFamily: "inherit",
    letterSpacing: "-0.5px"
  },
};

export default GallerySlider;