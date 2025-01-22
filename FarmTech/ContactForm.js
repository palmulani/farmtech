import React, { useState } from 'react';

function ContactForm() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    console.log(contactForm);
  };

  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <p>Contact us for more information or to place an order.</p>
      <form onSubmit={handleContactFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={contactForm.name}
          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={contactForm.email}
          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          value={contactForm.message}
          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
        />
        <button>Send</button>
      </form>
    </section>
  );
}

export default ContactForm;