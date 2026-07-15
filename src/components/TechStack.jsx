import { motion } from 'framer-motion';
import {
  Brain,
  Layers,
  Code,
  Database,
  Cloud,
  FileText,
  Radio,
  Crown,
  Compass,
  Wrench
} from 'lucide-react';

import { techStack, techCategories } from '../data/techstack';
import SectionHeading from './SectionHeading';

const iconMap = {
  brain: Brain,
  layers: Layers,
  code: Code,
  database: Database,
  cloud: Cloud,
  fileText: FileText,
  radio: Radio
};

const levelConfig = {
  'Strategic Leadership': {
    icon: Crown,
    label: 'Strategic Leadership',
    badgeClass:
      'text-purple-700 dark:text-purple-300 bg-purple-500/10 border-purple-500/30',
    dotClass: 'bg-purple-500'
  },

  'Architecture & Design': {
    icon: Compass,
    label: 'Architecture & Design',
    badgeClass:
      'text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border-cyan-500/30',
    dotClass: 'bg-cyan-500'
  },

  'Hands-on Expertise': {
    icon: Wrench,
    label: 'Hands-on Expertise',
    badgeClass:
      'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
    dotClass: 'bg-emerald-500'
  }
};

const CapabilityBadge = ({ level }) => {
  const config = levelConfig[level];

  if (!config) {
    return (
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {level}
      </span>
    );
  }

  const LevelIcon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${config.badgeClass}`}
    >
      <LevelIcon className="w-3.5 h-3.5" />
      {config.label}
    </span>
  );
};

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="tech"
      className="section-padding bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Technology & Architecture Capabilities"
          subtitle="Strategic leadership, architecture depth, and hands-on expertise across AI, data, cloud, platforms, and emerging technologies"
        />

        {/* Capability level legend */}
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
            duration: 0.6
          }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {Object.entries(levelConfig).map(([level, config]) => {
            const LevelIcon = config.icon;

            return (
              <div
                key={level}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${config.badgeClass}`}
              >
                <LevelIcon className="w-4 h-4" />

                <span className="text-sm font-semibold">
                  {config.label}
                </span>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          className="space-y-8"
        >
          {techCategories.map((category, categoryIndex) => {
            const categoryData = techStack[category];
            const Icon = iconMap[categoryData.icon];

            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-6 md:p-8 border border-gray-200/20 dark:border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoryData.color} flex items-center justify-center flex-shrink-0`}
                  >
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                {/* Technologies Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryData.technologies.map((tech, techIndex) => {
                    const level = levelConfig[tech.level];

                    return (
                      <motion.div
                        key={tech.name}
                        initial={{
                          opacity: 0,
                          scale: 0.9
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          duration: 0.3,
                          delay:
                            categoryIndex * 0.05 +
                            techIndex * 0.03
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.02
                        }}
                        className="relative group"
                      >
                        <div className="h-full p-4 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 hover:border-accent-cyan/70 transition-all duration-300">
                          {/* Technology name */}
                          <div className="flex items-start gap-3 mb-4">
                            {level && (
                              <span
                                className={`w-2.5 h-2.5 mt-1.5 rounded-full flex-shrink-0 ${level.dotClass}`}
                              />
                            )}

                            <span className="font-semibold text-gray-900 dark:text-white leading-snug">
                              {tech.name}
                            </span>
                          </div>

                          {/* Capability badge */}
                          <CapabilityBadge level={tech.level} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Capability narrative */}
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
          className="mt-12 text-center"
        >
          <div className="glass-effect inline-block max-w-5xl px-8 py-6 rounded-2xl border border-accent-cyan/30">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold gradient-text">
                From emerging AI research to enterprise-scale architecture
              </span>
              {' '}— combining strategic technology leadership, architecture
              depth, and hands-on engineering expertise to turn innovation
              into scalable platforms and measurable business value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;