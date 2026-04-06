import React, { useEffect, useState, useCallback } from "react";

// IMAGES
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
  event4,
  annual1,
  annual3,
  annual5,
  annual6,
  academics1,
  sports,
  classroom,
  event1,
  event2,
  event3,
  event5,
  event6,
];

function GallerySlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 200);
  }, []);

  useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div style={styles.container}>
      <img
        src={images[index]}
        alt=""
        style={{
          ...styles.image,
          opacity: fade ? 1 : 0,
        }}
      />
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
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // 🔥 MOST IMPORTANT
    transition: "opacity 1s ease-in-out",
  },
};

export default GallerySlider;