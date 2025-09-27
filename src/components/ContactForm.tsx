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
    message: "",
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
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjects = [
    "General Inquiry",
    "Research Collaboration",
    "Partnership Opportunity",
    "Media Request",
    "Speaking Engagement",
    "Other",
  ];

  return (
    <section
      id="contact-form"
      className="bg-primary section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-accent-300 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on groundbreaking research? We&#39;d love to
              connect with you. Send us a message and we&#39;ll respond as soon
              as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10 animate-fade-in">
              <div>
                <h3 className="text-3xl text-white mb-8">Send us a message</h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center flex-shrink-0 group hover:border-glow-light transition-all duration-300">
                      <svg
                        className="w-8 h-8 text-accent-300 group-hover:text-white transition-colors duration-300"
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
                    <div>
                      <h4 className="text-xl text-white mb-2">Office Hours</h4>
                      <p className="text-accent-300 text-lg">
                        contact@deepvariance.com
                      </p>
                      <p className="text-accent-400">
                        research@deepvariance.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center flex-shrink-0 group hover:border-glow-light transition-all duration-300">
                      <svg
                        className="w-8 h-8 text-accent-300 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl text-white mb-2">Address</h4>
                      <p className="text-accent-300 text-lg">
                        San Francisco, CA
                      </p>
                      <p className="text-accent-400">United States</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center flex-shrink-0 group hover:border-glow-light transition-all duration-300 shadow-glow">
                      <svg
                        className="w-8 h-8 text-accent-300 group-hover:text-white transition-colors duration-300"
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
                    <div>
                      <h4 className="text-xl text-white mb-2">Response Time</h4>
                      <p className="text-accent-300 text-lg">
                        Usually within 24-48 hours
                      </p>
                      <p className="text-accent-400">Monday - Friday</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="glass p-8 rounded-2xl border border-glow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-glow rounded-full blur-2xl opacity-20"></div>
                <div className="relative">
                  <h4 className="text-xl text-white mb-4">
                    For Research Inquiries
                  </h4>
                  <p className="text-accent-300 leading-relaxed">
                    If you&#39;re interested in collaborating on research
                    projects or have specific technical questions, please
                    include relevant details about your research background and
                    interests in your message.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="card-premium animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-white tracking-wide uppercase"
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
                      className="input-premium"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white tracking-wide uppercase"
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
                      className="input-premium"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-white tracking-wide uppercase"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="input-premium"
                    placeholder="Your company or institution"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-white tracking-wide uppercase"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-premium"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option
                        key={subject}
                        value={subject}
                        className="bg-surface text-white"
                      >
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-white tracking-wide uppercase"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-premium resize-vertical min-h-[150px]"
                    placeholder="Tell us about your inquiry or project..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed
                             flex items-center justify-center space-x-3 py-4 text-lg font-semibold
                             transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
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
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="glass border border-green-500/30 rounded-2xl p-6 bg-green-500/10">
                    <div className="flex items-center space-x-3 text-green-400">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-bold text-lg">
                        Message sent successfully!
                      </span>
                    </div>
                    <p className="text-green-300 mt-2">
                      We&#39;ll get back to you within 24-48 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="glass border border-red-500/30 rounded-2xl p-6 bg-red-500/10">
                    <div className="flex items-center space-x-3 text-red-400">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-bold text-lg">
                        Failed to send message
                      </span>
                    </div>
                    <p className="text-red-300 mt-2">
                      Please try again or contact us directly at
                      contact@deepvariance.com
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
