import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import Resume from '../assets/Netri Shelat Resume - 2024-25.pdf';

function About() {
  return (
    <section id="about" style={{ padding: '2.5rem', textAlign: 'center', backgroundColor: '#2d3748', color: 'white',
    margin: '0 auto'
     }}>
      <div
        style={{
          width: "85%",
          maxWidth: "1200px",
          backgroundColor: "white",
          padding: "4rem",
          borderRadius: "1.5rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 auto",
          color: "#2d3748",
        }}
      >
        <div style={{ width: "50%", paddingRight: "2rem" }}>
          <h2 style={{ color: "#fdbf23", fontWeight: "600", marginBottom: "0.5rem" }}>
            ABOUT ME
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#4a5568", marginBottom: "1.5rem" }}>
            Hi, I'm Netri Shelat, a skilled RPA and .NET specialist with over five years of experience in automating business processes and creating scalable online apps. I am proficient in process analysis, development, testing, and implementation of RPA solutions using UiPath. I have a strong foundation in creating safe, fast apps with .NET and Azure, along with expertise in staging and implementing solutions in both test and production settings. I am known for having exceptional problem-solving skills, paying close attention to details, and being dedicated to increasing operational efficiency through process optimization and automation.
          </p>
          <a
            href={Resume}
            download="Netri_Shelat_Resume.pdf"
            style={{
              backgroundColor: "#fdbf23",
              color: "black",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Download Resume
          </a>
        </div>
        <div
          style={{
            width: "50%",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: '25rem',
              height: '25rem',
              borderRadius: '50%',
              border: '4px solid white',
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
              objectFit: 'cover',
              position: 'relative',
              zIndex: 2,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;