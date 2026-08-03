const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="container-custom py-8 text-center">
        <p className="text-gray-500 text-sm">
          © {currentYear} Himadri Roy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;