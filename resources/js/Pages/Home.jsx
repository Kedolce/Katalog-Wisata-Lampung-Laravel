export default function Home({ wisata }) {
    return (
        <main className="min-h-screen bg-[#F7F3EA] px-6 py-16 text-[#18392B]">
            <div className="mx-auto max-w-5xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C87941]">
                    Katalog Wisata Lampung
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight">
                    Jelajahi Lampung
                </h1>

                <p className="mt-3 text-lg">
                    Temukan destinasi wisata favoritmu.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {wisata.map((item) => (
                        <article
                            key={item.id_wisata}
                            className="rounded-2xl border border-[#18392B]/10 bg-white/70 p-5 shadow-sm"
                        >
                            <h2 className="text-xl font-semibold">
                                {item.nama_wisata}
                            </h2>

                            <p className="mt-2 text-sm text-[#18392B]/70">
                                {item.alamat}
                            </p>

                            <p className="mt-4 text-sm font-medium">
                                ★ {item.rating}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
