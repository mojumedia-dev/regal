'use client';

import { useState, useRef } from 'react';
import { getBuyerFacingCategories, getTotalSelectedUpgrades } from '@/lib/design-center-data';

export default function DesignCenterPage() {
  const categories = getBuyerFacingCategories();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const filteredCategories = activeCategory
    ? categories.filter(c => c.id === activeCategory)
    : categories;

  const totalUpgrades = getTotalSelectedUpgrades();

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    setTimeout(() => {
      categoryRefs.current[categoryId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-regal-gray-light pb-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-regal-navy via-regal-navy to-regal-gray-dark text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Design Center
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Explore our curated selection of premium finishes and features. 
              From elegant exteriors to luxurious interiors, every detail is crafted 
              to bring your vision to life.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-regal-gold to-transparent"></div>
      </section>

      {/* Category Filter Bar */}
      <div className="sticky top-20 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all duration-200 flex-shrink-0 ${
                activeCategory === null
                  ? 'bg-regal-navy text-white shadow-lg'
                  : 'bg-white text-regal-navy border-2 border-gray-300 hover:border-regal-gold'
              }`}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all duration-200 flex items-center gap-2 flex-shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-regal-navy text-white shadow-lg'
                    : 'bg-white text-regal-navy border-2 border-gray-300 hover:border-regal-gold'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.displayName}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories and Selections */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {filteredCategories.map(category => (
          <section
            key={category.id}
            ref={el => { categoryRefs.current[category.id] = el; }}
            className="mb-12 scroll-mt-32"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <h2 className="text-3xl md:text-4xl font-serif text-regal-navy">
                {category.displayName}
              </h2>
            </div>

            {/* Selection Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.selections.map(selection => {
                const hasSelectedChoice = selection.choices.some(c => c.status === 'SELECTED');
                const selectedChoices = selection.choices.filter(c => c.status === 'SELECTED');
                const declinedChoices = selection.choices.filter(c => c.status === 'DECLINED');

                return (
                  <div
                    key={selection.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-regal-gold group"
                  >
                    <div className="p-6">
                      {/* Selection Title */}
                      <h3 className="text-xl font-serif text-regal-navy mb-1 group-hover:text-regal-gold transition-colors">
                        {selection.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">{selection.location}</p>

                      {/* Choices */}
                      <div className="space-y-3">
                        {/* Selected Choices */}
                        {selectedChoices.map((choice, idx) => (
                          <div
                            key={idx}
                            className="border-l-4 border-regal-gold pl-3 py-2 bg-regal-gold-light bg-opacity-10"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-regal-navy text-sm leading-tight break-words">
                                  {choice.name}
                                </p>
                              </div>
                              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                {choice.price === 0 ? (
                                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                                    Included
                                  </span>
                                ) : (
                                  <>
                                    <span className="px-2 py-1 bg-regal-gold text-regal-navy text-xs font-semibold rounded">
                                      Upgrade
                                    </span>
                                    <span className="text-sm font-bold text-regal-navy">
                                      {formatPrice(choice.price)}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* Declined Choices */}
                        {declinedChoices.map((choice, idx) => (
                          <div
                            key={`declined-${idx}`}
                            className="border-l-4 border-gray-300 pl-3 py-2 opacity-50"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <p className="text-gray-500 text-sm leading-tight line-through break-words">
                                  {choice.name}
                                </p>
                              </div>
                              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs font-semibold rounded">
                                  Declined
                                </span>
                                {choice.price > 0 && (
                                  <span className="text-sm text-gray-500 line-through">
                                    {formatPrice(choice.price)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Sticky Summary Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-regal-navy to-regal-gray-dark text-white shadow-2xl z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💎</span>
              <div>
                <p className="text-sm text-gray-300">Total Selected Upgrades</p>
                <p className="text-2xl md:text-3xl font-serif text-regal-gold font-bold">
                  {formatPrice(totalUpgrades)}
                </p>
              </div>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
