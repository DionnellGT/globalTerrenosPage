import { useState } from "react";
import { testimonios } from "@/data/testimonios";

export const Testimonios = () => {
  const [current, setCurrent] = useState(0);
  const [flipping, setFlipping] = useState(false);

  const goTo = (i: number) => {
    setFlipping(true);
    setTimeout(() => {
      setCurrent(i);
      setFlipping(false);
    }, 300);
  };

  return (
    <section
      id="testimonios"
      className="relative py-10 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/testimonials_bg.webp')" }}
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#c8a870] text-[13px] font-bold tracking-[0.2em] uppercase mb-3">
            Testimonios
          </p>
          <h2 className="font-bold text-white text-4xl md:text-5xl">
            Nuestros Clientes
          </h2>
        </div>

        {/* Card testimonio */}
        <div key={current}
            className={`md:w-[50vw] mx-auto bg-black/80 rounded-2xl p-8 md:p-10 ${flipping ? "" : "animate-flip"}`}
            style={{ perspective: "1000px" }}
        >
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">

            {/* Foto + nombre */}
            <div className="flex flex-col items-center gap-3 flex-shrink-0 max-md:mx-auto">
              <img
                src={testimonios[current].image}
                alt={testimonios[current].name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="text-[#c8a870] font-semibold text-[15px] text-center leading-snug">
                {testimonios[current].name}
              </p>
            </div>

            {/* Divisor vertical */}
            <div className="hidden md:block w-px self-stretch bg-white/20 mx-2" />

            {/* Texto testimonio */}
            <p className="text-white/85 text-[15px] leading-relaxed italic">
              {testimonios[current].text}
            </p>

          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonios.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                i === current
                  ? "border-white bg-white"
                  : "border-white/60 bg-transparent"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};