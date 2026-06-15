import { Link } from 'react-router-dom';
import { Wind, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-tight tracking-tight">
                  Pratap Sons
                </span>
                <span className="text-[10px] font-semibold text-primary-400 uppercase tracking-widest leading-tight">
                  Air Condition
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              Professional AC, geyser, and oil heater repair & installation services.
              Trusted by homeowners since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/services#ac-repair', label: 'AC Repair' },
                { to: '/services#geyser-repair', label: 'Geyser Repair' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@pratapsons.com" className="flex items-start gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  info@pratapsons.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Serving Greater Noida & Surrounding Areas
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Business Hours
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm text-neutral-400">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Monday – Sunday</p>
                  <p>8:00 AM – 9:00 PM</p>
                </div>
              </li>
              <li className="text-sm text-accent-400 font-medium mt-3">
                Emergency service available 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Pratap Sons Air Condition. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600">
            Professional AC & Geyser Services
          </p>
        </div>
      </div>
    </footer>
  );
}
