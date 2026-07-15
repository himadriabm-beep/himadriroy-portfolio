import { motion } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, AlertCircle } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="glass-effect max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-700/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 glass-effect border-b border-gray-700/30 p-6 flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-2">
              {project.title}
            </h2>
            {project.customer && (
              <div className="mb-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">Customer: </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {project.customer}
                </span>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Problem */}
          <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-900/30">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              Business Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-900/30">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-500" />
              Solution Approach
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 text-accent-cyan border border-accent-cyan/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Key Outcomes
            </h3>
            <div className="space-y-2">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
