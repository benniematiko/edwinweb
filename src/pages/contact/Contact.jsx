import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  // Our notebook memory for the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // This runs every time you type a letter
  const handleChange = (e) => {
    setFormData({
     ...formData,
      [e.target.name]: e.target.value
    });
  };

  // This runs when you click the bell [Submit button]
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from reloading
    console.log('Order Received:', formData);
    alert(`Thank you ${formData.name}! Your message is received. We will save it to our fridge in the next step!`);

    // Clear the form after sending
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Have a project? Let's talk! Fill the form like an order slip.</p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Max"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. max@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="cta-button">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>My Info</h3>
          <p><strong>Email:</strong> edwineomedo95@gmail.com</p>
          <p><strong>Phone:</strong> +254 742 764795</p>
          <p><strong>Location:</strong> Nairobi, Kenya</p>
          <div className="contact-emoji">📬 Let's create together!</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;