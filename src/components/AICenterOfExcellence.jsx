import { motion } from 'framer-motion';
import {
  Compass,
  Users,
  Layers,
  ShieldCheck,
  GraduationCap,
  Rocket,
  BrainCircuit,
  ClipboardList,
  BarChart3,
  Network,
  Wrench,
  Target,
  Mic
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const AICenterOfExcellence = () => {
  const aiInitiatives = [
    {
      icon: Compass,
      title: 'AI CoE Objective & Framework',
      description:
        'Defined the objective and framework for the AI CoE, and how it navigates Consulting through massive change using the ADKAR change management model.'
    },
    {
      icon: Users,
      title: 'Future of Program Roles',
      description:
        'Mapped Scrum Master, PM, Program Manager, and RTE roles against a forward-looking AI operating model, grounded in the WEF 2026 report.'
    },
    {
      icon: Layers,
      title: '6-Stage AI Operating Model',
      description:
        'Co-designed a 6-stage AI Operating Model, from which a layered POD structure was built — Portfolio to POD, supported by Shared Services.'
    },
    {
      icon: ShieldCheck,
      title: 'AI-Native Governance Model',
      description:
        'Designed an AI-native governance model based on COBIT, drawing on inputs from multiple sources as part of the AI CoE governance committee.'
    },
    {
      icon: GraduationCap,
      title: 'AI Literacy Campaign',
      description:
        'Designed a role-based AI Literacy campaign so every team member understands Data, Models, Business Decisions & Impact, and AI itself.'
    },
    {
      icon: Rocket,
      title: 'AI Innovation & ROI',
      description:
        'Drove adoption of AI tools, agents, and skills for efficiency gains, tracked against business KPIs for ROI and measurable improvement.'
    }
  ];

  const programExcellenceInitiatives = [
    {
      icon: ClipboardList,
      title: 'Enterprise Standards & Operating Models',
      description:
        'Defined the playbooks and quality bars for how programs run — reducing delivery variance by 30-40% and helping new programs scale faster.'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Visibility & Decision Intelligence',
      description:
        'Built dashboards and early-warning systems giving leadership real-time clarity — cutting escalations by 25-50% and speeding up decisions.'
    },
    {
      icon: Network,
      title: 'Cross-Functional Alignment & Orchestration',
      description:
        'Aligned Product, Engineering, Sales, Ops, Finance, and CX around shared goals — accelerating delivery timelines by 15-20%.'
    },
    {
      icon: Wrench,
      title: 'Capability Building & Skill Uplift',
      description:
        'Built PM competency frameworks, training, and tooling across program teams — lifting PM productivity by 20-30%.'
    },
    {
      icon: Target,
      title: 'Strategic Program Delivery & Transformation',
      description:
        'Led enterprise-wide transformation and GTM initiatives with direct impact on revenue, cost, and customer experience.'
    },
    {
      icon: Mic,
      title: 'Executive Communication & Stakeholder Influence',
      description:
        'Translated complexity into clarity for C-suite stakeholders, speeding up approvals and building executive confidence.'
    }
  ];

  const HierarchyTree = ({ rootLabel, rootTagline, items }) => (
    <div className="flex flex-col items-center w-full">
      {/* Root circle */}
      <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex-shrink-0">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(34, 211, 238, 0.3)',
              '0 0 55px rgba(168, 85, 247, 0.6)',
              '0 0 20px rgba(34, 211, 238, 0.3)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
          className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-dark-900 border-2 border-accent-cyan/60 flex flex-col items-center justify-center text-center p-5"
        >
          <BrainCircuit className="w-9 h-9 text-accent-cyan mb-2" />
          <h3 className="text-base font-bold text-white mb-1">
            {rootLabel}
          </h3>
          <p className="gradient-text font-semibold tracking-widest text-xs">
            {rootTagline}
          </p>
        </motion.div>
      </div>

      {/* Trunk stub connecting circle to branch line */}
      <div className="w-0.5 h-8 bg-gradient-to-b from-accent-cyan to-accent-purple" />

      {/* Branches */}
      <div className="relative border-l-2 border-accent-cyan/40 pl-6 py-1 space-y-4 w-full">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-6 top-7 w-6 h-0.5 bg-accent-cyan/40" />
            <div className="glass-effect rounded-lg border border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300 px-4 py-3">
              <div className="flex items-center gap-2 mb-1">
                <item.icon className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                <h4 className="text-sm font-semibold text-white">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="ai-coe"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-dark-900 via-indigo-950 to-dark-900"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Center of Excellence"
          subtitle="Leading two Centers of Excellence — AI and Program Excellence — shaping how the organization innovates and delivers"
        />

        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-16 max-w-5xl mx-auto">
          <HierarchyTree
            rootLabel="AI Center of Excellence"
            rootTagline="DEFINE · GOVERN · TRANSFORM"
            items={aiInitiatives}
          />

          <HierarchyTree
            rootLabel="Program Excellence CoE"
            rootTagline="STANDARDIZE · ALIGN · DELIVER"
            items={programExcellenceInitiatives}
          />
        </div>

        {/* Leadership statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-gray-400 mt-16 max-w-4xl mx-auto leading-relaxed"
        >
          I lead two Centers of Excellence — one shaping how the organization adopts AI, and
          one shaping how it runs programs at scale — connecting innovation and operating
          discipline into measurable business outcomes.
        </motion.p>
      </div>
    </section>
  );
};

export default AICenterOfExcellence;