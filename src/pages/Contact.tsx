import { useState, type FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const serviceOptions = [
  'AC Repair',
  'AC Installation',
  'AC Gas Filling',
  'Old AC Sale/Purchase',
  'Geyser Repair',
  'Geyser Installation',
  'Oil Heater Repair',
  'Annual Maintenance',
  'Other',
];

interface FormData {
  name: string;
  phone: string;
  service: string;
  address: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    address: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-50 border-b border-neutral-100">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">Contact Us</p>
            <h1 className="heading-1 text-neutral-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-body text-lg">
              Request a free quote, schedule a service visit, or ask us anything about your AC, geyser, or heating appliance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12">
            {/* Left column - Contact details */}
            <div className="lg:col-span-2 mb-10 lg:mb-0">
              <h2 className="heading-3 text-neutral-900 mb-6">Contact Information</h2>

              <div className="space-y-5">
                <a href="tel:+919876543210" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">Phone</p>
                    <p className="text-sm text-neutral-500">+91 98765 43210</p>
                  </div>
                </a>

                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 group-hover:text-green-600 transition-colors">WhatsApp</p>
                    <p className="text-sm text-neutral-500">+91 98765 43210</p>
                  </div>
                </a>

                <a href="mailto:info@pratapsons.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">Email</p>
                    <p className="text-sm text-neutral-500">info@pratapsons.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Service Area</p>
                    <p className="text-sm text-neutral-500">Greater Noida, Noida, Crossing Republik, Indirapuram, Vaishali & surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Business Hours</p>
                    <p className="text-sm text-neutral-500">Monday – Sunday: 8:00 AM – 9:00 PM</p>
                    <p className="text-xs text-accent-600 font-medium mt-0.5">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl border border-neutral-200 overflow-hidden bg-neutral-100 aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-neutral-500">Google Maps</p>
                  <p className="text-xs text-neutral-400 mt-1">Map will be embedded here</p>
                </div>
              </div>
            </div>

            {/* Right column - Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 sm:p-8">
                <h2 className="heading-3 text-neutral-900 mb-1">Request a Free Quote</h2>
                <p className="text-body-sm mb-6">Fill out the form below and we'll get back to you within 30 minutes.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Thank You!</h3>
                    <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                      Your inquiry has been received. Our team will contact you shortly to confirm your service appointment.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', phone: '', service: '', address: '', message: '' });
                      }}
                      className="mt-6 btn-primary"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        required
                        value={form.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="address"
                        type="text"
                        required
                        value={form.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        placeholder="Your complete address"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Describe your issue or service requirement..."
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2 text-xs text-neutral-500">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>We'll respond within 30 minutes during business hours. For urgent needs, call us directly.</span>
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <Send className="w-4 h-4" />
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="heading-2 text-white mb-3">Prefer to Talk Directly?</h2>
          <p className="text-primary-100 mb-6 max-w-lg mx-auto">
            Call us now for immediate assistance. Our technicians are standing by.
          </p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-50 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            Call +91 98765 43210
          </a>
        </div>
      </section>
    </>
  );
}
