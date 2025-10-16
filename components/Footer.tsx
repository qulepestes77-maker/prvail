
const Footer = () => {
  return (
    <footer className="bg-brand-med text-brand-gray mt-auto">
      <div className="container mx-auto px-6 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} PRVAIL. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:text-brand-text mx-2 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-text mx-2 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
