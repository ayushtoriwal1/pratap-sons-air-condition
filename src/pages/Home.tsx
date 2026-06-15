import { Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Clock,
  IndianRupee,
  Wrench,
  ThumbsUp,
  Award,
  Users,
  Zap,
  ChevronRight,
  Star,
  Thermometer,
  Droplets,
  Flame,
  Wind,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Headset,
  Truck,
} from 'lucide-react';
import { useState } from 'react';

const trustItems = [
  { icon: Users, label: 'Experienced Technicians', desc: 'Certified professionals with 10+ years of expertise' },
  { icon: Clock, label: 'Same-Day Service', desc: 'Quick response with same-day appointments' },
  { icon: IndianRupee, label: 'Affordable Pricing', desc: 'Transparent rates with no hidden charges' },
  { icon: Wrench, label: 'Genuine Spare Parts', desc: 'Original manufacturer-approved components' },
  { icon: ThumbsUp, label: 'Satisfaction Guarantee', desc: '100% customer satisfaction on every job' },
];

const serviceCards = [
  {
    icon: Wind,
    title: 'AC Services',
    desc: 'Repair, installation, gas filling, and maintenance for all AC types.',
    link: '/services#ac-services',
    color: 'primary',
  },
  {
    icon: Droplets,
    title: 'Geyser Services',
    desc: 'Repair, installation, and safety inspection for all geyser types.',
    link: '/services#geyser-services',
    color: 'accent',
  },
  {
    icon: Flame,
    title: 'Oil Heater Repair',
    desc: 'Heating element, thermostat, and wiring repair services.',
    link: '/services#oil-heater',
    color: 'primary',
  },
];

const whyChooseUs = [
  { icon: Award, title: 'Certified Technicians', desc: 'All technicians are trained and certified for appliance repair and installation.' },
  { icon: IndianRupee, title: 'Transparent Pricing', desc: 'Upfront quotes with no hidden fees. Know the cost before we start.' },
  { icon: Zap, title: 'Quick Response Time', desc: 'We arrive within 2 hours of your call for urgent repair needs.' },
  { icon: ShieldCheck, title: 'Quality Workmanship', desc: 'Every job backed by our satisfaction guarantee and warranty on parts.' },
  { icon: Truck, title: 'Local Service Coverage', desc: 'Serving Greater Noida, Noida, and surrounding areas with prompt service.' },
  { icon: Headset, title: '24/7 Emergency Support', desc: 'Round-the-clock emergency repair service when you need it most.' },
];

const processSteps = [
  { step: '01', title: 'Contact Us', desc: 'Call us or fill out the inquiry form to describe your service need.' },
  { step: '02', title: 'Schedule Visit', desc: 'We arrange a convenient time for our technician to visit your location.' },
  { step: '03', title: 'Inspection & Quote', desc: 'Our technician diagnoses the issue and provides a transparent cost estimate.' },
  { step: '04', title: 'Repair / Installation', desc: 'Professional service using genuine parts with careful workmanship.' },
  { step: '05', title: 'Service Completion', desc: 'Final testing, cleanup, and warranty documentation provided.' },
];

const testimonials = [
  { name: 'Rajesh Kumar', area: 'Greater Noida', text: 'Excellent AC repair service. The technician arrived within an hour and fixed the cooling issue perfectly. Very professional and reasonably priced.', rating: 5 },
  { name: 'Priya Sharma', area: 'Noida Sector 62', text: 'Got my geyser installed by Pratap Sons. Clean work, on time, and the price was exactly as quoted. Highly recommend their installation service.', rating: 5 },
  { name: 'Amit Verma', area: 'Crossing Republik', text: 'Called for an emergency AC gas refill in summer. They came the same day and the AC has been running perfectly since. Trustworthy team.', rating: 5 },
  { name: 'Sunita Devi', area: 'Indirapuram', text: 'Very professional oil heater repair. The technician explained the problem clearly and fixed it quickly. Fair pricing with genuine parts.', rating: 4 },
  { name: 'Vikram Singh', area: 'Vaishali', text: 'Had my old AC replaced with a new split AC. The installation was flawless and they even helped with the old unit disposal. Great experience.', rating: 5 },
  { name: 'Meena Agarwal', area: 'Greater Noida West', text: 'Regular customer for annual AC maintenance. Consistent quality every time. They remind me before the season starts which is very thoughtful.', rating: 5 },
];

