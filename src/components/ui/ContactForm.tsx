"use client";

import { useRef, useState, type FormEvent } from "react";
import { contact } from "@/lib/site";
import { submitToWeb3Forms } from "@/lib/web3forms";

type FormState = "idle" | "sending" | "success" | "error";
type ContactFormProps = { variant?: "contact" | "consultation" };
const services = ["Website", "Web application", "Mobile app", "AI solution", "Automation", "UI/UX", "E-commerce", "Software", "Cloud / DevOps", "Other"];
const field = "w-full rounded-lg border border-white/15 bg-white/[.04] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20";

export default function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [status, setStatus] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");
  const submitting = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (submitting.current) return;

    for (const input of Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("[required]"))) {
      input.setCustomValidity(input.value.trim() ? "" : "Please complete this field.");
    }
    const phone = form.querySelector<HTMLInputElement>('input[name="phone"]');
    if (phone) {
      const digitCount = phone.value.replace(/\D/g, "").length;
      phone.setCustomValidity(
        phone.value.trim() && digitCount < 7
          ? "Enter a phone number with at least 7 digits."
          : "",
      );
    }
    if (!form.reportValidity()) return;

    submitting.current = true;
    setStatus("sending");
    setFeedback("");
    const isConsultation = variant === "consultation";
    try {
      await submitToWeb3Forms(form, {
        subject: isConsultation
          ? "New Temahux Service Consultation Request"
          : "New Temahux Services Contact Submission",
        website: "TEMAHUX SERVICES",
        page: isConsultation ? "/services/contact-consultation" : "/contact",
        source: "services.temahux.com",
      });
      form.reset();
      setStatus("success");
      setFeedback(
        isConsultation
          ? "Consultation request received. We'll review your requirements and get back to you."
          : "Message sent successfully. We'll get back to you soon.",
      );
    } catch {
      setStatus("error");
      setFeedback(
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
          ? `Something went wrong while submitting the form. Please try again or email ${contact.email}.`
          : `Online form delivery is not configured. Please email ${contact.email}.`,
      );
    } finally {
      submitting.current = false;
    }
  }

  return <section className="rounded-2xl border border-white/10 bg-white/[.04] p-5 sm:p-8 md:p-10">
    <form onSubmit={submit} className="space-y-5" aria-describedby="contact-form-status">
      <div className="grid gap-5 sm:grid-cols-2"><Field label="Name" name="name" autoComplete="name" minLength={2} maxLength={100} required/><Field label="Email" name="email" type="email" autoComplete="email" maxLength={254} required/></div>
      <div className="grid gap-5 sm:grid-cols-2"><Field label="Phone" name="phone" type="tel" autoComplete="tel" maxLength={30} pattern="[0-9+(). -]{7,30}"/><Field label="Company" name="company" autoComplete="organization" maxLength={120}/></div>
      <div className="grid gap-5 sm:grid-cols-2"><Select label="Service" name="service" options={services}/><Select label="Budget range" name="budget" options={["Under ₹10,000", "₹10,000–₹25,000", "₹25,000–₹50,000", "₹50,000–₹1,00,000", "Above ₹1,00,000", "To be discussed"]}/></div>
      <Select label="Project timeline" name="timeline" options={["As soon as possible", "Within 1 month", "1–3 months", "3+ months", "Flexible"]}/>
      <label className="block text-sm text-white/75" htmlFor="services-contact-message">Project details<textarea id="services-contact-message" name="message" required minLength={10} maxLength={5000} rows={5} placeholder="What are you trying to build or improve?" className={`${field} mt-2 resize-y`} /></label>
      <input name="botcheck" type="checkbox" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button disabled={status === "sending"} className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#3978f6] px-5 text-sm font-semibold text-white transition hover:bg-[#2865dc] disabled:cursor-wait disabled:opacity-60" type="submit">{status === "sending" ? "Sending…" : "Send Project Inquiry"}</button>
      <p id="contact-form-status" role={status === "error" ? "alert" : "status"} aria-live="polite" className={`min-h-5 text-sm ${status === "success" ? "text-emerald-300" : status === "error" ? "text-amber-200" : "text-white/50"}`}>{feedback || "Your information is used to respond to this enquiry."}</p>
    </form>
  </section>;
}

function Field({ label, name, type = "text", autoComplete, required = false, minLength, maxLength, pattern }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean; minLength?: number; maxLength?: number; pattern?: string }) {
  const id = `services-contact-${name}`;
  return <label className="block text-sm text-white/75" htmlFor={id}>{label}{required ? <span aria-hidden="true"> *</span> : null}<input id={id} className={`${field} mt-2`} name={name} type={type} autoComplete={autoComplete} required={required} minLength={minLength} maxLength={maxLength} pattern={pattern} /></label>;
}
function Select({ label, name, options }: { label: string; name: string; options: readonly string[] }) {
  return <label className="block text-sm text-white/75">{label}<select className={`${field} mt-2`} name={name} defaultValue=""><option value="" disabled>Select {label.toLowerCase()}</option>{options.map((option) => <option className="bg-[#101827]" key={option} value={option}>{option}</option>)}</select></label>;
}
