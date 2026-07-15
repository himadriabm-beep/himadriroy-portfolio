import { motion } from 'framer-motion';
import { Layers, Zap, Network, Rocket, Users, Settings } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
const services = [
{
icon: Layers,
title: 'Enterprise AI Architecture',
description: 'Defining enterprise AI reference architectures spanning LLMs, RAG, vector databases, knowledge graphs, AgentOps, and Responsible AI.'
},
{
icon: Network,
title: 'AI Transformation Strategy',
description: 'Shaping enterprise AI, GenAI, and Agentic AI strategies that turn emerging technology into scalable business capabilities.'
},
{
icon: Zap,
title: 'GenAI & Agentic AI',
description: 'Architecting multi-agent platforms, autonomous workflows, enterprise knowledge systems, and retrieval-augmented AI solutions.'
},
{
icon: Rocket,
title: 'Product & Platform Architecture',
description: 'Building reusable enterprise platforms and product architecture capabilities that accelerate delivery and reduce technology duplication.'
},
{
  icon: Users,
  title: 'AI Center of Excellence Leadership',
  description: 'Leading AI innovation, research, product and asset development, knowledge and context sharing, while accelerating AI adoption and value realization.'
},
{
icon: Settings,
title: 'AI-Assisted Engineering',
description: 'Driving AI-assisted software factories, platform engineering, observability, and SRE capabilities to improve engineering velocity and quality.'
}
];

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
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.5
}
}
};

return ( <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
{/* Background decoration */} <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" /> <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />


  <div className="container-custom relative z-10">
    <SectionHeading
      title="About Me"
      subtitle="Architecting enterprise AI. Building intelligent platforms. Transforming businesses."
    />

    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
      {/* Left: Story */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I am an <strong className="text-accent-cyan">AI Transformation Leader</strong> and
            <strong className="text-accent-purple"> Principal Product & Platform Architect</strong> with
            22+ years of experience turning emerging technologies into scalable enterprise capabilities
            and measurable business outcomes.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My journey spans <strong>Financial Services, Banking, Insurance, Supply Chain, and Enterprise Technology</strong>,
            where I have shaped AI, Data, Cloud, Product, and Platform strategies and partnered with
            senior technology and business leaders on large-scale transformation initiatives.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            From architecting <strong>enterprise Agentic AI platforms and multi-agent systems</strong> to
            establishing reusable AI capabilities, AI-assisted software factories, and enterprise
            reference architectures, I focus on moving innovation beyond experimentation and into
            secure, governed, production-scale business impact.
          </p>
        </div>
      </motion.div>

      {/* Right: Highlight stats */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="glass-effect p-6 rounded-2xl border border-accent-cyan/20">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Core Expertise
          </h3>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-accent-cyan mr-2">•</span>
              Enterprise AI, GenAI & Agentic AI Architecture
            </li>

            <li className="flex items-start">
              <span className="text-accent-cyan mr-2">•</span>
              LLMs, RAG, Vector Databases & Knowledge Graphs
            </li>

            <li className="flex items-start">
              <span className="text-accent-cyan mr-2">•</span>
              Multi-Agent Systems, Autonomous Workflows & AgentOps
            </li>

            <li className="flex items-start">
              <span className="text-accent-cyan mr-2">•</span>
              Product, Platform & Enterprise Architecture
            </li>

            <li className="flex items-start">
              <span className="text-accent-cyan mr-2">•</span>
              AI-Assisted Software Factory & Platform Engineering
            </li>

            <li className="flex items-start">
              <span className="text-accent-cyan mr-2">•</span>
              Responsible AI, AI Governance & Model Risk
            </li>

            <li className="flex items-start">
              <span className="text-accent-cyan mr-2">•</span>
              Azure, AWS & Enterprise Cloud Architecture
            </li>
          </ul>
        </div>

        <div className="glass-effect p-6 rounded-2xl border border-accent-purple/20">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Leadership Impact
          </h3>

          <p className="text-gray-700 dark:text-gray-300">
            Led global teams of <strong className="text-accent-purple">100+ architects, engineers,
            AI leads, and data scientists</strong>, enabled <strong>30+ AI products</strong>, and
            influenced <strong>$100M+ transformation and modernization investments</strong> across
            enterprise technology portfolios.
          </p>
        </div>
        <div className="glass-effect p-6 rounded-2xl border border-accent-cyan/20">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Leading the AI Center of Excellence
        </h3>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I lead the <strong className="text-accent-cyan">AI Center of Excellence</strong> for
          the service line, creating an ecosystem that connects innovation, research,
          engineering, and enterprise AI adoption.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          The CoE drives <strong>AI innovation and research</strong>, development of
          <strong> innovative products and reusable assets</strong>, knowledge and context
          sharing, and strategic initiatives focused on
          <strong> accelerating AI adoption and value realization</strong> across the service line.
        </p>
      </div>
      </motion.div>
    </div>

    {/* What I Do Section */}
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        What I Do
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-effect p-6 rounded-xl border border-gray-200/20 dark:border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-white" />
            </div>

            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {service.title}
            </h4>

            <p className="text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


);
};

export default About;