const faqs = [
  {
    q: 'How quickly can you send a technician for AC repair?',
    a: 'We offer same-day service for most areas. In urgent cases, our technician can arrive within 2 hours of your call, subject to availability.',
  },
  {
    q: 'Do you provide a warranty on repair services?',
    a: 'Yes, all our repair services come with a 90-day warranty on labor and a manufacturer warranty on any genuine spare parts used.',
  },
  {
    q: 'What AC brands do you service?',
    a: 'We service all major brands including Daikin, Voltas, LG, Samsung, Carrier, Hitachi, Blue Star, O General, and more.',
  },
  {
    q: 'How much does AC gas filling cost?',
    a: 'AC gas filling starts from ₹1,500 depending on the refrigerant type (R32/R410a/R22) and the amount needed. We provide a quote after inspection.',
  },
  {
    q: 'Can you install a new geyser and remove the old one?',
    a: 'Absolutely. We handle complete geyser replacement including safe removal of the old unit, new installation, and safety inspection.',
  },
  {
    q: 'Do you offer annual maintenance contracts for ACs?',
    a: 'Yes, we offer comprehensive AMC plans that include periodic cleaning, gas checkup, and priority service. Contact us for detailed pricing.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, UPI (Google Pay, PhonePe, Paytm), bank transfer, and all major debit/credit cards.',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-neutral-50" />
        <div className="relative container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-28 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-md mb-6">
                <Thermometer className="w-3.5 h-3.5" />
                Trusted AC & Geyser Experts Since 2005
              </div>
              <h1 className="heading-1 text-neutral-900 mb-5">
                Professional AC & Geyser Repair & Installation Services
              </h1>
              <p className="text-body text-lg mb-8">
                Fast, reliable, and affordable repair, installation, maintenance, gas filling, and appliance services for homes and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+919876543210" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <Link to="/contact" className="btn-secondary">
                  <MessageSquare className="w-4 h-4" />
                  Get Free Quote
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Same-Day Service
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Genuine Parts
                </span>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden bg-neutral-200 aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/6461473/pexels-photo-6461473.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional AC technician performing repair service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/60 to-transparent p-6">
                  <p className="text-white text-sm font-medium">Professional appliance service you can trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST SECTION ===== */}
      <section className="bg-white border-y border-neutral-100">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {trustItems.map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-1">{item.label}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="heading-2 text-neutral-900 mb-4">Expert Appliance Services</h2>
            <p className="text-body max-w-2xl mx-auto">
              Comprehensive repair, installation, and maintenance services for air conditioners, geysers, and oil heaters.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className="group bg-white rounded-xl border border-neutral-200 p-6 hover:border-primary-300 hover:shadow-sm transition-all duration-150"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  card.color === 'primary' ? 'bg-primary-50' : 'bg-accent-50'
                }`}>
                  <card.icon className={`w-6 h-6 ${
                    card.color === 'primary' ? 'text-primary-600' : 'text-accent-600'
                  }`} />
                </div>
                <h3 className="heading-3 text-neutral-900 mb-2">{card.title}</h3>
                <p className="text-body-sm mb-4">{card.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all duration-150">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="heading-2 text-neutral-900 mb-4">The Pratap Sons Difference</h2>
            <p className="text-body max-w-2xl mx-auto">
              We deliver reliable, transparent, and professional service on every call.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-body-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE PROCESS ===== */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">How It Works</p>
            <h2 className="heading-2 text-neutral-900 mb-4">Our Service Process</h2>
            <p className="text-body max-w-2xl mx-auto">
              Simple, transparent, and hassle-free from your first call to service completion.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((item, idx) => (
              <div key={item.step} className="relative">
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px border-t border-dashed border-neutral-300 -translate-x-4" />
                )}
                <div className="text-xs font-bold text-primary-600 mb-2">{item.step}</div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">{item.title}</h3>
                <p className="text-body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="heading-2 text-neutral-900 mb-4">What Our Customers Say</h2>
            <p className="text-body max-w-2xl mx-auto">
              Real feedback from homeowners who trust us with their appliance service needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-200'}`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-neutral-700 mb-4">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="heading-2 text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-body max-w-2xl mx-auto">
              Quick answers to common questions about our AC and geyser services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-sm font-semibold text-neutral-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-150 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="pb-5">
                    <p className="text-sm leading-relaxed text-neutral-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-primary-700">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="heading-2 text-white mb-4">
            Need AC or Geyser Service Today?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Don't let appliance issues disrupt your comfort. Call us now for same-day professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-50 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call +91 98765 43210
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white font-semibold px-8 py-3.5 rounded-lg border border-primary-500 hover:bg-primary-500 transition-colors text-sm"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
