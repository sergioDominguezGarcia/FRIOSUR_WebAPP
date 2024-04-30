import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8v3gwl7", "template_rz7uqd7", form.current, {
        publicKey: "-5LSaO9DixrMLGZLS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="field">
      <label></label>
      <input
        className="label"
        type="text"
        name="user_name"
        placeholder="NOMBRE..."
      />
      <label></label>
      <input
        className="label"
        type="email"
        name="user_email"
        
        placeholder="EMAIL..."
      />
      <label></label>
      <textarea className="input" name="message" placeholder="MENSAJE..." />
      <br />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default ContactUs;
