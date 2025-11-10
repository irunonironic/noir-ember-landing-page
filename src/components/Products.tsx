import { useState } from "react";
import midnight from "../assets/midnights.jpeg";
import rebel from "../assets/rebel.jpeg";
import velvet from "../assets/velvet.jpeg";

export default function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Midnight Glow",
      scent: "Black Musk & Amber",
      price: "$48",
      description: "Dark. Dangerous. Irresistible.",
      image: midnight,
    },
    {
      id: 2,
      name: "Rebel Rose",
      scent: "Rose & Sandalwood",
      price: "$60",
      description: "Soft but make it fierce.",
      image: rebel,
    },
    {
      id: 3,
      name: "Dark Velvet",
      scent: "Leather & Oud",
      price: "$180",
      description: "Luxury has never been this bold.",
      image: velvet,
    },
  ];

  const handleAddToCart = (id: number) => {
    setAddedToCart(id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <section
      className="w-full px-4 py-20 md:py-32 bg-black relative overflow-hidden"
      id="products"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-sm font-bold tracking-widest uppercase mb-4 bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
            Pick Your Candle
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent leading-tight mb-6">
            Signature Collection
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Each flame tells a story. Choose yours.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`group cursor-pointer animate-slide-in-up stagger-${
                idx + 1
              }`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-300/40 via-transparent to-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,191,0,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_70px_rgba(255,191,0,0.35)] group-hover:-rotate-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                </div>

                <div className="absolute inset-0 bg-black/20 rounded-2xl transition-colors duration-300" />
              </div>

              <div className="space-y-3 relative text-center md:text-left">
                <h3
                  className="
                    text-2xl font-bold text-white/80 
                    transition-all duration-300 
                    group-hover:text-transparent 
                    group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r 
                    group-hover:from-yellow-200 
                    group-hover:via-amber-400 
                    group-hover:to-orange-600
                  "
                >
                  {product.name}
                </h3>
                <p
                  className="
                    text-white/70 font-semibold text-sm uppercase tracking-wide 
                    transition-all duration-300 
                    group-hover:text-transparent 
                    group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r 
                    group-hover:from-yellow-200 
                    group-hover:via-amber-400 
                    group-hover:to-orange-600
                  "
                >
                  {product.scent}
                </p>
                <p
                  className="
                    text-white/60 font-medium text-sm italic 
                    transition-all duration-300 
                    group-hover:text-transparent 
                    group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r 
                    group-hover:from-yellow-200 
                    group-hover:via-amber-400 
                    group-hover:to-orange-600
                  "
                >
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {/* Price */}
                  <span className="text-2xl md:text-3xl font-extrabold text-white/90 leading-none translate-y-[1px]">
                    {product.price}
                  </span>

                  {/* Add Button */}
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={`flex items-center justify-center gap-2 px-6 py-[9px] 
      font-semibold rounded-full text-sm tracking-wide 
      transition-all duration-300 overflow-hidden relative
      ${
        addedToCart === product.id
          ? "bg-yellow-500 text-black"
          : "bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,191,0,0.4)]"
      }`}
                  >
                    {addedToCart === product.id ? (
                      <>
                        <span>✓</span>
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <span>Add</span>
                        <span className="text-base translate-y-[1px]">→</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
