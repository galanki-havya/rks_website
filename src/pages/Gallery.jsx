import React, { useState, useEffect } from "react";

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

  // Logic to group your 23 imports into categorized folders
  const images = [
    { 
      id: 1, 
      title: "Annual Day 2025", 
      category: "Events", 
      thumbnail: annual1, 
      album: [annual1, annual2, annual3, annual4, annual5, annual6] 
    },
    { 
      id: 2, 
      title: "Science & Innovation", 
      category: "Academics", 
      thumbnail: academics1, 
      album: [academics1, academics2, academics3, academics4] 
    },
    { 
      id: 3, 
      title: "Sports Meet", 
      category: "Sports", 
      thumbnail: sports, 
      album: [sports, sports1] 
    },
    { 
      id: 4, 
      title: "Modern Infrastructure", 
      category: "Facilities", 
      thumbnail: classroom, 
      album: [classroom, classroom1, classroom2, classroom3, classroom4] 
    },
    { 
      id: 5, 
      title: "Cultural Events", 
      category: "Events", 
      thumbnail: event1, 
      album: [event1, event2, event3, event4, event5, event6] 
    },
  ];

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [filter, activeFolder]);

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div style={styles.pageWrapper}>
      
      {/* 1. LEFT-ALIGNED HERO HEADER */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <p style={styles.goldTag}>VISUAL JOURNEY</p>
          <h1 style={styles.mainTitle}>
            School <span style={{ color: "#C5A059" }}>Gallery</span>
          </h1>
          <div style={styles.goldLine}></div>
          <p style={styles.heroPara}>
            Explore our vibrant campus life, capturing moments of academic 
            excellence, sporting spirit, and cultural heritage.
          </p>
        </div>
      </section>

      <div style={styles.container}>
        
        {/* 2. CENTERED CATEGORY NAVIGATION */}
        <div style={styles.navBar}>
          {activeFolder ? (
            <button onClick={() => setActiveFolder(null)} style={styles.backBtn}>
              <span style={{ marginRight: "10px" }}>←</span> BACK TO GALLERY
            </button>
          ) : (
            <div style={styles.filterList}>
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => { setFilter(cat); setActiveFolder(null); }}
                  style={{
                    ...styles.filterTab,
                    color: filter === cat ? "#C5A059" : "#001F3F",
                    borderBottom: filter === cat ? "3px solid #C5A059" : "3px solid transparent"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3. COMPACT GRID SECTION */}
        <div style={{ 
          ...styles.grid, 
          opacity: animate ? 1 : 0, 
          transform: animate ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.5s ease-out"
        }}>
          {activeFolder ? (
            activeFolder.album.map((imgUrl, idx) => (
              <div key={idx} style={styles.photoCard}>
                <img src={imgUrl} alt="Gallery detail" style={styles.fullImg} />
              </div>
            ))
          ) : (
            filteredImages.map((img) => (
              <div key={img.id} style={styles.folderCard} onClick={() => setActiveFolder(img)}>
                <div style={styles.imgWrapper}>
                  <img src={img.thumbnail} style={styles.thumbImg} alt={img.title} />
                  <div style={styles.overlay}>
                    <div style={styles.viewLabel}>VIEW ALBUM</div>
                  </div>
                </div>
                <div style={styles.infoArea}>
                  <p style={styles.folderCat}>{img.category}</p>
                  <h3 style={styles.folderTitle}>{img.title}</h3>
                  <p style={styles.imgCount}>{img.album.length} Images</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* INLINE CSS FOR HOVER EFFECTS */}
      <style>{`
        .folderCard:hover img { transform: scale(1.1); }
        .folderCard:hover .overlay { opacity: 1; }
        button { transition: all 0.3s ease; cursor: pointer; }
        button:hover { opacity: 0.8; }
      `}</style>
    </div>
  );
};

const styles = {
  pageWrapper: { 
    backgroundColor: "#FFFFFF", 
    minHeight: "100vh", 
    paddingBottom: "100px", 
    fontFamily: "'Inter', sans-serif" 
  },
  
  // Header stays left-aligned per reference
  heroSection: { padding: "80px 8% 20px", textAlign: "left" },
  heroContent: { maxWidth: "700px" },
  goldTag: { color: "#C5A059", letterSpacing: "4px", fontSize: "11px", fontWeight: "800", marginBottom: "10px" },
  mainTitle: { fontSize: "48px", color: "#001F3F", fontWeight: "900", margin: "0" },
  goldLine: { width: "60px", height: "4px", backgroundColor: "#C5A059", margin: "25px 0" },
  heroPara: { fontSize: "16px", color: "#666", lineHeight: "1.7" },

  container: { maxWidth: "1440px", margin: "0 auto", padding: "0 8%" },
  
  // Navigation is centered
  navBar: { 
    padding: "40px 0", 
    display: "flex",
    justifyContent: "center", 
    marginBottom: "30px",
    borderBottom: "1px solid #f0f0f0"
  },
  filterList: { 
    display: "flex", 
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "center" 
  },
  filterTab: { 
    background: "none", border: "none", fontWeight: "700", 
    fontSize: "14px", letterSpacing: "1.5px", paddingBottom: "10px", textTransform: "uppercase"
  },
  backBtn: { 
    background: "#001F3F", color: "#fff", border: "none", padding: "12px 25px", 
    fontWeight: "700", borderRadius: "4px", fontSize: "12px", letterSpacing: "1px"
  },

  // Compact 3-Column Grid
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
    gap: "40px 30px" 
  },
  folderCard: { cursor: "pointer" },
  imgWrapper: { 
    position: "relative", 
    height: "260px", 
    borderRadius: "8px", 
    overflow: "hidden", 
    backgroundColor: "#f8f8f8" 
  },
  thumbImg: { width: "100%", height: "100%", objectFit: "cover", transition: "0.8s ease" },
  overlay: { 
    position: "absolute", inset: 0, backgroundColor: "rgba(0,31,63,0.6)", 
    display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "0.4s" 
  },
  viewLabel: { border: "1px solid #fff", color: "#fff", padding: "10px 20px", fontSize: "11px", fontWeight: "700", letterSpacing: "1px" },
  
  infoArea: { paddingTop: "18px" },
  folderCat: { color: "#C5A059", fontWeight: "800", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 5px 0" },
  folderTitle: { fontSize: "20px", color: "#001F3F", fontWeight: "800", margin: 0 },
  imgCount: { fontSize: "13px", color: "#999", marginTop: "8px" },

  photoCard: { height: "400px", borderRadius: "8px", overflow: "hidden" },
  fullImg: { width: "100%", height: "100%", objectFit: "cover" }
};

export default Gallery;