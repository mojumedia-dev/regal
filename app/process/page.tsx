import Link from 'next/link';

export const metadata = {
  title: 'Our Process | Regal Homes Utah',
  description: 'Learn about our 4-step home buying process and what to expect when building with Regal Homes.',
};

export default function ProcessPage() {
  const steps = [
    {
      number: 1,
      title: 'Discover Your Community',
      description: 'Visit our communities and model homes. Explore the neighborhoods, amenities, and available homesites. Meet with our knowledgeable sales managers who will guide you through the process.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      ),
    },
    {
      number: 2,
      title: 'Select Your Plan & Homesite',
      description: 'Choose from our collection of thoughtfully designed floor plans. Select the perfect homesite for your future home. Review customization options to personalize your space.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      ),
    },
    {
      number: 3,
      title: 'Design Your Dream Home',
      description: 'Work with our design team to customize finishes, fixtures, and features. Visit our design center to select colors, materials, and upgrades. Finalize your home specifications and pricing.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      ),
    },
    {
      number: 4,
      title: 'Build & Move In',
      description: 'Construction begins on your custom home. Receive regular updates throughout the building process. Complete final walkthrough and inspection. Receive your keys and move into your dream home!',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      ),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-regal-navy to-regal-gray-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Your Journey to Home Ownership
            </h1>
            <p className="text-xl text-gray-200">
              Building your dream home should be exciting, not stressful. 
              Our proven 4-step process makes it simple.
            </p>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-full bg-regal-gold-light -z-10 hidden md:block" />
                )}

                <div className="grid md:grid-cols-[100px_1fr] gap-6 mb-16">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-regal-gold rounded-full flex items-center justify-center text-regal-navy text-2xl font-serif font-bold mb-4">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-regal-navy rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-regal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {step.icon}
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                    <h3 className="text-3xl font-serif text-regal-navy mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-regal-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-regal-navy mb-6">Typical Timeline</h2>
            <p className="text-gray-600 mb-12">
              While each home is unique, here's what you can generally expect:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-serif text-regal-gold mb-2">1-2</div>
                <div className="text-sm text-gray-500 mb-2">WEEKS</div>
                <div className="font-medium text-regal-navy mb-2">Design & Planning</div>
                <p className="text-sm text-gray-600">
                  Select your plan, homesite, and finalize customizations
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-serif text-regal-gold mb-2">4-6</div>
                <div className="text-sm text-gray-500 mb-2">MONTHS</div>
                <div className="font-medium text-regal-navy mb-2">Construction</div>
                <p className="text-sm text-gray-600">
                  Your home is built with quality craftsmanship and care
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-serif text-regal-gold mb-2">1</div>
                <div className="text-sm text-gray-500 mb-2">DAY</div>
                <div className="font-medium text-regal-navy mb-2">Move-In</div>
                <p className="text-sm text-gray-600">
                  Final walkthrough, closing, and keys to your dream home
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-regal-navy mb-12 text-center">
              What Sets Us Apart
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-regal-gold rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-regal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-regal-navy mb-2">Transparent Communication</h3>
                  <p className="text-gray-600">
                    Regular updates throughout the entire process. You'll always know exactly where things stand.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-regal-gold rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-regal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-regal-navy mb-2">Dedicated Sales Managers</h3>
                  <p className="text-gray-600">
                    Each community has an experienced sales manager who will guide you personally from start to finish.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-regal-gold rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-regal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-regal-navy mb-2">Quality Guaranteed</h3>
                  <p className="text-gray-600">
                    We stand behind our work with comprehensive warranties and ongoing support.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-regal-gold rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-regal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-regal-navy mb-2">Semi-Custom Flexibility</h3>
                  <p className="text-gray-600">
                    Personalize your home to match your lifestyle without the complexity and cost of full custom building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-regal-navy to-regal-gray-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Take the first step toward your dream home. Schedule a visit to one of our communities today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/communities" className="btn-primary">
              View Communities
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
