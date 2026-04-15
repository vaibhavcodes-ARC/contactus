import React from "react";
import "../Contact.css";

const Contact = () => {
  // 📍 Netaji Subhas University location
  const location = "22.7810,86.1660";

  const mapLink = `https://www.google.com/maps?q=${location}`;
  const embedMap = `https://maps.google.com/maps?q=${location}&z=17&output=embed`;

  return (
    <div className="contact-page">

      <div className="content">

        <h1 className="title">CONTACT US</h1>

        {/* PERSON 1 */}
        <div className="person">
          <h2>abc</h2>
          <p>abc</p>
          <p> abc</p>

          <a href="tel:+918210353795">
            <button className="btn">+91 1234567890</button>
          </a>
        </div>

        {/* PERSON 2 */}
        <div className="person">
          <h2>efgh</h2>
          <p>efgh</p>

          <a href="tel:+916205120426">
            <button className="btn">+91 1234567890</button>
          </a>
        </div>

        {/* VENUE */}
        <h2 className="venue-title">Venue</h2>

        {/* 📍 Address */}
        <p style={{ marginBottom: "10px", opacity: "0.8" }}>
          Netaji Subhas University, Pokhari, Jamshedpur, Jharkhand
        </p>

        <a href={mapLink} target="_blank" rel="noopener noreferrer">
          <button className="map-btn">Open in Maps</button>
        </a>

        {/* MAP */}
        <div className="map-container">
          <iframe
            src={embedMap}
            title="map"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;