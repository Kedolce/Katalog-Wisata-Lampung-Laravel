export default function RecommendationCard({ item }) {
    return (
        <a
            href="#"
            aria-label={`Lihat detail ${item.nama_wisata}`}
            className="group relative isolate block h-full w-full cursor-pointer overflow-hidden bg-[#18392B]   rounded-lg border border-white/20"
        >
            {/* Destination Image */}
            <img
                src={`/images/wisata/${item.gambar.split("/").pop()}`}
                alt={item.nama_wisata}
                loading="lazy"
                className="
                    absolute inset-0 -z-20 h-full w-full object-cover
                    opacity-40
                    transition-all duration-700 ease-out
                    group-hover:scale-105
                    group-hover:opacity-100
                "
            />

            {/* Image Overlay */}
            <div
                className="
                    absolute inset-0 -z-10
                    bg-gradient-to-t from-black/75 via-black/10 to-black/15
                    opacity-100 transition-opacity duration-700
                    group-hover:from-black/45
                    group-hover:via-transparent
                    group-hover:to-transparent
                "
            />

            {/* Rating */}
            <div className="absolute right-2 top-2 flex items-center gap-1 text-[10px] font-medium text-white sm:right-3 sm:top-3 sm:text-xs lg:right-4 lg:top-4 lg:text-sm">
                <span className="text-amber-300">★</span>
                {item.rating ?? "—"}
            </div>

            {/* Destination Information */}
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 lg:p-5">
                <p className="text-[9px] font-medium uppercase tracking-wider text-white/75 sm:text-[10px] lg:text-xs">
                    {item.kabupaten?.nama_kabupaten ?? "Lampung"}
                </p>

                <h3 className="mt-1 text-sm font-semibold leading-tight tracking-tight text-white sm:text-base lg:mt-2 lg:text-xl">
                    {item.nama_wisata}
                </h3>
            </div>
        </a>
    );
}
