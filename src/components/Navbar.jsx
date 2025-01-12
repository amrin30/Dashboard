

import { Bell, ChartSpline, ChevronDown, House, NotepadText, Sparkles, Warehouse, Zap, Menu } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-800">
      {/* Top Navbar */}
      <div className="flex items-center justify-between w-full sm:w-[75%] text-white p-4">
        {/* Logo */}
        <h1 className="text-lg font-bold">First bench</h1>

        {/* Menu Toggle for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:flex-row gap-4 items-center">
          <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2 lg:p-0">
            <House size={20} />
            Dashboard
          </h4>
          <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2 lg:p-0">
            <Sparkles size={20} />
            FirstGuru
          </h4>
          <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2 lg:p-0">
            <Warehouse size={20} />
            TownHall
          </h4>
          <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2 lg:p-0">
            <Zap size={20} />
            AI Evaluation
          </h4>
          <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2 lg:p-0">
            <ChartSpline size={20} />
            Performance
          </h4>
          <h4 className="text-teal-400 cursor-pointer flex gap-1 items-center p-2 lg:p-0">
            <NotepadText size={20} />
            Mock Test
          </h4>
          <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2 lg:p-0">
            <Bell size={20} />
          </h4>
          
          <button className="border-2 border-gray-600 p-2 w-[100px] bg-gray-600 flex gap-1 items-center">
            Profile
            <ChevronDown />
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:hidden w-full bg-gray-800 text-white p-4`}
      >
        <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2">
          <House size={20} />
          Dashboard
        </h4>
        <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2">
          <Sparkles size={20} />
          FirstGuru
        </h4>
        <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2">
          <Warehouse size={20} />
          TownHall
        </h4>
        <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2">
          <Zap size={20} />
          AI Evaluation
        </h4>
        <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2">
          <ChartSpline size={20} />
          Performance
        </h4>
        <h4 className="text-teal-400 cursor-pointer flex gap-1 items-center p-2">
          <NotepadText size={20} />
          Mock Test
        </h4>
        <h4 className="hover:text-gray-400 cursor-pointer flex gap-1 items-center p-2">
          <Bell size={20} />
        </h4>
        
        <button className="border-2 border-gray-600 p-2 w-[100px] bg-gray-600 flex gap-1 items-center">
          Profile
          <ChevronDown />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
