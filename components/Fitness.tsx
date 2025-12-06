import React, { useState } from 'react';

const Fitness: React.FC = () => {
  const [energyLevel, setEnergyLevel] = useState(75);

  return (
    <section id="fitness" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-6xl font-semibold tracking-tighter leading-none mb-6">
                HUMAN<br/>HARDWARE<br/>UPGRADES.
            </h2>
            <p className="font-mono text-lg mb-8 border-l-4 border-[#1B3C53] pl-4">
                Fitness is part of my identity. Bringing discipline, clarity, and strength to both body and mind.
            </p>
            <div className="bg-[#E3E3E3] border-4 border-[#1B3C53] p-6 neo-shadow-sm">
                <h3 className="font-bold text-xl uppercase mb-4 border-b-2 border-[#1B3C53] pb-2">Current Split</h3>
                <ul className="font-mono text-sm space-y-2">
                    <li className="flex justify-between"><span>MON</span> <span>HEAVY PULL + DEADLIFT</span></li>
                    <li className="flex justify-between"><span>TUE</span> <span>UPPER PUSH</span></li>
                    <li className="flex justify-between"><span>WED</span> <span>ACTIVE RECOVERY / CARDIO</span></li>
                    <li className="flex justify-between"><span>THU</span> <span>LOWER HYPERTROPHY</span></li>
                    <li className="flex justify-between"><span>FRI</span> <span>FULL BODY ACCESSORY</span></li>
                </ul>
            </div>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {/* Stat Card */}
            <div className="border-4 border-[#1B3C53] p-6 bg-[#E3E3E3]">
                <div className="flex justify-between items-end mb-2">
                    <span className="font-bold uppercase tracking-tight">Deadlift PR</span>
                    <span className="font-mono text-2xl font-bold">405 LBS</span>
                </div>
                <div className="w-full h-6 border-2 border-[#1B3C53] bg-[#E3E3E3] relative">
                    <div className="absolute top-0 left-0 h-full bg-[#1B3C53]" style={{ width: '85%' }}></div>
                </div>
            </div>

            {/* Stat Card */}
            <div className="border-4 border-[#1B3C53] p-6 bg-[#E3E3E3]">
                <div className="flex justify-between items-end mb-2">
                    <span className="font-bold uppercase tracking-tight">Bench Press</span>
                    <span className="font-mono text-2xl font-bold">225 LBS</span>
                </div>
                <div className="w-full h-6 border-2 border-[#1B3C53] bg-[#E3E3E3] relative">
                    <div className="absolute top-0 left-0 h-full bg-[#234C6A]" style={{ width: '70%' }}></div>
                </div>
            </div>

            {/* Interactive Slider */}
            <div className="border-4 border-[#1B3C53] p-6 bg-[#456882] text-[#E3E3E3]">
                <label className="block font-bold uppercase tracking-tight mb-4">
                    Energy Level Input: {energyLevel}%
                </label>
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={energyLevel} 
                    onChange={(e) => setEnergyLevel(Number(e.target.value))}
                />
                <div className="flex justify-between font-mono text-xs mt-2">
                    <span>LOW POWER</span>
                    <span>OVERDRIVE</span>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Fitness;