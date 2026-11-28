import { useState } from "react";
import { useEffect } from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationSection({ wisata, search, setSearch }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 5;
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const paginatedWisata = wisata.slice(startIndex, endIndex);
    const totalPages = Math.ceil(wisata.length / itemPerPage);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, wisata]);

    return (
        <section
            id="destinasi"
            className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-20 pt-5 sm:px-8"
        >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Jelajahi destinasi
                    </h2>

                    <p className="mt-3 text-sm text-[#647567]">
                        {search
                            ? `${wisata.length} hasil untuk "${search}"`
                            : "Inspirasi perjalanan berikutnya dimulai di sini."}
                    </p>
                </div>
            </div>

            {wisata.length > 0 ? (
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {paginatedWisata.map((item) => (
                        <DestinationCard key={item.id_wisata} item={item} />
                    ))}
                </div> /* Ternary */
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
            <div className="flex flex-row justify-center gap-2 mt-4">
                {totalPages > 1 &&
                    pages.map((page) => (
                        <button key={page} onClick={() => setCurrentPage(page)}
                        className={`py-2 px-4 rounded-full border border-[#18392B] cursor-pointer hover:bg-green-800 hover:text-white transition-colors ${page === currentPage ? "bg-[#18392B] text-white" : "text-[#18392B] bg-white"}`}
                        >
                            {page}
                        </button>
                    ))}
            </div>
        </section>
    );
}
