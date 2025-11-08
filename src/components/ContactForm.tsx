"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch(
        "https://formsubmit.co/founders@deepvariance.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjects = [
    "General Inquiry",
    "Product Demo",
    "Partnership Opportunity",
    "Pilot Program",
    "Pricing",
    "Other"
  ];

  return (
    <section
      id="contact-form"
      className="bg-surface-light section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="container-custom relative">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 space-y-3 text-center">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-accent-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg text-white font-semibold">Email</h4>
              <a
                href="mailto:founders@deepvariance.com"
                className="text-accent-300 hover:text-white transition-colors"
              >
                founders@deepvariance.com
              </a>
            </div>

            <div className="glass p-6 space-y-3 text-center">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-accent-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg text-white font-semibold">
                Response Time
              </h4>
              <p className="text-accent-300">Within 24-48 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-no-hover p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* FormSubmit Configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission - DeepVariance"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white mb-2 text-sm font-medium"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-premium w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white mb-2 text-sm font-medium"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-premium w-full"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-white mb-2 text-sm font-medium"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="input-premium w-full"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white mb-2 text-sm font-medium"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-premium w-full"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2 text-sm font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="input-premium w-full resize-none"
                  placeholder="Tell us about your ML needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
