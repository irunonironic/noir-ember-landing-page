import candle from "../assets/demo.png";

export default function Page() {
 

   const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const links = ["Home", "About", "Products", "Contact"]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center h-16 gap-6 sm:gap-8 text-sm font-medium">
          {links.map((item) => {
            const id = item.toLowerCase()
            return (
              <a
                key={item}
                onClick={() => scrollToSection(id)}
                className="
                  relative cursor-pointer text-gray-300 font-medium 
                  transition-all duration-300 
                  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r 
                  hover:from-yellow-200 hover:via-amber-400 hover:to-orange-600
                "
              >
                {item}
              </a>
            )
          })}
        </div>
      </div>
      </nav>
      <section
        id="home"
        className="relative flex flex-col-reverse md:flex-row items-center justify-center w-full min-h-screen px-6 md:px-16 lg:px-20 bg-black text-white overflow-hidden"
      >
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl" />

        <div className="flex-1 z-10 max-w-xl text-center md:text-left space-y-6">
          <p className="text-xs md:text-sm font-bold tracking-widest bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent uppercase">
            Light that feels like home
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent leading-tight">
            Noir{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
              Ember
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium text-white/80">
            We believe that every fragrance can evoke emotions and take you on
            an unforgettable journey. Create an atmosphere of warmth and comfort
            with our candles.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 text-black font-bold rounded-xl uppercase tracking-wide shadow-lg hover:scale-105 transition-transform duration-300">
              Shop Now →
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end items-center relative w-full h-full mt-10 md:mt-0">
          <img
            src={candle}
            alt="Luxury Candle"
            className="
            w-[90%]               /* Mobile size — keep it as is */
            md:w-[95%]            /* Slightly larger on tablet */
            lg:w-[85%] xl:w-[80%] /* Larger on desktop but not overwhelming */
            h-auto 
            object-contain 
            drop-shadow-[0_0_60px_rgba(255,191,0,0.45)] 
            transition-all duration-500"
          />
        </div>
      </section>
    </>
  );
}
