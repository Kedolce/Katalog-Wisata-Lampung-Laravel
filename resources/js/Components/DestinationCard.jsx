
import { useState } from "react";

export default function DestinationCard({ item }) {
    const [imageError, setImageError] = useState(false);

    const imageName = item.gambar
        ? item.gambar.split("/").pop()
        : null;

    const imageUrl = imageName
        ? `/images/wisata/${imageName}`
        : null;

    return (
        <article className="group overflow-hidden rounded-3xl border border-[#18392B]/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#18392B]/10">
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#D9E4D5] via-[#A8C3AC] to-[#557B61]">
                {imageUrl && !imageError ? (
                    <img
                        src={imageUrl}
                        alt={item.nama_wisata}
                        loading="lazy"
                        onError={() => setImageError(true)}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-[#18392B]/70">
                        <span className="text-4xl" aria-hidden="true">
                            🌿
                        </span>
                        <span className="text-xs font-medium">
                            Foto belum tersedia
                        </span>
                    </div>
                )}

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#18392B]">
                    {item.kategori?.nama_kategori ?? "Wisata"}
                </span>

                <span className="absolute bottom-4 right-4 rounded-full bg-[#18392B]/90 px-3 py-1.5 text-sm font-semibold text-white">
                    ★ {item.rating ?? "—"}
                </span>
            </div>

            <div className="p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-[#C87941]">
                    {item.kabupaten?.nama_kabupaten ?? "Lampung"}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {item.nama_wisata}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#647567]">
                    {item.deskripsi || item.alamat || "Belum ada deskripsi."}
                </p>

                <div className="mt-5 border-t border-[#18392B]/10 pt-4">
                    <p className="line-clamp-2 text-xs leading-5 text-[#647567]">
                        <span aria-hidden="true">📍 </span>
                        {item.alamat || "Lokasi belum tersedia"}
                    </p>
                </div>
            </div>
        </article>
    );
}