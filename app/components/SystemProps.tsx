"use client"
import { useState } from 'react'

export default function SystemProps({ windowMin }: { windowMin: boolean }) {
    const [activeTab, setActiveTab] = useState('general')

    function handleDragWin(e: React.MouseEvent<HTMLElement>) {
        const header = e.currentTarget;
        const parent = header.parentElement;
        if (!parent) return;

        let startX = e.clientX;
        let startY = e.clientY;
        let startLeft = parent.offsetLeft;
        let startTop = parent.offsetTop;

        function onMouseMove(e: MouseEvent) {
            const newLeft = startLeft + (e.clientX - startX);
            const newTop = startTop + (e.clientY - startY);
            if (parent) {
                parent.style.left = `${newLeft}px`;
                parent.style.top = `${newTop}px`;
            }
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    return (
        <div className={windowMin ? "z-10 relative flex items-center justify-center flex-col border-[#0052e6] md:translate-x-[16rem] lg:translate-x-[28rem] md:translate-y-10 rounded-tl-lg rounded-tr-lg border-l-2 border-b-2 border-r-2 w-full md:w-3/5 lg:w-2/5 h-full md:h-3/4 bg-gradient-to-r from-[#f2f4f1] to-[#f0eddc]" : "relative border-[#0052e6] rounded-tl rounded-tr border-l-2 border-b-2 border-r-2 w-full lg:w-2/5 h-full lg:h-3/4 hidden bg-white"}>
            <header
                className="cursor-pointer w-full flex items-center justify-between h-9 p-2 border-l border-r border-[#0067fc] bg-gradient-to-b from-[#0067fc] to-[#0258e3] rounded-tl rounded-tr shadow-inner"
                onMouseDown={handleDragWin}
            >
                <div className="absolute inset-0 rounded-r pointer-events-none">
                    <div className="absolute top-0 rounded-tl rounded-tr z-0 left-0 w-full h-2 rounded-r bg-[#829cfa10] blur-[1px]"></div>
                </div>
                <div className="flex items-center justify-center gap-1 z-20">
                    <p className="text-white text-sm">System Preferences</p>
                </div>
            </header>
            <div className="w-full h-full flex items-center justify-center flex-col px-4">
                <div className="w-full flex items-center flex-col">
                    <div className="to-row-btn w-full flex items-center">
                        <button 
                            onClick={() => setActiveTab('dmVoice')}
                            className={`w-full px-1 text-sm border-l border-t border-r border-[#bebebe] cursor-pointer rounded-tl rounded-tr ${activeTab === 'dmVoice' ? 'bg-[#eaeae8] text-black' : 'bg-gradient-to-b from-[#f2f4f1] to-[#f4f3ee]'}`}
                        >
                            DM Voice Notes
                        </button>
                        <button 
                            onClick={() => setActiveTab('vanish')}
                            className={`w-full px-1 text-sm border-l border-t border-r border-[#bebebe] cursor-pointer rounded-tl rounded-tr ${activeTab === 'vanish' ? 'bg-[#eaeae8] text-black' : 'bg-gradient-to-b from-[#f2f4f1] to-[#f4f3ee]'}`}
                        >
                            Vanish Mode
                        </button>
                        <button 
                            onClick={() => setActiveTab('playSafe')}
                            className={`w-full px-1 text-sm border-l border-t border-r border-[#bebebe] cursor-pointer rounded-tl rounded-tr ${activeTab === 'playSafe' ? 'bg-[#eaeae8] text-black' : 'bg-gradient-to-b from-[#f2f4f1] to-[#f4f3ee]'}`}
                        >
                            PlaySafe Badge
                        </button>
                    </div>
                    <div className="bottom-row-btns w-full flex items-center">
                        <button 
                            onClick={() => setActiveTab('general')}
                            className={`w-full px-1 text-sm border border-[#bebebe] ${activeTab === 'general' ? 'border-b-[#f4f3ee]' : ''} bg-gradient-to-b from-[#f2f4f1] to-[#f4f3ee] cursor-pointer rounded-tl rounded-tr`}
                        >
                            General
                        </button>
                        <button 
                            onClick={() => setActiveTab('frameworks')}
                            className={`w-full px-1 text-sm border border-[#bebebe] ${activeTab === 'frameworks' ? 'border-b-[#f4f3ee]' : ''} bg-gradient-to-b from-[#f2f4f1] to-[#f4f3ee] cursor-pointer rounded-tl rounded-tr`}
                        >
                            Frameworks
                        </button>
                        <button 
                            onClick={() => setActiveTab('github')}
                            className={`w-full px-1 text-sm border border-[#bebebe] ${activeTab === 'github' ? 'border-b-[#f4f3ee]' : ''} bg-gradient-to-b from-[#f2f4f1] to-[#f4f3ee] cursor-pointer rounded-tl rounded-tr`}
                        >
                            Github
                        </button>
                        <button 
                            onClick={() => setActiveTab('contact')}
                            className={`w-full px-1 text-sm border border-[#bebebe] ${activeTab === 'contact' ? 'border-b-[#f4f3ee]' : ''} bg-gradient-to-b from-[#f2f4f1] to-[#f4f3ee] cursor-pointer rounded-tl rounded-tr`}
                        >
                            Contact
                        </button>
                    </div>
                </div>
                <div className="w-full h-4/5 flex items-start justify-center flex-col bg-[#f4f3ee] border-l border-b border-r border-[#bebebe]">
                    <div className="w-2/5"></div>
                    <div className="w-full h-full p-4 flex items-center flex-col gap-4 justify-center">
                        {activeTab === 'general' && (
                            <div className="w-full flex items-start gap-2">
                                <div className="w-full flex items-start flex-col gap-2">
                                    <h1 className="font-semibold">System:</h1>
                                    <p className="text-sm font-light">Jonas Guzman</p>
                                    <p className="text-sm font-light">Digital Hermit</p>
                                    <p className="text-sm font-light">Operating mostly offline</p>
                                    <p className="text-sm font-light">Base of operations: New York City</p>
                                </div>

                                <div className="w-full flex items-start flex-col gap-2">
                                    <h1 className="font-semibold">Frameworks:</h1>
                                    <p className="text-sm font-light">Next.js, TailwindCSS, Supabase, MongoDB</p>
                                    <p className="text-sm font-light">TypeScript</p>
                                    <p className="text-sm font-light">Moderate Vue fluency</p>
                                    <p className="text-sm font-light">AI Prompt Engineer</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'frameworks' && (
                            <div className="w-full flex items-start flex-col gap-4">
                                <h1 className="font-semibold text-lg">Tech Stack</h1>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-start flex-col gap-2">
                                        <h2 className="font-semibold">Frontend</h2>
                                        <p className="text-sm font-light">Next.js 14</p>
                                        <p className="text-sm font-light">React 18</p>
                                        <p className="text-sm font-light">TailwindCSS</p>
                                        <p className="text-sm font-light">TypeScript</p>
                                    </div>
                                    <div className="flex items-start flex-col gap-2">
                                        <h2 className="font-semibold">Backend</h2>
                                        <p className="text-sm font-light">Supabase</p>
                                        <p className="text-sm font-light">MongoDB</p>
                                        <p className="text-sm font-light">Node.js</p>
                                        <p className="text-sm font-light">PostgreSQL</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'github' && (
                            <div className="w-full flex items-start flex-col gap-4">
                                <h1 className="font-semibold text-lg">GitHub Projects</h1>
                                <div className="flex items-start flex-col gap-3">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h2 className="font-semibold">DM Voice Notes</h2>
                                        <p className="text-sm font-light">Voice messaging system for intimate conversations</p>
                                        <p className="text-sm text-gray-600">Next.js • Supabase • WebRTC</p>
                                    </div>
                                    <div className="border-l-4 border-green-500 pl-4">
                                        <h2 className="font-semibold">Vanish Mode</h2>
                                        <p className="text-sm font-light">Auto-deleting messages for privacy</p>
                                        <p className="text-sm text-gray-600">React • Firebase • Encryption</p>
                                    </div>
                                    <div className="border-l-4 border-purple-500 pl-4">
                                        <h2 className="font-semibold">PlaySafe Badge</h2>
                                        <p className="text-sm font-light">Verification system for safe play</p>
                                        <p className="text-sm text-gray-600">Vue.js • MongoDB • JWT</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="w-full flex items-start flex-col gap-4">
                                <h1 className="font-semibold text-lg">Contact Information</h1>
                                <div className="flex items-start flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">Email:</span>
                                        <span className="text-sm font-light">jonas@digitalhermit.dev</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">LinkedIn:</span>
                                        <span className="text-sm font-light">linkedin.com/in/jonasguzman</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">GitHub:</span>
                                        <span className="text-sm font-light">github.com/jonasguzman</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">Location:</span>
                                        <span className="text-sm font-light">New York City, NY</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'dmVoice' && (
                            <div className="w-full flex items-start flex-col gap-4">
                                <h1 className="font-semibold text-lg">DM Voice Notes</h1>
                                <p className="text-sm font-light">
                                    A secure voice messaging system designed for intimate conversations. 
                                    Features end-to-end encryption, auto-deletion, and voice quality optimization.
                                </p>
                                <div className="flex items-start flex-col gap-2">
                                    <h2 className="font-semibold">Key Features:</h2>
                                    <ul className="text-sm font-light list-disc list-inside space-y-1">
                                        <li>Real-time voice messaging</li>
                                        <li>End-to-end encryption</li>
                                        <li>Auto-deletion after 24 hours</li>
                                        <li>Voice quality optimization</li>
                                        <li>Offline message queuing</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'vanish' && (
                            <div className="w-full flex items-start flex-col gap-4">
                                <h1 className="font-semibold text-lg">Vanish Mode</h1>
                                <p className="text-sm font-light">
                                    Privacy-focused messaging with automatic message deletion. 
                                    Perfect for sensitive conversations that need to disappear.
                                </p>
                                <div className="flex items-start flex-col gap-2">
                                    <h2 className="font-semibold">Privacy Features:</h2>
                                    <ul className="text-sm font-light list-disc list-inside space-y-1">
                                        <li>Auto-delete after reading</li>
                                        <li>No message history</li>
                                        <li>Screenshot detection</li>
                                        <li>Self-destructing media</li>
                                        <li>Incognito mode support</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'playSafe' && (
                            <div className="w-full flex items-start flex-col gap-4">
                                <h1 className="font-semibold text-lg">PlaySafe Badge</h1>
                                <p className="text-sm font-light">
                                    A verification system that promotes safe and consensual play. 
                                    Users can verify their safety practices and preferences.
                                </p>
                                <div className="flex items-start flex-col gap-2">
                                    <h2 className="font-semibold">Verification Types:</h2>
                                    <ul className="text-sm font-light list-disc list-inside space-y-1">
                                        <li>STI testing verification</li>
                                        <li>Consent education completion</li>
                                        <li>Safety practice certification</li>
                                        <li>Community trust score</li>
                                        <li>Emergency contact verification</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        <p className="text-sm font-light mt-4 max-w-3xl text-center">
                            This portfolio is crafted specifically for <span className="font-semibold italic">Fetlife</span>—Senior Product Designer Role. It's a space where trust, intimacy, and creativity intersect with code.
                            I build tools that make play safer, smarter, and more expressive.
                            These aren't just features—they're tools I needed but couldn't find. So I built them.
                        </p>
                    </div>
                </div>
                <div className="w-full mt-2 flex items-center gap-2 justify-end">
                    <button className="cursor-pointer px-1 py-0.5 text-sm bg-white border shadow border-[#437fae] rounded w-[100px]">OK</button>
                    <button className="cursor-pointer px-1 py-0.5 text-sm bg-white border shadow border-[#437fae] rounded w-[100px]">Cancel</button>
                    <button className="cursor-pointer px-1 py-0.5 text-sm text-[#888] bg-white border border-[#afafaf] rounded w-[100px]">Apply</button>
                </div>
            </div>
        </div>
    )
}