import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Zap, Network, Rocket, Users, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
const services = [
{
icon: Layers,
title: 'Program & Portfolio Management',
description: 'Leading large-scale, multi-country programs and portfolios — from planning and governance through to on-time, on-budget delivery.'
},
{
icon: Network,
title: 'AI-Led Business Transformation',
description: 'Driving AI adoption across business functions, from automating manual processes to digitizing internal applications using modern AI tools.'
},
{
icon: Zap,
title: 'PMO & CoE Setup',
description: 'Building Program Management Offices and Centers of Excellence from scratch, with governance frameworks that scale across countries and teams.'
},
{
icon: Rocket,
title: 'GCC / GBS Operations',
description: 'Standing up Global Capability Center operations from the ground up — including P&L ownership, workforce lifecycle, and vendor transitions.'
},
{
  icon: Users,
  title: 'CXO & Stakeholder Engagement',
  description: 'Partnering with senior business and technology leaders to align delivery priorities, investment decisions, and strategic outcomes.'
},
{
icon: Settings,
title: 'Governance & Compliance',
description: 'Leading structured delivery within CMMI, ITIL, and audit/compliance frameworks, including maturity transitions and quality standardization.'
}
];

const expertiseTags = [
  'Program & Portfolio Management',
  'BPO Governance & Partner Management',
  'GBS / GCC Operations',
  'Change Management',
  'AI-Led Transformation',
  'PMO Setup & Leadership',
  'CXO & Stakeholder Engagement',
  'P&L & Vendor Management'
];

const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, 5000);
  return () => clearInterval(timer);
}, [services.length]);

const goToPrev = () => {
  setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
};

const goToNext = () => {
  setActiveIndex((prev) => (prev + 1) % services.length);
};

const visibleServices = [
  services[activeIndex],
  services[(activeIndex + 1) % services.length]
];

return ( <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
{/* Background decoration */} <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" /> <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

  <div className="container-custom relative z-10">
    <SectionHeading
      title="About Me"
      subtitle="Driving large-scale transformation. Building PMOs from scratch. Leading with AI."
    />

    {/* Story - two columns, uses full width */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-6xl mx-auto mb-16 md:divide-x md:divide-dotted md:divide-gray-400 dark:md:divide-gray-600"
    >
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I am a <strong className="text-accent-cyan">Program Director</strong> and
        <strong className="text-accent-purple"> Delivery Lead</strong> with
        20+ years of experience driving large-scale business transformation, portfolio
        management, and AI-led process improvement across global consulting and industry
        environments. At EY, I lead transformation programs across <strong>6 countries</strong>,
        building PMOs and CoEs from scratch, engaging CXO-level stakeholders, and
        delivering measurable outcomes.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed md:pl-12">
        I automated manual reporting using AI — cutting errors by <strong>80%</strong> and
        effort by <strong>60%</strong> — digitized 5 internal applications for a
        <strong> $250,000 cumulative cost benefit</strong>, and earlier in my career built
        a delivery centre from scratch at Lenovo, recovering <strong>$200,000</strong> in
        billing errors and leading the team to win the <strong>Golden Peacock Award
        twice</strong>. I'm <strong>PMP, PRINCE2, and MSP certified</strong>.
      </p>
    </motion.div>

    {/* Expertise tag cloud - full width */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-wrap justify-center gap-3 mb-20 w-full"
    >
      {expertiseTags.map((tag) => (
        <span
          key={tag}
          className="px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-accent-cyan/30 bg-white/50 dark:bg-dark-700/50"
        >
          {tag}
        </span>
      ))}
    </motion.div>

    {/* What I Do Section - Carousel, 2 visible at a time */}
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        What I Do
      </motion.h3>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center gap-4">
          <button
            onClick={goToPrev}
            aria-label="Previous"
            className="hidden sm:flex w-10 h-10 rounded-full glass-effect border border-gray-200/20 dark:border-gray-700/30 items-center justify-center text-gray-600 dark:text-gray-300 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300 flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 min-h-[240px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {visibleServices.map((service, i) => (
                  <div
                    key={service.title}
                    className={`glass-effect p-6 rounded-2xl border text-center ${
                      i === 0
                        ? 'border-accent-cyan/50'
                        : 'border-gray-200/20 dark:border-gray-700/30'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center mb-5 mx-auto">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goToNext}
            aria-label="Next"
            className="hidden sm:flex w-10 h-10 rounded-full glass-effect border border-gray-200/20 dark:border-gray-700/30 items-center justify-center text-gray-600 dark:text-gray-300 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300 flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden justify-center gap-4 mt-6">
          <button
            onClick={goToPrev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full glass-effect border border-gray-200/20 dark:border-gray-700/30 flex items-center justify-center text-gray-600 dark:text-gray-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next"
            className="w-10 h-10 rounded-full glass-effect border border-gray-200/20 dark:border-gray-700/30 flex items-center justify-center text-gray-600 dark:text-gray-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-gradient-to-r from-accent-cyan to-accent-purple'
                  : 'w-2 bg-gray-300 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


);
};

export default About;