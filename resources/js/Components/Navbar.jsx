
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
            <nav className="relative mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white shadow-lg shadow-black/5 backdrop-blur-xl sm:px-6 sm:py-4">
                <a
                    href="/"
                    onClick={closeMenu}
                    className="text-base font-semibold tracking-wider sm:text-xl"
                >
                    RUWALOKA
                </a>

                {/* Desktop menu */}
                <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
                    <li>
                        <a
                            href="#destinasi"
                            className="flex items-center gap-2 transition hover:text-white/70"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                                <circle cx="12" cy="10" r="2.5" />
                            </svg>
                            Destinasi
                        </a>
                    </li>

                    <li>
                        <a
                            href="#ai"
                            className="flex items-center gap-2 transition hover:text-white/70"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
                                <path d="m19 14 1 2.5 2.5 1-2.5 1L19 21l-1-2.5-2.5-1 2.5-1L19 14Z" />
                            </svg>
                            Tanya AI
                        </a>
                    </li>

                    <li>
                        <a
                            href="#tentang"
                            className="flex items-center gap-2 transition hover:text-white/70"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                            </svg>
                            Tentang
                        </a>
                    </li>
                </ul>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
                    aria-expanded={menuOpen}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        className="h-5 w-5"
                    >
                        {menuOpen ? (
                            <path d="m18 6-12 12M6 6l12 12" />
                        ) : (
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile dropdown */}
                {menuOpen && (
                    <ul className="absolute left-0 right-0 top-full mt-3 flex flex-col gap-1 rounded-2xl border border-white/20 bg-[#18392B] p-3 text-sm font-medium shadow-xl backdrop-blur-xl md:hidden">
                        <li>
                            <a
                                href="#destinasi"
                                onClick={closeMenu}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white/10"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                                    <circle cx="12" cy="10" r="2.5" />
                                </svg>
                                Destinasi
                            </a>
                        </li>

                        <hr className="border-white/10" />

                        <li>
                            <a
                                href="#ai"
                                onClick={closeMenu}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white/10"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
                                    <path d="m19 14 1 2.5 2.5 1-2.5 1L19 21l-1-2.5-2.5-1 2.5-1L19 14Z" />
                                </svg>
                                Tanya AI
                            </a>
                        </li>

                        <hr className="border-white/10" />

                        <li>
                            <a
                                href="#tentang"
                                onClick={closeMenu}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white/5"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4" />
                                    <path d="M12 8h.01" />
                                </svg>
                                Tentang
                            </a>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}