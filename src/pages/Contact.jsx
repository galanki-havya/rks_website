import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronDown, Send, ArrowRight, X } from 'lucide-react';

const colors = {
  primary: "#002147",
  gold: "#C9A227",
  bg: "#F8FAFC",
  white: "#ffffff",
  text: "#0F172A",
  subtext: "#475569",
  whatsapp: "#25D366",
  glass: "rgba(255, 255, 255, 0.45)",
  border: "rgba(255, 255, 255, 0.6)"
};

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showWaPopup, setShowWaPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const numbers = [
    { name: "Veeksha Campus", number: "919000976246" },
    { name: "RK NextGen Campus", number: "919989500074" }
  ];

  const handleWhatsAppSelection = (num) => {
    const waLink = `https://wa.me/${num}?text=Hello! I am interested in learning more about RKS Next Gen School.`;
    window.open(waLink, "_blank");
    setShowWaPopup(false);
  };

  const campusData = [
    { 
      name: "RK NextGen Campus", 
      loc: "A. Rangampeta Circle, Tirupati", 
      ph: "+91 99895 00074", 
      em: "RKSNEXTGENSHOOLS@GMAIL.COM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4180.48396391528!2d79.2768083!3d13.624252499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2b68fcffe122f%3A0x7bcde090df5beb50!2sSri%20Vinayaka%20Vidya%20Mandir!5e1!3m2!1sen!2sin!4v1775730361178!5m2!1sen!2sin" 
    },
    { 
      name: "Veeksha Campus", 
      loc: "Bairagipatteda Arch, Tirupati", 
      ph: "+91 90009 76246", 
      em: "Veekshatheschool999@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4180.560353742486!2d79.4181242!3d13.6199322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b00468ade93%3A0x8104ae36d90d82!2sVeeksha%20The%20Visionary%20School!5e1!3m2!1sen!2sin!4v1775730373787!5m2!1sen!2sin"
    }
  ];

  const faqs = [
    { q: "What are the age requirements for Grade I?", a: "Children should be 6 years old as of the academic year start date for admission into Grade I." },
    { q: "Does the school provide transport to all areas?", a: "Yes, our GPS-enabled buses cover most major residential areas in and around Tirupati." },
    { q: "Can we visit the campus on weekdays?", a: "Absolutely! We encourage parents to visit between 9 AM and 4 PM. Please call ahead to schedule a tour." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div style={styles.pageWrapper}>
      
      {/* WHATSAPP POPUP MODAL */}
      <AnimatePresence>
        {showWaPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalOverlay}
            onClick={() => setShowWaPopup(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={styles.waModal}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={styles.modalHeader}>
                <h3 style={{ margin: 0, fontSize: '18px', color: colors.primary }}>Connect via WhatsApp</h3>
                <X size={20} style={{ cursor: 'pointer' }} onClick={() => setShowWaPopup(false)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                {numbers.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(37, 211, 102, 0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleWhatsAppSelection(item.number)}
                    style={styles.waOption}
                  >
                    <MessageCircle size={20} color={colors.whatsapp} />
                    <span style={{ fontWeight: '600', color: colors.text }}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING WHATSAPP */}
      <motion.div 
        onClick={() => setShowWaPopup(true)}
        style={{ ...styles.waFloat, cursor: 'pointer' }}
        whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(37, 211, 102, 0.4)' }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
      </motion.div>

      <div style={{...styles.container, padding: isMobile ? '0 16px' : '0 6%'}}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={styles.headerArea}
        >
          <span style={styles.goldTag}>CONTACT US</span>
          <h1 style={{...styles.mainTitle, fontSize: isMobile ? "32px" : "52px"}}>
            Let’s Start a <span style={{color: colors.gold}}>Conversation</span>
          </h1>
          <div style={styles.goldLine}></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={styles.mainGrid}
        >
          <div style={styles.infoCol}>
            {campusData.map((campus, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                style={styles.glassCard}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
              >
                <h4 style={styles.campusName}>{campus.name}</h4>
                <div style={styles.iconRow}><MapPin size={17} color={colors.gold}/> <span>{campus.loc}</span></div>
                <div style={styles.iconRow}><Phone size={17} color={colors.gold}/> <span>{campus.ph}</span></div>
                <div style={styles.iconRow}><Mail size={17} color={colors.gold}/> <span>{campus.em}</span></div>
                <div 
                  onClick={() => setShowWaPopup(true)}
                  style={{ ...styles.waInline, cursor: 'pointer' }}
                >
                  Chat with Admissions <ArrowRight size={14} style={{marginLeft: '6px'}}/>
                </div>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} style={styles.hoursBox}>
              <div style={styles.hoursHeader}>
                <Clock size={18} color={colors.primary}/>
                <h4 style={{ color: colors.primary, margin: 0, fontWeight: '700', fontSize: '15px' }}>Admission Hours</h4>
              </div>
              <div style={styles.hourRow}><span>Mon — Fri</span><span style={{color: colors.primary, fontWeight: '600'}}>9:00 AM - 5:00 PM</span></div>
              <div style={styles.hourRow}><span>Saturday</span><span style={{color: colors.primary, fontWeight: '600'}}>9:00 AM - 1:00 PM</span></div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} style={styles.formWrapper}>
            <div style={styles.formHeader}>
              <h3 style={styles.formTitle}>Admission Enquiry</h3>
              <p style={styles.formSub}>Submit your details and our team will reach out to you within 24 hours.</p>
            </div>
            <form style={styles.form}>
              <input placeholder="Student Full Name" style={styles.morphicInput} />
              <div style={styles.flexRow}>
                <input placeholder="Phone Number" style={{...styles.morphicInput, flex: 1}} />
                <input placeholder="Email Address" style={{...styles.morphicInput, flex: 1}} />
              </div>
              <div style={styles.flexRow}>
                <select style={{...styles.morphicInput, flex: 1}}>
                  <option value="" disabled selected>Grade Seeking</option>
                  <option>Primary (I-V)</option>
                  <option>Middle (VI-VIII)</option>
                  <option>High School (IX-X)</option>
                </select>
                <select style={{...styles.morphicInput, flex: 1}}>
                  <option value="" disabled selected>Preferred Campus</option>
                  <option>RK NextGen Campus</option>
                  <option>Veeksha Campus</option>
                </select>
              </div>
              <textarea placeholder="Tell us more about your child's educational needs..." rows="4" style={styles.morphicInput}></textarea>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: colors.primary, color: '#fff' }}
                whileTap={{ scale: 0.98 }}
                style={styles.submitBtn}
              >
                Submit Inquiry <Send size={18} style={{marginLeft: '10px'}}/>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
          style={styles.sectionMargin}
        >
          <h2 style={styles.sectionTitle}>Visit Our <span style={{color: colors.gold}}>Campus</span></h2>
          <div style={styles.mapGrid}>
            {campusData.map((campus, i) => (
              <motion.div key={i} style={styles.mapContainer} whileHover={{ scale: 1.01 }}>
                <div style={styles.mapLabel}>{campus.name}</div>
                <iframe title={campus.name} src={campus.mapUrl} style={styles.mapFrame} allowFullScreen="" loading="lazy"></iframe>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
          style={styles.sectionMargin}
        >
          <h2 style={styles.sectionTitle}>Common <span style={{color: colors.gold}}>Questions</span></h2>
          <div style={styles.faqList}>
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                style={{ ...styles.faqItem, borderColor: activeFaq === index ? colors.gold : "rgba(0,0,0,0.05)" }}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div style={styles.faqQuestion}>
                  <span>{item.q}</span>
                  <motion.div animate={{ rotate: activeFaq === index ? 180 : 0 }}>
                    <ChevronDown size={20} color={colors.gold}/>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                      <div style={styles.faqAnswer}>{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: { 
    backgroundColor: "#F0F4F8", 
    minHeight: '100vh', 
    paddingTop: '100px', 
    paddingBottom: '80px', 
    fontFamily: "'Inter', sans-serif",
    color: colors.text,
    backgroundImage: "radial-gradient(circle at top right, rgba(201, 162, 39, 0.05), transparent), radial-gradient(circle at bottom left, rgba(0, 33, 71, 0.05), transparent)"
  },
  container: { maxWidth: '1200px', margin: '0 auto' },
  headerArea: { textAlign: 'center', paddingTop: '40px', marginBottom: '40px' },
  goldTag: { color: colors.gold, letterSpacing: '5px', fontSize: '11px', fontWeight: '900', marginBottom: '12px', display: 'block' },
  mainTitle: { color: colors.primary, fontWeight: '900', margin: '0', letterSpacing: '-1px', lineHeight: 1.1 },
  goldLine: { width: '40px', height: '4px', backgroundColor: colors.gold, margin: '20px auto' },
  mainGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'start' },
  infoCol: { display: 'flex', flexDirection: 'column', gap: '20px' },
  glassCard: { padding: '30px', borderRadius: '24px', background: "rgba(255, 255, 255, 0.7)", backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `1px solid rgba(255, 255, 255, 0.5)`, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)' },
  campusName: { fontSize: '20px', color: colors.primary, marginBottom: '18px', fontWeight: '800' },
  iconRow: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '14px', color: colors.subtext },
  waInline: { textDecoration: 'none', display: 'flex', alignItems: 'center', marginTop: '15px', color: colors.gold, fontSize: '13px', fontWeight: '700' },
  hoursBox: { padding: '24px', borderRadius: '24px', background: "rgba(255, 255, 255, 0.5)", backdropFilter: 'blur(8px)', border: `1px solid rgba(255, 255, 255, 0.3)` },
  hoursHeader: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' },
  hourRow: { display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '13px', color: colors.subtext, borderBottom: '1px solid rgba(0,0,0,0.03)' },
  formWrapper: { background: "rgba(255, 255, 255, 0.85)", backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', padding: '40px', borderRadius: '30px', border: `1px solid ${colors.white}`, boxShadow: '0 25px 50px -12px rgba(0, 33, 71, 0.1)' },
  formTitle: { fontSize: '24px', color: colors.primary, fontWeight: '900', margin: '0 0 8px 0' },
  formSub: { color: colors.subtext, fontSize: '14px', marginBottom: '25px' },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  flexRow: { display: 'flex', gap: '16px', flexWrap: 'wrap' },
  morphicInput: { width: '100%', padding: '14px 18px', borderRadius: '14px', border: `1px solid rgba(0, 33, 71, 0.08)`, backgroundColor: "rgba(255, 255, 255, 0.5)", fontSize: '14px', color: colors.text, outline: 'none', transition: 'all 0.3s ease', boxSizing: 'border-box' },
  submitBtn: { background: colors.gold, color: colors.primary, padding: '16px', borderRadius: '14px', fontWeight: '800', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', fontSize: '15px', boxShadow: '0 10px 20px rgba(201, 162, 39, 0.2)' },
  sectionMargin: { marginTop: '80px' },
  sectionTitle: { textAlign: 'center', color: colors.primary, marginBottom: '40px', fontSize: '28px', fontWeight: '900' },
  mapGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  mapContainer: { borderRadius: '24px', overflow: 'hidden', border: `1px solid rgba(255,255,255,0.8)`, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' },
  mapLabel: { padding: '15px', background: colors.white, textAlign: 'center', fontWeight: '700', color: colors.primary, borderBottom: `1px solid #f0f0f0` },
  mapFrame: { width: '100%', height: '280px', border: 0, display: 'block' },
  faqList: { maxWidth: '800px', margin: '0 auto' },
  faqItem: { backgroundColor: "rgba(255, 255, 255, 0.6)", backdropFilter: 'blur(10px)', marginBottom: '12px', borderRadius: '18px', cursor: 'pointer', overflow: 'hidden', border: '1px solid transparent', transition: 'all 0.3s ease' },
  faqQuestion: { padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '700', color: colors.primary, fontSize: '15px' },
  faqAnswer: { padding: '0 24px 20px', color: colors.subtext, fontSize: '14px', lineHeight: '1.6' },
  waFloat: { position: 'fixed', bottom: '30px', right: '30px', backgroundColor: colors.whatsapp, color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)', zIndex: 1000 },
  
  // POPUP STYLES
  modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 33, 71, 0.3)', backdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center' },
  waModal: { background: 'white', padding: '25px', borderRadius: '24px', width: '90%', maxWidth: '350px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' },
  modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0', paddingBottom: '15px' },
  waOption: { padding: '15px', borderRadius: '12px', border: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'all 0.2s' }
};

export default Contact;