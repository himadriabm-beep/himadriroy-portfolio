import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Rocket, Building2, Target, Zap, ShieldCheck } from 'lucide-react';
import { metrics } from '../data/metrics';

const iconMap = {
  users: Users,
  rocket: Rocket,
  building: Building2,
  target: Target,
  zap: Zap,
  shield: ShieldCheck,
};

const AnimatedCounter = ({ value, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const Metrics = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="metrics" className="section-padding relative overflow-hidden bg-gradient-to-br from-dark-900 via-indigo-950 to-dark-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Impact & Leadership
          </h2>
          <p className="text-xl text-gray-300">
            Driving large-scale program delivery and AI-led transformation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {metrics.map((metric) => {
            const Icon = iconMap[metric.icon];
            return (
              <motion.div
                key={metric.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.3 }
                }}
                className="glass-effect p-5 rounded-2xl border border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300 text-center group"
              >
                <div className="mb-3 flex justify-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <AnimatedCounter 
                  value={metric.value} 
                  suffix={metric.suffix}
                />
                
                <h3 className="text-base font-semibold text-white mt-3 mb-1">
                  {metric.label}
                </h3>
                
                <p className="text-gray-400 text-xs leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect inline-block px-8 py-4 rounded-full">
            <p className="text-gray-300">
              <span className="font-semibold text-accent-cyan">Proven leadership</span> in
              Program Management, AI-Led Transformation, and PMO Leadership at scale
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;