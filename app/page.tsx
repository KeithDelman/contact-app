"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_5ke24id",   // dito ilalagay Service ID galing sa EmailJS
        "template_o69ezvd",  // dito ilalagay Template ID galing sa EmailJS
        form,
        "dUtBc5ITx5YHQ7hrr"    // dito ilalagay Public Key galing sa EmailJS
      )
      .then(
        () => setStatus("Message sent! ✅"),
        () => setStatus("Failed to send message ❌")
      );

    form.reset();
  };

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}>
        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>

      <p>{status}</p>
    </main>
  );
}
