import { useState, useEffect, useCallback } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router";

const LOGO_WHITE = "/logo.svg";
const LOGO_STICKY = "/logo_sticky.svg";

const NAV_LINKS = [
  { label: "Somos", href: "#somos" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonios", href: "#testimonios" },
];

export const NavbarAvellano = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isProyectoPage = location.pathname.startsWith("/proyectos/");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cuando se navega a home con hash pendiente, hace el scroll al llegar
  useEffect(() => {
    const pending = sessionStorage.getItem("scrollTo");
    if (pending && !isProyectoPage) {
      sessionStorage.removeItem("scrollTo");
      // Espera a que el DOM del home esté listo
      const timer = setTimeout(() => {
        const el = document.getElementById(pending);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isProyectoPage]);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        // El elemento existe en la página actual → scroll suave directo
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // El elemento no existe aquí (ej: en proyectos buscando #somos del home)
        // Guarda el destino y navega a home
        sessionStorage.setItem("scrollTo", id);
        navigate("/");
      }
    },
    [navigate]
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ",
        isScrolled || isProyectoPage ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={isScrolled || isProyectoPage ? LOGO_STICKY : LOGO_WHITE}
            alt="El Avellano"
            className="h-12 w-auto transition-all duration-500"
          />
        </a>

        {/* Desktop links + CTA */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className={cn(
                "relative text-[13px] tracking-[0.06em] uppercase font-medium transition-colors duration-300 hover:font-semibold",
                "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full",
                isScrolled || isProyectoPage
                  ? "text-stone-700 hover:text-stone-900 after:bg-stone-900"
                  : "text-white/90 hover:text-white after:bg-white"
              )}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contactanos"
            onClick={(e) => handleAnchorClick(e, "#contactanos")}
            className={cn(
              "px-5 py-2 rounded-full text-[13px] font-semibold tracking-[0.06em] uppercase transition-all duration-300",
              "bg-[#a07030] text-white hover:bg-[#8a5f28]"
            )}
          >
            Contáctanos
          </a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menú"
                className={cn(
                  "p-2 rounded-md transition-colors",
                  isScrolled || isProyectoPage ? "text-stone-800" : "text-white"
                )}
              >
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-stone-900 border-none w-72 [&>button]:text-white [&>button]:hover:text-white/70">
              <div className="px-2 mt-6 mb-10">
                <img src={LOGO_WHITE} alt="El Avellano" className="h-10 w-auto" />
              </div>
              <nav className="flex flex-col gap-6 px-2" aria-label="Menú móvil">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      setMobileOpen(false);
                      handleAnchorClick(e, link.href);
                    }}
                    className="text-white/80 hover:text-white text-[15px] tracking-[0.08em] uppercase transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contactanos"
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleAnchorClick(e, "#contactanos");
                  }}
                  className="mt-2 inline-block px-5 py-2 rounded-full bg-[#a07030] text-white text-[13px] font-semibold tracking-[0.06em] uppercase text-center"
                >
                  Contáctanos
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};