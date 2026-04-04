import React, { useState, useEffect } from "react";
import GallerySlider from "../components/GallerySlider";

// --- ASSET IMPORTS ---
import annual1 from "../assets/annual.png";
import annual2 from "../assets/annual_1.png";
import annual3 from "../assets/annual_2.png";
import annual4 from "../assets/annual_3.png";
import annual5 from "../assets/annual_4.png";
import annual6 from "../assets/annual_5.png";
import academics1 from "../assets/academics.png";
import academics2 from "../assets/academics_1.png";
import academics3 from "../assets/academics_2.png";
import academics4 from "../assets/academics_3.png";
import sports from "../assets/sports.png";
import sports1 from "../assets/sports_1.png";
import classroom from "../assets/classroom.png";
import classroom1 from "../assets/classroom_1.png";
import classroom2 from "../assets/classroom_2.png";
import classroom3 from "../assets/classroom_3.png";
import classroom4 from "../assets/classroom_4.png";
import event1 from "../assets/events_1.png";
import event2 from "../assets/events_2.png";
import event3 from "../assets/events_3.png";
import event4 from "../assets/events_4.png";
import event5 from "../assets/events_5.png";
import event6 from "../assets/events_6.png";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [activeFolder, setActiveFolder] = useState(null);
  const [animate, setAnimate] = useState(false);

  const categories = ["All", "Events", "Academics", "Sports", "Facilities"];

  const images = [
    { id: 1, title: "Annual Day 2025", category: "Events", isFolder: true, thumbnail: annual1, album: [annual1, annual2, annual3, annual4, annual5, annual6] },
    { id: 2, title: "Science Lab", category: "Academics", isFolder: true, thumbnail: academics1, album: [academics1, academics2, academics3, academics4] },
    { id: 3, title: "Sports Meet", category: "Sports", isFolder: true, thumbnail: sports, album: [sports, sports1] },
    { id: 4, title: "Digital Classroom", category: "Facilities", isFolder: true, thumbnail: classroom, album: [classroom, classroom1, classroom2, classroom3, classroom4] },
    { id: 5, title: "Cultural Fest", category: "Events", isFolder: true, thumbnail: event1, album: [event1, event2, event3, event4, event5, event6] },
  ];

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [filter, activeFolder]);

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div style={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section style={styles.heroSection}>
        <div style={styles.headerText}>
          <p style={styles.subTitle}>VISUAL JOURNEY</p>
          <h1 style={styles.mainTitle}>School Gallery</h1>
          <div style={styles.goldUnderline}></div>
        </div>
        
        {/* CENTERED HIGHLIGHTS TITLE */}
        <div style={styles.sectionHeaderCenter}>
            <div style={styles.verticalGold}></div>
            <h3 style={styles.sectionTitle}>Featured Highlights</h3>
        </div>
        
        <GallerySlider />
      </section>

      <div style={styles.container}>
        {/* 2. CENTERED FILTERS */}
        <div style={styles.navBarCenter}>
          {activeFolder ? (
            <button onClick={() => setActiveFolder(null)} style={styles.backBtn}>
              <span style={{ marginRight: "10px" }}>&#10229;</span> Back to Gallery
            </button>
          ) : (
            <div style={styles.filterBarCenter}>
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => { setFilter(cat); setActiveFolder(null); }}
                  style={{
                    ...styles.filterBtn,
                    color: filter === cat ? "#C9A227" : "#002147",
                  }}
                >
                  {cat}
                  <div style={{
                    ...styles.filterUnderline,
                    width: filter === cat ? "100%" : "0%",
                  }}></div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3. GRID VIEW */}
        <div style={{ 
          ...styles.grid, 
          opacity: animate ? 1 : 0, 
          transform: animate ? "translateY(0px)" : "translateY(20px)",
          transition: "all 0.6s cubic-bezier(0.2, 1, 0.3, 1)"
        }}>
          {activeFolder ? (
            activeFolder.album.map((imgUrl, idx) => (
              <div key={idx} style={styles.imageCard}>
                <div style={styles.imageWrapper}>
                    <img src={imgUrl} alt="gallery" style={styles.actualImg} />
                </div>
              </div>
            ))
          ) : (
            filteredImages.map((img) => (
              <div 
                key={img.id} 
                style={styles.imageCard} 
                onClick={() => img.isFolder && setActiveFolder(img)}
              >
                <div style={styles.imageWrapper}>
                    <div style={{
                      ...styles.placeholderImg, 
                      backgroundImage: img.thumbnail ? `url(${img.thumbnail})` : 'none',
                    }} />
                    <div style={styles.overlay}>
                        <span style={styles.overlayText}>Open Album</span>
                    </div>
                </div>
                <div style={styles.cardInfo}>
                  <div style={styles.cardHeader}>
                    <div style={styles.miniGoldLine}></div>
                    <h4 style={styles.imgTitle}>{img.title}</h4>
                  </div>
                  <p style={styles.imgCategory}>{img.category}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: { backgroundColor: "#ffffff", minHeight: "100vh", paddingBottom: "100px" },
  heroSection: { padding: "60px 20px 20px", textAlign: "center" },
  headerText: { marginBottom: "30px" },
  subTitle: { color: "#C9A227", letterSpacing: "5px", fontSize: "12px", fontWeight: "800", margin: "0" },
  mainTitle: { fontSize: "48px", color: "#002147", fontWeight: "900", margin: "10px 0" },
  goldUnderline: { width: "60px", height: "4px", backgroundColor: "#C9A227", margin: "0 auto", borderRadius: "10px" },

  sectionHeaderCenter: { 
    maxWidth: "1300px", margin: "50px auto 25px", display: "flex", 
    alignItems: "center", justifyContent: "center", gap: "12px", padding: "0 20px" 
  },
  verticalGold: { width: "5px", height: "28px", backgroundColor: "#C9A227", borderRadius: "3px" },
  sectionTitle: { fontSize: "24px", color: "#002147", fontWeight: "800", margin: 0 },

  container: { maxWidth: "1350px", margin: "20px auto 0", padding: "0 30px" },
  navBarCenter: { marginBottom: "50px", display: "flex", justifyContent: "center" },
  filterBarCenter: { display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" },
  filterBtn: { 
    padding: "10px 0", background: "none", border: "none", cursor: "pointer", 
    fontSize: "16px", transition: "0.3s", position: "relative", fontWeight: "700",
    textTransform: "uppercase", letterSpacing: "1px"
  },
  filterUnderline: { 
    position: "absolute", bottom: 0, left: 0, height: "3px", backgroundColor: "#C9A227", 
    transition: "width 0.3s ease", borderRadius: "10px" 
  },

  backBtn: { 
    padding: "12px 28px", cursor: "pointer", backgroundColor: "#002147", 
    color: "white", border: "none", borderRadius: "50px", fontWeight: "700"
  },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "40px" },
  imageCard: { cursor: "pointer", transition: "transform 0.3s ease" },
  imageWrapper: {
    position: "relative", overflow: "hidden", borderRadius: "24px", height: "280px",
    backgroundColor: "#f9f9f9", boxShadow: "0 15px 35px rgba(0,0,0,0.08)"
  },
  placeholderImg: { width: "100%", height: "100%", backgroundSize: 'cover', backgroundPosition: 'center', transition: "1s ease" },
  actualImg: { width: "100%", height: "100%", objectFit: "cover" },
  overlay: {
    position: "absolute", inset: 0, backgroundColor: "rgba(0,33,71,0.7)",
    display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "0.4s"
  },
  overlayText: { color: "#fff", fontWeight: "800", border: "2px solid #C9A227", padding: "10px 20px", borderRadius: "50px" },
  cardInfo: { padding: "20px 5px" },
  cardHeader: { display: "flex", alignItems: "center", gap: "10px" },
  miniGoldLine: { width: "4px", height: "20px", backgroundColor: "#C9A227", borderRadius: "2px" },
  imgTitle: { margin: "0", fontSize: "20px", color: "#002147", fontWeight: "800" },
  imgCategory: { margin: "6px 0 0 14px", fontSize: "14px", color: "#888", fontWeight: "600" }
};

export default Gallery;