
import { useEffect, useState } from "react";

export default function SearchSection({ search, setSearch, wisata = [] }) {
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const keyword = search.trim().toLowerCase();

        if (!keyword) {
            setSuggestions([]);
            return;
        }

        const timeout = setTimeout(() => {
            const results = wisata
                .map((item) => {
                    const fields = [
                        item.nama_wisata,
                        item.kategori?.nama_kategori,
                        item.kabupaten?.nama_kabupaten,
                        item.alamat,
                        item.deskripsi,
                    ];

                    const matched = fields.some((value) =>
                        String(value ?? "").toLowerCase().includes(keyword),
                    );

                    return matched ? item : null;
                })
                .filter(Boolean)
                .slice(0, 5);

            setSuggestions(results);
        }, 350);

        return () => clearTimeout(timeout);
    }, [search, wisata]);

    const handleSelect = (item) => {
        setSearch(item.nama_wisata);
        setShowSuggestions(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(search.trim());
        setShowSuggestions(false);

        document.getElementById("destinasi")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="relative rounded-2xl border border-white/20 bg-white/5 p-2 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-5">
            {/* Search Bar */}
            <form onSubmit={handleSubmit}>
                <div className="flex min-h-12 items-center gap-2 rounded-xl bg-white/10 px-3 sm:min-h-14 sm:gap-3 sm:px-4">
                    <span className="shrink-0 text-xl text-white/60 sm:text-2xl">
                        ⌕
                    </span>

                    <input
                        type="text"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value);
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        placeholder="Cari destinasi wisata..."
                        className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-white/60 sm:text-sm"
                    />

                    <button
                        type="submit"
                        aria-label="Cari destinasi"
                        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-sm transition hover:bg-white/25 sm:h-10 sm:w-10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M12 19V5" />
                            <path d="m5 12 7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </form>

            {/* Rekomendasi */}
            {showSuggestions && search.trim() && (
                <div className="absolute left-2 right-2 top-full z-50 mt-2 overflow-hidden rounded-xl border border-[#18392B]/10 bg-[#F8F7F2] p-2 shadow-xl sm:left-4 sm:right-4">
                    {suggestions.length > 0 ? (
                        <>
                            <p className="px-3 py-2 text-xs font-semibold text-[#647567]">
                                Rekomendasi destinasi
                            </p>

                            {suggestions.map((item) => (
                                <button
                                    key={item.id_wisata}
                                    type="button"
                                    onClick={() => handleSelect(item)}
                                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left transition hover:bg-[#18392B]/5"
                                >
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold text-[#18392B]">
                                            {item.nama_wisata}
                                        </p>
                                        <p className="mt-1 truncate text-xs text-[#647567]">
                                            {item.kategori?.nama_kategori}
                                            {item.kabupaten?.nama_kabupaten &&
                                                ` · ${item.kabupaten.nama_kabupaten}`}
                                        </p>
                                    </div>

                                    <span className="ml-3 shrink-0 text-[#647567]">
                                        ↗
                                    </span>
                                </button>
                            ))}
                        </>
                    ) : (
                        <p className="px-3 py-2 text-sm text-[#647567]">
                            Belum ada destinasi yang cocok. Coba kata kunci
                            lain.
                        </p>
                    )}
                </div>
            )}

            {/* Tanya AI */}
            <div className="mt-3 flex justify-end">
                <a
                    href="#ai"
                    className="inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white shadow-sm backdrop-blur-md transition hover:bg-white/20"
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
            </div>
        </div>
    );
}
