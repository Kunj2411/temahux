"use client";

import { useRef, useState, type FormEvent } from "react";
import { submitToWeb3Forms } from "@/lib/web3forms";

type FormKind = "signup" | "contact";

const inputStyle = {
  padding: 12,
  borderRadius: 12,
  border: "1px solid #dfe7f5",
  width: "100%",
} as const;

const statusCopy = {
  signup: "Signup received successfully. We'll contact you with the next steps.",
  contact: "Message sent successfully. We'll get back to you soon.",
} satisfies Record<FormKind, string>;

export function PublicInquiryForm({ kind }: { kind: FormKind }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const submitting = useRef(false);
  const statusId = `${kind}-form-status`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (submitting.current) return;

    for (const input of Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]"))) {
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
    try {
      await submitToWeb3Forms(form, {
        subject:
          kind === "signup"
            ? "New Temahux Academy Signup"
            : "New Temahux Academy Contact Submission",
        website: "TEMAHUX ACADEMY",
        page: kind === "signup" ? "/signup" : "/contact",
        source: "academy.temahux.com",
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  const signup = kind === "signup";

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }} aria-describedby={statusId}>
      <label style={{ display: "grid", gap: 6 }} htmlFor={`${kind}-name`}>
        <span>Name</span>
        <input
          id={`${kind}-name`}
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
          placeholder={signup ? "Your full name" : "Your name"}
          style={inputStyle}
        />
      </label>
      <label style={{ display: "grid", gap: 6 }} htmlFor={`${kind}-email`}>
        <span>Email</span>
        <input
          id={`${kind}-email`}
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          placeholder={signup ? "name@example.com" : "Email address"}
          style={inputStyle}
        />
      </label>
      {signup ? (
        <label style={{ display: "grid", gap: 6 }} htmlFor="signup-phone">
          <span>Contact number</span>
          <input
            id="signup-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            pattern="[0-9+(). -]{7,30}"
            title="Enter a phone number using at least 7 digits or phone symbols."
            placeholder="Your contact number"
            style={inputStyle}
          />
        </label>
      ) : (
        <label style={{ display: "grid", gap: 6 }} htmlFor="academy-contact-message">
          <span>Message</span>
          <textarea
            id="academy-contact-message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            placeholder="How can we help?"
            rows={5}
            style={inputStyle}
          />
        </label>
      )}
      <input name="botcheck" type="checkbox" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      <button type="submit" className="button button-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : signup ? "Create account" : "Send message"}
      </button>
      <p
        id={statusId}
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
        style={{
          minHeight: 24,
          margin: 0,
          color: status === "success" ? "#087f5b" : status === "error" ? "#9a3412" : "var(--muted)",
        }}
      >
        {status === "success"
          ? statusCopy[kind]
          : status === "error"
            ? process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
              ? "Something went wrong while submitting the form. Please try again."
              : "Online form delivery is not configured yet. Please try again later or contact hello@temahux.com."
            : ""}
      </p>
    </form>
  );
}
