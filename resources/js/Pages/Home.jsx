

import { useMemo, useState } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import SearchSection from "../Components/SearchSection";
import DestinationSection from "../Components/DestinationSection";
import RecommendationSection from "../Components/RecommendationSection";
import Footer from "../Components/Footer";

export default function Home({ wisata = [], kategoris = [], kabupatens = [] }) {
    const [search, setSearch] = useState("");
    const [selectedKategori, setSelectedKategori] = useState("");
    const [selectedKabupaten, setSelectedKabupaten] = useState("");

    const filteredWisata = useMemo(() => {
        const keyword = search.trim().toLowerCase();

        return wisata.filter((item) => {
            const cocokKataKunci =
                !keyword ||
                [
                    item.nama_wisata,
                    item.kategori?.nama_kategori,
                    item.kabupaten?.nama_kabupaten,
                    item.alamat,
                    item.deskripsi,
                ]
                    .filter(Boolean)
                    .some((value) =>
                        String(value ?? "").toLowerCase().includes(keyword),
                    );

            const cocokKategori =
                !selectedKategori ||
                String(item.kategori_id) === selectedKategori;

            const cocokKabupaten =
                !selectedKabupaten ||
                String(item.kabupaten_id) === selectedKabupaten;

            return cocokKataKunci && cocokKategori && cocokKabupaten;
        });
    }, [wisata, search, selectedKategori, selectedKabupaten]);

    return (
        <main className="relative min-h-screen bg-[#F8F7F2] text-[#18392B]">
            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <HeroSection wisata={wisata}>
                <div className="relative mx-auto max-w-7xl px-5 pb-12 sm:px-8">
                    <SearchSection
                        search={search}
                        setSearch={setSearch}
                        kategoris={kategoris}
                        kabupatens={kabupatens}
                        selectedKategori={selectedKategori}
                        setSelectedKategori={setSelectedKategori}
                        selectedKabupaten={selectedKabupaten}
                        setSelectedKabupaten={setSelectedKabupaten}
                    />
                </div>
            </HeroSection>

            <DestinationSection
                wisata={filteredWisata}
                search={search}
                setSearch={setSearch}
            />

            <RecommendationSection wisata={wisata} />

            {/* Footer */}
            <Footer />
        </main>
    );
}
