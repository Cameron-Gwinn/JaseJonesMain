"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder: swap for real API call
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form submission:", form);
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <span className="text-taupe text-4xl">✦</span>
        <h3 className="font-serif text-2xl text-charcoal">Thank you for reaching out.</h3>
        <p className="text-charcoal/60 leading-relaxed max-w-sm">
          We've received your message and will be in touch within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-xs tracking-widest uppercase text-charcoal/50">
            Name *
          </Label>
          <Input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="border-sand-dark focus-visible:ring-taupe bg-transparent rounded-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-xs tracking-widest uppercase text-charcoal/50">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className="border-sand-dark focus-visible:ring-taupe bg-transparent rounded-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className="text-xs tracking-widest uppercase text-charcoal/50">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(000) 000-0000"
            className="border-sand-dark focus-visible:ring-taupe bg-transparent rounded-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-xs tracking-widest uppercase text-charcoal/50">
            Service Interest
          </Label>
          <Select onValueChange={(v, _) => setForm({ ...form, service: String(v ?? "") })}>
            <SelectTrigger className="border-sand-dark focus:ring-taupe bg-transparent rounded-none text-charcoal/70">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-construction">New Construction</SelectItem>
              <SelectItem value="remodeling">Remodeling</SelectItem>
              <SelectItem value="furnishing">Furnishing of Spaces</SelectItem>
              <SelectItem value="general">General Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-xs tracking-widest uppercase text-charcoal/50">
          Tell us about your project *
        </Label>
        <Textarea
          id="message"
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Share a bit about your space, timeline, and what you're hoping to achieve."
          rows={5}
          className="border-sand-dark focus-visible:ring-taupe bg-transparent rounded-none resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="self-start bg-charcoal text-cream px-10 py-3.5 text-xs tracking-widest uppercase hover:bg-charcoal/80 transition-colors disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
