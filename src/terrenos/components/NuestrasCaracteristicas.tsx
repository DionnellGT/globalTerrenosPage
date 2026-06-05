
export const NuestrasCaracteristicas = ({ images }: { images: string[] }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-center">
          <div>
            <p className="text-[#a07030] text-[12px] font-semibold tracking-[0.2em] uppercase mb-4">
              Beneficios
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight mb-6">
              Conoce <span className="text-[#a07030]">nuestras características</span>
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Nuestros terrenos combinan ubicación, valor y calidad para tu futuro. Cada proyecto
              está pensado para ofrecerte un entorno natural privilegiado con accesos, servicios
              y vista únicos.
            </p>
            <a
              href="#contactanos"
              className="inline-flex items-center justify-center rounded-full bg-[#a07030] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-black/10 hover:bg-[#8a5f28] transition-colors duration-200"
            >
              Contáctanos
            </a>
          </div>

          {/* Contenedor de imágenes con overlap */}
          <div className="relative h-[340px] md:h-[480px] lg:h-[540px]">
            <div className="absolute right-0 top-0 w-[85%] md:w-[80%] h-full rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={images[0]}
                alt="Vista principal del proyecto"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-0 bottom-8 w-[60%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10">
              <img
                src={images[1] ?? images[0]}
                alt="Característica del proyecto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};