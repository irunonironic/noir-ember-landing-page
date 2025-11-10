export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="
        w-full px-4 py-16 md:py-24 
        relative overflow-hidden
        bg-gradient-to-b from-[#0d0d0d] via-black to-[#000000]
        border-t border-transparent
      "
    >
      <div className="absolute top-0 left-0 w-full">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-90" />
        <div className="absolute top-[2px] left-0 w-full h-8 bg-gradient-to-b from-amber-400/25 to-transparent blur-2xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4 animate-slide-in-up">
            <h3 className="font-black text-2xl bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent"></h3>
            <p className="text-white/70 font-medium leading-relaxed">
              Hand-poured elegance. Bold scents. Burn with intention.
            </p>
          </div>
          {[
            {
              title: "Shop",
              links: ["All Candles", "Limited Edition", "Gifts"],
            },
            { title: "Brand", links: ["About Us", "Contact", "Journal"] },
            { title: "Connect", links: ["Instagram", "TikTok", "Newsletter"] },
          ].map((section, idx) => (
            <div
              key={section.title}
              className={`animate-slide-in-up stagger-${idx + 1}`}
            >
              <h4 className="font-black text-white/80 mb-6 uppercase tracking-wider text-sm">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="relative font-medium text-white/60 hover:text-white transition-all duration-300 group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/50 animate-fade-in">
          <p className="font-medium">
            &copy; {currentYear} Noir Ember. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Shipping"].map((link) => (
              <a
                key={link}
                href="#"
                className="relative font-medium text-white/60 hover:text-white transition-all duration-300 group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
