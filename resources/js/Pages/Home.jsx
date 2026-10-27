import { useMemo, useState } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import SearchSection from "../Components/SearchSection";
import AiAssistantSection from "../Components/AiAssistantSection";
import DestinationSection from "../Components/DestinationSection";
import Footer from "../Components/Footer";

export default function Home({ wisata = [] }) {
    const [search, setSearch] = useState("");

    const filteredWisata = useMemo(() => {
        const keyword = search.trim().toLowerCase();

        if (!keyword) return wisata;

        return wisata.filter((item) =>
            [
                item.nama_wisata,
                item.kategori?.nama_kategori,
                item.kabupaten?.nama_kabupaten,
                item.alamat,
            ]
                .filter(Boolean)
                .some((value) => String(value).toLowerCase().includes(keyword)),
        );
    }, [wisata, search]);

    return (
        <main className="min-h-screen bg-[#F8F7F2] text-[#18392B]">
            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <HeroSection jumlahWisata={wisata.length} />

            {/* Search and AI */}
            <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
                <SearchSection search={search} setSearch={setSearch} />
                <AiAssistantSection />
            </section>

            {/* Destination list */}
            <DestinationSection
                wisata={filteredWisata}
                search={search}
                setSearch={setSearch}
            />

            {/* Footer */}
            <Footer />
        </main>
    );
}
