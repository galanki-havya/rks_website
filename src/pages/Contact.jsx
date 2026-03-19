import React, { useState } from 'react';

const colors = { 
  primary: "#002147", 
  gold: "#C9A227", 
  bg: "#F4F6F8", 
  white: "#ffffff",
  text: "#444"
};

const Contact = () => {
  // Simple state for FAQ toggles
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "What are the age requirements for Grade I?", a: "Children should be 6 years old as of the academic year start date for admission into Grade I." },
    { q: "Does the school provide transport to all areas?", a: "Yes, our GPS-enabled buses cover most major residential areas in and around Tirupati." },
    { q: "Can we visit the campus on weekdays?", a: "Absolutely! We encourage parents to visit between 9 AM and 4 PM. Please call ahead to schedule a tour." }
  ];

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        
        {/* Header Section */}
        <div style={styles.headerArea}>
          <h1 style={styles.mainTitle}>Connect With Us</h1>
          <p style={styles.subtitle}>We are committed to providing the best educational journey for your child.</p>
        </div>

        {/* Main Grid: Info and Form */}
        <div style={styles.mainGrid}>
          
          {/* Left Column: Campus Details */}
          <div>
            <div style={styles.infoCard}>
              <h4 style={styles.campusName}>Vinayaka Campus</h4>
              <p style={styles.detailText}>📍 A. Rangampeta Circle, Tirupati</p>
              <p style={styles.contactLink}>📞 +91 77998 84561</p>
              <p style={styles.contactLink}>✉️ vinayaka@rksnextgen.com</p>
            </div>

            <div style={styles.infoCard}>
              <h4 style={styles.campusName}>Veeksha Campus</h4>
              <p style={styles.detailText}>📍 Bairagipatteda Arch, Tirupati</p>
              <p style={styles.contactLink}>📞 +91 77998 84564</p>
              <p style={styles.contactLink}>✉️ veeksha@rksnextgen.com</p>
            </div>

            <div style={styles.hoursBox}>
              <h4 style={{ color: colors.primary, marginBottom: '15px' }}>Visiting Hours</h4>
              <div style={styles.hourRow}><span>Mon — Fri</span> <span>9:00 AM - 5:00 PM</span></div>
              <div style={styles.hourRow}><span>Saturday</span> <span>9:00 AM - 1:00 PM</span></div>
              <div style={{...styles.hourRow, border: 'none', color: '#d9534f'}}><span>Sunday</span> <span>Holiday</span></div>
            </div>
          </div>

          {/* Right Column: Admission Form */}
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
              <textarea placeholder="Your Message or Specific Questions..." rows="4" style={styles.input}></textarea>
              <button type="button" style={styles.submitBtn}>Submit Request</button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <section style={styles.sectionMargin}>
          <h2 style={styles.sectionTitle}>Locate Us</h2>
          <div style={styles.mapPlaceholder}>
            <p style={{ color: '#888', fontWeight: 'bold' }}>GOOGLE MAPS INTEGRATION</p>
            <p style={{ fontSize: '13px', color: '#aaa' }}>Replace this div with your IFrame embed code</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={styles.sectionMargin}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqList}>
            {faqs.map((item, index) => (
              <div key={index} style={styles.faqItem} onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                <div style={styles.faqQuestion}>
                  <strong>{item.q}</strong>
                  <span>{activeFaq === index ? '−' : '+'}</span>
                </div>
                {activeFaq === index && <div style={styles.faqAnswer}>{item.a}</div>}
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
    paddingTop: '180px', // Moves content down significantly
    paddingBottom: '100px',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
  },
  headerArea: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  mainTitle: {
    fontSize: '48px',
    color: colors.primary,
    margin: '0 0 10px 0',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '60px',
    alignItems: 'start',
  },
  infoCard: {
    backgroundColor: colors.bg,
    padding: '25px',
    borderRadius: '12px',
    marginBottom: '20px',
    borderLeft: `6px solid ${colors.gold}`,
  },
  campusName: {
    color: colors.primary,
    fontSize: '22px',
    margin: '0 0 10px 0',
  },
  detailText: { color: colors.text, marginBottom: '5px' },
  contactLink: { color: colors.primary, fontWeight: '600', marginBottom: '5px' },
  hoursBox: {
    marginTop: '40px',
    padding: '25px',
    borderRadius: '12px',
    border: '2px dashed #ddd',
  },
  hourRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
  },
  formContainer: {
    backgroundColor: colors.primary,
    padding: '40px',
    borderRadius: '20px',
    color: colors.white,
    boxShadow: '0 20px 40px rgba(0,33,71,0.2)',
  },
  formTitle: { fontSize: '28px', margin: '0 0 5px 0' },
  formSub: { opacity: 0.8, fontSize: '14px', marginBottom: '25px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  flexRow: { display: 'flex', gap: '15px' },
  input: {
    padding: '15px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '15px',
    outline: 'none',
  },
  submitBtn: {
    background: colors.gold,
    color: colors.primary,
    padding: '16px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  sectionMargin: { marginTop: '100px' },
  sectionTitle: { textAlign: 'center', color: colors.primary, marginBottom: '40px', fontSize: '32px' },
  mapPlaceholder: {
    width: '100%',
    height: '400px',
    backgroundColor: '#f0f0f0',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faqList: { maxWidth: '800px', margin: '0 auto' },
  faqItem: {
    backgroundColor: colors.bg,
    marginBottom: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  faqQuestion: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    color: colors.primary,
  },
  faqAnswer: {
    padding: '0 20px 20px 20px',
    color: '#555',
    lineHeight: '1.6',
    borderTop: '1px solid #e0e0e0',
    paddingTop: '15px',
  }
};

export default Contact;