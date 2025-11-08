import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* The Challenge We're Solving Section */}
      <section className="bg-surface-light section-padding section-glow overflow-hidden">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white font-bold">The Challenge We're Solving</h2>
            <p className="text-accent-300 text-lg">
              Modern ML development is too slow, too expensive, and out of reach for most companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="glass p-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-glow-danger rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">The Problem</h3>
              <p className="text-accent-300 leading-relaxed">
                Businesses are drowning in data—millions to billions of rows collecting dust in databases. But extracting actionable insights requires massive compute resources, specialized ML expertise, and months of manual work.
              </p>
              <ul className="list-disc list-inside text-accent-300 space-y-2">
                <li>Training on full datasets burns through cloud budgets fast</li>
                <li>Model development takes months of trial-and-error tuning</li>
                <li>Most companies can't afford the specialized talent or infrastructure</li>
              </ul>
            </div>

            {/* Our Solution */}
            <div className="glass p-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-glow-success rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Solution</h3>
              <p className="text-accent-300 leading-relaxed">
                DeepVariance combines intelligent sampling with automated ML to slash costs and accelerate deployment. Train accurate models on carefully selected data subsets—achieving the same results with 70% fewer resources and 25-30% lower costs.
              </p>
              <ul className="list-disc list-inside text-accent-300 space-y-2">
                <li>Deploy production-ready models in days, not months</li>
                <li>Handle enterprise-scale datasets without breaking the bank</li>
                <li>No specialized ML team or PhD-level expertise required</li>
              </ul>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto text-center pt-6">
            <p className="text-xl text-white font-semibold leading-relaxed">
              We're democratizing machine learning. Every company with data deserves enterprise-grade AI capabilities—not just tech giants with unlimited budgets.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-primary section-padding section-glow overflow-hidden">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white font-bold">How It Works</h2>
            <p className="text-accent-300 text-lg">
              Two powerful components working in tandem to transform your ML development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sampling Algorithm */}
            <div className="glass p-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">Intelligent Sampling</h3>
              <p className="text-accent-300 leading-relaxed">
                Our proprietary algorithm identifies the most statistically significant subsets of your data. Work with representative samples validated through three-tier statistical verification, not arbitrary random selections.
              </p>
              <ul className="list-disc list-inside text-accent-300 space-y-2">
                <li>Research-backed methodology unique to DeepVariance</li>
                <li>Triple-validated statistical significance</li>
                <li>Dramatically reduces processing time and infrastructure costs</li>
              </ul>
            </div>

            {/* ML Algorithm */}
            <div className="glass p-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">Automated ML Pipeline</h3>
              <p className="text-accent-300 leading-relaxed">
                Complete automation from raw data to production deployment. Handles preprocessing, model architecture selection, hyperparameter optimization, and exports cloud-ready artifacts—all without manual intervention.
              </p>
              <ul className="list-disc list-inside text-accent-300 space-y-2">
                <li>Supports tabular data and deep learning (computer vision)</li>
                <li>Benchmarked against AutoGluon, TPOT, H2O, and others</li>
                <li>Exports production-ready models for any cloud platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="bg-surface-light section-padding section-glow overflow-hidden">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl text-white font-bold">Proven Results</h2>
            <p className="text-accent-300 text-lg max-w-2xl mx-auto">
              Benchmarked against leading AutoML tools including AutoGluon (used by AWS SageMaker), TPOT, H2O, and four others across medical, finance, retail datasets and more
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="glass p-6 text-center space-y-3">
              <div className="text-4xl text-white font-bold">25-30%</div>
              <div className="text-accent-300">Lower Compute Cost</div>
            </div>
            <div className="glass p-6 text-center space-y-3">
              <div className="text-4xl text-white font-bold">⅓</div>
              <div className="text-accent-300">CPU & RAM Usage</div>
            </div>
            <div className="glass p-6 text-center space-y-3">
              <div className="text-4xl text-white font-bold">20%</div>
              <div className="text-accent-300">Better Efficiency (Deep Learning)</div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">Competitive Accuracy, Fraction of the Resources</h3>
              <p className="text-accent-300 leading-relaxed">
                Our automated ML pipeline matches or exceeds the accuracy of industry-leading tools across medical, finance, and retail datasets—while consuming only one-third of the CPU and RAM resources.
              </p>
            </div>

            <div className="glass p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">Multiply the Gains with Intelligent Sampling</h3>
              <p className="text-accent-300 leading-relaxed">
                The results above are achieved with our AutoML pipeline alone. Add intelligent sampling to the mix, and you'll see exponentially greater reductions in training time and infrastructure spend.
              </p>
            </div>

            <div className="glass p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">Deep Learning Excellence</h3>
              <p className="text-accent-300 leading-relaxed">
                For computer vision and image classification tasks, our specialized deep learning pipeline delivers 20% better efficiency on large-scale datasets—bringing enterprise AI within reach for mid-market companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section - MOVED UP */}
      <section className="bg-primary section-padding section-glow overflow-hidden">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white font-bold">Industry Solutions</h2>
            <p className="text-accent-300 text-lg">
              Tailored ML solutions for your specific industry challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="glass p-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-glow-success rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Healthcare</h3>
              <p className="text-accent-300 leading-relaxed">
                Accelerate patient diagnosis, predict treatment outcomes, and optimize hospital operations with AI models trained on massive medical datasets—without breaking the budget.
              </p>
              <ul className="list-disc list-inside text-accent-300 space-y-2 text-sm">
                <li>Patient risk prediction</li>
                <li>Medical image analysis</li>
                <li>Treatment optimization</li>
              </ul>
            </div>

            {/* Finance */}
            <div className="glass p-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-glow-warning rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Finance & Banking</h3>
              <p className="text-accent-300 leading-relaxed">
                Build fraud detection systems, credit risk models, and algorithmic trading strategies faster. Process billions of transactions efficiently with real-time insights.
              </p>
              <ul className="list-disc list-inside text-accent-300 space-y-2 text-sm">
                <li>Fraud detection & prevention</li>
                <li>Credit risk assessment</li>
                <li>Customer churn prediction</li>
              </ul>
            </div>

            {/* Logistics */}
            <div className="glass p-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-glow-info rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Logistics & Supply Chain</h3>
              <p className="text-accent-300 leading-relaxed">
                Optimize inventory, predict demand, and streamline routes with intelligent forecasting. Measurably reduce waste and stockouts while cutting operational costs.
              </p>
              <ul className="list-disc list-inside text-accent-300 space-y-2 text-sm">
                <li>Demand forecasting</li>
                <li>Route optimization</li>
                <li>Inventory management</li>
              </ul>
            </div>
          </div>

          {/* And more text */}
          <div className="text-center pt-8">
            <p className="text-accent-300 text-lg">
              ...and more industries including retail, manufacturing, e-commerce, insurance, telecommunications, and energy.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-surface-light section-padding">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white font-bold">Who Benefits from DeepVariance</h2>
            <p className="text-accent-300 text-lg">
              From startups to enterprises, DeepVariance makes ML accessible without hiring specialists
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-6 space-y-4">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white">Mid-Market Companies</h3>
              <p className="text-accent-300 leading-relaxed">
                Deploy production-ready ML models with your existing team. No consultants, no ML specialists, no multi-month projects.
              </p>
            </div>

            <div className="glass p-6 space-y-4">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-white">Data Teams</h3>
              <p className="text-accent-300 leading-relaxed">
                Accelerate model development by 10x. Spend time extracting insights, not wrestling with infrastructure and hyperparameters.
              </p>
            </div>

            <div className="glass p-6 space-y-4">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white">Startups</h3>
              <p className="text-accent-300 leading-relaxed">
                Build AI-powered products from day one. Get enterprise-grade ML capabilities without enterprise infrastructure costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot & Progress Section */}
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl text-white font-bold">Current Progress</h2>
            <p className="text-accent-300 text-lg max-w-2xl mx-auto">
              Actively testing with real-world datasets and enterprise partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass p-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">Live Pilot Programs</h3>
              <p className="text-accent-300 leading-relaxed">
                Currently deployed with organizations managing 10M-900M+ row datasets across consulting, software, and inventory-heavy sectors. Real results emerging from real-world applications.
              </p>
              <ul className="list-disc list-inside text-accent-300 space-y-2">
                <li>University operations: Parking and dining flow optimization</li>
                <li>Food service: 15-25% projected reduction in waste through demand forecasting</li>
                <li>Retail: Targeting 5-10% improvement in inventory availability</li>
              </ul>
            </div>

            <div className="glass p-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">Research Foundation</h3>
              <p className="text-accent-300 leading-relaxed">
                Our deep learning pipeline has been rigorously validated across medical imaging, financial transaction data, and retail datasets—demonstrating consistent performance advantages over traditional approaches.
              </p>
              <ul className="list-disc list-inside text-accent-300 space-y-2">
                <li>Multi-domain validation: healthcare, finance, retail, and more</li>
                <li>Proprietary sampling methodology backed by academic research</li>
                <li>$8K in grant funding for advanced compute infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Using new component */}
      <FAQSection />

      {/* CTA Section */}
      {/* <section className="bg-primary section-padding">
        <div className="container-custom text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white font-bold">Ready to Transform Your ML Workflow?</h2>
          <p className="text-accent-300 text-lg">
            Join companies already using DeepVariance to build predictive models faster and cheaper.
          </p>
          <a href="/contact#contact-form" className="btn-primary px-8 py-4 text-lg inline-block">
            Get Started
          </a>
        </div>
      </section> */}
    </>
  );
}
