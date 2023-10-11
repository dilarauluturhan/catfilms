import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/dilarauluturhan" target="_blank">
        Dilara Uluturhan
      </Link>
    </footer>
  )
}

export default Footer;