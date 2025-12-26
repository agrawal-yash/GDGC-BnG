"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const tabs = [
    { id: "agents", label: "Agents" },
    { id: "analysis", label: "Analysis and insights" },
    { id: "generation", label: "Code generation" },
    { id: "chat", label: "Code chat" },
];

export default function CodeAssistanceSection() {
    const [activeTab, setActiveTab] = useState("agents");
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(
            sectionRef.current.querySelectorAll(".animate-reveal"),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    // Animate content change
    useEffect(() => {
        if (!contentRef.current) return;
        gsap.fromTo(contentRef.current,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );
    }, [activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case "agents":
                return (
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-medium text-white">Agents</h3>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                Gemini empowers you to be more productive by acting as your
                                coding agent. It can plan and execute tasks, freeing you to focus on
                                what matters most.
                            </p>
                        </div>
                        <div className="relative bg-[#0d0e10] rounded-2xl border border-white/10 p-8 shadow-2xl overflow-hidden min-h-[350px] flex items-center justify-center">
                            {/* Mock Editor */}
                            <div className="w-full space-y-4 font-mono text-sm opacity-60">
                                <div className="flex gap-2 text-xs border-b border-white/5 pb-2 mb-4">
                                    <span className="text-blue-400">SubmitButton.js</span>
                                    <span className="text-gray-600">Updated</span>
                                </div>
                                <div className="text-gray-500">const [isButtonDisabled, setButtonDisable]</div>
                                <div className="text-blue-400">function handleChange(event) {'{'}</div>
                                <div className="text-gray-300 ml-4">setIsButtonDisabled(event.target.value.tr)</div>
                                <div className="text-blue-400">{'}'}</div>
                            </div>
                            {/* Floating prompt */}
                            <div className="absolute top-1/4 right-[10%] bg-white text-black px-5 py-2.5 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-3">
                                <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">1</span>
                                Help me style a submit button
                            </div>
                            <div className="absolute bottom-10 right-10 bg-blue-600 p-3 rounded-xl shadow-blue-500/20 shadow-xl">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                );
            case "analysis":
                return (
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-medium text-white">Analysis and insights</h3>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                Improve code quality and fix issues with code analysis. Get insights,
                                suggestions, and code snippets within your existing development
                                environment.
                            </p>
                        </div>
                        <div className="relative bg-[#0d0e10] rounded-2xl border border-white/10 p-8 shadow-2xl min-h-[350px] flex flex-col justify-end">
                            <div className="bg-[#1c1d20] rounded-xl p-6 space-y-4 border border-white/5 shadow-inner">
                                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                                    <span className="text-lg">✦</span> Gemini
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white/5 p-3 rounded-lg text-xs text-gray-400">
                                        How can I make sure that my Cloud Firestore rules are secure? Let's think step by step
                                    </div>
                                    <div className="bg-blue-500/5 p-3 rounded-lg text-xs text-blue-300 border border-blue-500/10">
                                        I'm creating a chat app running on web, Android and iOS. What's the best way to structure my Cloud Firestore collections?
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="w-full bg-[#0d0e10] rounded-full px-5 py-2.5 text-xs border border-white/10 text-gray-500 flex justify-between items-center">
                                        Ask me something about Firebase
                                        <span className="text-gray-600">➤</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "generation":
                return (
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-medium text-white">Code generation</h3>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                Gemini adds AI-powered code completion with natural language
                                understanding to create entire code blocks from your descriptions,
                                revolutionizing your development workflow.
                            </p>
                        </div>
                        <div className="relative bg-[#0d0e10] rounded-2xl border border-white/10 p-12 shadow-2xl min-h-[350px] font-mono text-sm space-y-3">
                            <div className="text-gray-600">@Preview</div>
                            <div className="text-gray-600">@Composable</div>
                            <div className="flex items-center gap-2">
                                <span className="text-purple-400 font-bold">fun</span>
                                <span className="text-white border-r-2 border-blue-500 h-5"> pre</span>
                            </div>
                            <div className="mt-8 bg-[#1c1d20] border-l-4 border-blue-500 rounded-r-lg p-5 flex items-center justify-between shadow-2xl">
                                <div className="flex items-center gap-3">
                                    <span className="text-blue-400 text-sm">✦ prev</span>
                                    <span className="text-gray-500 text-xs">Create @Preview composable function</span>
                                </div>
                            </div>
                            <div className="absolute bottom-10 right-10 bg-blue-600 text-white text-[10px] px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl shadow-blue-500/20">
                                Press <span className="font-bold">→</span> to accept suggestions
                            </div>
                        </div>
                    </div>
                );
            case "chat":
                return (
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-medium text-white">Code chat</h3>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                Ask development questions and receive responses that help you
                                reduce errors, solve problems, and become a better developer.
                                Gemini understands the context of your environment to give you the
                                best responses for your questions.
                            </p>
                        </div>
                        <div className="relative bg-[#0d0e10] rounded-2xl border border-white/10 p-0 shadow-2xl min-h-[400px] overflow-hidden">
                            <div className="flex flex-col h-full">
                                <div className="bg-[#1c1d20] p-4 text-xs border-b border-white/5 flex items-center justify-between text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    </div>
                                    <span className="font-medium">Gemini Code Chat</span>
                                    <div />
                                </div>
                                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                                    <div className="flex gap-4 justify-end">
                                        <div className="bg-blue-600/10 border border-blue-500/20 p-4 rounded-[1.5rem] rounded-tr-none text-xs text-blue-100 max-w-[85%] leading-relaxed">
                                            What should I use, Cloud SQL or Cloud Firestore? And show some simple code snippet.
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xs flex-shrink-0">✦</div>
                                        <div className="bg-white/5 border border-white/5 p-4 rounded-[1.5rem] rounded-tl-none text-xs text-gray-300 max-w-[85%] space-y-4 leading-relaxed">
                                            <p>Cloud SQL and Cloud Firestore are both powerful but serve different needs. Cloud Firestore is better for real-time sync...</p>
                                            <div className="bg-black/40 p-3 rounded-lg font-mono text-[10px] text-blue-400/80 border border-white/5">
                                                import {'{'} doc, setDoc {'}'} from "firebase/firestore";<br />
                                                await setDoc(doc(db, "cities", "LA"), {'{'} ... {'}'});
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section ref={sectionRef} className="relative py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-16">

                <div className="text-center space-y-8">
                    <h2 className="animate-reveal text-4xl md:text-6xl font-medium text-white leading-tight">
                        Boost productivity with AI <br />
                        code assistance
                    </h2>

                    {/* Tabs Navigation */}
                    <div className="animate-reveal flex flex-wrap justify-center gap-2 md:gap-4 mt-12 px-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab === tab.id
                                    ? "bg-blue-600/20 border-blue-500 text-white shadow-glow"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Box */}
                <div className="bg-[#16171a] rounded-[3rem] p-8 md:p-20 border border-white/5 relative overflow-hidden shadow-2xl min-h-[550px] flex items-center">
                    <div ref={contentRef} className="w-full h-full">
                        {renderContent()}
                    </div>

                    {/* Background glow specific to this section */}
                    <div className="absolute inset-x-0 bottom-[-20%] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
