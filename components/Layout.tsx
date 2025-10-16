import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Notification from './Notification';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
      <Notification />
    </div>
  );
};

export default Layout;
