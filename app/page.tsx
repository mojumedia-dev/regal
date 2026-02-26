import Link from 'next/link';
import { getCommunities, getStats } from '@/lib/api';

export default async function HomePage() {
  const communities = await getCommunities();
  const stats = await getStats();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-regal-navy via-regal-navy to-regal-gray-dark text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Experience the <span className="text-regal-gold">Regal</span> Difference
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Building premium semi-custom homes in Utah since 1993. 
              Your dream home awaits in our exclusive communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/communities" className="btn-primary text-center">
                Explore Communities
              </Link>
              <Link href="/floorplans" className="btn-secondary text-center">
                View Floor Plans
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-regal-gold to-transparent"></div>
      </section>

      {/* Stats Section */}
      {stats && (
        <section className="py-16 bg-regal-gray-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-serif text-regal-gold mb-2">{stats.totalCommunities}</div>
                <div className="text-gray-600 font-medium">Communities</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif text-regal-gold mb-2">{stats.totalPlans}</div>
                <div className="text-gray-600 font-medium">Floor Plans</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif text-regal-gold mb-2">{stats.totalHomesAvailable}</div>
                <div className="text-gray-600 font-medium">Homes Available</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif text-regal-gold mb-2">30+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Communities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Communities</h2>
            <p className="section-subtitle">
              Discover your perfect location across Utah's most desirable areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community) => (
              <Link 
                key={community.id} 
                href={`/communities/${community.slug}`}
                className="card group"
              >
                <div className="h-64 bg-gradient-to-br from-regal-navy to-regal-gray-dark relative overflow-hidden">
                  {/* Placeholder for community image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-serif text-regal-gold opacity-20 group-hover:opacity-30 transition-opacity">
                      {community.name[0]}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-serif text-white mb-2">{community.name}</h3>
                    <p className="text-gray-200 text-sm">{community.sales_office_city}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {community.sales_office_hours}
                  </p>
                  <div className="text-regal-gold font-medium group-hover:text-regal-navy transition-colors">
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/communities" className="btn-primary">
              View All Communities
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Regal */}
      <section className="py-20 bg-regal-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Why Choose Regal Homes</h2>
            <p className="text-xl text-gray-300">The Royal treatment for your dream home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-regal-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-regal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-regal-gold mb-2">30+ Years Experience</h3>
              <p className="text-gray-300">Three decades of building premium homes in Utah</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-regal-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-regal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-regal-gold mb-2">Semi-Custom Design</h3>
              <p className="text-gray-300">Personalize your home to match your lifestyle</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-regal-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-regal-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-regal-gold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-300">Exceptional attention to detail in every home</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-regal-gold-light to-regal-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-regal-navy mb-6">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl text-regal-gray-dark mb-8 max-w-2xl mx-auto">
            Schedule a visit to one of our communities and experience the Regal difference firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Contact Us Today
            </Link>
            <Link href="/process" className="btn-primary">
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
