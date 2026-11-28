import RecommendationCard from "./RecommendationCard";

export default function RecommendationSection({ wisata = [] }) {
    const rekomendasi = [...wisata]
        .sort((a, b) => Number(b.rating) - Number(a.rating))
        .slice(0, 5);

    const cardLayouts = [
        "lg:translate-y-6",
        "lg:-translate-y-3",
        "lg:translate-y-8",
        "lg:-translate-y-5",
        "lg:translate-y-4",
    ];

    return (
        <section
            id="rekomendasi"
            className="relative z-10 -mt-8 scroll-mt-24 pb-20 sm:-mt-12"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div
                    className="
                        flex snap-x snap-mandatory gap-3
                        overflow-x-auto px-5 pb-8
                        [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden

                        md:grid md:grid-cols-5
                        md:gap-3 md:overflow-visible md:px-0

                        lg:gap-5
                    "
                >
                    {rekomendasi.map((item, index) => (
                        <div
                            key={item.id_wisata}
                            className={`
                                h-[230px] w-[175px] shrink-0
                                snap-start

                                sm:h-[250px] sm:w-[190px]

                                md:h-[290px] md:w-auto md:min-w-0

                                lg:h-[340px]
                                ${cardLayouts[index]}
                            `}
                        >
                            <RecommendationCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
