import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("amishaatel549", "@gmail.com", formRef.current, "amisha")
      .then(() => {
        alert("Message sent!");
      })
      .catch((error) => {
      console.error(error);
      alert("Failed!");
});

  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
  <div>
    <label className="block text-sm mb-1">Name *</label>
    <input
      name="user_name"              // HTML name attribute (must match your state key)
      value={form.name}        // Controlled input value
      onChange={handleChange}  // Updates state
      required
      className="w-full border-b border-gray-400 py-1 text-sm text-black p-1"
    />
  </div>

  <div>
    <label className="block text-sm mb-1">Email *</label>
    <input
      name="user_email"
      type="email"
      value={form.email}
      onChange={handleChange}
      required
      className="w-full border-b border-gray-400 py-1 text-sm text-black p-1"
    />
  </div>

  <div>
    <label className="block text-sm mb-1">Message *</label>
    <textarea
      name="message"
      rows="4"
      value={form.message}
      onChange={handleChange}
      required
      className="w-full border-b border-gray-400 py-1 text-sm text-black p-1"
    ></textarea>
  </div>

  <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full w-fit hover:shadow-lg">
    Submit
  </button>
</form>

  );
}
