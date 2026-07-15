import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center',
  gradient = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
        gradient ? 'gradient-text' : 'text-gray-900 dark:text-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
