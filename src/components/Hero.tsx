import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import demo from '../assets/demo.png'

export default function Page() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768) // md breakpoint
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const links = ["Home", "About", "Products", "Contact"]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center h-16 gap-6 sm:gap-8 text-sm font-medium">
            {links.map((item) => (
              <a
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="cursor-pointer text-gray-300 font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-200 hover:via-amber-400 hover:to-orange-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-screen px-6 md:px-16 lg:px-24 bg-black text-white overflow-hidden pt-24 md:pt-0"
      >
        <div className="absolute top-20 right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl" />

        {isDesktop ? (
          <>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 18, duration: 1.4 }}
              className="flex-1 z-10 text-center md:text-left space-y-8 max-w-lg mx-auto md:mx-0"
            >
              <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent ">
                Light That Feels Like Home
              </p>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                Noir Ember
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                Every fragrance evokes emotion — create warmth and comfort with a candle that burns bold.
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 text-black font-bold rounded-full tracking-wide shadow-[0_0_25px_rgba(255,191,0,0.35)] hover:scale-105 hover:shadow-[0_0_40px_rgba(255,191,0,0.5)] transition-all duration-300">
                  Shop Now →
                </button>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center md:justify-end items-center relative w-full"
              initial={{ opacity: 0, scale: 0.7, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 18, duration: 1.4 }}
            >
              <img
  src={demo}
  alt="Luxury Candle"
  className="w-[70%] sm:w-[65%] md:w-[80%] lg:w-[75%] h-auto object-contain drop-shadow-[0_0_40px_rgba(255,191,0,0.4)] hover:drop-shadow-[0_0_80px_rgba(255,191,0,0.6)] transition-all duration-500"
/>

            </motion.div>
          </>
        ) : (
          <div className="w-full flex flex-col items-center justify-center gap-8 pt-8">
            <motion.div
              className="flex justify-center items-center relative w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={demo}
                alt="Luxury Candle"
                className="w-[70%] sm:w-[60%] h-auto object-contain drop-shadow-[0_0_40px_rgba(255,191,0,0.3)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 z-10 text-center space-y-8 max-w-lg mx-auto px-4"
            >
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent pt-8">
                Light That Feels Like Home
              </p>

              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                Noir Ember
              </h1>

              <p className="text-md sm:text-base text-white/80 leading-relaxed font-medium max-w-md mx-auto">
                Every fragrance evokes emotion — create warmth and comfort with a candle that burns bold.
              </p>

              <div className="flex justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 text-black font-bold rounded-full tracking-wide shadow-[0_0_25px_rgba(255,191,0,0.35)] hover:scale-105 hover:shadow-[0_0_40px_rgba(255,191,0,0.5)] transition-all duration-300">
                  Shop Now →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </>
  )
}
