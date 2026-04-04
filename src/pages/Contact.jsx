import React, { useState } from 'react';

const colors = { 
  primary: "#002147", 
  gold: "#C9A227", 
  bg: "#F4F6F8", 
  white: "#ffffff",
  text: "#444",
  whatsapp: "#25D366"
};

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // WhatsApp Integration helper
  const whatsappNumber = "919000976246";
  const waLink = `https://wa.me/${whatsappNumber}?text=Hello! I am interested in admissions at RKS Next Gen School.`;

  const faqs = [
    { q: "What are the age requirements for Grade I?", a: "Children should be 6 years old as of the academic year start date for admission into Grade I." },
    { q: "Does the school provide transport to all areas?", a: "Yes, our GPS-enabled buses cover most major residential areas in and around Tirupati." },
    { q: "Can we visit the campus on weekdays?", a: "Absolutely! We encourage parents to visit between 9 AM and 4 PM. Please call ahead to schedule a tour." }
  ];

  return (
    <div style={styles.pageWrapper}>
      
      {/* FLOATING WHATSAPP BUTTON */}
      <a href={waLink} target="_blank" rel="noreferrer" style={styles.waFloat}>
        <span style={{ fontSize: '24px' }}>💬</span>
        <span style={styles.waTooltip}>Chat with us</span>
      </a>

      <div style={styles.container}>
        
        {/* Header */}
        <div style={styles.headerArea}>
          <h1 style={styles.mainTitle}>Connect With Us</h1>
          <p style={styles.subtitle}>
            We are committed to providing the best educational journey for your child.
          </p>
        </div>

        {/* Main Grid */}
        <div style={styles.mainGrid}>
          
          {/* LEFT SIDE: Campus Info */}
          <div>
            <div style={styles.infoCard}>
              <h4 style={styles.campusName}>Vinayaka Campus</h4>
              <p style={styles.detailText}>📍 A. Rangampeta Circle, Tirupati</p>
              <p style={styles.contactLink}>📞 +91 77998 84561</p>
              <p style={styles.contactLink}>✉️ vinayaka@rksnextgen.com</p>
              <a href={waLink} target="_blank" rel="noreferrer" style={styles.waInline}>
                🟢 WhatsApp Admissions: +91 90009 76246
              </a>
            </div>

            <div style={styles.infoCard}>
              <h4 style={styles.campusName}>Veeksha Campus</h4>
              <p style={styles.detailText}>📍 Bairagipatteda Arch, Tirupati</p>
              <p style={styles.contactLink}>📞 +91 77998 84564</p>
              <p style={styles.contactLink}>✉️ veeksha@rksnextgen.com</p>
              <a href={waLink} target="_blank" rel="noreferrer" style={styles.waInline}>
                🟢 WhatsApp Admissions: +91 90009 76246
              </a>
            </div>

            <div style={styles.hoursBox}>
              <h4 style={{ color: colors.primary, marginBottom: '15px' }}>Visiting Hours</h4>
              <div style={styles.hourRow}><span>Mon — Fri</span><span>9:00 AM - 5:00 PM</span></div>
              <div style={styles.hourRow}><span>Saturday</span><span>9:00 AM - 1:00 PM</span></div>
              <div style={{...styles.hourRow, border: 'none', color: '#d9534f'}}>
                <span>Sunday</span><span>Holiday</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div style={styles.formContainer}>
            <h3 style={styles.formTitle}>Admission Enquiry</h3>
            <p style={styles.formSub}>Fill in the details below and we'll reach out to you.</p>

            <form style={styles.form}>
              <input placeholder="Parent Name" style={styles.input} />
              <input placeholder="Phone Number" style={styles.input} />
              <input placeholder="Email Address" style={styles.input} />

              <div style={styles.flexRow}>
                <select style={{...styles.input, flex: 1}}>
                  <option>Grade Level</option>
                  <option>Primary</option>
                  <option>Middle</option>
                  <option>High School</option>
                </select>

                <select style={{...styles.input, flex: 1}}>
                  <option>Select Campus</option>
                  <option>Vinayaka</option>
                  <option>Veeksha</option>
                </select>
              </div>

              <textarea
                placeholder="Your Message or Questions..."
                rows="4"
                style={styles.input}
              ></textarea>

              <button 
                type="button" 
                style={styles.submitBtn}
                onMouseEnter={(e) => e.target.style.filter = "brightness(1.1)"}
                onMouseLeave={(e) => e.target.style.filter = "brightness(1)"}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <section style={styles.sectionMargin}>
          <h2 style={styles.sectionTitle}>Locate Our Campuses</h2>

          <div style={styles.mapGrid}>
            <div>
              <h4 style={styles.mapTitle}>Vinayaka Campus</h4>
              <iframe
                title="Vinayaka Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.5503433417093!2d79.2768083!3d13.624252499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2b68fcffe122f%3A0x7bcde090df5beb50!2sSri%20Vinayaka%20Vidya%20Mandir!5e0!3m2!1sen!2sin!4v1775302715168!5m2!1sen!2sin" 
                style={styles.mapFrame}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div>
              <h4 style={styles.mapTitle}>Veeksha Campus</h4>
              <iframe
                title="Veeksha Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.62119767419!2d79.4181242!3d13.6199322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b00468ade93%3A0x8104ae36d90d82!2sVeeksha%20The%20Visionary%20School!5e0!3m2!1sen!2sin!4v1775302923300!5m2!1sen!2sin" 
                style={styles.mapFrame}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section style={styles.sectionMargin}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqList}>
            {faqs.map((item, index) => (
              <div
                key={index}
                style={styles.faqItem}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div style={styles.faqQuestion}>
                  <strong>{item.q}</strong>
                  <span style={{ color: colors.gold, fontSize: '20px' }}>{activeFaq === index ? '−' : '+'}</span>
                </div>
                {activeFaq === index && (
                  <div style={styles.faqAnswer}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: colors.white,
    minHeight: '100vh',
    paddingTop: '150px',
    paddingBottom: '100px',
    position: 'relative'
  },
  waFloat: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    backgroundColor: colors.whatsapp,
    color: 'white',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    zIndex: 1000,
    transition: 'transform 0.3s ease'
  },
  waTooltip: {
    position: 'absolute',
    right: '75px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '5px 12px',
    borderRadius: '5px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    pointerEvents: 'none'
  },
  waInline: {
    display: 'block',
    marginTop: '12px',
    color: '#128C7E',
    fontWeight: '700',
    textDecoration: 'none',
    fontSize: '14px'
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
  },
  headerArea: { textAlign: 'center', marginBottom: '60px' },
  mainTitle: { fontSize: '42px', color: colors.primary, marginBottom: '10px', fontWeight: '800' },
  subtitle: { fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '60px',
  },
  infoCard: {
    backgroundColor: colors.bg,
    padding: '25px',
    borderRadius: '12px',
    marginBottom: '20px',
    borderLeft: `6px solid ${colors.gold}`,
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  },
  campusName: { fontSize: '22px', color: colors.primary, marginBottom: '10px', fontWeight: '700' },
  detailText: { color: colors.text, marginBottom: '8px' },
  contactLink: { fontWeight: '600', color: colors.primary, display: 'block', marginBottom: '5px' },
  hoursBox: {
    marginTop: '30px',
    padding: '25px',
    border: '2px dashed #ccc',
    borderRadius: '10px',
  },
  hourRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
    fontSize: '15px'
  },
  formContainer: {
    backgroundColor: colors.primary,
    padding: '40px',
    borderRadius: '20px',
    color: colors.white,
    boxShadow: '0 15px 35px rgba(0,33,71,0.2)'
  },
  formTitle: { fontSize: '30px', marginBottom: '8px', fontWeight: '700' },
  formSub: { opacity: 0.8, fontSize: '14px', marginBottom: '30px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  flexRow: { display: 'flex', gap: '15px' },
  input: {
    padding: '15px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '15px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  },
  submitBtn: {
    background: colors.gold,
    color: colors.primary,
    padding: '16px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '800',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px'
  },
  sectionMargin: { marginTop: '100px' },
  sectionTitle: {
    textAlign: 'center',
    color: colors.primary,
    marginBottom: '45px',
    fontSize: '34px',
    fontWeight: '800'
  },
  mapGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
  },
  mapFrame: {
    width: '100%',
    height: '350px',
    border: 0,
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
  },
  mapTitle: {
    textAlign: 'center',
    marginBottom: '15px',
    color: colors.primary,
    fontSize: '20px',
    fontWeight: '700'
  },
  faqList: { maxWidth: '850px', margin: 'auto' },
  faqItem: {
    backgroundColor: colors.bg,
    marginBottom: '12px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease'
  },
  faqQuestion: {
    padding: '22px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '700',
    color: colors.primary,
    fontSize: '16px'
  },
  faqAnswer: {
    padding: '0 22px 22px 22px',
    borderTop: '1px solid rgba(0,0,0,0.05)',
    color: '#555',
    lineHeight: '1.7',
    fontSize: '15px'
  },
};

export default Contact;