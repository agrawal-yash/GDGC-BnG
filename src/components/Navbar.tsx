"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Left Side: Logo & Main Nav */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                            Google AI <span className="text-white/60 font-normal">for Developers</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <NavLink href="#" label="Models" hasDropdown />
                        <NavLink href="#" label="Solutions" hasDropdown />
                        <NavLink href="#" label="Code assistance" hasDropdown />
                        <NavLink href="#" label="Showcase" hasDropdown />
                        <NavLink href="#" label="Community" hasDropdown />
                    </div>
                </div>

                {/* Right Side: Tools & Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative group">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition-colors border border-white/5 text-sm text-gray-300 w-64 cursor-text">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>Search</span>
                            <span className="ml-auto text-xs bg-white/10 px-1.5 py-0.5 rounded text-gray-400">/</span>
                        </div>
                    </div>

                    <button className="text-gray-300 hover:text-white transition-colors">
                        {/* Theme Toggle placeholder */}
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>

                    <Link href="#" className="text-sm font-medium text-blue-400 hover:text-blue-300 px-4 py-2 border border-blue-400/30 rounded hover:bg-blue-400/10 transition-all">
                        Sign in
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#0b0c10] border-b border-white/10">
                    <div className="px-4 py-4 space-y-4">
                        <div className="space-y-2">
                            <MobileNavLink href="#" label="Models" />
                            <MobileNavLink href="#" label="Solutions" />
                            <MobileNavLink href="#" label="More" />
                        </div>
                        <div className="pt-4 border-t border-white/10">
                            <Link href="#" className="block w-full text-center text-sm font-medium text-blue-400 border border-blue-400/30 rounded py-2">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, label, hasDropdown = false }: { href: string, label: string, hasDropdown?: boolean }) {
    return (
        <Link href={href} className="flex items-center gap-1 text-sm font-medium text-[#c4c7c5] hover:text-white transition-colors">
            {label}
            {hasDropdown && (
                <svg className="w-3 h-3 pt-0.5" viewBox="0 0 10 6" fill="currentColor">
                    <path d="M5 6L0 0H10L5 6Z" />
                </svg>
            )}
        </Link>
    );
}

function MobileNavLink({ href, label }: { href: string, label: string }) {
    return (
        <Link href={href} className="flex items-center justify-between text-base font-medium text-[#c4c7c5] py-2">
            {label}
            <svg className="w-4 h-4 -rotate-90 text-gray-500" viewBox="0 0 10 6" fill="currentColor">
                <path d="M5 6L0 0H10L5 6Z" />
            </svg>
        </Link>
    )
}
