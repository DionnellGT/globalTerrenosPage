import { VideoSection } from "./VideoSeccion";

export const QuienesSomos = () => {
  return (
    <section id="somos" className="bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-9 mb-7">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Columna izquierda — texto */}
          <div>
            <p className="text-[#a07030] text-[12px] font-semibold tracking-[0.18em] uppercase mb-3">
              Conócenos
            </p>

            <h2 className="font-bold text-stone-900 text-4xl md:text-5xl leading-tight mb-2">
              ¿Quienes
            </h2>
            <h2 className="font-bold text-[#a07030] text-4xl md:text-5xl leading-tight mb-6">
              somos?
            </h2>

            <p className="text-stone-500 text-[15px] leading-relaxed mb-8 max-w-sm">
              Somos profesionales dedicados a la liquidación de activos, enfocados
              en facilitar y efectuar tu liquidez. Somos la mejor opción para
              ayudarte en la compra de tu parcela.
            </p>

            <a
              href="#contactanos"
              className="inline-block px-7 py-3 rounded-full bg-[#a07030] text-white font-semibold text-[14px] tracking-wide hover:bg-[#8a5f28] transition-colors duration-200"
            >
              Conócenos
            </a>
          </div>

          {/* Columna derecha — imágenes superpuestas */}
          <div className="relative h-[420px] md:h-[480px]">

            {/* home_2.jpg — fondo, ocupa toda la columna derecha, recortada */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src="/home_2.webp"
                alt="Paisaje El Avellano"
                className="w-full h-full object-cover"
              />
            </div>

            {/* home_1.jpg — encima, centrada y más pequeña con borde blanco */}
            <div className="absolute inset-0 flex items-center justify-start pl-0 -translate-x-10  md:-translate-x-16 ">
              <div className="w-[70%] md:w-[55%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/home_1.webp"
                  alt="Tu parcela en el sur"
                  className="w-full h-[300px] md:h-[340px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
      <VideoSection />
    </section>
  );
};