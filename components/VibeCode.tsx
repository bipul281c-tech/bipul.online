import React from 'react';
import { FileCode, Terminal } from 'lucide-react';

const VibeCode: React.FC = () => {
    return (
        <section id="vibecode" className="border-4 border-[#1B3C53] p-8 bg-[#234C6A] text-[#E3E3E3] neo-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                    <h3 className="text-4xl font-semibold tracking-tighter mb-4">VIBE<br />EXPERIMENTS</h3>
                    <p className="font-mono text-sm opacity-80 mb-6">
                        A collection of raw scripts, automation pipelines, and aesthetic interfaces. Where visuals, micro-interactions, and mood-based design come together.
                    </p>
                    <button className="bg-[#E3E3E3] text-[#1B3C53] border-2 border-transparent px-6 py-2 font-bold uppercase text-sm hover:border-[#E3E3E3] hover:bg-[#234C6A] hover:text-[#E3E3E3] transition-all">
                        Git Repository
                    </button>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {/* Snippet Card */}
                    <div className="bg-[#1B3C53] p-4 border-2 border-[#E3E3E3] hover:translate-x-1 hover:translate-y-1 transition-transform">
                        <div className="flex justify-between items-center mb-2 border-b border-[#E3E3E3] pb-2">
                            <span className="font-mono text-xs">AUTO_CAPTION.py</span>
                            <Terminal strokeWidth={1.5} className="w-4 h-4" />
                        </div>
                        <p className="font-mono text-xs opacity-70 leading-relaxed whitespace-pre-line">
                            def generate_tags(image_path):<br />
                            &nbsp;&nbsp;response = ollama.chat(model='llava',<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;messages=[{'{'}'role': 'user', 'content': 'describe', 'images': [path]{'}'}])<br />
                            &nbsp;&nbsp;return extract_keywords(response)
                        </p>
                    </div>
                    {/* Snippet Card */}
                    <div className="bg-[#1B3C53] p-4 border-2 border-[#E3E3E3] hover:translate-x-1 hover:translate-y-1 transition-transform">
                        <div className="flex justify-between items-center mb-2 border-b border-[#E3E3E3] pb-2">
                            <span className="font-mono text-xs">MEDITATION_AUDIO.tsx</span>
                            <FileCode strokeWidth={1.5} className="w-4 h-4" />
                        </div>
                        <p className="font-mono text-xs opacity-70 leading-relaxed">
                            const playAmbient = async (mood) =&gt; {'{'}<br />
                            &nbsp;&nbsp;const audio = await loadStem(mood);<br />
                            &nbsp;&nbsp;audioContext.createGain().connect(dest);<br />
                            &nbsp;&nbsp;// syncing visuals to bpm...<br />
                            {'}'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VibeCode;