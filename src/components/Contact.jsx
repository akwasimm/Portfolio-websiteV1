import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("sent");
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full bg-surface-container-high border border-outline-variant px-3 py-2.5 text-[13px] font-mono text-on-background placeholder:text-outline focus:outline-none focus:border-primary transition-colors";

  const btnColor = {
    idle: "bg-primary text-on-primary hover:opacity-80",
    sending: "bg-secondary text-on-secondary",
    sent: "bg-[#2e7d32] text-white",
    error: "bg-[#c62828] text-white",
  }[status];

  return (
    <section className="scroll-mt-[93px] md:scroll-mt-[133px]" id="contact">
      <header className="mb-6 border-b border-outline-variant pb-2">
        <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-primary flex items-baseline">
          <span className="font-mono text-[13px] font-medium leading-[1.5] text-outline section-num">
            09.
          </span>
          Contact
        </h2>
      </header>
      <div className="p-6 border border-outline-variant bg-surface">
        <p className="text-[14px] leading-[1.5] text-on-surface-variant mb-6">
          <p>
            I am currently seeking internship, freelance, and full-time
            opportunities in Software Development, Data Science, and Artificial
            Intelligence. If you'd like to discuss a project, collaboration, or
            career opportunity, feel free to reach out using the form below.
          </p>
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Name"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Email"
              required
              className={inputClass}
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className={inputClass}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            rows={4}
            className={`${inputClass} resize-none`}
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`font-mono text-[13px] font-medium leading-[1.5] py-3 px-6 no-underline cursor-pointer disabled:cursor-not-allowed transition-all duration-300 ${btnColor}`}
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </span>
              )}
              {status === "sent" && (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Sent
                </span>
              )}
              {status === "error" && (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  Failed
                </span>
              )}
            </button>
            {status === "sent" && (
              <span className="text-[12px] font-mono text-[#2e7d32] animate-pulse">
                Message sent successfully.
              </span>
            )}
            {status === "error" && (
              <span className="text-[12px] font-mono text-[#c62828]">
                Something went wrong.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
