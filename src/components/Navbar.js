// Navbar Component
//  function Navbar() {
//   return (
//     <nav style={{ padding: '1.5rem', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//       <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Portfolio</h1>
//       <div>
//         <a href="/" style={{ margin: '0 1rem', color: '#4a5568', textDecoration: 'none' }}>Home</a>
//         <a href="/about" style={{ margin: '0 1rem', color: '#4a5568', textDecoration: 'none' }}>About</a>
//         <a href="/projects" style={{ margin: '0 1rem', color: '#4a5568', textDecoration: 'none' }}>Projects</a>
//         <a href="/contact" style={{ margin: '0 1rem', color: '#4a5568', textDecoration: 'none' }}>Contact</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1.5rem', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Portfolio</h1>
      <div>
        <Link to="/" style={{ margin: '0 1rem', color: '#4a5568', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 1rem', color: '#4a5568', textDecoration: 'none' }}>About</Link>
        <Link to="/projects" style={{ margin: '0 1rem', color: '#4a5568', textDecoration: 'none' }}>Projects</Link>
        <Link to="/contact" style={{ margin: '0 1rem', color: '#4a5568', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;