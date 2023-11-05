import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div style={styles.navBar}>
      <Link to="/" style={styles.title}>Custom Video Player</Link>
      <Link to="/uploads" style={styles.uploadButton}>Upload Video</Link>
    </div>
  );
};

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#333',
    color: '#fff',
    padding: '10px',
  },
  title: {
    color:'whitesmoke',
    textDecoration: 'none',
    fontSize: '1.5rem',
  },
  uploadButton: {
    textDecoration: 'none',
    padding: '8px 16px',
    backgroundColor: 'blue',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default NavBar;
