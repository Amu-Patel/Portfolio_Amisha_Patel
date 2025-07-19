import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const formRef = useRef();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3t6xoq",
        "template_4e0q2bg",
        formRef.current,
        "7PVlrIFu4CfMY89Pm"
      )
      .then(() => {
        alert("Message sent!");
        setForm({ user_name: "", user_email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message!");
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
        Contact
        </h2>
        <label className="block text-sm mb-1">Name *</label>
        <input
          name="user_name"
          value={form.user_name}
          onChange={handleChange}
          required
          className="w-full border-b border-gray-400 py-1 text-sm text-black p-1"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email *</label>
        <input
          name="user_email"
          type="email"
          value={form.user_email}
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

      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full w-fit hover:shadow-lg"
      >
        Submit
      </button>
    </form>
  );
}
