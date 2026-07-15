import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Building2, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { customerStories } from '../data/stories';
import SectionHeading from './SectionHeading';

const CustomerStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section id="stories" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <SectionHeading
          title="AI & Technology Transformation Stories"
          subtitle="Transforming enterprises with AI-powered solutions that deliver real business value"
        />

        <div className="grid gap-6">
          {customerStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden border border-gray-200/20 dark:border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        {story.featured && (
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-purple/20 text-accent-purple mb-2">
                            Featured
                          </span>
                        )}
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {story.title}
                        </h3>
                        {story.customer && (
                          <p className="text-sm text-accent-cyan font-semibold mt-1">
                            {story.customer}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300">
                        {story.industry}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300">
                        {story.companySize}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300">
                        {story.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-red-500" />
                    Challenge
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {story.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent-cyan" />
                    Solution
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {story.solution}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Capabilities
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {story.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {story.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-sm bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 text-accent-cyan border border-accent-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 rounded-xl p-6 border border-accent-cyan/20">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Business Impact
                  </h4>
                  <div className="space-y-2 mb-4">
                    {story.impact.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    <strong className="text-gray-900 dark:text-white">Value Created: </strong>
                    {story.impact.businessValue}
                  </p>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedStory(story)}
                  className="mt-6 flex items-center gap-2 text-accent-cyan hover:text-accent-purple transition-colors duration-300 font-semibold"
                >
                  View Full Story
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStory(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-effect max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 border border-gray-700/30"
              >
                <h2 className="text-3xl font-bold gradient-text mb-6">
                  {selectedStory.title}
                </h2>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Outcomes</h3>
                    <p>{selectedStory.outcomes}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStory(null)}
                  className="mt-8 btn-primary"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CustomerStories;
