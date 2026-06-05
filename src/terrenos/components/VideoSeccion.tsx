import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useIsMobile } from "../hooks/useIsMobile";




export const VideoSection = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      {/* Thumbnail full-width con botón play */}
      <section
        className="relative w-full h-[400px] md:h-[480px] cursor-pointer group overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <img
          src="/fondoVideo.webp"
          alt="Ver video El Avellano"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay oscuro sutil */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

        {/* Botón play centrado — círculo outline blanco */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            {/* Triángulo play */}
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-1.5" />
          </div>
        </div>
      </section>

      {/* Modal con video */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
            style={{ maxWidth: isMobile ? "90vw" : "60vw", width: isMobile ? "90vw" : "60vw" }} 
            className=" p-0 bg-black border-none overflow-hidden"
        >
            <div className="relative w-full aspect-video">
            {open && (
                <iframe
                src="https://www.youtube.com/embed/A0bt5sFncUI?autoplay=1"
                title="El Avellano"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                />
            )}
            </div>
        </DialogContent>
      </Dialog>
    </>
  );
};