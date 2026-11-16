
import DestinationCard from "./DestinationCard";

export default function RecommendationSection({ wisata = [] }) {
    const rekomendasi = [...wisata]
        .sort((a, b) => Number(b.rating) - Number(a.rating))
        .slice(0, 4);

    return (
        <section
            id="rekomendasi"
            className="scroll-mt-24"
        >
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

                {/* Section Header */}
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C87941]">
                            Pilihan Terbaik
                        </span>

                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#18392B] sm:text-3xl">
                            Rekomendasi untuk Dijelajahi
                        </h2>

                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#647567]">
                            Temukan destinasi wisata Lampung dengan rating terbaik.
                        </p>
                    </div>

                    <a
                        href="#destinasi"
                        className="text-sm font-semibold text-[#064E3B] transition hover:text-[#C87941]"
                    >
                        Lihat semua destinasi →
                    </a>
                </div>

                {/* Recommendation Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {rekomendasi.map((item) => (
                        <DestinationCard
                            key={item.id_wisata}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}