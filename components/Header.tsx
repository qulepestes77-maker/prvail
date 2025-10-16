import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-brand-med shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-brand-text">
          PRVAIL
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-brand-gray hover:text-brand-text transition-colors">
            Home
          </Link>
          {user ? (
            <Link href="/app" className="bg-brand-accent hover:opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-opacity">
              Dashboard
            </Link>
          ) : (
            <Link href="/login" className="bg-brand-accent hover:opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-opacity">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
