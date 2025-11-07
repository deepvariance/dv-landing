import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl text-white font-bold">
              Get in{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-accent-300 leading-relaxed">
              Ready to transform your ML workflow? Let's discuss how DeepVariance can accelerate your AI initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
}
