import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Your Logo</div>
      <Navbar />
    </header>
  );
}

export default Header;
