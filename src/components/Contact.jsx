import React, { useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration using environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        name: formData.name,
        time: new Date().toLocaleString(),
        message: formData.message,
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );

      alert(
        "Message sent successfully! Thank you for your message, I'll get back to you soon.",
      );

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert(
        "Failed to send message. Please try again or contact me directly via email.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">
        LET'S WORK <br />
        <span className="stroke-text">TOGETHER</span>
      </h2>
      <p className="contact-description">
        Feel free to reach out for collaborations or just a friendly hello.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="contact-input"
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message"
          className="contact-input contact-textarea"
          rows="5"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="contact-submit"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
