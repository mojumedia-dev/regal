import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-regal-navy text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-regal-gold font-serif text-xl mb-4">Regal Homes Utah</h3>
            <p className="text-gray-300 leading-relaxed">
              Building premium semi-custom homes in Utah since 1993. 
              Experience the Regal difference with personalized service and exceptional craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-regal-gold font-serif text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/communities" className="text-gray-300 hover:text-regal-gold transition-colors">Communities</Link></li>
              <li><Link href="/floorplans" className="text-gray-300 hover:text-regal-gold transition-colors">Floor Plans</Link></li>
              <li><Link href="/process" className="text-gray-300 hover:text-regal-gold transition-colors">Our Process</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-regal-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-regal-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-regal-gold font-serif text-xl mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-2">Ready to build your dream home?</p>
            <a 
              href="tel:385-446-5524" 
              className="text-white hover:text-regal-gold transition-colors font-medium block mb-2"
            >
              385-446-5524
            </a>
            <a 
              href="https://www.regalut.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-regal-gold hover:text-regal-gold-light transition-colors"
            >
              www.regalut.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Regal Homes Utah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
