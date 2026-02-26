import Link from 'next/link';

export const metadata = {
  title: 'About Us | Regal Homes Utah',
  description: 'Building premium semi-custom homes in Utah since 1993. Learn about our 30+ year legacy of quality craftsmanship.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-regal-navy to-regal-gray-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Building Dreams Since 1993
            </h1>
            <p className="text-xl text-gray-200">
              Three decades of excellence in semi-custom home building across Utah
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-regal-navy mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                For over 30 years, Regal Homes has been synonymous with quality, craftsmanship, and 
                exceptional customer service in the Utah home building industry. Founded in 1993, we've 
                built our reputation one satisfied homeowner at a time.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                What sets us apart is our commitment to semi-custom home building. We believe that your 
                home should be as unique as you are. That's why we offer the flexibility to personalize 
                your home to match your lifestyle, preferences, and dreams—all while maintaining the 
                efficiency and quality of our proven floor plans.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Today, we proudly serve five distinctive communities across Utah, from the mountain views 
                of Mapleton to the lakeside luxury of Heber City. Each community reflects our dedication 
                to quality locations, thoughtful design, and the personal touch that has become our hallmark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-regal-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-regal-navy mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-regal-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-regal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-regal-navy mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on materials, craftsmanship, or attention to detail. 
                Your home is built to last generations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-regal-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-regal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-regal-navy mb-4">Service</h3>
              <p className="text-gray-600">
                From your first visit to move-in day and beyond, we're here to provide 
                the royal treatment every step of the way.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-regal-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-regal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-regal-navy mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our designs and processes to incorporate the latest 
                in home building technology and trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-regal-navy mb-12 text-center">Regal by the Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-serif text-regal-gold mb-2">30+</div>
              <div className="text-gray-600 font-medium">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-serif text-regal-gold mb-2">5</div>
              <div className="text-gray-600 font-medium">Communities</div>
            </div>
            <div>
              <div className="text-5xl font-serif text-regal-gold mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Homes Built</div>
            </div>
            <div>
              <div className="text-5xl font-serif text-regal-gold mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-regal-navy to-regal-gray-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">
            Ready to Experience the Regal Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners who've chosen Regal Homes for their dream home.
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
