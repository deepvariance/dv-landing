import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with DeepVariance Research Lab. Contact us for collaborations, partnerships, or inquiries.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to collaborate or have questions about our research? 
              We'd love to hear from you and explore potential partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Location & Directions */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Visit Our Lab
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of San Francisco's tech ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Interactive Map</h3>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  How to Find Us
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Public Transit</h4>
                      <p className="text-gray-600">
                        BART: Montgomery St Station (2 blocks)<br />
                        Muni: Lines 1, 14, 41 (nearby stops)<br />
                        Parking: Available in building garage
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visitor Information */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Planning a Visit?
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We welcome researchers, students, and industry professionals to visit our lab. 
                  Please schedule an appointment in advance to ensure someone is available to meet with you.
                </p>
                <button className="btn-primary text-sm">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Direct Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out directly to specific team members based on your inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Research Director",
                speciality: "Deep Learning & Neural Networks",
                email: "s.chen@deepvariance.org",
                phone: "+1 (555) 123-4567",
                availability: "Available for research collaborations and partnerships"
              },
              {
                name: "Dr. Michael Rodriguez",
                role: "Principal Scientist",
                speciality: "Computer Vision & AI Safety",
                email: "m.rodriguez@deepvariance.org",
                phone: "+1 (555) 123-4568",
                availability: "Available for technical consultations and media inquiries"
              },
              {
                name: "Dr. Emily Watson",
                role: "Lab Manager",
                speciality: "Operations & Partnerships",
                email: "e.watson@deepvariance.org",
                phone: "+1 (555) 123-4569",
                availability: "Available for administrative and partnership inquiries"
              }
            ].map((contact, index) => (
              <div 
                key={contact.name}
                className="card hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  {/* Avatar */}
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full 
                                flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{contact.name}</h3>
                    <p className="text-accent font-medium">{contact.role}</p>
                    <p className="text-gray-600 text-sm">{contact.speciality}</p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <a 
                      href={`mailto:${contact.email}`}
                      className="flex items-center justify-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{contact.email}</span>
                    </a>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="flex items-center justify-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">{contact.phone}</span>
                    </a>
                  </div>

                  {/* Availability */}
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-600">{contact.availability}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about working with our research lab.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How can I collaborate with your research team?",
                answer: "We welcome collaborations with academic institutions, industry partners, and fellow researchers. Please reach out with details about your research interests and proposed collaboration."
              },
              {
                question: "Do you offer internship opportunities?",
                answer: "Yes, we offer research internships for graduate students and exceptional undergraduates. Internship applications are typically reviewed twice a year."
              },
              {
                question: "Can I visit your laboratory?",
                answer: "We encourage visits from researchers and students. Please schedule an appointment in advance through our contact form or by emailing our lab manager."
              },
              {
                question: "How do I cite your research?",
                answer: "Please refer to our publications page for proper citation formats. Each paper includes the recommended citation and DOI information."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}