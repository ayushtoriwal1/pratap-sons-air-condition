import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Wind,
  Droplets,
  Flame,
  Phone,
  ArrowRight,
  Wrench,
  ThermometerSun,
  Pipette,
  Recycle,
  AlertTriangle,
  Settings,
  ShieldCheck,
  Zap,
  ChevronRight,
} from 'lucide-react';

const acServices = [
  {
    id: 'ac-repair',
    icon: Wrench,
    title: 'AC Repair',
    desc: 'Expert diagnosis and repair for all AC types and brands.',
    items: [
      { icon: ThermometerSun, label: 'Cooling Issues', desc: 'AC not cooling properly or blowing warm air' },
      { icon: Droplets, label: 'Water Leakage', desc: 'Water dripping from indoor unit or drainage problems' },
      { icon: Zap, label: 'Compressor Problems', desc: 'Compressor not starting, overheating, or noisy operation' },
      { icon: AlertTriangle, label: 'Electrical Faults', desc: 'Tripping breakers, wiring issues, or PCB failures' },
      { icon: Wind, label: 'Noise Issues', desc: 'Unusual sounds from indoor or outdoor unit' },
    ],
  },
  {
    id: 'ac-installation',
    icon: Settings,
    title: 'AC Installation',
    desc: 'Professional installation for split and window AC units.',
    items: [
      { icon: Wind, label: 'Split AC Installation', desc: 'Wall-mounted split AC setup with proper piping and wiring' },
      { icon: Wind, label: 'Window AC Installation', desc: 'Window AC mounting with proper sealing and support' },
      { icon: ArrowRight, label: 'Reinstallation After Shifting', desc: 'Uninstall, transport, and reinstall when relocating' },
    ],
  },
  {
    id: 'ac-gas-filling',
    icon: Pipette,
    title: 'AC Gas Filling',
    desc: 'Refrigerant refilling and leak detection services.',
    items: [
      { icon: Pipette, label: 'Refrigerant Refilling', desc: 'R32, R410a, and R22 gas refilling by certified technicians' },
      { icon: AlertTriangle, label: 'Leak Detection', desc: 'Electronic leak detection to find and seal refrigerant leaks' },
      { icon: ThermometerSun, label: 'Cooling Performance Optimization', desc: 'Pressure testing and performance tuning for maximum efficiency' },
    ],
  },
  {
    id: 'ac-sale-purchase',
    icon: Recycle,
    title: 'Old AC Sale & Purchase',
    desc: 'Buy, sell, or exchange used AC units with assistance.',
    items: [
      { icon: ArrowRight, label: 'Buy Used AC Units', desc: 'Quality-checked pre-owned ACs at competitive prices' },
      { icon: Recycle, label: 'Sell Old AC Units', desc: 'Fair valuation and hassle-free pickup for your old AC' },
      { icon: Settings, label: 'AC Replacement Assistance', desc: 'End-to-end support for upgrading to a new AC unit' },
    ],
  },
];

const geyserServices = [
  {
    id: 'geyser-repair',
    icon: Wrench,
    title: 'Geyser Repair',
    desc: 'Reliable repair services for electric and gas geysers.',
    items: [
      { icon: Flame, label: 'Heating Problems', desc: 'Geyser not heating water or taking too long to heat' },
      { icon: ThermometerSun, label: 'Thermostat Issues', desc: 'Incorrect temperature regulation or thermostat failure' },
      { icon: Droplets, label: 'Leakage Repair', desc: 'Water leaking from tank, valves, or pipe connections' },
      { icon: Zap, label: 'Electrical Troubleshooting', desc: 'Power issues, short circuits, and element failures' },
    ],
  },
  {
    id: 'geyser-installation',
    icon: Settings,
    title: 'Geyser Installation',
    desc: 'Safe and compliant installation of all geyser types.',
    items: [
      { icon: Settings, label: 'New Geyser Installation', desc: 'Complete setup with plumbing and electrical connections' },
      { icon: Recycle, label: 'Replacement Installation', desc: 'Safe removal of old unit and installation of new geyser' },
      { icon: ShieldCheck, label: 'Safety Inspection', desc: 'Pressure relief valve, earthing, and connection safety check' },
    ],
  },
  {
    id: 'oil-heater',
    icon: Flame,
    title: 'Oil Heater Repair',
    desc: 'Specialized repair for oil-filled radiator heaters.',
    items: [
      { icon: Flame, label: 'Heating Element Issues', desc: 'Element not heating, partial heating, or overheating' },
      { icon: Zap, label: 'Wiring Problems', desc: 'Internal wiring faults, loose connections, and short circuits' },
      { icon: ThermometerSun, label: 'Thermostat Repair', desc: 'Temperature control malfunction or calibration issues' },
      { icon: Wrench, label: 'General Maintenance', desc: 'Cleaning, oil level check, and preventive service' },
    ],
  },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-50 border-b border-neutral-100">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">Our Services</p>
            <h1 className="heading-1 text-neutral-900 mb-4">
              AC, Geyser & Oil Heater Services
            </h1>
            <p className="text-body text-lg">
              Complete repair, installation, and maintenance solutions for all major appliance brands. Certified technicians, genuine parts, guaranteed work.
            </p>
          </div>
        </div>
      </section>

      {/* AC Services */}
      <section id="ac-services" className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
              <Wind className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="heading-2 text-neutral-900">Air Conditioner Services</h2>
              <p className="text-body-sm">Repair, installation, gas filling, and more for all AC types</p>
            </div>
          </div>
          <div className="space-y-12">
            {acServices.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="heading-3 text-neutral-900 mb-1">{service.title}</h3>
                    <p className="text-body-sm">{service.desc}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 sm:ml-14">
                  {service.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 p-4 rounded-lg border border-neutral-100 hover:border-neutral-200 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 mb-0.5">{item.label}</p>
                        <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geyser & Heating Services */}
      <section id="geyser-services" className="section-padding bg-neutral-50">
        <div className="container-max mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-accent-600" />
            </div>
            <div>
              <h2 className="heading-2 text-neutral-900">Geyser & Heating Services</h2>
              <p className="text-body-sm">Repair, installation, and maintenance for geysers and oil heaters</p>
            </div>
          </div>
          <div className="space-y-12">
            {geyserServices.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="heading-3 text-neutral-900 mb-1">{service.title}</h3>
                    <p className="text-body-sm">{service.desc}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 sm:ml-14">
                  {service.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 p-4 rounded-lg bg-white border border-neutral-100 hover:border-neutral-200 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 mb-0.5">{item.label}</p>
                        <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="heading-2 text-white mb-3">Need Service for Your Appliance?</h2>
          <p className="text-primary-100 mb-7 max-w-lg mx-auto">
            Get a free quote and same-day professional service. Our certified technicians are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors text-sm">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg border border-primary-500 hover:bg-primary-500 transition-colors text-sm">
              Get Free Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
