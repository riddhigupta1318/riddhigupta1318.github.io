import React from 'react';
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact-section" className={styles.contactSection}>
      <h2>Contact Me</h2>
      <p>I would love to hear from you, lets connect.</p>
      <form id="contact-form" className={styles.contactForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div id="form-message"></div>
    </section>
  );
};

export default Contact;
