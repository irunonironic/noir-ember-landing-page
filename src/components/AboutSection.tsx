import candle from "../assets/candle.jpeg";

export default function About() {
  return (
    <section
      className="w-full px-4 py-20 md:py-32 bg-black relative overflow-hidden"
      id="about"
    >
      <div className="absolute -right-32 top-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                Our Story
              </p>
              <h2 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                Crafted for the{" "}
                <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                  Fearless
                </span>
              </h2>
            </div>

            <p className="text-lg text-white/80 leading-relaxed">
              Every candle is hand-poured with one simple rule: no compromise.
              We use 100% natural soy wax, essential oil blends, and the kind of
              confidence that comes from knowing you're the best.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              Our scents last longer than your situationships. Our vibes match
              the chaos. Our packaging doesn't ghost you.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "100% Natural Soy Wax",
                "Hand-Poured Excellence",
                "Sustainable & Sassy",
                "Burn Longer. Smell Better. Live Boldly.",
              ].map((item, idx) => (
                <li
                  key={item}
                  className={`flex items-center gap-4 text-gray-300 font-medium text-lg animate-slide-in-left stagger-${
                    idx + 1
                  }`}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(255,191,0,0.6)] animate-pulse" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

       
          <div className="relative group animate-slide-in-right flex justify-center md:justify-end">
        
            <div className="absolute -inset-3  via-amber-400/30 to-orange-500/20 rounded-2xl  opacity-60 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative w-[230px] sm:w-[270px] md:w-[320px] aspect-[4/5] bg-gradient-to-br from-yellow-200/10 to-orange-400/5 rounded-2xl shadow-[0_0_60px_rgba(255,191,0,0.45)] p-4 flex items-center justify-center group-hover:shadow-[0_0_90px_rgba(255,191,0,0.6)] transition-all duration-500 hover:-rotate-1 animate-float">
              <div className="text-center space-y-3">
                <img
                  src={candle}
                  alt="Luxury Candle"
                  className="w-full h-full object-cover rounded-xl transition-all duration-500"
                />
                <p className="text-gray-400 font-medium text-sm md:text-base">
                  Hand-Crafted Perfection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
