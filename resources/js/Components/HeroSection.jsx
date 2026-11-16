export default function HeroSection({
    jumlahWisata = 0,
    wisata = [],
    children,
}) {
    const heroWisata = wisata[0];

    const imageName = heroWisata?.gambar
        ? heroWisata.gambar.split("/").pop()
        : null;

    const imageUrl = imageName ? `/images/wisata/${imageName}` : null;

    return (
        <section className="relative isolate overflow-hidden text-white">
            {/* Background image */}
            <div
                className={`absolute inset-0 -z-20 scale-105 ${
                    imageUrl
                        ? "bg-cover bg-center blur-[2px]"
                        : "bg-gradient-to-br from-[#18392B] to-[#647567]"
                }`}
                style={
                    imageUrl
                        ? { backgroundImage: `url("${imageUrl}")` }
                        : undefined
                }
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 -z-10 bg-[#102B20]/65" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#102B20]/20 via-transparent to-[#102B20]/70" />

            {/* Main content */}
            <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-20 pt-28 text-center sm:px-8 sm:pt-36">
                <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    Sudah siap menemukan tempat baru?
                </h1>

                <div className="mt-8 w-full">{children}</div>

                <p className="mt-5 text-sm text-white/75">
                    Jelajahi {jumlahWisata} destinasi wisata di Lampung
                </p>
            </div>
        </section>
    );
}
