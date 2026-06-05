# Global Terenos

Proyecto web React + TypeScript + Vite para un sitio de presentación de proyectos de terrenos.

## Descripción

Esta aplicación ofrece una página principal de un proyecto inmobiliario con contenido dinámico basado en datos de `src/data` y recursos de imagen estáticos ubicados en `public`.

## Estructura principal

- `src/ElAvellanoApp.tsx` - punto de entrada de la aplicación que configura React Query y el proveedor de notificaciones.
- `src/app.router.tsx` - define rutas con React Router.
- `src/terrenos/layout/AvellanoLayout.tsx` - layout principal de la aplicación.
- `src/terrenos/pages/HomePage.tsx` - página principal del sitio.
- `src/components/ui` - componentes UI reutilizables como `dialog`, `button` y `sheet`.

## Archivos de datos

Los datos del proyecto se definen en estos archivos:

- `src/data/proyectos.ts`
  - Contiene la lista de proyectos y la imagen de carrusel asociada.
  - Ejemplo de ruta de imagen: `/gallery/paisajes.webp`.
- `src/data/testimonios.ts`
  - Contiene testimonios de clientes con nombre, texto y foto.
  - Ejemplo de ruta de imagen: `/testimonial_1.jpg`.

## Imágenes y recursos estáticos

La carpeta `public` almacena las imágenes usadas por la aplicación. Las rutas referenciadas en el código usan rutas relativas desde la raíz como `/avatar.jpg`, `/gallery/...` y `/testimonial_1.jpg`.

### Archivos principales en `public`

- `avatar.jpg`, `avatar1.jpg`, `avatar4.jpg`, `avatar6.jpg`
- `fondoContactenos.jpg`
- `logo.svg`, `logo_sticky.svg`
- `mapa.webp`
- `testimonial_1.jpg`, `testimonial_2.jpg`, `testimonial_3.jpg`
- `video.webp`
- `paisajes_1.webp`, `paisajes_2.webp`
- `testimonials_bg.webp`

### Carpetas de imágenes importantes

- `public/gallery`
  - `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`
  - `avellanolm.webp`
  - `paisajes.webp`
  - `paisajes/` (subcarpeta adicional de imágenes)
- `public/rooms`
  - `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`
  - `opt_1.jpg`, `opt_2.jpg`, `opt_3.jpg`
- `public/slides`
  - `Banner-Paisajes-Mobile.webp`
  - `Banner-Paisajes-Web.webp`
  - `banner1v2.webp`
  - `paisajes-del-rio.webp`

## Dependencias principales

- `react`, `react-dom`, `react-router`, `react-router-dom`
- `@vitejs/plugin-react-swc`
- `tailwindcss`, `@tailwindcss/vite`
- `@tanstack/react-query`, `react-hook-form`, `zustand`
- `lucide-react`, `radix-ui`, `sonner`

## Configuración de alias

El alias `@` está definido en `vite.config.ts` y en `tsconfig.app.json` para apuntar a `./src`.

## Scripts

- `npm run dev` - inicia el servidor de desarrollo Vite.
- `npm run build` - compila la aplicación con TypeScript y Vite.
- `npm run preview` - ejecuta la versión de producción local.
- `npm run lint` - ejecuta ESLint en el código.

## Ejecución

```bash
npm install
npm run dev
```

Luego abre el navegador en `http://localhost:5173` (o el puerto que indique Vite).

## Notas

- Las imágenes en `public` se sirven estáticamente sin necesidad de importarlas desde `src`.
- Los archivos de datos en `src/data` permiten separar el contenido del layout y facilitan la actualización de proyectos/testimonios.
