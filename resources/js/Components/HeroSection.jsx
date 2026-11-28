

export default function HeroSection({ children }) {
    const imageUrl = "/images/wisata/pulau-pisang.webp";

    return (
        <section className="relative isolate min-h-0 overflow-hidden text-white ">
            {/* Background image */}

            <div
                className="absolute inset-0 -z-20 scale-105 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${imageUrl}")`,
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 -z-10 bg-[#102B20]/55" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#102B20]/20 via-transparent to-[#102B20]/70" />

            {/* Main content */}
            <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-4 pb-14 pt-28 text-center sm:px-8 sm:pb-20 sm:pt-36">
                <h1 className="text-lg font-semibold tracking-tight sm:text-3xl">
                    Sudah siap menemukan tempat baru?
                </h1>

                <div className="mt-6 w-full sm:mt-8">{children}</div>
            </div>
        </section>
    );
}
