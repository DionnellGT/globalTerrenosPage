import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MapPin, Sparkles, Clock, ChevronLeft, ChevronRight } from "lucide-react"

interface ConectividadProps {
  centrosUrbanosCercanos: {
    nombre: string;
    distancia: string;
    tiempo: string;
    linkMaps?: string;
    imgCentroUrbano?: string;
  }[];
  atraccionesTuristicas: {
    nombre: string;
    tiempo: string;
    distancia: string;
    linkMaps?: string;
    imgAtraccionTuristica?: string;
  }[];
  imagenCentrosUrbanos: string;
  imagenAtraccionesTuristicas: string;
}

interface carrouselItem {
  nombre: string;
  distancia: string;
  tiempo: string;
  linkMaps?: string;
  imgCentroUrbano?: string;
  imgAtraccionTuristica?: string;
}

const CarouselCentros = ({
  centros,
  fallbackImage,
}: {
  centros: carrouselItem[];
  fallbackImage: string;
}) => {
  const [current, setCurrent] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const total = centros.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  const leftIdx = (current - 1 + total) % total;
  const rightIdx = (current + 1) % total;

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex items-center justify-center gap-4 h-[220px] md:h-[260px]">
        {/* Left card — hidden on mobile */}
        <div
          className="hidden md:block relative w-[220px] h-[200px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer opacity-80 hover:opacity-90 transition-opacity duration-300"
          onClick={prev}
        >
          <img
            src={(centros[leftIdx].imgCentroUrbano || centros[leftIdx].imgAtraccionTuristica) ?? fallbackImage}
            alt={centros[leftIdx].nombre}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/30" />
          <button
            className="absolute top-1/2 left-3 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={18} className="text-stone-700" />
          </button>
        </div>

        {/* Center card */}
        <div className="relative w-full max-w-[calc(100vw-48px)] md:w-[520px] md:max-w-none h-[200px] md:h-[260px] rounded-2xl overflow-hidden flex-shrink-0 shadow-2xl z-10 group">
          <img
            src={(centros[current].imgCentroUrbano || centros[current].imgAtraccionTuristica) ?? fallbackImage}
            alt={centros[current].nombre}
            onClick={() => setOpen(true)}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 brightness-90 group-hover:scale-105"
          />
          {/* Mobile prev/next arrows overlay */}
          <button
            className="md:hidden absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow z-20"
            onClick={prev}
          >
            <ChevronLeft size={18} className="text-stone-700" />
          </button>
          <button
            className="md:hidden absolute top-1/2 right-3 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow z-20"
            onClick={next}
          >
            <ChevronRight size={18} className="text-stone-700" />
          </button>
          <div className="absolute bottom-4 left-4 text-white rounded-2xl drop-shadow GlassmorphismCarrousel px-2 py-2">
            <a href={centros[current].linkMaps} target="_blank" rel="noreferrer" className="font-semibold text-sm md:text-lg">
              {centros[current].nombre}
            </a>
            <div className="text-sm text-white/90 mt-1 flex gap-3 items-center">
              <span className="flex items-center gap-1"><MapPin size={12} className="text-white/90" />{centros[current].distancia}</span>
              <span className="flex items-center gap-1"><Clock size={12} className="text-white/90" />{centros[current].tiempo}</span>
            </div>
          </div>
        </div>
        {/* Modal con imagen */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
              style={{ maxWidth: isMobile ? "90vw" : "60vw", width: isMobile ? "90vw" : "60vw" }} 
              className=" p-0 bg-black border-none overflow-hidden"
          >
            <div className="relative w-full aspect-video">
              {open && (
                <img
                  src={(centros[current].imgCentroUrbano || centros[current].imgAtraccionTuristica) ?? fallbackImage}
                  alt={centros[current].nombre}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Right card — hidden on mobile */}
        <div
          className="hidden md:block relative w-[220px] h-[200px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer opacity-80 hover:opacity-90 transition-opacity duration-300"
          onClick={next}
        >
          <img
            src={(centros[rightIdx].imgCentroUrbano || centros[rightIdx].imgAtraccionTuristica) ?? fallbackImage}
            alt={centros[rightIdx].nombre}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/30" />
          <button
            className="absolute top-1/2 right-3 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={18} className="text-stone-700" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {centros.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#a07030] w-6" : "bg-stone-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export const Conectividad = ({
  centrosUrbanosCercanos,
  atraccionesTuristicas,
  imagenCentrosUrbanos,
  imagenAtraccionesTuristicas,
}: ConectividadProps) => {
  return (
    <section className="bg-white py-10 space-y-20">

      {/* ── Centros Urbanos */}
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-1 items-center">

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 text-[#a07030] uppercase tracking-[0.2em] text-[11px] font-semibold mb-3">
            <Sparkles size={16} />
            Conectividad
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Centros urbanos <span className="text-[#a07030]">cercanos</span>
          </h2>
          <p className="text-stone-500 text-base leading-relaxed mb-8">
            Accede fácilmente a los principales servicios y ciudades desde el proyecto.
          </p>
          {/* Carrusel de centros urbanos */}
          <div className="mt-8 lg:mt-0">
            {centrosUrbanosCercanos.length === 0 ? (
              <div className="text-stone-500">No hay destinos cercanos.</div>
            ) : (
              <CarouselCentros
                centros={centrosUrbanosCercanos}
                fallbackImage={imagenCentrosUrbanos}
              />
            )}
          </div>

          {/* Badge de cantidad debajo del carrusel, alineada a la derecha */}
          <div className="flex justify-end mt-4 lg:mt-8">
            <div className="bg-[#a07030] text-white rounded-[1.5rem] px-5 py-3 shadow-xl text-sm font-semibold tracking-wide">
              {centrosUrbanosCercanos.length} destinos cercanos
            </div>
          </div>
        </div>
      </div>

      {/* ── Atracciones Turísticas */}
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-1 items-center">

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 text-[#a07030] uppercase tracking-[0.2em] text-[11px] font-semibold mb-3">
            <MapPin size={16} />
            Turismo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Atracciones <span className="text-[#a07030]">turísticas</span>
          </h2>
          <p className="text-stone-500 text-base mb-8 leading-relaxed">
            Vive experiencias únicas a pocos minutos del proyecto, rodeado de naturaleza y cultura local.
          </p>
          {/* Carrusel de atracciones turísticas */}
          <div className="mt-8 lg:mt-0">
            {atraccionesTuristicas.length === 0 ? (
              <div className="text-stone-500">No hay atracciones turísticas.</div>
            ) : (
              <CarouselCentros
                centros={atraccionesTuristicas}
                fallbackImage={imagenAtraccionesTuristicas}
              />
            )}
          </div>

          {/* Badge de cantidad ahora debajo del carrusel, alineada a la derecha */}
          <div className="flex justify-end mt-4 lg:mt-8">
            <div className="bg-[#a07030] text-white rounded-[1.5rem] px-5 py-3 shadow-xl text-sm font-semibold tracking-wide">
              {atraccionesTuristicas.length} atracciones turísticas
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};