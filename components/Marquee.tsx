import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="border-b-4 border-[#1B3C53] bg-[#234C6A] text-[#E3E3E3] py-3 font-mono text-sm uppercase font-semibold tracking-widest overflow-hidden flex">
        <div className="marquee-container w-full">
            <div className="marquee-content">
                VIBE CODING /// AI AUTOMATION /// STOCK SYSTEMS /// HEAVY LIFTING /// GENERATIVE ART /// PROTOTYPING /// VIBE CODING /// AI AUTOMATION /// STOCK SYSTEMS /// HEAVY LIFTING /// GENERATIVE ART /// PROTOTYPING ///
            </div>
        </div>
    </div>
  );
};

export default Marquee;