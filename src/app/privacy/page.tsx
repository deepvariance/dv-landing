export default function PrivacyPage() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-accent-300">
            <p className="text-sm text-accent-400">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account,
                fill out a form, or communicate with us. This may include your name, email address,
                company name, and any other information you choose to provide.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Information Sharing</h2>
              <p>
                We do not share your personal information with third parties except as described in
                this policy. We may share information with service providers who perform services on
                our behalf.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Data Security</h2>
              <p>
                We take reasonable measures to help protect your personal information from loss, theft,
                misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information at any time.
                Please contact us at founders@deepvariance.com for any privacy-related requests.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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
