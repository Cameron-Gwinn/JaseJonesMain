"use client";

import { useState } from "react";

export default function ShopEmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <p className="text-cream/80 font-serif text-xl italic">
        We'll let you know when the shop opens.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 bg-transparent border border-cream/30 text-cream placeholder:text-cream/30 px-5 py-3.5 text-sm focus:outline-none focus:border-cream/70 transition-colors"
      />
      <button
        type="submit"
        className="bg-cream text-charcoal px-6 py-3.5 text-xs tracking-widest uppercase hover:bg-taupe transition-colors whitespace-nowrap"
      >
        Notify Me
      </button>
    </form>
  );
}
