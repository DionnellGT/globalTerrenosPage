import { cardCaracteristicas } from "@/data/cardCaracteristicas";
import { useParams } from "react-router";

const Card = ({ item }: { item: { icono: string; titulo: string } }) => (
  <div
    className="flex flex-col items-center text-center gap-4 rounded-2xl px-5 py-8 group transition-all duration-300 w-full h-full"
    style={{
      background: "linear-gradient(145deg, #1c1c1c, #0a0a0a)",
      boxShadow:
        "6px 6px 14px rgba(0,0,0,0.6), -3px -3px 8px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.boxShadow =
        "8px 8px 20px rgba(0,0,0,0.7), -4px -4px 10px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(160,112,48,0.3)";
      el.style.background = "linear-gradient(145deg, #222, #111)";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.boxShadow =
        "6px 6px 14px rgba(0,0,0,0.6), -3px -3px 8px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)";
      el.style.background = "linear-gradient(145deg, #1c1c1c, #0a0a0a)";
    }}
  >
    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 [perspective:400px]">
      <img
        src={item.icono}
        alt={item.titulo}
        className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)] group-hover:scale-115"
        style={{
          filter:
            "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(0deg) brightness(0.65)",
        }}
      />
    </div>
    <p className="text-white text-sm md:text-md font-semibold leading-snug">
      {item.titulo}
    </p>
  </div>
);

export const CardsCaracteristicas = () => {
  const { idSlug } = useParams();

  /**
   * Filtering logic:
   *   "los-muermos"     → all 6 cards
   *   "paisajes-del-rio" → 5 cards (excludes "Factibilidad de luz")
   *
   * Layout logic:
   *
   * DESKTOP (md+):  3 columns
   *   6 items → Row 1: items 0-2, Row 2: items 3-5  (full 3+3 grid)
   *   5 items → Row 1: items 0-2, Row 2: items 3-4 centered (each = 1/3 width)
   *
   * MOBILE:         2 columns
   *   6 items → Row 1: items 0-1, Row 2: items 2-3, Row 3: items 4-5
   *   5 items → Row 1: items 0-1, Row 2: items 2-3, Row 3: item 4 centered (= 1/2 width)
   */

  const items =
    idSlug === "paisajes-del-rio"
      ? cardCaracteristicas.filter(
          (c) => c.titulo.toLowerCase() !== "factibilidad de luz"
        )
      : cardCaracteristicas;

  const hasLastPair = items.length === 6;

  return (
    <div className="py-12 bg-stone-900">
      <div className="max-w-6xl mx-auto px-6 space-y-4">

        {/* ════ DESKTOP layout (md+) ════ */}

        {/* Desktop Row 1: items 0-2, always a full 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {items.slice(0, 3).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* Desktop Row 2:
            6 items → full 3-col grid (items 3-5)
            5 items → 2 cards centered, each 1/3 wide (items 3-4) */}
        {hasLastPair ? (
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {items.slice(3, 6).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        ) : (
          <div className="hidden md:flex justify-center gap-4">
            {items.slice(3, 5).map((item, i) => (
              <div key={i} className="w-[calc((100%-2rem)/3)]">
                <Card item={item} />
              </div>
            ))}
          </div>
        )}


        {/* ════ MOBILE layout (< md) ════ */}

        {/* Mobile Row 1: items 0-1 */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {items.slice(0, 2).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* Mobile Row 2: items 2-3 */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {items.slice(2, 4).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* Mobile Row 3:
            6 items → items 4-5 as a 2-col grid
            5 items → item 4 centered, same width as a 2-col cell */}
        {hasLastPair ? (
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {items.slice(4, 6).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center md:hidden">
            {items[4] && (
              <div className="w-[calc(50%-0.5rem)]">
                <Card item={items[4]} />
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};