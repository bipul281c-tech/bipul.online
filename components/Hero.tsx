import React from 'react';
import { ArrowDownRight, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <header className="px-4 py-16 md:py-24 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 flex flex-col gap-6">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-[#1B3C53]">
                    BUILDING<br />
                    <span className="text-transparent bg-clip-text bg-[#1B3C53] stroke-text" style={{ WebkitTextStroke: "2px #1B3C53", color: "transparent" }}>THE FUTURE</span><br />
                    RAW.
                </h1>
                <p className="text-lg md:text-xl font-mono border-l-4 border-[#1B3C53] pl-4 max-w-2xl text-[#234C6A]">
                    I build automated AI workflows, stock‑image systems, modern websites, and emotionally strong visual content. Exploring the intersection of code, art, and endurance.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                    <a href="#projects" className="bg-[#1B3C53] text-[#E3E3E3] border-2 border-[#1B3C53] px-8 py-4 font-semibold text-lg uppercase tracking-tight neo-shadow neo-shadow-hover transition-all flex items-center gap-2 group">
                        View Work
                        <ArrowDownRight strokeWidth={1.5} className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
                    </a>
                    <a href="#about" className="bg-[#E3E3E3] text-[#1B3C53] border-2 border-[#1B3C53] px-8 py-4 font-semibold text-lg uppercase tracking-tight neo-shadow neo-shadow-hover transition-all">
                        About Me
                    </a>
                </div>
            </div>

            {/* Profile Image */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
                <div className="w-full aspect-square border-4 border-[#1B3C53] neo-shadow bg-[#456882] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[#1B3C53] opacity-10" style={{ backgroundImage: "radial-gradient(#E3E3E3 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                    <img
                        src="/images/profile.jpg"
                        alt="Bipul Kumar"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#E3E3E3] border-t-4 border-l-4 border-[#1B3C53] p-2">
                        <Code2 strokeWidth={1.5} className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;