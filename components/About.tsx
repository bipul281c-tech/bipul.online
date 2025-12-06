import React from 'react';
import { Cpu, Palette, Dumbbell, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-4 border-[#1B3C53] p-6 md:p-10 neo-shadow bg-[#E3E3E3] relative">
            <div className="absolute -top-4 -left-4 bg-[#1B3C53] text-[#E3E3E3] px-3 py-1 font-mono text-sm font-semibold transform rotate-[-2deg]">
                WHO_AM_I?
            </div>
            <h2 className="text-4xl font-semibold tracking-tighter mb-6">BIPUL KUMAR</h2>
            <p className="font-mono text-sm md:text-base leading-relaxed mb-6">
                I am a multidisciplinary creator working at the intersection of AI automation, vibe‑coding, website development, visual storytelling, and fitness. I blend creativity with system architecture, designing tools and experiences that are bold, efficient, and future‑focused.
            </p>
            <ul className="space-y-3 font-semibold text-lg">
                <li className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#1B3C53]"></div>
                    AI Workflow Architect
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#234C6A]"></div>
                    Full Stack Developer
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#456882]"></div>
                    Visual Storyteller
                </li>
            </ul>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
            <div className="border-4 border-[#1B3C53] bg-[#234C6A] p-4 flex flex-col justify-between hover:translate-y-1 transition-transform group">
                <Cpu strokeWidth={1.5} className="w-8 h-8 text-[#E3E3E3] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[#E3E3E3] text-sm mt-4">AUTOMATION</span>
            </div>
            <div className="border-4 border-[#1B3C53] bg-[#E3E3E3] p-4 flex flex-col justify-between hover:translate-y-1 transition-transform group">
                <Palette strokeWidth={1.5} className="w-8 h-8 text-[#1B3C53] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[#1B3C53] text-sm mt-4">VISUALS</span>
            </div>
            <div className="border-4 border-[#1B3C53] bg-[#E3E3E3] p-4 flex flex-col justify-between hover:translate-y-1 transition-transform group">
                <Dumbbell strokeWidth={1.5} className="w-8 h-8 text-[#1B3C53] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[#1B3C53] text-sm mt-4">DISCIPLINE</span>
            </div>
            <div className="border-4 border-[#1B3C53] bg-[#456882] p-4 flex flex-col justify-between hover:translate-y-1 transition-transform group">
                <Zap strokeWidth={1.5} className="w-8 h-8 text-[#E3E3E3] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[#E3E3E3] text-sm mt-4">VIBE_CODE</span>
            </div>
        </div>
    </section>
  );
};

export default About;