export default function Cta() {
  return (
    <section className="relative w-full px-6 py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-amber-400/20 to-transparent blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
        {/* Top Line */}
        <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-amber-400 uppercase">
          Ignite Your Aura
        </p>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-white/90">
          <span className="block font-serif text-white/80">Ready to</span>
          <span className="block bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent uppercase">
            Light Up?
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 leading-relaxed font-light">
          Endless allure. No promises broken. Every scent a secret.  
          Every flame a statement.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-10">
          <button className="w-48 h-12 bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 text-black font-semibold text-sm  tracking-wide rounded-xl shadow-[0_0_20px_rgba(255,191,0,0.25)] hover:scale-105 hover:shadow-[0_0_35px_rgba(255,191,0,0.4)] transition-all duration-300 tracking-widest">
            Shop Collection
          </button>
          <button className="w-48 h-12 border border-white/80 text-white font-semibold text-sm  tracking-widest rounded-xl hover:bg-white hover:text-black transition-all duration-300">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
