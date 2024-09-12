import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 Seu Nome ou Nome da Empresa. Todos os direitos reservados.</p>
        {/* Adicione mais conteúdo do footer aqui, se necessário */}
      </div>
    </footer>
  );
}

export default Footer;
