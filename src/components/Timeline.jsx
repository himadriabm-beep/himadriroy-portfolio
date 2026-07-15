import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  Briefcase
} from 'lucide-react';

import { timeline } from '../data/timeline';
import SectionHeading from './SectionHeading';

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Technology Leadership Journey"
          subtitle="Two decades of evolution from software engineering and analytics to enterprise architecture, platform transformation, and AI leadership"
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Main Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-cyan md:-translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={experience.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -50 : 50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1
                  }}
                  className="relative"
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-20">
                    <motion.div
                      whileHover={{
                        scale: 1.2
                      }}
                      className={`w-5 h-5 rounded-full border-4 border-white dark:border-dark-800 shadow-lg ${
                        experience.type === 'current'
                          ? 'bg-accent-cyan'
                          : 'bg-accent-purple'
                      }`}
                    />

                    {experience.type === 'current' && (
                      <motion.div
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.7, 0, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="absolute inset-0 rounded-full bg-accent-cyan -z-10"
                      />
                    )}
                  </div>

                  {/* Timeline Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isLeft
                        ? 'md:mr-auto md:pr-0'
                        : 'md:ml-auto md:pl-0'
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        y: -5
                      }}
                      transition={{
                        duration: 0.3
                      }}
                      className="glass-effect rounded-2xl p-6 md:p-8 border border-gray-200/20 dark:border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
                    >
                      {/* Period */}
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30">
                          <Calendar className="w-4 h-4 text-accent-cyan" />

                          <span className="text-sm font-semibold text-accent-cyan">
                            {experience.period}
                          </span>
                        </div>

                        {experience.type === 'current' && (
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Role */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                        {experience.role}
                      </h3>

                      {/* Company - Prominent Display */}
                      <div className="mb-5">
                        <div className="flex items-center gap-4">
                          <div className="w-1.5 h-12 rounded-full bg-gradient-to-b from-accent-cyan to-accent-purple flex-shrink-0" />

                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Briefcase className="w-5 h-5 text-accent-cyan" />

                              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                                Organisation
                              </span>
                            </div>

                            <div className="text-2xl md:text-3xl font-extrabold text-accent-cyan tracking-wide">
                                   {experience.company}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      {experience.location && (
                        <div className="flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4 text-accent-purple flex-shrink-0" />

                          <span className="text-sm font-medium">
                            {experience.location}
                          </span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-7">
                        {experience.description}
                      </p>

                      {/* Highlights */}
                      {experience.highlights &&
                        experience.highlights.length > 0 && (
                          <div className="mb-7">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-accent-cyan" />
                              Key Leadership & Contributions
                            </h4>

                            <ul className="space-y-3">
                              {experience.highlights.map(
                                (highlight, highlightIndex) => (
                                  <motion.li
                                    key={highlightIndex}
                                    initial={{
                                      opacity: 0,
                                      x: -10
                                    }}
                                    whileInView={{
                                      opacity: 1,
                                      x: 0
                                    }}
                                    viewport={{
                                      once: true
                                    }}
                                    transition={{
                                      duration: 0.3,
                                      delay: highlightIndex * 0.04
                                    }}
                                    className="flex items-start text-gray-700 dark:text-gray-300"
                                  >
                                    <span className="text-accent-cyan mr-3 mt-1 flex-shrink-0">
                                      •
                                    </span>

                                    <span className="leading-relaxed">
                                      {highlight}
                                    </span>
                                  </motion.li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                      {/* Achievements */}
                      {experience.achievements &&
                        experience.achievements.length > 0 && (
                          <div className="mb-7 p-5 rounded-xl bg-gradient-to-br from-accent-purple/5 to-accent-cyan/5 border border-accent-purple/20">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                              <Trophy className="w-5 h-5 text-accent-purple" />
                              Key Impact & Achievements
                            </h4>

                            <ul className="space-y-3">
                              {experience.achievements.map(
                                (achievement, achievementIndex) => (
                                  <li
                                    key={achievementIndex}
                                    className="flex items-start text-gray-700 dark:text-gray-300"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-accent-purple mr-3 mt-1 flex-shrink-0" />

                                    <span className="leading-relaxed">
                                      {achievement}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                      {/* Technologies */}
                      {experience.technologies &&
                        experience.technologies.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                              Technologies & Capabilities
                            </h4>

                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map(
                                (technology, technologyIndex) => (
                                  <motion.span
                                    key={technologyIndex}
                                    whileHover={{
                                      scale: 1.05,
                                      y: -2
                                    }}
                                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-accent-cyan/60 transition-colors duration-300"
                                  >
                                    {technology}
                                  </motion.span>
                                )
                              )}
                            </div>
                          </div>
                        )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Journey Summary */}
        <motion.div
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
            duration: 0.6,
            delay: 0.3
          }}
          className="mt-16 text-center"
        >
          <div className="glass-effect inline-block max-w-5xl px-8 py-6 rounded-2xl border border-accent-cyan/30">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold gradient-text">
                Engineering → Analytics & AI → Enterprise Architecture →
                Product & Platform Transformation → Enterprise AI Leadership
              </span>
              {' '}
              — a technology leadership journey focused on turning emerging
              innovation into scalable enterprise capabilities and measurable
              business value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;