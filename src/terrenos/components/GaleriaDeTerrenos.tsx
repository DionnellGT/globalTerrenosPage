import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useIsMobile } from "../hooks/useIsMobile";

export const GaleriaDeTerrenos = ({ imagenesVistasProyecto }: { imagenesVistasProyecto: string[] }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);
  const total = imagenesVistasProyecto.length;
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  

  const navigate = (dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setCurrent((i) =>
        dir === "right" ? (i + 1) % total : (i - 1 + total) % total
      );
      setAnimating(false);
      setDirection(null);
    }, 350);
  };

  const prev = () => navigate("left");
  const next = () => navigate("right");

  const leftIdx = (current - 1 + total) % total;
  const rightIdx = (current + 1) % total;

  // Clases de animación para la card central
  const slideClass = animating
    ? direction === "right"
      ? "-translate-x-full opacity-0"
      : "translate-x-full opacity-0"
    : "translate-x-0 opacity-100";

  return (
    <section className="py-16 bg-[#f5f0eb] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#a07030] text-[12px] font-semibold tracking-[0.2em] uppercase mb-2">
            Encuentra tu Destino
          </p>
          <h2 className="font-bold text-stone-900 text-3xl md:text-5xl mb-4">
            Vistas del Proyecto
          </h2>
          <p className="text-stone-600 text-base leading-relaxed max-w-xl mx-auto">
            Descubre la experiencia visual del proyecto con vistas seleccionadas que muestran
            la ubicación, el paisaje y el ambiente natural que rodea cada terreno.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative flex items-center justify-center gap-4 h-[250px] md:h-[420px]">

          {/* Card IZQUIERDA */}
          <div
            className={`relative w-[220px] md:w-[260px] h-[180px] md:h-[320px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer opacity-80 hover:opacity-90 transition-all duration-350 ${
              animating && direction === "left" ? "translate-x-[120%] opacity-100 scale-105" : ""
            }`}
            onClick={prev}
          >
            <img
              src={imagenesVistasProyecto[leftIdx]}
              alt={`vista ${leftIdx + 1}`}
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

          {/* Card CENTRAL */}
          <div className="relative w-[250px] md:w-[620px] h-[210px] md:h-[420px] rounded-2xl overflow-hidden flex-shrink-0 shadow-2xl z-10 group">
            <img
              key={current}
              src={imagenesVistasProyecto[current]}
              alt={`vista ${current + 1}`}
              onClick={() => setOpen(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-350 ease-in-out brightness-90 group-hover:brightness-110 ${slideClass}`}
            /> 
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
                    src={imagenesVistasProyecto[current]}
                    alt={`vista ${current + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Card DERECHA */}
          <div
            className={`relative w-[220px] md:w-[260px] h-[180px] md:h-[320px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer opacity-80 hover:opacity-90 transition-all duration-350 ${
              animating && direction === "right" ? "-translate-x-[120%] opacity-100 scale-105" : ""
            }`}
            onClick={next}
          >
            <img
              src={imagenesVistasProyecto[rightIdx]}
              alt={`vista ${rightIdx + 1}`}
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
        <div className="flex justify-center gap-2 mt-8">
          {imagenesVistasProyecto.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#a07030] w-6" : "bg-stone-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};