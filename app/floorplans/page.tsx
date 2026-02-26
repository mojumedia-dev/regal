'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Community, Plan, formatPrice, formatSqft } from '@/lib/api';

export default function FloorPlansPage() {
  const [communities, setCommunities] = useState<(Community & { plans: Plan[] })[]>([]);
  const [selectedCommunity, setSelectedCommunity] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://regal-homes-price-tool-production-0d02.up.railway.app';
        const res = await fetch(`${API_URL}/api/public/communities`);
        const comms: Community[] = await res.json();
        
        const commsWithPlans = await Promise.all(
          comms.map(async (comm) => {
            const detailRes = await fetch(`${API_URL}/api/public/communities/${comm.slug}`);
            const detail = await detailRes.json();
            return { ...comm, plans: detail.plans || [] };
          })
        );
        
        setCommunities(commsWithPlans);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching floor plans:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredCommunities = selectedCommunity === 'all' 
    ? communities 
    : communities.filter(c => c.slug === selectedCommunity);

  const allPlans = filteredCommunities.flatMap(c => 
    c.plans.map(p => ({ ...p, community: c }))
  );

  if (loading) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-regal-gold">Loading floor plans...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Floor Plans</h1>
          <p className="section-subtitle">
            Browse all available floor plans across our communities
          </p>
        </div>

        {/* Filter */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => setSelectedCommunity('all')}
              className={`px-6 py-3 font-medium transition-colors ${
                selectedCommunity === 'all'
                  ? 'bg-regal-gold text-regal-navy'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Communities
            </button>
            {communities.map((community) => (
              <button
                key={community.slug}
                onClick={() => setSelectedCommunity(community.slug)}
                className={`px-6 py-3 font-medium transition-colors border-l border-gray-200 ${
                  selectedCommunity === community.slug
                    ? 'bg-regal-gold text-regal-navy'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {community.name}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPlans.map((plan) => (
            <div key={`${plan.community.id}-${plan.id}`} className="card">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif text-regal-navy mb-1">{plan.name}</h3>
                    <Link 
                      href={`/communities/${plan.community.slug}`}
                      className="text-sm text-regal-gold hover:text-regal-navy transition-colors"
                    >
                      {plan.community.name} →
                    </Link>
                  </div>
                </div>
                
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

        {allPlans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No floor plans available for this community.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center bg-regal-navy text-white rounded-lg p-12">
          <h2 className="text-3xl font-serif mb-4">
            Customize Your Dream Home
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            All of our floor plans can be customized to fit your lifestyle. 
            Contact us to discuss personalization options.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
