import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Brain,
  Network,
  Layers3
} from 'lucide-react';

import SectionHeading from './SectionHeading';

const Contact = () => {
  // CHANGE ONLY THIS EMAIL TO YOUR ACTUAL PUBLIC EMAIL
  const email = 'nihar.kanungo@gmail.com';

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/nihar-kanungo-5a923775/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/nkanungo',
      color: 'hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${email}`,
      color: 'hover:text-red-400'
    }
  ];

  const conversationAreas = [
    {
      icon: Brain,
      title: 'Enterprise AI & Agentic AI',
      description:
        'AI transformation, Generative AI, multi-agent systems, Agent Factories, and enterprise AI adoption.'
    },
    {
      icon: Layers3,
      title: 'Product & Platform Architecture',
      description:
        'Enterprise architecture, reusable platforms, product architecture, and technology portfolio transformation.'
    },
    {
      icon: Network,
      title: 'AI Innovation & Emerging Technology',
      description:
        'AI Centers of Excellence, reinforcement learning, knowledge systems, intelligent platforms, and emerging technology research.'
    }
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-dark-900 via-indigo-950 to-dark-900 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated Cyan Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
      />

      {/* Animated Purple Orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Let's Connect"
          subtitle="Open to conversations on Enterprise AI, Agentic AI, AI transformation, product and platform architecture, and emerging technology innovation"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Introduction */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Turning Emerging Technology into
              <span className="gradient-text"> Enterprise Value</span>
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I enjoy connecting with technology leaders, architects,
              engineers, researchers, and innovators exploring how AI and
              emerging technologies can move beyond experimentation into
              scalable enterprise capabilities and measurable business
              outcomes.
            </p>
          </div>

          {/* Conversation Areas */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {conversationAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02
                  }}
                  className="glass-effect p-6 rounded-2xl border border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center mb-5 mx-auto">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-white text-center mb-3">
                    {area.title}
                  </h4>

                  <p className="text-gray-400 text-center leading-relaxed text-sm">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Connection Panel */}
          <div className="glass-effect rounded-2xl border border-accent-cyan/30 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Connect With Me
                </h4>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Whether the conversation is about enterprise AI strategy,
                  Agentic AI, AI Centers of Excellence, intelligent platforms,
                  architecture transformation, or emerging technology, feel
                  free to connect.
                </p>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target={link.name === 'Email' ? undefined : '_blank'}
                      rel={
                        link.name === 'Email'
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      whileHover={{
                        scale: 1.08,
                        y: -3
                      }}
                      whileTap={{
                        scale: 0.95
                      }}
                      className={`w-14 h-14 rounded-xl glass-effect border border-gray-700/50 flex items-center justify-center text-gray-300 ${link.color} hover:border-accent-cyan/50 transition-all duration-300`}
                      aria-label={link.name}
                      title={link.name}
                    >
                      <link.icon className="w-7 h-7" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="text-center md:text-right">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                  Professional Profile
                </p>

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-5">
                  Nihar Kanungo
                </h4>

                <p className="text-accent-cyan font-semibold mb-6">
                  AI Transformation Leader
                  <br />
                  Principal Product & Platform Architect
                </p>

                {/* Download Resume Button */}
                <motion.a
                  href="/ai-portfolio/resume.pdf"
                  download="Nihar_Kanungo_Resume.pdf"
                  whileHover={{
                    scale: 1.05
                  }}
                  whileTap={{
                    scale: 0.95
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-accent-cyan to-accent-purple hover:shadow-lg hover:shadow-accent-cyan/50 text-white"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;