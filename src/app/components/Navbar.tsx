"use client";

import Link from "next/link";
import { useState, MouseEvent } from "react";

interface NavLink {
    href: string;
    label: string;
}

interface ServiceLink {
    href: string;
    label: string;
}

const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/docs", label: "Docs" },
    { href: "/contact", label: "Contact" },
];

const serviceLink: ServiceLink[] = [
    { href: "/services/web", label: "Web Development" },
    { href: "/services/mobile", label: "Mobile Development" },
    { href: "/services/consulting", label: "Consulting" },
];

export default function Navbar() {
    const [isServiceOpen, setIsServicesOpen] = useState<boolean>(false);

    const toggleServices = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsServicesOpen(!isServiceOpen);
    };

    return (
        <nav className="bg-zinc-900 border-b border-zinc-800">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                    <img
                        src="/Locandina_Tomb_Raider_29.webp"
                        width="96"
                        height="96"
                        alt="Logo"
                        className=" ml-3 z-0"
                    />
                    <div className="flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-zinc-300 hover:text-zinc-100 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        {/* Menu a tendina */}
                        <div className="relative flex items-center"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}>
                                
                            <button
                                className="flex items-center text-zinc-300 hover:text-zinc-100 transition-colors"
                                aria-expanded={isServiceOpen}
                                aria-label="toggle services menu"
                                tabIndex={0} // per accessibilità
                                type="button"
                            >
                                Services
                                <svg
                                    className={`ml-1 h-4 w-4 transition-transform ${isServiceOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {/* Dropdown menu */}
                            {isServiceOpen && (
                                <div
                                    className="absolute top-full mt-2 w-48 bg-zinc-800 rounded-md shadow-lg py-1 border border-zinc-700 z-10"
                                    role="menu"
                                    aria-orientation="vertical"
                                >
                                    {serviceLink.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="flex px-4 py-2 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 transition-colors"
                                            role="menuitem"
                                        >
                                            {service.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}