import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.1489630833", form.name);
    formData.append("entry.1299581212", form.email);
    formData.append("entry.402577968", form.message);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSc_CKbK6cJYH1QsjNmcrClZC6t9NGLIGnN4RjcEsPbQ46d_kw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong!");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
        Contact
      </h2>

      <div>
        <label className="block text-sm mb-1">Name *</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border-b border-gray-400 py-1 text-sm text-black p-1"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email *</label>
        <input
          name="email"
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

      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full w-fit hover:shadow-lg"
      >
        Submit
      </button>
    </form>
  );
}
