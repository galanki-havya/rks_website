import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import Campuses from "./pages/Campuses";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />

        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admissions" element={<Admissions />} />

            <Route
              path="*"
              element={
                <div style={styles.errorPage}>
                  <h1>404</h1>
                  <p>Page not found</p>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%",
  },
  mainContent: {
    flex: 1,
    width: "100%",
  },
  errorPage: {
    padding: "100px 20px",
    textAlign: "center",
    color: "#800000",
  },
};

export default App;