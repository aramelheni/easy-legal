import React from 'react';

const Header = () => {
  return (
    <nav style={styles.navBar}>
      {/* Assuming the background is white and the text is a dark shade */}
      <button style={styles.button}>Home</button>
      <button style={styles.button}>About</button>
      <button style={styles.button}>Team</button>
      <button style={styles.button}>Services</button>
      <button style={styles.button}>Policies</button>
    </nav>
  );
};

const styles = {
  navBar: {
    backgroundColor: '#FFFFFF', // white background
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333' // dark grey for text
  }
};

export default Header;