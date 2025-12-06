import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'VIBECODE', href: '#vibecode' },
    { name: 'FITNESS', href: '#fitness' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#E3E3E3] border-b-4 border-[#1B3C53] px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-semibold tracking-tighter uppercase border-2 border-[#1B3C53] px-2 py-1 hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
          BIPUL.KUMAR
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-mono text-sm tracking-tight font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:underline decoration-2 underline-offset-4 decoration-[#1B3C53]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1 border-2 border-[#1B3C53] neo-shadow-sm active:translate-y-1 active:shadow-none transition-all"
        >
          {isMenuOpen ? (
            <X strokeWidth={1.5} className="w-6 h-6 text-[#1B3C53]" />
          ) : (
            <Menu strokeWidth={1.5} className="w-6 h-6 text-[#1B3C53]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#E3E3E3] border-b-4 border-[#1B3C53] p-4 shadow-xl z-40">
           <div className="flex flex-col gap-4 font-mono text-sm tracking-tight font-semibold">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block border-2 border-[#1B3C53] p-3 text-center hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;