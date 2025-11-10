export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      text: "You don't need a man. You need Midnight Heat. My apartment has never smelled this good.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jordan K.",
      text: "These candles hit different. The scent profiles are INTENSE. This is what luxury actually feels like.",
      rating: 5,
    },
    {
      id: 3,
      name: "Alex T.",
      text: "Dark Velvet burned longer than my last relationship. Worth every penny, no cap.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full px-4 py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-in-up">
          <p className="text-sm font-bold tracking-widest uppercase mb-4 bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
            Real Talk
          </p>
          <h2 className="text-6xl md:text-7xl font-black text-white/80 leading-tight animate-slide-in-up">
            What Buyers{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={review.id}
              className={`
                relative p-8 rounded-2xl
                bg-gradient-to-br from-yellow-200/5 via-amber-400/10 to-orange-600/5
                border border-white/20
                transition-all duration-500
                hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,191,0,0.25)]
                group animate-slide-in-up stagger-${idx + 1}
              `}
            >
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 opacity-50 transition-all duration-500 pointer-events-none" />

              <div className="flex gap-1 mb-6">
                {Array(review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="
                        text-transparent bg-clip-text 
                        bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 
                        text-2xl font-black animate-bounce
                      "
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      ★
                    </span>
                  ))}
              </div>

              <p className="text-white/80 mb-8 leading-relaxed font-medium text-lg">
                "{review.text}"
              </p>

              <div className="pt-6 border-t border-white/20">
                <p className="font-black text-white/90 text-sm uppercase tracking-wide">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
