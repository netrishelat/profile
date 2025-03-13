import React from "react";

const Header = () => {
  return (
    <header style={{ padding: '1.25rem', backgroundColor: '#2d3748', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' , marginTop: '0.5rem'}}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Netri Shelat</h1>
      <nav>
        <a href="#about" style={{ margin: '0 0.75rem', color: 'white', textDecoration: 'none' }}>About</a>
        <a href="#skills" style={{ margin: '0 0.75rem', color: 'white', textDecoration: 'none' }}>Skills</a>
        <a href="#projects" style={{ margin: '0 0.75rem', color: 'white', textDecoration: 'none' }}>Projects</a>
        <a href="#contact" style={{ margin: '0 0.75rem', color: 'white', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;