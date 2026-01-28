
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">PF</div>
            <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">
              Property Finder <span className="text-red-600">AI</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Buy</a>
            <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Rent</a>
            <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Commercial</a>
            <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Find Agent</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2">Log in</button>
            <button className="bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition duration-200 shadow-sm">
              List Property
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
