import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="border-t-4 border-[#1B3C53] pt-16">
        <div className="bg-[#1B3C53] text-[#E3E3E3] p-8 md:p-16 neo-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
                <Mail strokeWidth={1.5} className="w-48 h-48" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 relative z-10">
                LET'S BUILD<br/>SOMETHING<br/>WEIRD.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div>
                    <p className="font-mono text-lg mb-8 max-w-sm text-[#E3E3E3]/80">
                        Available for freelance projects, collaborations, or gym motivation.
                    </p>
                    <a href="mailto:hello@bipulkumar.dev" className="inline-block bg-[#E3E3E3] text-[#1B3C53] border-2 border-transparent px-8 py-3 font-bold text-lg uppercase hover:bg-[#234C6A] hover:text-[#E3E3E3] hover:border-[#E3E3E3] transition-colors">
                        Send Email
                    </a>
                </div>
                
                <div className="flex flex-col gap-4 justify-end">
                    {[
                        { name: 'TWITTER / X', href: '#' },
                        { name: 'GITHUB', href: '#' },
                        { name: 'STRAVA', href: '#' },
                        { name: 'INSTAGRAM', href: '#' }
                    ].map(link => (
                        <a key={link.name} href={link.href} className="flex items-center justify-between border-b border-[#E3E3E3] pb-2 hover:pl-4 transition-all group">
                            <span className="font-bold text-xl">{link.name}</span>
                            <ArrowUpRight strokeWidth={1.5} className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;