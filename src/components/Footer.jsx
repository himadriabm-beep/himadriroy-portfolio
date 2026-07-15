import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/nihar-kanungo-5a923775/'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/nkanungo'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:nihar.kanungo@gmail.com'
    }
  ];

  const quickLinks = [
    {
      name: 'About',
      section: 'about'
    },
    {
      name: 'Impact & Leadership',
      section: 'metrics'
    },
    {
      name: 'AI Center of Excellence',
      section: 'coe'
    },
    {
      name: 'Success Stories',
      section: 'stories'
    },
    {
      name: 'Projects',
      section: 'projects'
    },
    {
      name: 'Technology Stack',
      section: 'tech'
    },
    {
      name: 'Leadership Journey',
      section: 'timeline'
    },
    {
      name: 'Contact',
      section: 'contact'
    }
  ];

  const expertise = [
    'Enterprise AI & GenAI',
    'Agentic AI & Multi-Agent Systems',
    'Product & Platform Architecture',
    'Enterprise Architecture',
    'AI Transformation & Strategy',
    'AI Center of Excellence',
    'Data & Intelligence Platforms',
    'Industrial IoT & Edge Intelligence'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-dark-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="py-14 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Profile */}
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-5">
              Nihar Kanungo
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-lg mb-6">
              AI Transformation Leader and Principal Product & Platform
              Architect focused on turning emerging technologies into
              scalable enterprise capabilities, intelligent platforms,
              and measurable business value.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={
                      link.name === 'Email'
                        ? undefined
                        : '_blank'
                    }
                    rel={
                      link.name === 'Email'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={link.name}
                    title={link.name}
                    className="w-12 h-12 rounded-xl border border-gray-800 flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-12">
            <h4 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.section)}
                  className="text-left text-gray-400 hover:text-accent-cyan transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Core Expertise */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              Core Expertise
            </h4>

            <ul className="space-y-3">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="text-gray-400 flex items-start"
                >
                  <span className="text-accent-cyan mr-3">
                    •
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Nihar Kanungo. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center md:text-right">
            Architecting intelligent enterprises through
            <span className="text-accent-cyan font-semibold">
              {' '}AI
            </span>
            ,
            <span className="text-accent-purple font-semibold">
              {' '}Platforms
            </span>
            {' '}and Emerging Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;