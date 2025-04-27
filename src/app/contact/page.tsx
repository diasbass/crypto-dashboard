'use client';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">
        Have questions, suggestions, or feedback? Fill out the form below or send us an email at{" "}
        <a href="mailto:contact@btcryptowatch.com" className="text-yellow-400 underline">
          contact@btcryptowatch.com
        </a>.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            rows={5}
            placeholder="Your message..."
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
