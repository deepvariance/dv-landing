"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does DeepVariance reduce costs?",
    answer: "Our intelligent sampling identifies the most statistically significant subsets of your data, so you train on carefully selected samples instead of full datasets. Combined with our optimized AutoML pipeline, this delivers 25-30% lower compute costs and uses only one-third of the CPU/RAM compared to traditional approaches."
  },
  {
    question: "What types of ML models does DeepVariance support?",
    answer: "DeepVariance works with both tabular data (classification, regression) and deep learning models (image classification, computer vision). Our AutoML pipeline handles preprocessing, model selection, hyperparameter tuning, and deployment automatically."
  },
  {
    question: "How long does it take to deploy a model?",
    answer: "Days, not months. Our automated pipeline handles everything from data preprocessing to model training to cloud-ready artifact export. You provide the data, we deliver production-ready models that integrate seamlessly with AWS, GCP, Azure, or your preferred infrastructure."
  },
  {
    question: "Do I need a data science team to use DeepVariance?",
    answer: "No. DeepVariance automates the complex parts of ML development so companies without specialized ML teams can deploy predictive models. While having technical stakeholders helps extract maximum value, you don't need PhDs or ML engineers to get started."
  },
  {
    question: "How is DeepVariance different from other AutoML tools?",
    answer: "Two key differentiators: (1) Our proprietary intelligent sampling reduces data processing needs before training even begins—something traditional AutoML tools don't offer. (2) Our AutoML pipeline matches or exceeds tools like AutoGluon (used by AWS SageMaker), TPOT, and H2O on accuracy while using one-third of the resources. We're the only platform combining both capabilities."
  },
  {
    question: "Can I try DeepVariance with my own data?",
    answer: "Absolutely. We run customized pilot programs with your actual data to demonstrate measurable value. Reach out to discuss your use case, and we'll design a proof-of-concept tailored to your specific business needs and technical environment."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-surface-light section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-bold">Frequently Asked Questions</h2>
          <p className="text-accent-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about DeepVariance
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-accent-300 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-accent-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
