
export default function SearchSection({ search, setSearch }) {
    return (
        <div className="rounded-3xl border border-[#18392B]/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-[#C87941]">
                TEMUKAN TEMPATMU
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Mau pergi ke mana?
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#647567]">
                Cari berdasarkan nama wisata, kategori, atau kabupaten.
            </p>

            <label
                htmlFor="search-wisata"
                className="mt-5 flex items-center gap-3 rounded-2xl border border-[#18392B]/15 bg-[#F8F7F2] px-4 py-4 transition focus-within:border-[#C87941]"
            >
                <span aria-hidden="true">⌕</span>

                <input
                    id="search-wisata"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Contoh: pantai, Pesawaran..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#849087]"
                />

                {search && (
                    <button
                        type="button"
                        onClick={() => setSearch('')}
                        className="text-sm text-[#647567] hover:text-[#18392B]"
                    >
                        Hapus
                    </button>
                )}
            </label>
        </div>
    );
}