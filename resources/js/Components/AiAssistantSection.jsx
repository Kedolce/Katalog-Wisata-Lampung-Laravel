
export default function AiAssistantSection() {
    return (
        <div className="rounded-3xl border border-[#18392B]/10 bg-white p-6 sm:p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-[#C87941]">
                TEMAN PERJALANAN
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Bingung mau ke mana?
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#647567]">
                Temukan inspirasi wisata Lampung untuk perjalananmu berikutnya.
            </p>

            <button
                type="button"
                className="mt-6 rounded-full bg-[#18392B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#28543F]"
            >
                Segera hadir
            </button>
        </div>
    );
}