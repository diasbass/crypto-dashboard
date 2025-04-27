'use client';

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">Contact Us</h1>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Your name"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Write your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-500 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
