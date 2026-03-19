import React, { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Events", "Academics", "Sports", "Facilities"];

  const images = [
    { id: 1, title: "Annual Day 2025", category: "Events" },
    { id: 2, title: "Science Lab", category: "Academics" },
    { id: 3, title: "Sports Meet", category: "Sports" },
    { id: 4, title: "Digital Classroom", category: "Facilities" },
    { id: 5, title: "Cultural Fest", category: "Events" },
    { id: 6, title: "Library Session", category: "Academics" },
    { id: 7, title: "Yoga Morning", category: "Sports" },
    { id: 8, title: "Art Exhibition", category: "Events" },
  ];

  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div style={styles.pageWrapper}>
      {/* Increased padding-top to 140px to move content down */}
      <section style={styles.header}>
        <h2 style={styles.title}>School Gallery</h2>
        <p style={styles.subtitle}>Capturing moments of growth, joy, and achievement at RKS.</p>
      </section>

      <div style={styles.container}>
        
        {/* Category Filter Bar */}
        <div style={styles.filterBar}>
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              style={{
                ...styles.filterBtn,
                backgroundColor: filter === cat ? "#C9A227" : "#fff",
                color: filter === cat ? "#fff" : "#002147",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div style={styles.grid}>
          {filteredImages.map((img) => (
            <div key={img.id} style={styles.imageCard}>
              <div style={styles.placeholderImg}>
                <span style={styles.imgLabel}>{img.title}</span>
              </div>
              <div style={styles.cardInfo}>
                <span style={styles.categoryBadge}>{img.category}</span>
                <h4 style={styles.imgTitle}>{img.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* New Section: Video Highlights */}
        <section style={styles.videoSection}>
          <h3 style={styles.sectionTitle}>Video Highlights</h3>
          <div style={styles.videoPlaceholder}>
            <div style={styles.playButton}>▶</div>
            <p style={{ color: "#fff", marginTop: "15px" }}>Watch our 2025 Campus Life Reel</p>
          </div>
        </section>

      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: "#F4F6F8",
    minHeight: "100vh",
    paddingBottom: "80px",
  },
  header: {
    backgroundColor: "#002147",
    color: "#fff",
    textAlign: "center",
    padding: "140px 20px 80px", // Increased top padding to move page down
  },
  title: {
    fontSize: "42px",
    color: "#C9A227",
    margin: 0,
  },
  subtitle: {
    fontSize: "18px",
    opacity: 0.8,
    marginTop: "10px",
  },
  container: {
    maxWidth: "1200px",
    margin: "-30px auto 40px",
    padding: "0 20px",
  },
  filterBar: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  filterBtn: {
    padding: "10px 20px",
    borderRadius: "25px",
    border: "2px solid #C9A227",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "25px",
    marginBottom: "80px",
  },
  imageCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  placeholderImg: {
    width: "100%",
    height: "220px",
    backgroundColor: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#888",
    fontSize: "14px",
    fontWeight: "bold",
  },
  cardInfo: {
    padding: "15px",
  },
  categoryBadge: {
    fontSize: "11px",
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#C9A227",
    letterSpacing: "1px",
  },
  imgTitle: {
    margin: "5px 0 0 0",
    fontSize: "18px",
    color: "#002147",
  },
  videoSection: {
    marginTop: "60px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    color: "#002147",
    marginBottom: "30px",
  },
  videoPlaceholder: {
    width: "100%",
    maxWidth: "800px",
    height: "400px",
    backgroundColor: "#333",
    margin: "0 auto",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    cursor: "pointer",
  },
  playButton: {
    fontSize: "50px",
    color: "#fff",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "3px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5px",
  }
};

export default Gallery;