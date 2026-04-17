import React, { useEffect, useRef, useState } from "react";
import "../Contact.css";

const Contact = () => {
  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const facultyCoordinators = [
    { name: "XYZ", role: "Faculty Coordinator", phone: "+91 XXXXX XXXXX" },
    { name: "XYZ", role: "Faculty Coordinator", phone: "+91 XXXXX XXXXX" },
    { name: "XYZ", role: "Faculty Coordinator", phone: "+91 XXXXX XXXXX" },
  ];

  const studentCoordinators = [
    { name: "XYZ", role: "Student Coordinator", phone: "+91 XXXXX XXXXX" },
    { name: "XYZ", role: "Student Coordinator", phone: "+91 XXXXX XXXXX" },
  ];

  const universityLocation = "Netaji Subhas University, Pokhari, Jamshedpur"; 
  const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(universityLocation)}`;
  const embedMap = `https://maps.google.com/maps?q=${encodeURIComponent(universityLocation)}&z=17&output=embed`;

  return (
    <div className="contact-page">
      <div className="content-wrapper">
        
        {/* SECTION 1: HEADER */}
        <header className="contact-header">
          <h1 className="title">Contact Us</h1>
          <p className="subtitle">Have questions? Reach out to our team</p>
        </header>

        {/* SECTION 2: FACULTY COORDINATORS */}
        <section className="contact-section">
          <h2 className="section-title">Faculty Coordinators</h2>
          <div className="contact-grid">
            {facultyCoordinators.map((coord, index) => (
              <div key={index} className="contact-card">
                <h3>{coord.name}</h3>
                <div className="role-info">
                  <span className="role">{coord.role}</span>
                  <a href={`tel:${coord.phone.replace(/\s/g, '')}`} className="btn">
                    {coord.phone}
                  </a>
                  <div className="plus-icon">+</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: STUDENT COORDINATORS */}
        <section className="contact-section">
          <h2 className="section-title">Student Coordinators</h2>
          <div className="contact-grid">
            {studentCoordinators.map((coord, index) => (
              <div key={index} className="contact-card">
                <h3>{coord.name}</h3>
                <div className="role-info">
                  <span className="role">{coord.role}</span>
                  <a href={`tel:${coord.phone.replace(/\s/g, '')}`} className="btn">
                    {coord.phone}
                  </a>
                  <div className="plus-icon">+</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: EMAIL CONTACTS */}
        <section className="contact-section">
          <div className="email-highlight-box">
            <h2 className="section-title">Email Contacts</h2>
            <div className="email-links">
              <div className="email-item">
                <span>Faculty Email</span>
                <a href="mailto:xyz@nsu.edu">xyz@nsu.edu</a>
              </div>
              <div className="email-item">
                <span>Student Email</span>
                <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
              </div>
            </div>
            <p className="note">"We typically respond within 24 hours."</p>
          </div>
        </section>

        {/* SECTION 5: LOCATION & DIRECTIONS */}
        <section className="contact-section">
          <h2 className="section-title">Location & Directions</h2>
          <div className="location-grid">
            <div className="location-info">
              <h2>Netaji Subhas University, Jamshedpur</h2>
              <p className="address">
                Pokhari, Jamshedpur,<br />
                Jharkhand
              </p>
              <ul className="directions-list">
                <li>15–20 minutes from Tatanagar Railway Station</li>
                <li>Accessible via auto/cab</li>
                <li>Landmark: XYZ</li>
              </ul>
              <a 
                href={mapLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Get Directions
              </a>
            </div>
            <div className="map-wrapper">
              <iframe
                src={embedMap}
                title="Google Maps"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

      </div>

      {/* SECTION 6: FOOTER GLOW (Outside content-wrapper for full width) */}
      <section 
        ref={footerRef}
        className={`footer-glow ${footerVisible ? 'is-visible' : ''}`}
      >
        <h2>SEE YOU AT TECHSHASTRA</h2>
        <p className="tagline">Netaji Subhas University · Annual Technical Festival</p>
      </section>
    </div>
  );
};

export default Contact;