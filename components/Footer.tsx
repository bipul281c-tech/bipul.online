import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E3E3E3] border-t-4 border-[#1B3C53] py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#1B3C53]"></div>
                <span className="font-mono text-sm font-bold tracking-tight text-[#1B3C53]">© 2024 BIPUL KUMAR</span>
            </div>
            <div className="font-mono text-xs text-[#234C6A]">
                DESIGNED RAW. CODED CLEAN.
            </div>
        </div>
    </footer>
  );
};

export default Footer;