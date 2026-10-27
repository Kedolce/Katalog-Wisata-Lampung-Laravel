
export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-[#18392B]/10 bg-[#F8F7F2]/95 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
                <a href="/" className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#18392B] text-xl text-white">
                        L
                    </span>
                    <span>
                        <span className="block text-base font-bold tracking-tight">
                            Lampung
                        </span>
                        <span className="block text-xs tracking-[0.18em] text-[#647567]">
                            TRAVEL GUIDE
                        </span>
                    </span>
                </a>

                <div className="hidden items-center gap-8 text-sm font-medium md:flex">
                    <a href="#destinasi" className="transition hover:text-[#C87941]">
                        Destinasi
                    </a>
                    <a href="#tentang" className="transition hover:text-[#C87941]">
                        Tentang
                    </a>
                    <a
                        href="#ai"
                        className="rounded-full bg-[#18392B] px-5 py-3 text-white transition hover:bg-[#28543F]"
                    >
                        Tanya AI ↗
                    </a>
                </div>

                <a
                    href="#ai"
                    className="rounded-full bg-[#18392B] px-4 py-2.5 text-sm font-medium text-white md:hidden"
                >
                    Tanya AI
                </a>
            </nav>
        </header>
    );
}