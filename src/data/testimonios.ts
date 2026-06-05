
export interface Testimonio {
  id: string;
  name: string;
  text: string;
  image: string;
}

export const testimonios: Testimonio[] = [
  {
    id: "1",
    name: "Lorena Gazano",
    text: "Compré un terreno en el proyecto de Aguas Buenas en Chiloé, lo compré a ciegas pero el equipo en Santiago y en Chiloé me asesoró de muy buena manera. Me llevaron al proyecto y pude ver los avances en su momento y al día de hoy ya tengo mi terreno y estoy esperando para ir a construir mi parcela.",
    image: "/testimonial_1.webp",
  },
  {
    id: "2",
    name: "Alejandra Vertero",
    text: "Compré 6 parcelas en distintos proyectos de Chiloé, me atendió una ejecutiva encantadora, viajé a ver en terreno las parcelaciones, todo fue expedito pudimos firmar y todo lo que me dijeron se cumplió.",
    image: "/testimonial_2.webp",
  },
  {
    id: "3",
    name: "Pietro Clandestino",
    text: "Compré una parcela agrícola y la ejecutiva me ayudó un montón, me orientó y me me dio la tranquilidad ya que siempre estuve asesorado por la parte legal de la empresa, fue una buena decisión.",
    image: "/testimonial_3.webp",
  }

]