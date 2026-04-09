import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft } from "lucide-react";

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

const colors = {
  midnight: "#001B36",
  premiumGold: "#C5A059",
  slate: "#475569",
  glassWhite: "rgba(255, 255, 255, 0.65)",
  glassBorder: "rgba(255, 255, 255, 0.4)",
  glassShadow: "rgba(0, 27, 54, 0.08)"
};

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [activeFolder, setActiveFolder] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedImage(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  const categories = ["All", "Events", "Academics", "Sports", "Facilities"];

  const images = [
    { id: 1, title: "Annual Day 2025", category: "Events", thumbnail: annual1, album: [annual1, annual2, annual3, annual4, annual5, annual6] },
    { id: 2, title: "Science & Innovation", category: "Academics", thumbnail: academics1, album: [academics1, academics2, academics3, academics4] },
    { id: 3, title: "Sports Meet", category: "Sports", thumbnail: sports, album: [sports, sports1] },
    { id: 4, title: "Modern Infrastructure", category: "Facilities", thumbnail: classroom, album: [classroom, classroom1, classroom2, classroom3, classroom4] },
    { id: 5, title: "Cultural Events", category: "Events", thumbnail: event1, album: [event1, event2, event3, event4, event5, event6] },
  ];

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div style={styles.pageWrapper}>
      
      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={styles.modalOverlay} onClick={() => setSelectedImage(null)}
          >
            <button style={styles.closeBtnOverlay} onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>
              <X size={isMobile ? 24 : 32} strokeWidth={1.5} />
            </button>
            <motion.img 
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} style={styles.modalImage} alt="Detailed View"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={selectedImage ? "blur-md transition-all duration-700" : "transition-all duration-700"} style={{...styles.container, padding: isMobile ? "0 20px" : "0 8%"}}>
        
        {/* --- HERO SECTION --- */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          style={{...styles.heroSection, marginBottom: isMobile ? "30px" : "50px"}}
        >
          <div style={styles.heroContent}>
            <p style={styles.goldTag}>VISUAL JOURNEY</p>
            <h1 style={{...styles.mainTitle, fontSize: isMobile ? "28px" : "48px"}}>
              School <span style={{ color: colors.premiumGold }}>Gallery</span>
            </h1>
            <div style={styles.goldLine}></div>
            <p style={{...styles.heroPara, fontSize: isMobile ? "14px" : "15px"}}>
              Explore our vibrant campus life, capturing moments of academic excellence and cultural heritage.
            </p>
          </div>
        </motion.section>

        {/* --- GLASS NAVIGATION BAR --- */}
        <div style={{...styles.navBar, top: isMobile ? "20px" : "40px"}}>
          <div style={{...styles.glassNav, width: isMobile ? "100%" : "auto"}}>
            {activeFolder ? (
              <motion.button 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                onClick={() => setActiveFolder(null)} 
                style={styles.backBtn}
              >
                <ChevronLeft size={16} /> BACK TO ALBUMS
              </motion.button>
            ) : (
              <div style={styles.filterList}>
                {categories.map((cat) => (
                  <button 
                    key={cat} 
                    onClick={() => setFilter(cat)}
                    style={{
                      ...styles.filterTab,
                      color: filter === cat ? colors.premiumGold : colors.midnight,
                      backgroundColor: filter === cat ? "rgba(197, 160, 89, 0.1)" : "transparent",
                      borderRadius: "50px",
                      fontSize: isMobile ? "10px" : "11px",
                      padding: isMobile ? "6px 14px" : "8px 18px"
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --- GRID --- */}
        <motion.div layout style={{...styles.grid, gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))"}}>
          <AnimatePresence mode="popLayout">
            {activeFolder ? (
              activeFolder.album.map((imgUrl, idx) => (
                <motion.div 
                  key={`${activeFolder.id}-${idx}`}
                  layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={!isMobile ? { y: -8 } : {}}
                  style={{...styles.glassPhotoCard, height: isMobile ? "240px" : "340px"}}
                  onClick={() => setSelectedImage(imgUrl)}
                >
                  <img src={imgUrl} alt="Album detail" style={styles.fullImg} />
                  <div className="glass-overlay" style={styles.glassGridOverlay}>
                     <Maximize2 size={isMobile ? 24 : 32} color="white" strokeWidth={1.5} />
                  </div>
                </motion.div>
              ))
            ) : (
              filteredImages.map((img) => (
                <motion.div 
                  key={img.id} layout initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                  whileHover={!isMobile ? { y: -10 } : {}}
                  style={styles.glassFolderCard} 
                  onClick={() => setActiveFolder(img)}
                >
                  <div style={{...styles.imgWrapper, height: isMobile ? "200px" : "240px"}}>
                    <img src={img.thumbnail} style={styles.thumbImg} alt={img.title} />
                    <div className="folder-overlay" style={styles.folderOverlay}>
                      <div style={styles.viewLabel}>VIEW ALBUM</div>
                    </div>
                  </div>
                  <div style={styles.infoArea}>
                    <p style={styles.folderCat}>{img.category}</p>
                    <h3 style={{...styles.folderTitle, fontSize: isMobile ? "18px" : "20px"}}>{img.title}</h3>
                    <div style={styles.glassCounter}>{img.album.length} Captures</div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .glass-overlay { opacity: 0; backdrop-filter: blur(4px); transition: 0.4s; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0, 27, 54, 0.4); }
        @media (hover: hover) {
          div:hover > .glass-overlay { opacity: 1; }
          div:hover > div > .folder-overlay { opacity: 1; }
          div:hover img { transform: scale(1.08); }
        }
        .folder-overlay { position: absolute; inset: 0; background: rgba(0,27,54,0.4); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.4s; }
        img { transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1); }
        button { cursor: pointer; border: none; outline: none; transition: 0.3s; }
        /* Smooth scroll for mobile navigation */
        .filter-list-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

const styles = {
  pageWrapper: { 
    background: "linear-gradient(135deg, #F0F4F8 0%, #FFFFFF 100%)", 
    minHeight: "100vh", 
    paddingTop: "100px", 
    paddingBottom: "60px",
    fontFamily: "'Inter', sans-serif",
    overflowX: "hidden"
  },
  modalOverlay: {
    position: "fixed", inset: 0, backgroundColor: "rgba(0, 27, 54, 0.95)",
    backdropFilter: "blur(20px)", zIndex: 3000, display: "flex",
    alignItems: "center", justifyContent: "center", padding: "20px"
  },
  closeBtnOverlay: {
    position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.1)",
    color: colors.premiumGold, padding: "10px", borderRadius: "50%",
    border: "1px solid rgba(197, 160, 89, 0.3)", zIndex: 3001
  },
  modalImage: {
    maxWidth: "100%", maxHeight: "80vh", borderRadius: "8px",
    objectFit: "contain", boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
    border: "1px solid rgba(255,255,255,0.1)"
  },
  heroSection: { textAlign: "left" },
  heroContent: { maxWidth: "750px" },
  goldTag: { color: colors.premiumGold, letterSpacing: "3px", fontSize: "10px", fontWeight: "900", marginBottom: "6px" },
  mainTitle: { color: colors.midnight, fontWeight: "900", margin: "0" },
  goldLine: { width: "35px", height: "3px", backgroundColor: colors.premiumGold, margin: "15px 0" },
  heroPara: { color: colors.slate, lineHeight: "1.6" },
  container: { maxWidth: "1440px", margin: "0 auto" },
  
  navBar: { marginBottom: "40px", display: "flex", justifyContent: "center", position: "sticky", zIndex: 100 },
  glassNav: {
    background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(12px)",
    padding: "6px",
    borderRadius: "100px",
    border: `1px solid ${colors.glassBorder}`,
    boxShadow: "0 8px 32px 0 rgba(0, 27, 54, 0.05)",
    overflowX: "auto",
    msOverflowStyle: "none",
    scrollbarWidth: "none"
  },
  filterList: { display: "flex", gap: "5px", whiteSpace: "nowrap" },
  filterTab: { border: "none", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" },
  backBtn: { border: "none", background: colors.midnight, color: "#fff", padding: "8px 20px", fontWeight: "700", borderRadius: "50px", fontSize: "10px", display: "flex", alignItems: "center", gap: "8px", margin: "0 auto" },

  grid: { display: "grid", gap: "25px" },
  glassFolderCard: {
    background: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    border: `1px solid ${colors.glassBorder}`,
    padding: "10px",
    cursor: "pointer",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.05)",
  },
  imgWrapper: { position: "relative", borderRadius: "18px", overflow: "hidden", backgroundColor: "#f8f8f8" },
  thumbImg: { width: "100%", height: "100%", objectFit: "cover" },
  viewLabel: { border: "1.5px solid #fff", color: "#fff", padding: "8px 18px", fontSize: "10px", fontWeight: "700", letterSpacing: "1px", borderRadius: "50px" },
  
  infoArea: { padding: "15px 10px 10px" },
  folderCat: { color: colors.premiumGold, fontWeight: "900", fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 4px 0" },
  folderTitle: { color: colors.midnight, fontWeight: "800", margin: 0 },
  glassCounter: { 
    display: "inline-block", marginTop: "12px", padding: "4px 12px", 
    background: "rgba(0, 27, 54, 0.05)", borderRadius: "50px", fontSize: "11px", color: colors.slate 
  },

  glassPhotoCard: { position: "relative", borderRadius: "20px", overflow: "hidden", cursor: "zoom-in", border: `1px solid ${colors.glassBorder}` },
  fullImg: { width: "100%", height: "100%", objectFit: "cover" },
  glassGridOverlay: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }
};

export default Gallery;