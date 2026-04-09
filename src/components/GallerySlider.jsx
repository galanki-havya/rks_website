import React, { useEffect, useState, useCallback } from "react";

// IMAGES (Keep your imports as they are)
import annual1 from "../assets/annual.png";
import annual3 from "../assets/annual_2.png";
import annual5 from "../assets/annual_4.png";
import annual6 from "../assets/annual_5.png";
import academics1 from "../assets/academics.png";
import sports from "../assets/sports.png";
import classroom from "../assets/classroom.png";
import event1 from "../assets/events_1.png";
import event2 from "../assets/events_2.png";
import event3 from "../assets/events_3.png";
import event4 from "../assets/events_4.png";
import event5 from "../assets/events_5.png";
import event6 from "../assets/events_6.png";

const images = [
  event4, annual1, annual3, annual5, annual6, 
  academics1, sports, classroom, event1, 
  event2, event3, event5, event6,
];

function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const swapImages = useCallback(() => {
    setIsTransitioning(true);
    
    // Smooth transition logic:
    // We wait for the fade to finish, then set the new 'current' image
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setNextIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 1500); // Matches the CSS transition duration
  }, [nextIndex]);

  useEffect(() => {
    const timer = setInterval(swapImages, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [swapImages]);

  return (
    <div style={styles.container}>
      {/* BACKGROUND LAYER (The image being faded into) */}
      <img
        src={images[nextIndex]}
        alt=""
        style={{ ...styles.image, opacity: 1, zIndex: 1 }}
      />

      {/* FOREGROUND LAYER (The image currently visible that fades out) */}
      <img
        src={images[currentIndex]}
        alt=""
        style={{
          ...styles.image,
          opacity: isTransitioning ? 0 : 1,
          zIndex: 2,
          transform: isTransitioning ? "scale(1.1)" : "scale(1.05)", // Ken Burns Zoom Effect
        }}
      />
      
      {/* VIGNETTE OVERLAY (Adds depth and makes hero text pop) */}
      <div style={styles.vignette}></div>
    </div>
  );
}

const styles = {
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
    backgroundColor: "#001B36", // Matches your brand midnight blue
  },

  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    objectFit: "cover",
    objectPosition: "center 20%", // Prioritizes faces/heads in mobile view
    transition: "opacity 1.5s ease-in-out, transform 6s linear",
    willChange: "opacity, transform",
  },

  vignette: {
    position: "absolute",
    inset: 0,
    zIndex: 3,
    // Adds a subtle dark gradient at the edges to focus on the center
    background: "radial-gradient(circle, transparent 20%, rgba(0, 27, 54, 0.4) 100%)",
    pointerEvents: "none",
  },
};

export default GallerySlider;