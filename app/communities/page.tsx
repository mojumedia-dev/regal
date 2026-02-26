import Link from 'next/link';
import { getCommunities } from '@/lib/api';

export const metadata = {
  title: 'Communities | Regal Homes Utah',
  description: 'Explore our luxury communities in Mapleton, Ogden, and Heber City',
};

export default async function CommunitiesPage() {
  const communities = await getCommunities();

  // Group by city
  const groupedCommunities = communities.reduce((acc, community) => {
    const city = community.sales_office_city.split(',')[0].trim();
    if (!acc[city]) acc[city] = [];
    acc[city].push(community);
    return acc;
  }, {} as Record<string, typeof communities>);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="section-title">Our Communities</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Five distinctive communities across Utah's most desirable locations. 
            From Mapleton to Heber City, find your perfect place to call home.
          </p>
        </div>

        {/* Communities by City */}
        {Object.entries(groupedCommunities).map(([city, cityCommunities]) => (
          <div key={city} className="mb-16">
            <h2 className="text-3xl font-serif text-regal-navy mb-8 pb-2 border-b-2 border-regal-gold">
              {city}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityCommunities.map((community) => (
                <Link 
                  key={community.id} 
                  href={`/communities/${community.slug}`}
                  className="card group"
                >
                  <div className="h-64 bg-gradient-to-br from-regal-navy to-regal-gray-dark relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl font-serif text-regal-gold opacity-20 group-hover:opacity-30 transition-opacity">
                        {community.name[0]}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-serif text-white mb-2">{community.name}</h3>
                      <p className="text-gray-200">{community.sales_office_city}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-regal-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm text-gray-600">{community.sales_office_address}</span>
                      </div>

                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-regal-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-gray-600">{community.sales_office_hours}</span>
                      </div>

                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-regal-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${community.phone}`} className="text-sm text-regal-gold hover:text-regal-navy transition-colors">
                          {community.phone}
                        </a>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500 mb-1">Sales Manager</div>
                      <div className="font-medium text-regal-navy">{community.sales_manager_name}</div>
                    </div>

                    <div className="mt-4 text-regal-gold font-medium group-hover:text-regal-navy transition-colors">
                      View Community Details →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-16 text-center bg-regal-gray-light rounded-lg p-12">
          <h2 className="text-3xl font-serif text-regal-navy mb-4">
            Schedule a Visit
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience our communities in person. Contact us to schedule a private tour 
            and see why Regal Homes is Utah's premier home builder.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
