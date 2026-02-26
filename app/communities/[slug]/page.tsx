import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCommunity, formatPrice, formatSqft } from '@/lib/api';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const community = await getCommunity(params.slug);
  if (!community) return { title: 'Community Not Found' };
  
  return {
    title: `${community.name} | Regal Homes Utah`,
    description: `Explore ${community.name} in ${community.sales_office_city}. View floor plans, available homes, and homesites.`,
  };
}

export default async function CommunityDetailPage({ params }: { params: { slug: string } }) {
  const community = await getCommunity(params.slug);
  
  if (!community) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-regal-navy to-regal-gray-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">{community.name}</h1>
            <p className="text-xl text-gray-200 mb-6">{community.sales_office_city}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-regal-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{community.sales_office_address}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-regal-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{community.sales_office_hours}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-regal-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${community.phone}`} className="text-regal-gold hover:text-regal-gold-light">
                  {community.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      {community.plans.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-regal-navy mb-8">Floor Plans</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {community.plans.map((plan) => (
                <div key={plan.id} className="card">
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-regal-navy mb-4">{plan.name}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Sq Ft:</span>
                        <span className="font-medium">{formatSqft(plan.total_sqft)}</span>
                      </div>
                      {plan.finished_sqft_range && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Finished Sq Ft:</span>
                          <span className="font-medium">{plan.finished_sqft_range}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Bedrooms:</span>
                        <span className="font-medium">{plan.beds_range}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Bathrooms:</span>
                        <span className="font-medium">{plan.baths_range}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Garage:</span>
                        <span className="font-medium">{plan.garage_range} car</span>
                      </div>
                      {plan.floors && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Stories:</span>
                          <span className="font-medium">{plan.floors}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500 mb-1">Base Price</div>
                      <div className="text-2xl font-serif text-regal-gold">
                        {formatPrice(plan.base_price)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Available Homes */}
      {community.availableHomes.length > 0 && (
        <section className="py-20 bg-regal-gray-light">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-regal-navy mb-8">Available Homes</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-regal-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Plan</th>
                    <th className="px-4 py-3 text-left">Address</th>
                    <th className="px-4 py-3 text-center hidden md:table-cell">Sq Ft</th>
                    <th className="px-4 py-3 text-center hidden md:table-cell">Bed/Bath</th>
                    <th className="px-4 py-3 text-center hidden lg:table-cell">Garage</th>
                    <th className="px-4 py-3 text-center hidden lg:table-cell">Move-In</th>
                    <th className="px-4 py-3 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {community.availableHomes.map((home) => (
                    <tr key={home.id} className="border-b border-gray-200 hover:bg-regal-gray-light transition-colors">
                      <td className="px-4 py-4 font-medium text-regal-navy">{home.plan_name}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{home.address}</td>
                      <td className="px-4 py-4 text-center text-sm hidden md:table-cell">{formatSqft(home.total_sqft)}</td>
                      <td className="px-4 py-4 text-center text-sm hidden md:table-cell">{home.beds}/{home.baths}</td>
                      <td className="px-4 py-4 text-center text-sm hidden lg:table-cell">{home.garage}</td>
                      <td className="px-4 py-4 text-center text-sm hidden lg:table-cell">{home.est_move_in}</td>
                      <td className="px-4 py-4 text-right font-semibold text-regal-gold">{formatPrice(home.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Homesites */}
      {community.homesites.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-regal-navy mb-8">Available Homesites</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-regal-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Lot #</th>
                    <th className="px-4 py-3 text-left hidden md:table-cell">Address</th>
                    <th className="px-4 py-3 text-center hidden lg:table-cell">Direction</th>
                    <th className="px-4 py-3 text-center hidden md:table-cell">Sq Ft</th>
                    <th className="px-4 py-3 text-right">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {community.homesites.map((lot) => (
                    <tr key={lot.id} className="border-b border-gray-200 hover:bg-regal-gray-light transition-colors">
                      <td className="px-4 py-4 font-medium text-regal-navy">{lot.lot_number}</td>
                      <td className="px-4 py-4 text-sm text-gray-600 hidden md:table-cell">{lot.address || 'TBD'}</td>
                      <td className="px-4 py-4 text-center text-sm hidden lg:table-cell">{lot.front_facing_direction}</td>
                      <td className="px-4 py-4 text-center text-sm hidden md:table-cell">{lot.sqft ? formatSqft(lot.sqft) : 'N/A'}</td>
                      <td className="px-4 py-4 text-right font-semibold text-regal-gold">{formatPrice(lot.premium_price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-regal-navy to-regal-gray-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-4">Visit {community.name}</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a tour and discover why {community.name} is the perfect place for your dream home.
          </p>
          
          <div className="bg-white/10 rounded-lg p-8 max-w-md mx-auto mb-8">
            <div className="text-lg font-medium text-regal-gold mb-4">Contact Your Sales Manager</div>
            <div className="text-2xl font-serif mb-2">{community.sales_manager_name}</div>
            <a href={`tel:${community.sales_manager_phone}`} className="text-regal-gold hover:text-regal-gold-light text-lg block mb-2">
              {community.sales_manager_phone}
            </a>
            <a href={`mailto:${community.sales_manager_email}`} className="text-gray-300 hover:text-white text-sm">
              {community.sales_manager_email}
            </a>
          </div>

          <Link href="/contact" className="btn-primary">
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
