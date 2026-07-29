
import React from 'react';
import Link from 'next/link';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          MyApp
        </div>
        <nav className="flex-grow p-4">
          <Link href="/app" className="block py-2 px-4 rounded-lg hover:bg-gray-700">
            Dashboard
          </Link>
          <Link href="/app/generator" className="block py-2 px-4 rounded-lg hover:bg-gray-700">
            AI Generator
          </Link>
          {/* Add more app links here */}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
