import { useMemo } from "react";
import { proyectos as proyectosData, type Proyecto } from "@/data/proyectos";

export const useProyectos = () => {
  return useMemo(() => proyectosData, []);
};

export const useProyectoPorSlug = (idSlug?: string) => {
  return useMemo(
    () => proyectosData.find((proyecto) => proyecto.idSlug === idSlug),
    [idSlug]
  );
};

export type { Proyecto };
