import { useEffect, useState } from "react";

const navItems = [
    { label: "Jelajah AI", id: "ai" },
    { label: "Rekomendasi", id: "rekomendasi" },
    { label: "Katalog Wisata", id: "destinasi" },
];

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState("destinasi");

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio,
                    )[0];

                if (visibleSection) {
                    setActiveMenu(visibleSection.target.id);
                }
            },
            {
                rootMargin: "-20% 0px -65% 0px",
                threshold: 0,
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-[#18392B]/10 bg-[#F8F7F2]/95 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">

                {/* Brand */}
                <a href="/" className="flex shrink-0 items-center gap-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#064E3B] text-sm font-bold text-white">
                        JL
                    </span>

                    <span>
                        <span className="block text-sm font-bold leading-tight text-[#18392B]">
                            Jelajah Lampung
                        </span>
                        <span className="block text-[10px] tracking-[0.16em] text-[#647567]">
                            BUMI RUWA JURAI
                        </span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 rounded-full border border-[#18392B]/5 bg-white/70 p-1 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setActiveMenu(item.id)}
                            className={`rounded-full px-4 py-2.5 text-sm transition ${
                                activeMenu === item.id
                                    ? "bg-[#064E3B] font-medium text-white"
                                    : "text-[#526258] hover:bg-[#18392B]/5 hover:text-[#064E3B]"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* AI Action */}
                <a
                    href="#ai"
                    onClick={() => setActiveMenu("ai")}
                    className="shrink-0 rounded-full bg-[#064E3B] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#28543F] sm:px-5 sm:text-sm"
                >
                    Tanya Si Gajah
                </a>
            </nav>
        </header>
    );
}
