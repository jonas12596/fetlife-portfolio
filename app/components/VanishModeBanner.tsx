export default function VanishModeBanner({ vanishMode }: { vanishMode: boolean }) {
    return (
        <div className={`transition-all duration-500 ${vanishMode ? "opacity-100 max-h-20 py-1" : "opacity-0 max-h-0 py-0"} bg-[#b0090c] text-white text-sm text-center overflow-hidden`}>
            Vanish Mode Active — Messages will disappear
        </div>
    )
}