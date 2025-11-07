export default function CookiesPage() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Cookie Policy
          </h1>

          <div className="space-y-6 text-accent-300">
            <p className="text-sm text-accent-400">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit
                our website. They help us provide you with a better experience by remembering your preferences
                and understanding how you use our site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. How We Use Cookies</h2>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Performance Cookies:</strong> Help us improve our website's performance</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Third-Party Cookies</h2>
              <p>
                We may use third-party services that also use cookies. These third parties have their own
                privacy policies and we have no control over their cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Managing Cookies</h2>
              <p>
                You can control and manage cookies in your browser settings. Please note that removing or
                blocking cookies may impact your user experience and some features may not function properly.
              </p>
              <p>
                Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>See what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page
                with an updated revision date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
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
