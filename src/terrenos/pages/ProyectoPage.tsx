import { MapPin, Globe2 } from "lucide-react";
import { useParams } from "react-router";
import { Contactenos } from "../components/Contactenos";
import { NuestrasCaracteristicas } from "../components/NuestrasCaracteristicas";
import { useProyectoPorSlug } from "../hooks/useProyectos";
import { Conectividad } from "../components/Conectividad";
import { GaleriaDeTerrenos } from "../components/GaleriaDeTerrenos";
import { useIsMobile } from "../hooks/useIsMobile";
import { useEffect } from "react";
import { CardsCaracteristicas } from "../components/CardsCaracteristicas";
import { ChatBotWsp } from "../components/ChatBot";


export const ProyectoPage = () => {
  const { idSlug } = useParams();
  const proyecto = useProyectoPorSlug(idSlug);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (proyecto) {
      document.title = `${proyecto.name} | El Avellano`;
    } else {
      document.title = "Proyecto no encontrado | El Avellano";
    }

    return () => {
      document.title = "El Avellano"; // restaura al salir de la página
    };
  }, [proyecto]);

  if (!proyecto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 px-6">
        <h1 className="text-3xl font-bold text-stone-800">Proyecto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="bg-white ">
      <section
        className="relative overflow-hidden bg-cover bg-center py-18 vanishing-gradient"
        //style={{ backgroundImage: isMobile ? `url(${proyecto.imagenBannerPrincipalMobile})` : `url(${proyecto.imagenBannerPrincipal})` }}
      >
        <div className="relative z-10 mx-auto text-white overflow-hidden max-w-full shadow-2xl">
          <img
              src={isMobile ? proyecto.imagenBannerPrincipalMobile : proyecto.imagenBannerPrincipal}
              alt={`${proyecto.name} banner secundario`}
              className="w-full h-11/12 md:h-full object-cover"
            />
        </div>
      </section>

      {/* Características */}
      <NuestrasCaracteristicas images={proyecto.imagenesDeCaracteristicas} />

      {/* Cards de características */}
      <CardsCaracteristicas />

      {/* Galería de terrenos y entorno */}
      <GaleriaDeTerrenos imagenesVistasProyecto={proyecto.imagenesVistasProyecto} />

      {/* Mapa */}
      <section id="mapa" className="relative py-20 bg-stone-950 text-white">
        <div className="absolute inset-0 opacity-70 bg-black" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-[#e5c07b] text-[12px] font-semibold tracking-[0.2em] uppercase mb-2">
                Ubicación
              </p>
              <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
                Mapa y acceso directo
              </h2>
              <p className="text-stone-300 text-base leading-relaxed mb-8">
                Revisa el mapa del proyecto y accede directamente a Google Maps para ver la ruta de llegada y las distancias reales desde los principales puntos de interés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={proyecto.linkMapa}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#a07030] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-black/20 hover:bg-[#8a5f28] transition-colors duration-200"
                >
                  Ver en Google Maps <MapPin className="ml-2" />
                </a>
                <a
                  href={proyecto.vistaProyecto360}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/20 transition-colors duration-200"
                >
                  Tour virtual 360 <Globe2 className="ml-2" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <iframe
                src={proyecto.vistaProyecto360}
                title={`${proyecto.name} ubicación`}
                className="w-full h-[420px] border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banner secundario */}
      <section className="pt-5 pb-10">
        <div className="max-w-full">
          <div className="overflow-hidden shadow-2xl">
            <img
              src={proyecto.imagenBaner2}
              alt={`${proyecto.name} banner secundario`}
              className="w-full h-11/12 md:h-full object-cover"
            />
          </div>
        </div>
      </section>


      <Conectividad 
        centrosUrbanosCercanos={proyecto.centrosUrbanosCercanos}
        atraccionesTuristicas={proyecto.atraccionesTuristicas}
        imagenCentrosUrbanos={proyecto.imagenCentrosUrbanos}
        imagenAtraccionesTuristicas={proyecto.imagenAtraccionesTuristicas}
      
      />

      {/* Chatbot */}
      <ChatBotWsp />

      <Contactenos />
    </div>
  );
};