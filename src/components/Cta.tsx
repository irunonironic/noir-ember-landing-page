"use client";

export default function Cta() {
  return (
    <section className="w-full px-4 py-20 md:py-32 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <div className="space-y-6">
          <p className="text-sm font-bold tracking-widest text-accent uppercase bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent ">
            Ignite Your Aura
          </p>
          <h2 className="text-6xl md:text-8xl font-black text-background leading-tight text-balance text-white/80">
            Ready to{" "}
            <span className="text-accent bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent uppercase">
              {" "}
              Light Up?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-background/90 leading-relaxed max-w-3xl mx-auto font-medium text-white/80">
            Endless allure. No promises broken. Every scent a secret. Every
            flame a statement.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
  
          <button
            className="
      w-56 h-14
      bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600
      text-black font-extrabold text-base sm:text-lg uppercase tracking-wide
      rounded-2xl shadow-[0_0_20px_rgba(255,191,0,0.3)]
      hover:scale-105 hover:shadow-[0_0_40px_rgba(255,191,0,0.5)]
      transition-all duration-300
    "
          >
            Shop Collection
          </button>

          <button
            className="
      w-56 h-14
      border-2 border-white/80 text-white/80 bg-black
      font-extrabold text-base sm:text-lg uppercase tracking-wide rounded-2xl
      hover:bg-white hover:text-black
      hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
      transition-all duration-300
    "
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
