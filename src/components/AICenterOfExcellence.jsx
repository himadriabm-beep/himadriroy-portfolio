import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Lightbulb,
  Boxes,
  Share2,
  Rocket,
  TrendingUp
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const AICenterOfExcellence = () => {
  const FlowLine = ({ className = '', delay = 0 }) => (
    <div className={`absolute overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay }}
        className="w-full h-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan origin-left"
      />
    </div>
  );

  const CapabilityCard = ({
    icon: Icon,
    title,
    description,
    delay = 0
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-effect p-5 rounded-2xl border border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300 text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );

  return (
    <section
      id="ai-coe"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-dark-900 via-indigo-950 to-dark-900"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-cyan/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="AI Center of Excellence"
          subtitle="From AI innovation and research to enterprise adoption and measurable value realization"
        />

        {/* Desktop ecosystem visualization */}
        <div className="hidden lg:block max-w-6xl mx-auto">

          {/* Research + Innovation */}
          <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
            <CapabilityCard
              icon={BrainCircuit}
              title="AI Research"
              description="Emerging AI · Experimentation · Technology Exploration"
              delay={0.1}
            />

            <CapabilityCard
              icon={Lightbulb}
              title="Innovation"
              description="Ideas · Hackathons · Strategic AI Use Cases"
              delay={0.2}
            />
          </div>

          {/* Down flow */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-px bg-gradient-to-b from-accent-cyan to-accent-purple"
            />
          </div>

          {/* AI CoE Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: 'spring'
            }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-full blur-2xl"
              />

              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 211, 238, 0.3)',
                    '0 0 55px rgba(168, 85, 247, 0.6)',
                    '0 0 20px rgba(34, 211, 238, 0.3)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="relative w-72 h-72 rounded-full bg-dark-900 border-2 border-accent-cyan/60 flex flex-col items-center justify-center text-center p-8"
              >
                <BrainCircuit className="w-14 h-14 text-accent-cyan mb-4" />

                <h3 className="text-2xl font-bold text-white mb-2">
                  AI Center of Excellence
                </h3>

                <p className="gradient-text font-semibold tracking-widest">
                  INNOVATE · BUILD · SCALE
                </p>

                <p className="text-gray-400 text-sm mt-4">
                  Connecting research, innovation, engineering,
                  knowledge, and AI adoption
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Down flow */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-px bg-gradient-to-b from-accent-purple to-accent-cyan"
            />
          </div>

          {/* Products + Knowledge */}
          <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
            <CapabilityCard
              icon={Boxes}
              title="Products & Assets"
              description="AI Products · Reusable Assets · Reference Patterns"
              delay={0.1}
            />

            <CapabilityCard
              icon={Share2}
              title="Knowledge & Context"
              description="Knowledge Sharing · Context Sharing · Capability Building"
              delay={0.2}
            />
          </div>

          {/* Adoption flow */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-px bg-gradient-to-b from-accent-cyan to-accent-purple"
            />
          </div>

          {/* AI Adoption */}
          <div className="max-w-md mx-auto mb-8">
            <CapabilityCard
              icon={Rocket}
              title="AI Adoption"
              description="Enterprise Enablement · Capability Adoption · Scaling AI Across the Organization"
              delay={0.1}
            />
          </div>

          {/* Final flow */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-px bg-gradient-to-b from-accent-purple to-accent-cyan"
            />
          </div>

          {/* Value realization */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative glass-effect rounded-2xl border border-accent-purple/40 p-8 text-center overflow-hidden">
              <motion.div
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent"
              />

              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-3xl font-bold gradient-text mb-4">
                Accelerating AI Adoption & Value Realization
              </h3>

              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Turning AI innovation, research, products, reusable assets,
                knowledge, and context into scalable enterprise capabilities
                and measurable business outcomes.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile / tablet layout */}
        <div className="lg:hidden space-y-6">
          <CapabilityCard
            icon={BrainCircuit}
            title="AI Research"
            description="Emerging AI · Experimentation · Technology Exploration"
          />

          <CapabilityCard
            icon={Lightbulb}
            title="Innovation"
            description="Ideas · Hackathons · Strategic AI Use Cases"
          />

          <div className="flex justify-center">
            <div className="w-px h-10 bg-gradient-to-b from-accent-cyan to-accent-purple" />
          </div>

          <div className="glass-effect p-8 rounded-2xl border border-accent-cyan/50 text-center">
            <BrainCircuit className="w-12 h-12 text-accent-cyan mx-auto mb-4" />

            <h3 className="text-2xl font-bold text-white mb-2">
              AI Center of Excellence
            </h3>

            <p className="gradient-text font-semibold">
              INNOVATE · BUILD · SCALE
            </p>
          </div>

          <CapabilityCard
            icon={Boxes}
            title="Products & Assets"
            description="AI Products · Reusable Assets · Reference Patterns"
          />

          <CapabilityCard
            icon={Share2}
            title="Knowledge & Context"
            description="Knowledge Sharing · Context Sharing · Capability Building"
          />

          <CapabilityCard
            icon={Rocket}
            title="AI Adoption"
            description="Enterprise Enablement · Capability Adoption · Scaling AI"
          />

          <div className="glass-effect p-8 rounded-2xl border border-accent-purple/40 text-center">
            <TrendingUp className="w-12 h-12 text-accent-purple mx-auto mb-4" />

            <h3 className="text-2xl font-bold gradient-text mb-3">
              Accelerating AI Adoption & Value Realization
            </h3>

            <p className="text-gray-300">
              Turning AI innovation into scalable enterprise capabilities
              and measurable business outcomes.
            </p>
          </div>
        </div>

        {/* Leadership statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-gray-400 mt-12 max-w-4xl mx-auto leading-relaxed"
        >
          I lead the AI Center of Excellence for the service line, creating
          an innovation ecosystem that brings together AI research, emerging
          technology exploration, innovative product and asset development,
          knowledge and context sharing, and enterprise AI adoption.
        </motion.p>
      </div>
    </section>
  );
};

export default AICenterOfExcellence;