import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Entre em Contato</h1>
      <p>Estamos aqui para ajudar. Por favor, use um dos métodos abaixo para entrar em contato conosco.</p>
      <section>
        <h2>Informações de Contato</h2>
        <ul>
          <li>Email: contato@exemplo.com</li>
          <li>Telefone: (11) 1234-5678</li>
          <li>Endereço: Rua Exemplo, 123 - São Paulo, SP</li>
        </ul>
      </section>
      <section>
        <h2>Formulário de Contato</h2>
        <form>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
