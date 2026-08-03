import { motion } from 'framer-motion';
import { Building2, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { customerStories } from '../data/stories';
import SectionHeading from './SectionHeading';

const CustomerStories = () => {
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;