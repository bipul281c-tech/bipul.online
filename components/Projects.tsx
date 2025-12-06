import React from 'react';
import { Globe, Cloud, Layout, Rss, QrCode, Terminal, MessageSquare, BookOpen, ShoppingBag, Headphones, Moon, Volume2, Image } from 'lucide-react';

const Projects: React.FC = () => {
    return (
        <section id="projects">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b-4 border-[#1B3C53] pb-4">
                <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter">PROJECTS</h2>
                <span className="font-mono text-sm bg-[#1B3C53] text-[#E3E3E3] px-2 py-1">INDEX: 001-013</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Project 1: Free PromptBase V2 */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#1B3C53] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, #456882 0, #456882 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px" }}></div>
                        <Globe strokeWidth={1.5} className="w-20 h-20 text-[#E3E3E3] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">REACT</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">MARKETPLACE</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Free PromptBase V2</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            www.freepromptbase.com<br />
                            A curated collection of highly effective prompts for ChatGPT, Midjourney, Claude, and more. Copy, paste, and create.
                        </p>
                        <a href="https://www.freepromptbase.com" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Visit Site -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 2: Prompt Base */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#456882] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <Layout strokeWidth={1.5} className="w-20 h-20 text-[#E3E3E3] group-hover:rotate-180 transition-transform duration-700" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">VERCEL</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">ADS</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Prompt Base</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            prompt-base-two.vercel.app<br />
                            Access thousands of free AI prompts for ChatGPT, Claude, Gemini, and all AI models. Download tested prompts for content creation.
                        </p>
                        <a href="https://prompt-base-two.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            View App -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 3: ImgToUrl */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#E3E3E3] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <div className="grid grid-cols-4 gap-2">
                            <div className="w-4 h-16 bg-[#1B3C53] group-hover:scale-y-125 transition-transform origin-bottom"></div>
                            <div className="w-4 h-10 bg-[#234C6A] group-hover:scale-y-150 transition-transform origin-bottom"></div>
                            <div className="w-4 h-20 bg-[#456882] group-hover:scale-y-110 transition-transform origin-bottom"></div>
                            <div className="w-4 h-12 bg-[#1B3C53] group-hover:scale-y-130 transition-transform origin-bottom"></div>
                        </div>
                        <Cloud strokeWidth={1.5} className="absolute w-16 h-16 text-[#1B3C53] z-10" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">CLOUD</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">TOOL</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">ImgToUrl Cloud</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            imagetourl.cloud<br />
                            Free Image to URL Converter. Transform Your Images into Shareable Links. Fast, safe, and private solution.
                        </p>
                        <a href="https://imagetourl.cloud" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Convert Media -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 4: Share Vault */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#234C6A] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <Rss strokeWidth={1.5} className="w-20 h-20 text-[#E3E3E3] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">AUTOMATION</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">RSS</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Share Vault</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            www.sharevault.in<br />
                            Unfiltered inspiration for those who refuse to settle. Transform your mindset with powerful motivational content and quotes.
                        </p>
                        <a href="https://www.sharevault.in" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Open Vault -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 5: UpiQR */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#1B3C53] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#E3E3E3] opacity-10" style={{ backgroundImage: "radial-gradient(#1B3C53 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
                        <QrCode strokeWidth={1.5} className="w-20 h-20 text-[#E3E3E3] group-hover:rotate-90 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">SEO</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">PAYMENT</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">UpiQR</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            upiqr-theta.vercel.app<br />
                            Create free UPI QR codes instantly. Professional QR generator with customization, no sign-up required.
                        </p>
                        <a href="https://upiqr-theta.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Generate QR -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 6: Unix */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#456882] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <Terminal strokeWidth={1.5} className="w-20 h-20 text-[#E3E3E3] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">SYSTEM</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">MINIMAL</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Unix System</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            unix-orcin.vercel.app<br />
                            Convert Unix timestamps to human-readable dates instantly. Free online epoch converter supports seconds, milliseconds, and multiple timezones.
                        </p>
                        <a href="https://unix-orcin.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Execute -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 7: Excuse Generator */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#E3E3E3] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <MessageSquare strokeWidth={1.5} className="w-20 h-20 text-[#1B3C53] group-hover:translate-y-[-5px] transition-transform" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">GENERATOR</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">AI</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Excuse Generator</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            excuse-generator-gold.vercel.app<br />
                            Generate hilariously creative, AI-powered excuses for any situation! Witty tool for life's awkward moments.
                        </p>
                        <a href="https://excuse-generator-gold.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Get Excuse -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 8: Daily Meditation Guide */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#456882] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <BookOpen strokeWidth={1.5} className="w-20 h-20 text-[#E3E3E3] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">BLOG</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">WELLNESS</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Daily Meditation Guide</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            www.dailymeditationguide.com<br />
                            Your daily companion for mindfulness, meditation, and finding inner peace. Find your center, embrace the calm.
                        </p>
                        <a href="https://www.dailymeditationguide.com" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Read Guides -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 9: We Suggest Product */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#1B3C53] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <ShoppingBag strokeWidth={1.5} className="w-20 h-20 text-[#E3E3E3] group-hover:rotate-12 transition-transform" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">AFFILIATE</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">DISCOVERY</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">We Suggest Product</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            wesuggestproduct.vercel.app<br />
                            Discover the best products curated just for you. Mobile-first product discovery engine curating best-in-class recommendations.
                        </p>
                        <a href="https://wesuggestproduct.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Browse -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 10: Kahani Suno */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#234C6A] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <Headphones strokeWidth={1.5} className="w-20 h-20 text-[#E3E3E3] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">LANDING</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">STORYTELLING</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Kahani Suno</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            www.kahanisuno.online<br />
                            Listen to Hindi Stories. Immersive audio-first platform connecting listeners with rich Hindi narratives.
                        </p>
                        <a href="https://www.kahanisuno.online" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Listen -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 11: Quick Daily Meditation */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#E3E3E3] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <Moon strokeWidth={1.5} className="w-20 h-20 text-[#1B3C53] group-hover:rotate-[-20deg] transition-transform" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">DARK MODE</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">FOCUS</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Quick Meditation</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            quick.dailymeditationguide.com<br />
                            Immersive audio landscapes designed to help you focus, breathe, and restore balance to your day. Meditate anywhere on the web.
                        </p>
                        <a href="https://www.quick.dailymeditationguide.com" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Meditate -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 12: Hindi Story */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#456882] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <Volume2 strokeWidth={1.5} className="w-20 h-20 text-[#E3E3E3] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">AUDIO API</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">STREAMING</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Hindi Story</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            hindi-story.vercel.app<br />
                            Immersive audio stories designed to entertain, inspire, and transport you. Listen to Hindi audiobooks and narratives.
                        </p>
                        <a href="https://hindi-story.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Play Story -&gt;
                        </a>
                    </div>
                </article>

                {/* Project 13: Adobe Stock */}
                <article className="border-4 border-[#1B3C53] bg-[#E3E3E3] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col group">
                    <div className="h-48 bg-[#1B3C53] border-b-4 border-[#1B3C53] flex items-center justify-center overflow-hidden relative">
                        <Image strokeWidth={1.5} className="w-20 h-20 text-[#E3E3E3] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">AUTOMATION</span>
                            <span className="text-xs font-mono font-bold border border-[#1B3C53] px-2 py-0.5 rounded-none">MANAGEMENT</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Adobe Stock Mgr</h4>
                        <p className="text-sm font-mono text-[#234C6A] mb-6 flex-grow">
                            adobe-stock-sable.vercel.app<br />
                            AI-Powered SEO Generator. Generate SEO-optimized titles, categories, and tags for your images using Google Gemini AI.
                        </p>
                        <a href="https://adobe-stock-sable.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-[#1B3C53] py-2 font-bold uppercase text-sm hover:bg-[#1B3C53] hover:text-[#E3E3E3] transition-colors">
                            Manage -&gt;
                        </a>
                    </div>
                </article>

            </div>
        </section>
    );
};

export default Projects;