import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Phone,
  Download,
  Users,
  Sparkles,
  Building2,
  Copy,
  Check
} from 'lucide-react';

import SectionHeading from './SectionHeading';

const Contact = () => {
  const email = 'himadri.abm@gmail.com';
  const phone = '+91 9886932227';

  const [openPopup, setOpenPopup] = useState(null);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenPopup(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/himadriroyprgmgr',
      color: 'hover:text-blue-500',
      type: 'link'
    },
    {
      name: 'Email',
      icon: Mail,
      value: email,
      color: 'hover:text-red-400',
      type: 'popup'
    },
    {
      name: 'Phone',
      icon: Phone,
      value: phone,
      color: 'hover:text-green-400',
      type: 'popup'
    }
  ];

  const conversationAreas = [
    {
      icon: Users,
      title: 'Program & Portfolio Management',
      description:
        'Large-scale, multi-country program delivery, PMO and CoE setup, and governance frameworks.'
    },
    {
      icon: Sparkles,
      title: 'AI-Led Business Transformation',
      description:
        'Driving AI adoption across business functions, from process digitization to measurable efficiency gains.'
    },
    {
      icon: Building2,
      title: 'GCC Operations & CXO Engagement',
      description:
        'Building delivery centres from the ground up, and partnering with senior leaders on strategic delivery outcomes.'
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
          subtitle="Open to conversations on program delivery, AI-led transformation, PMO leadership, and enterprise business outcomes"
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
              Turning Transformation into
              <span className="gradient-text"> Measurable Value</span>
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I enjoy connecting with business and technology leaders exploring
              how program delivery, PMO leadership, and AI-led transformation
              can move beyond isolated initiatives into scalable, measurable
              business outcomes.
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
                  Whether the conversation is about program delivery, PMO or
                  CoE setup, AI-led business transformation, or GCC operations,
                  feel free to connect.
                </p>

                <div ref={containerRef} className="flex flex-wrap gap-4 relative">
                  {socialLinks.map((link) => (
                    <div key={link.name} className="relative">
                      {link.type === 'link' ? (
                        <motion.a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
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
                      ) : (
                        <motion.button
                          onClick={() =>
                            setOpenPopup(openPopup === link.name ? null : link.name)
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
                        </motion.button>
                      )}

                      <AnimatePresence>
                        {openPopup === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-3 z-20 glass-effect border border-accent-cyan/30 rounded-xl px-4 py-3 flex items-center gap-3 whitespace-nowrap shadow-lg"
                          >
                            <span className="text-sm text-gray-200">
                              {link.value}
                            </span>
                            <button
                              onClick={() => handleCopy(link.value)}
                              className="text-accent-cyan hover:text-accent-purple transition-colors"
                              aria-label="Copy"
                            >
                              {copied ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="text-center md:text-right">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                  Professional Profile
                </p>

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-5">
                  Himadri Roy
                </h4>

                <p className="text-accent-cyan font-semibold mb-6">
                  Program Director | Delivery Lead
                  <br />
                  AI-Powered Business Transformation
                </p>

                {/* Download Resume Button */}
                <motion.a
                  href="./Himadri_Roy_CV.pdf"
                  download="Himadri_Roy_CV.pdf"
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