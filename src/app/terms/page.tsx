export default function TermsPage() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Terms of Service
          </h1>

          <div className="space-y-6 text-accent-300">
            <p className="text-sm text-accent-400">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing or using DeepVariance's services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Description of Service</h2>
              <p>
                DeepVariance provides machine learning optimization tools and services. We reserve the right
                to modify, suspend, or discontinue any part of our service at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. User Responsibilities</h2>
              <p>
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring your use of the service complies with applicable laws</li>
                <li>The accuracy and quality of data you provide to our services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by DeepVariance and are
                protected by intellectual property laws. You may not copy, modify, or distribute our content
                without permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
              <p>
                DeepVariance shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material
                changes. Your continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:founders@deepvariance.com" className="text-white hover:underline">founders@deepvariance.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
