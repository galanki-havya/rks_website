import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import CampusSection from "../components/CampusSection";
import rks from "../assets/rks.png";


// --- ASSETS ---
import chairmanImg from "../assets/chairman.png"; 
import adminImg from "../assets/admin.png"; 

const colors = {
  midnight: "#001B36",
  premiumGold: "#B38B45",
  softGold: "rgba(179, 139, 69, 0.1)",
  white: "#FFFFFF",
  slate: "#64748b",
  textMain: "#1e293b",
  border: "rgba(0, 27, 54, 0.08)",
};

function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <Hero />

      {/* --- FLOATING STATS BAR --- */}
      <div style={styles.statsOverlap}>
        <div style={{ ...styles.statsGrid, ...(isMobile ? styles.statsGridMobile : {}) }}>
          {[
            { n: "13+", l: "Years of Academic Legacy" },
            { n: "IIT/NEET", l: "Elite Foundation Programs" },
            { n: "CBSE", l: "Integrated Global Curriculum" }
          ].map((stat, i) => (
            <React.Fragment key={i}>
              <div style={styles.statBox}>
                <span style={styles.statNum}>{stat.n}</span>
                <span style={styles.statLabel}>{stat.l}</span>
              </div>
              {i < 2 && !isMobile && <div style={styles.statDivider} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* --- LEADERSHIP SECTION --- */}
      <section style={styles.topSection}>
        <div style={styles.container}>
          <div style={styles.centeredHeader}>
            <span style={styles.preTitle}>OUR VISIONARIES</span>
            <h2 style={styles.h2}>Pillars of <span style={styles.goldText}>Excellence</span></h2>
            <div style={styles.titleUnderline} />
          </div>

          <div style={{ ...styles.mentorGrid, ...(isMobile ? styles.flexColumn : {}) }}>
            {/* Chairman Card */}
            <div style={styles.mentorCard}>
              <div style={styles.avatarWrapper}>
                <div style={styles.photoCircle}>
                  <img src={chairmanImg} alt="Chairman" style={styles.mentorImage} />
                </div>
              </div>
              <h3 style={styles.messageTitle}>Chairman's Perspective</h3>
              <p style={styles.quoteBody}>
                "True education is the harmonious development of the physical, mental, and spiritual powers. 
                At RKS, we don't just teach—we ignite the spark of lifelong inquiry and leadership to shape a better tomorrow."
              </p>
              <div style={styles.mentorMeta}>
                <div style={styles.signatureName}>Dr. T Rama Krishna Reddy</div>
                <div style={styles.signatureRole}>M.Sc, M.A Lit., M.Ed., Ph.D • <span style={{color: colors.premiumGold}}>Chairman</span></div>
              </div>
            </div>

            {/* Admin Director Card */}
            <div style={styles.mentorCard}>
              <div style={styles.avatarWrapper}>
                <div style={styles.photoCircle}>
                  <img src={adminImg} alt="Admin Director" style={styles.mentorImage} />
                </div>
              </div>
              <h3 style={styles.messageTitle}>Director's Mission</h3>
              <p style={styles.quoteBody}>
                "We believe education is character building and life-making. Our commitment is to provide a safe, 
                intellectually stimulating environment where students grow into compassionate global citizens."
              </p>
              <div style={styles.mentorMeta}>
                <div style={styles.signatureName}>Mrs. RK Vimala</div>
                <div style={styles.signatureRole}>M.A Lit., M.Ed. • <span style={{color: colors.premiumGold}}>Admin Director</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ENHANCED PHILOSOPHY SECTION --- */}
      <section style={styles.standardSection}>
        <div style={styles.container}>
          <div style={{ ...styles.splitGrid, ...(isMobile ? styles.flexColumnReverse : {}) }}>
            <div style={styles.visualSide}>
              <div style={styles.goldBracketTop} />
              <div style={styles.goldBracketBottom} />
              <div style={styles.imageWrapper}>
                <div style={{ 
                  ...styles.mainFrame, 
                  backgroundImage: `url(${rks})`,
                  height: isMobile ? "300px" : "450px"
                }}>
                  <div style={styles.imageOverlay} />
                  <div style={styles.floatingTag}>SINCE 2011</div>
                </div>
              </div>
              <div style={styles.experienceBadge}>
                <span style={styles.badgeLarge}>13+</span>
                <span style={styles.badgeSmall}>Years of<br/>Growth</span>
              </div>
            </div>

            <div style={{ ...styles.contentSide, ...(isMobile ? { paddingLeft: 0, marginTop: "40px" } : {}) }}>
              <span style={styles.preTitle}>THE RKS PROMISE</span>
              <h2 style={styles.h2}>Nurturing the <span style={styles.goldText}>Next Generation</span></h2>
              <p style={styles.p}>
                As a flagship institution under the <strong>RK Group of Educational Institutions</strong>, we 
                bridge the gap between traditional values and modern technological advancements. Our pedagogy 
                is meticulously designed to foster critical thinking, emotional intelligence, and global civic responsibility.
              </p>
              <div style={styles.featureGrid}>
                {[
                  "Concept-Based Pedagogy",
                  "Holistic Skill Integration",
                  "Digital-First Learning",
                  "Elite Sports Academies"
                ].map((feat, idx) => (
                  <div key={idx} style={styles.featureItem}>
                    <span style={styles.bullet}>✦</span> {feat}
                  </div>
                ))}
              </div>
              <button style={styles.luxuryBtn} onClick={() => navigate("/about")}>
                Our Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACADEMIC PATHWAYS --- */}
      <section style={styles.darkSection}>
        <div style={styles.container}>
          <div style={styles.centeredHeader}>
            <h2 style={styles.h2Light}>Academic <span style={{color: colors.premiumGold}}>Pathways</span></h2>
            <p style={styles.pLight}>A rigorous yet flexible roadmap designed for the leaders of tomorrow.</p>
          </div>
          <div style={{ ...styles.cardGrid, ...(isMobile ? { gridTemplateColumns: "1fr" } : {}) }}>
            {[
              { i: "🌱", t: "Play-Way Foundation", d: "A nurturing environment focused on cognitive development and early social skills." },
              { i: "📐", t: "Core Integrated Primary", d: "Standard CBSE curriculum enhanced with creative arts and core scientific principles." },
              { i: "🚀", t: "Elite Secondary Preparation", d: "High-performance tracking with dedicated modules for IIT-JEE & NEET foundations." }
            ].map((item, idx) => (
              <div key={idx} style={styles.glassCard}>
                <div style={styles.cardIcon}>{item.i}</div>
                <h3 style={styles.cardTitle}>{item.t}</h3>
                <p style={styles.cardDesc}>{item.d}</p>
                <div style={styles.cardArrow}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CampusSection />

      <section style={styles.ctaSection}>
        <div style={{ ...styles.ctaBanner, ...(isMobile ? { textAlign: "center", padding: "40px 20px" } : {}) }}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaH2}>Admissions Open for 2026-27</h2>
            <p style={styles.ctaP}>Secure a place for your child in Tirupati's premier learning community.</p>
          </div>
          <button style={styles.ctaBtn} onClick={() => navigate("/contact")}>
            Inquire Now
          </button>
        </div>
      </section>
    </div>
  );
}

const styles = {
  pageWrapper: { background: "#FFFFFF", overflowX: "hidden" },
  container: { maxWidth: "1200px", margin: "0 auto", padding: "0 25px" },
  
  // Stats
  statsOverlap: { marginTop: "-40px", position: "relative", zIndex: 10 },
  statsGrid: {
    background: "#fff", display: "flex", alignItems: "center",
    padding: "30px", borderRadius: "4px", boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
    maxWidth: "1000px", margin: "0 auto", border: `1px solid ${colors.border}`
  },
  statsGridMobile: { flexDirection: "column", gap: "20px" },
  statBox: { textAlign: "center", flex: 1 },
  statNum: { display: "block", fontSize: "28px", fontWeight: "900", color: colors.midnight, letterSpacing: "-1px" },
  statLabel: { fontSize: "12px", color: colors.slate, textTransform: "uppercase", fontWeight: "600", marginTop: "5px", letterSpacing: "0.5px" },
  statDivider: { width: "1px", height: "40px", background: colors.border },

  // Mentors
  mentorGrid: { display: "flex", gap: "30px", marginTop: "110px" },
  mentorCard: {
    flex: 1, background: "#fff", padding: "90px 40px 45px", borderRadius: "8px",
    position: "relative", border: `1px solid ${colors.border}`, 
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // Modern easing
    cursor: "pointer",
    ":hover": {
      transform: "translateY(-8px)", // Card lift on hover
    }
  },
  avatarWrapper: { position: "absolute", top: "-55px", left: "50%", transform: "translateX(-50%)" },
  photoCircle: {
    width: "130px", height: "130px", borderRadius: "50%", border: `4px solid ${colors.premiumGold}`,
    padding: "5px", background: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", overflow: "hidden"
  },
  mentorImage: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" },
  messageTitle: { fontSize: "22px", fontWeight: "800", color: colors.midnight, textAlign: "center", marginBottom: "15px" },
  quoteBody: { fontSize: "15px", color: colors.slate, fontStyle: "italic", lineHeight: "1.8", textAlign: "center", marginBottom: "30px" },
  mentorMeta: { borderTop: `1px solid ${colors.border}`, paddingTop: "20px", textAlign: "center" },
  signatureName: { fontSize: "18px", fontWeight: "800", color: colors.midnight },
  signatureRole: { fontSize: "13px", color: colors.slate, marginTop: "2px", fontWeight: "600" },

  // Philosophy
  visualSide: { flex: 1, position: "relative" },
  imageWrapper: { padding: "15px" },
  mainFrame: { 
    width: "100%", backgroundSize: "cover", backgroundPosition: "center", 
    borderRadius: "2px", position: "relative", boxShadow: "30px 30px 0px #f1f5f9" // Deep offset shadow
  },
  imageOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,27,54,0.3), transparent)" },
  goldBracketTop: { position: "absolute", top: 0, left: 0, width: "100px", height: "100px", borderTop: `5px solid ${colors.premiumGold}`, borderLeft: `5px solid ${colors.premiumGold}`, zIndex: 1 },
  goldBracketBottom: { position: "absolute", bottom: 0, right: 0, width: "100px", height: "100px", borderBottom: `5px solid ${colors.premiumGold}`, borderRight: `5px solid ${colors.premiumGold}`, zIndex: 1 },
  experienceBadge: { 
    position: "absolute", bottom: "-20px", left: "40px", background: colors.midnight, 
    color: "#fff", padding: "15px 25px", display: "flex", alignItems: "center", gap: "15px", zIndex: 5 
  },
  badgeLarge: { fontSize: "32px", fontWeight: "900", color: colors.premiumGold },
  badgeSmall: { fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" },
  floatingTag: { position: "absolute", top: "20px", right: "20px", background: colors.premiumGold, color: "#fff", padding: "6px 15px", fontSize: "11px", fontWeight: "800", borderRadius: "2px" },

  contentSide: { flex: 1.2, paddingLeft: "50px" },
  preTitle: { color: colors.premiumGold, letterSpacing: "4px", fontSize: "12px", fontWeight: "800", marginBottom: "15px", display: "block" },
  h2: { fontSize: "42px", color: colors.midnight, fontWeight: "900", lineHeight: "1.1", margin: "0 0 20px" },
  goldText: { color: colors.premiumGold },
  p: { fontSize: "17px", color: colors.slate, lineHeight: "1.7", marginBottom: "30px" },
  featureGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "40px" },
  featureItem: { fontSize: "14px", fontWeight: "700", color: colors.midnight, display: "flex", alignItems: "center" },
  bullet: { color: colors.premiumGold, marginRight: "10px" },
  luxuryBtn: { 
    padding: "18px 45px", background: colors.midnight, color: "#fff", border: "none", 
    borderRadius: "2px", cursor: "pointer", fontSize: "13px", fontWeight: "800", 
    textTransform: "uppercase", letterSpacing: "2px", transition: "all 0.3s ease",
    ":hover": { background: "#003366" }
  },

  // Academics
  darkSection: { padding: "100px 0", background: "#001B36" },
  h2Light: { fontSize: "36px", color: "#fff", fontWeight: "900", marginBottom: "15px" },
  pLight: { color: "rgba(255,255,255,0.6)", fontSize: "18px", marginBottom: "50px" },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "25px" },
  glassCard: { 
    background: "rgba(255,255,255,0.03)", padding: "45px 35px", borderRadius: "4px", 
    border: "1px solid rgba(255,255,255,0.1)", position: "relative", overflow: "hidden",
    transition: "background 0.3s ease",
    ":hover": { background: "rgba(255,255,255,0.06)" }
  },
  cardIcon: { fontSize: "40px", marginBottom: "25px" },
  cardTitle: { color: "#fff", fontSize: "22px", fontWeight: "800", marginBottom: "15px" },
  cardDesc: { color: "rgba(255,255,255,0.5)", lineHeight: "1.6", fontSize: "15px" },
  cardArrow: { position: "absolute", bottom: "20px", right: "20px", color: colors.premiumGold, fontSize: "20px" },

  // CTA Section
  ctaSection: { padding: "60px 0 100px" },
  ctaBanner: { 
    background: `linear-gradient(135deg, ${colors.midnight} 0%, #003366 100%)`, 
    padding: "60px 80px", borderRadius: "4px", display: "flex", 
    justifyContent: "space-between", alignItems: "center", gap: "30px",
    boxShadow: "0 20px 40px rgba(0,27,54,0.15)"
  },
  ctaH2: { color: "#fff", fontSize: "32px", fontWeight: "900", margin: 0 },
  ctaP: { color: "rgba(255,255,255,0.7)", fontSize: "18px", margin: "10px 0 0" },
  ctaBtn: { 
    padding: "20px 50px", background: colors.premiumGold, color: colors.midnight, 
    fontWeight: "900", borderRadius: "4px", border: "none", cursor: "pointer", 
    fontSize: "14px", textTransform: "uppercase", whiteSpace: "nowrap",
    transition: "transform 0.2s ease",
    ":hover": { transform: "scale(1.03)" }
  },

  // Helper Layouts
  topSection: { padding: "100px 0 80px" },
  standardSection: { padding: "100px 0" },
  centeredHeader: { textAlign: "center", marginBottom: "60px" },
  titleUnderline: { width: "60px", height: "4px", background: colors.premiumGold, margin: "20px auto 0" },
  splitGrid: { display: "flex", gap: "80px", alignItems: "center" },
  flexColumn: { flexDirection: "column" },
  flexColumnReverse: { flexDirection: "column-reverse" }
};

export default Home;