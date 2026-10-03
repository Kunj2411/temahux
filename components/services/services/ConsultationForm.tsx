"use client";

import { useRef, useState } from "react";
import { practices } from "@services/lib/services";
import { contact } from "@services/lib/site";
import { submitToWeb3Forms } from "@services/lib/web3forms";

/**
 * Consultation form.
 *
 * Web3Forms delivery is configured through NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
 * What changed:
 *  - Service options are relabelled to the four practices.
 *  - `company` is OPTIONAL. The ₹3,000 entry point targets small businesses
 *    that may not have a registered organisation name, and requiring it was
 *    blocking exactly that lead.
 *  - Every field has a real label/input pairing.
 *  - The submit label is "Talk to Temahux", the services-wide conversion
 *    label, and never "Free".
 *
 * A success message is shown only after Web3Forms confirms the submission.
 */
const labelClass = "svc-mono-sm block text-text-muted";

const fieldClass =
  "mt-2 w-full rounded-panel border border-line bg-bg px-4 py-3 text-[15px] text-text placeholder:text-text-muted focus-visible:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "Above ₹1,00,000",
];

export default function ConsultationForm() {
  const [status, setStatus] = useState<"" | "loading" | "success" | "error">("");
  const submitting = useRef(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (submitting.current) return;

    for (const input of Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("[required]"))) {
      input.setCustomValidity(input.value.trim() ? "" : "Please complete this field.");
    }
    if (!form.reportValidity()) return;

    submitting.current = true;
    setStatus("loading");
    try {
      await submitToWeb3Forms(form, {
        subject: "New Temahux Service Consultation Request",
        website: "TEMAHUX SERVICES",
        page: "/services",
        source: "www.temahux.com/services",
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-describedby="consultation-form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="consultation-name">
            Name
          </label>
          <input
            id="consultation-name"
            type="text"
            name="name"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="consultation-email">
            Email
          </label>
          <input
            id="consultation-email"
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="consultation-organization">
          Company or organisation <span className="lowercase">(optional)</span>
        </label>
        <input
          id="consultation-organization"
          type="text"
          name="organization"
          autoComplete="organization"
          maxLength={120}
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="consultation-service">
          Which practice
        </label>
        <select
          id="consultation-service"
          name="service"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Select a practice
          </option>
          {practices.map((practice) => (
            <option key={practice.slug} value={practice.label}>
              {practice.label} — {practice.headline}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="consultation-budget">
          Budget range
        </label>
        <select
          id="consultation-budget"
          name="budget"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Select a budget range
          </option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="consultation-message">
          What are you trying to build?
        </label>
        <textarea
          id="consultation-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="Send the problem, not a brief."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <input name="botcheck" type="checkbox" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-panel bg-brand px-8 py-4 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Talk to Temahux"}
      </button>

      <p id="consultation-form-status" role={status === "error" ? "alert" : "status"} aria-live="polite" className="min-h-6 text-[15px] leading-[1.6]">
        {status === "success" ? (
          <span className="text-text">
            Consultation request received. We&apos;ll review your requirements and get back to you.
          </span>
        ) : null}
        {status === "error" ? (
          <span className="text-text">
            {process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ? <>Something went wrong while submitting the form. Please try again, or email <a className="underline" href={contact.emailHref}>{contact.email}</a>.</> : <>Online form delivery is not configured. Email <a className="underline" href={contact.emailHref}>{contact.email}</a> instead.</>}
          </span>
        ) : null}
      </p>
    </form>
  );
}
