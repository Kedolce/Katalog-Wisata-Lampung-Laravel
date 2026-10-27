
import DestinationCard from "./DestinationCard";

export default function DestinationSection({
    wisata,
    search,
    setSearch,
}) {
    return (
        <section
            id="destinasi"
            className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-20 pt-5 sm:px-8"
        >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-[#C87941]">
                        PILIHAN UNTUKMU
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Jelajahi destinasi
                    </h2>

                    <p className="mt-3 text-sm text-[#647567]">
                        {search
                            ? `${wisata.length} hasil untuk "${search}"`
                            : "Inspirasi perjalanan berikutnya dimulai di sini."}
                    </p>
                </div>

                <p className="text-sm text-[#647567]">
                    {wisata.length} destinasi
                </p>
            </div>

            {wisata.length > 0 ? (
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {wisata.map((item) => (
                        <DestinationCard
                            key={item.id_wisata}
                            item={item}
                        />
                    ))}
                </div>
            ) : (
                <div className="mt-8 rounded-3xl border border-dashed border-[#18392B]/20 bg-white/60 px-6 py-16 text-center">
                    <p className="text-lg font-semibold">
                        Destinasi belum ditemukan
                    </p>

                    <p className="mt-2 text-sm text-[#647567]">
                        Coba kata kunci lain atau hapus pencarianmu.
                    </p>

                    <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="mt-5 rounded-full bg-[#18392B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#28543F]"
                    >
                        Tampilkan semua wisata
                    </button>
                </div>
            )}
        </section>
    );
}