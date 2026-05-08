import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center text-text-muted mt-20 border-t border-gray-100">
      <p>&copy; {new Date().getFullYear()} Natur. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
