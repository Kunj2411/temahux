"use client";

import { useState } from "react";

export default function ConsultationForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "5dc38729-8ddc-4b2f-b86a-be5498c6c759");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
            Company
          </label>
          <input
            type="text"
            name="company"
            required
            className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
            Service Interest
          </label>
          <select
            name="service"
            required
            className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select a service</option>
            <option value="SEO Architecture">SEO Architecture</option>
            <option value="Paid Performance">Paid Performance</option>
            <option value="Conversion OS">Conversion OS</option>
            <option value="Full Growth Infrastructure">Full Growth Infrastructure</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
            Budget Range
          </label>
          <select
            name="budget"
            required
            className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="$10k-$25k">$10k - $25k</option>
            <option value="$25k-$50k">$25k - $50k</option>
            <option value="$50k-$100k">$50k - $100k</option>
            <option value="$100k+">$100k+</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
            Project Details
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 bg-surface-base border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your growth objectives..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Submitting..." : "Request Consultation"}
        </button>

        {status === "success" && (
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-button text-green-400 text-sm text-center">
            Thank you! We'll be in touch within 24 hours.
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-button text-red-400 text-sm text-center">
            Something went wrong. Please try again or email us directly.
          </div>
        )}
      </form>
    </div>
  );
}
