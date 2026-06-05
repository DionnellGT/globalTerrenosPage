import { ChatBotWsp } from "../components/ChatBot";
import { Contactenos } from "../components/Contactenos";
import { Proyectos } from "../components/Proyectos";
import { QuienesSomos } from "../components/QuienesSomos";
import { Testimonios } from "../components/Testimonios";

export const HomePage = () => {
  return (
    <div>
      {/* Hero — pantalla completa, navbar flota encima transparente */}
      <section
        className="relative min-h-screen max-sm:min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/banner1v2.webp')" }}
      >
        {/* Overlay sutil para legibilidad del navbar y texto */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Contenido hero — alineado a la izquierda como en el diseño */}
        <div className="relative z-10 max-w-7xl max-sm:max-w-md: mx-auto px-6 w-full">
        <div className="flex items-center gap-6">
    
            {/* Línea vertical */}
            <div className="w-[3px] h-48 bg-white/80 shrink-0" />

                {/* Contenido pegado a la línea */}
                <div>
                    <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight drop-shadow-md">
                    Expertos<br />en Liquidez
                    </h1>

                    <a      
                    href="#proyectos"
                    className="mt-5 inline-block px-7 py-3 rounded-full border border-white text-white font-semibold text-[15px] tracking-wide hover:bg-white hover:text-stone-800 transition-colors duration-200"
                    >
                    Invierte con Nosotros
                    </a>

                    <p className="mt-4 text-white font-medium text-[14px] leading-snug drop-shadow-sm">
                        Somos la mejor opción para ayudarte<br />
                        en la compra de tu terreno
                    </p>
                </div>

            </div>
        </div>
      </section>

      <QuienesSomos/>
      <Proyectos/>
      <Testimonios/>
      <ChatBotWsp/>
      <Contactenos/>
    </div>
  );
};