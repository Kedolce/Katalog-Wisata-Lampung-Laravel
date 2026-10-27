
export default function HeroSection({ jumlahWisata = 0 }) {
    return (
        <section className="relative overflow-hidden bg-[#18392B] text-white">
            <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#C87941]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-[#8BA68B]/20 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
                <div>
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[#E6C6A5]">
                        <span>✳</span> PESONA SUMATERA
                    </p>

                    <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
                        Temukan sisi
                        <span className="font-serif italic text-[#E6C6A5]">
                            {' '}lain
                        </span>
                        <br />
                        dari Lampung.
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                        Dari pantai berair jernih hingga perbukitan hijau.
                        Temukan destinasi yang cocok untuk petualanganmu.
                    </p>

                    <a
                        href="#destinasi"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#E6C6A5] px-6 py-3.5 font-semibold text-[#18392B] transition hover:bg-white"
                    >
                        Jelajahi destinasi <span>↗</span>
                    </a>

                    <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
                        <div>
                            <p className="text-2xl font-semibold">{jumlahWisata}</p>
                            <p className="mt-1 text-sm text-white/60">
                                Destinasi terdaftar
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold">1</p>
                            <p className="mt-1 text-sm text-white/60">
                                Provinsi untuk dijelajahi
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-lg">
                    <div className="absolute -inset-3 rotate-3 rounded-4xl border border-white/20" />

                    <div className="relative flex min-h-85 flex-col justify-between overflow-hidden rounded-[1.7rem] bg-linear-to-br from-[#648A72] via-[#315E4A] to-[#102B20] p-7 sm:min-h-107.5 sm:p-10">
                        <div className="absolute -right-12 top-12 h-56 w-56 rounded-full border border-white/20" />
                        <div className="absolute -right-3 top-20 h-40 w-40 rounded-full border border-white/20" />
                        <div className="absolute -bottom-20 -left-8 h-64 w-64 rounded-full bg-[#D6B48D]/20 blur-2xl" />

                        <div className="relative">
                            <p className="text-xs font-semibold tracking-[0.2em] text-white/70">
                                YOUR NEXT ESCAPE
                            </p>
                            <p className="mt-3 max-w-xs text-3xl font-medium leading-tight sm:text-4xl">
                                Petualanganmu dimulai dari sini.
                            </p>
                        </div>

                        <div className="relative flex items-end justify-between gap-4">
                            <div>
                                <p className="text-sm text-white/70">
                                    Jelajahi tanpa terburu-buru.
                                </p>
                                <p className="mt-2 text-xl font-semibold">
                                    Lampung, Indonesia
                                </p>
                            </div>
                            <span className="text-5xl" aria-hidden="true">
                                ◒
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}