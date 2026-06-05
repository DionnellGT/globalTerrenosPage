export interface Proyecto {
  id: string;
  idSlug: string;
  name: string;
  imageCarrousel: string;
  imagenBannerPrincipal: string;
  imagenBannerPrincipalMobile: string;
  imagenesDeCaracteristicas: string[];
  vistaProyecto360: string;
  imagenesVistasProyecto: string[];
  imagenMapaFondo: string;
  linkMapa: string;
  imagenBaner2: string;
  centrosUrbanosCercanos: {
    nombre: string;
    distancia: string;
    tiempo: string;
    linkMaps?: string;
    imgCentroUrbano?: string;
  }[];
  imagenCentrosUrbanos: string;
  atraccionesTuristicas: {
    nombre: string;
    tiempo: string;
    distancia: string;
    linkMaps?: string;
    imgAtraccionTuristica?: string;
  }[];
  imagenAtraccionesTuristicas: string;
}


export const proyectos: Proyecto[] = [
  {
    id: "1",
    idSlug: "paisajes-del-rio",
    name: "Paisajes del Río",
    imageCarrousel: "/PaisajesDelRio/paisajes.webp",
    imagenBannerPrincipal: "/PaisajesDelRio/Banner-Paisajes-Web.webp",
    imagenBannerPrincipalMobile: "/PaisajesDelRio/Banner-Paisajes-Mobile.webp",
    imagenesDeCaracteristicas: [
      "/PaisajesDelRio/paisajes_1.webp",
      "/PaisajesDelRio/paisajes_2.webp",
    ],
    vistaProyecto360: "https://www.lanube360.com/paisajesdelrio-chiloe/",
    imagenesVistasProyecto: [
      "/PaisajesDelRio/1.webp",
      "/PaisajesDelRio/2.webp",
      "/PaisajesDelRio/3.webp",
      "/PaisajesDelRio/4.webp",
    ],
    imagenMapaFondo: "/mapa.webp",
    linkMapa: "https://maps.app.goo.gl/SECnqq15deK5HPTw7",
    imagenBaner2: "/PaisajesDelRio/inter-paisajes.webp",
    centrosUrbanosCercanos: [
      {
        nombre: "Ruta 5 sur por Palomar",
        distancia: "12 km",
        tiempo: "15 min",
        imgCentroUrbano: "/PaisajesDelRio/Ruta5.webp",
      },
      {
        nombre: "Aeropuerto de castro",
        distancia: "53 km",
        tiempo: "55 min",
        linkMaps:"https://www.google.com/maps/dir/42%C2%B001'15.6%22S+73%C2%B038'39.3%22W/Aeropuerto+castro+-+M72H%2BMF,+Mocopulli,+Dalcahue,+Los+Lagos/@-42.2319109,-73.8903957,68066m/data=!3m1!1e3!4m12!4m11!1m3!2m2!1d-73.64425!2d-42.021!1m5!1m1!1s0x962213318af9c73f:0xba3a46f3252085d6!2m2!1d-73.7212554!2d-42.3483398!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/PaisajesDelRio/AeropuertoCastro.webp"
      },
      {
        nombre: "Centro Ancud",
        distancia: "34 km",
        tiempo: "40 min",
        linkMaps:"https://www.google.com/maps/dir/42%C2%B001'15.6%22S+73%C2%B038'39.3%22W/Centro+Ancud+Achs+Salud+-+Almte.+Latorre+1322,+Ancud,+Los+Lagos/@-41.9683956,-73.9013309,34175m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.64425!2d-42.021!1m5!1m1!1s0x96228d64bd8d321b:0x5d50087efca16301!2m2!1d-73.8080794!2d-41.8703568!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/PaisajesDelRio/CentroAncud.webp"
      },
      {
        nombre: "Centro de Quemchi",
        distancia: "27 km",
        tiempo: "30 min",
        linkMaps:"https://www.google.com/maps/dir/42%C2%B001'15.6%22S+73%C2%B038'39.3%22W/Quemchi,+Los+Lagos/@-42.0978576,-73.7323682,34105m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.64425!2d-42.021!1m5!1m1!1s0x96189cfa882a8515:0x46dd143ea065313!2m2!1d-73.4780559!2d-42.1447134!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/PaisajesDelRio/CentroQuemchi.webp"
      },
      {
        nombre: "Centro de Castro",
        distancia: "68 km",
        tiempo: "1 h 10 min",
        linkMaps: "https://www.google.com/maps/dir/42%C2%B001'15.6%22S+73%C2%B038'39.3%22W/Castro,+Los+Lagos/@-42.2220692,-74.0661769,68076m/data=!3m1!1e3!4m12!4m11!1m3!2m2!1d-73.64425!2d-42.021!1m5!1m1!1s0x96223cfcf1a3a9c5:0xabd8bf191d3a5cff!2m2!1d-73.7635341!2d-42.4805974!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/PaisajesDelRio/CentroCastro.webp"
      }
    ],
    imagenCentrosUrbanos: "/PaisajesDelRio/f1.webp",
    atraccionesTuristicas: [
      {
        nombre: "Isla aucar almas navegantes",
        tiempo: "32 min",
        distancia: "27 km",
        linkMaps:"https://www.google.com/maps/dir/42%C2%B001'15.6%22S+73%C2%B038'39.3%22W/Isla+de+las+Almas+Navegantes,+Quemchi,+Los+Lagos/@-42.0978576,-73.7330817,34105m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.64425!2d-42.021!1m5!1m1!1s0x962277cd07597e91:0x23cd6087733c325d!2m2!1d-73.4794647!2d-42.161702!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgAtraccionTuristica: "/PaisajesDelRio/IslaAucarAlmasNavegantes.webp"
      },
      {
        nombre: "Parque aventura chaiguen",
        tiempo: "39 min",
        distancia: "33 km",
        imgAtraccionTuristica: "/PaisajesDelRio/ParqueAventuraChaiguen.webp"
      },
      {
        nombre: "Parque ecológico y mitológico",
        tiempo: "34 min",
        distancia: "29 km",
        imgAtraccionTuristica: "/PaisajesDelRio/ParqueEcologicoMitologico.jpg"
      },
      {
        nombre: "Bahía de duhatao",
        tiempo: "1h 24min",
        distancia: "59 km",
        imgAtraccionTuristica: "/PaisajesDelRio/BahiaDuhatao.webp"
      },
      {
        nombre: "Pinguineras puñihuil chiloé",
        tiempo: "1h 15min",
        distancia: "54 km",
        imgAtraccionTuristica: "/PaisajesDelRio/PinguinerasPunihuil.webp"
      }, 
      {
        nombre: "Santuario de las aves de ancud",
        tiempo: "48 min",
        distancia: "38 km",
        imgAtraccionTuristica: "/PaisajesDelRio/SantuarioAvesAncud.jpg"
      },
      {
        nombre: "Muelle de la luz",
        tiempo: "52 min",
        distancia: "43 km",
        imgAtraccionTuristica: "/PaisajesDelRio/MuelleDeLaLuz.webp"
      },
      {
        nombre: "Ecomarine Punihuil",
        tiempo: "1h 16 min",
        distancia: "54 km",
        imgAtraccionTuristica: "/PaisajesDelRio/EcomarinePunihuil.webp"
      }
    ],
    imagenAtraccionesTuristicas: "/PaisajesDelRio/f2.webp",
  },
  {
    id: "2",
    idSlug: "los-muermos",
    name: "Los Muermos",
    imageCarrousel: "/los_muermos/avellanolm.webp",
    imagenBannerPrincipal: "/los_muermos/avellanolmBanner.webp",
    imagenBannerPrincipalMobile: "/los_muermos/avellanolmBannerMobile.webp",
    imagenesDeCaracteristicas: [
      "/los_muermos/choose1-img.webp",
      "/los_muermos/choose2-img.webp",
    ],
    vistaProyecto360: "https://www.lanube360.com/elavellano-losmuermos-entrebosquesypraderas/",
    imagenesVistasProyecto: [
      "/los_muermos/team1-img1.webp",
      "/los_muermos/team1-img2.webp",
      "/los_muermos/team1-img3.webp",
    ],
    imagenMapaFondo: "/los_muermos/avellanolm_mapa.webp",
    linkMapa: "https://maps.app.goo.gl/HdPcPvZFxGitpppd7",
    imagenBaner2: "/los_muermos/avellanolmBanner.webp",
    centrosUrbanosCercanos: [
      {
        nombre: "Centro de Los Muermos",
        distancia: "10 km",
        tiempo: "10 min",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/Los+Muermos,+Los+Lagos/@-41.4147789,-73.4491183,8618m/data=!3m1!1e3!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x9622ab79ba4d330f:0x5cde10c0b33ef4a5!2m2!1d-73.4651433!2d-41.3944267!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/los_muermos/avellanolm_centrosurbanos.webp"
      },
      {
        nombre: "Aeropuerto El Tepual Puerto Montt",
        distancia: "35 km",
        tiempo: "30 min",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/Aeropuerto+El+Tepual,+5480000+Puerto+Montt,+Los+Lagos/@-41.4297954,-73.3742526,34462m/data=!3m1!1e3!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x9618180d92b8a285:0xe832ce1a3e5d101e!2m2!1d-73.0986775!2d-41.4331342!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/los_muermos/aeropuerto_El_Tepual.webp"
      },
      {
        nombre: "Centro de Fresia",
        distancia: "43 km",
        tiempo: "45 min",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/Fresia,+Los+Lagos/@-41.3036591,-73.6684948,69058m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x9617e2f0bb2f796d:0x4fa5e13ffe3b9783!2m2!1d-73.4217541!2d-41.1524991!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgCentroUrbano: "/los_muermos/Fresia.webp"
      }
    ],
    imagenCentrosUrbanos: "/los_muermos/avellanolm_centrosurbanos.webp",
    atraccionesTuristicas: [
      {
        nombre: "La Pasada Maullin",
        tiempo: "32 min",
        distancia: "32 km",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/La+Pasada,+Maull%C3%ADn,+Los+Lagos/@-41.4957066,-73.604506,34427m/data=!3m1!1e3!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x9622a478391ddd4f:0x46f4e5498dfd90dc!2m2!1d-73.5966719!2d-41.6030817!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgAtraccionTuristica: "/los_muermos/La_Pasada_Maullin.webp"
      },
      {
        nombre: "Museo Antonio Felmer en Nueva Braunau",
        tiempo: "35 min",
        distancia: "40 km",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/Museo+Antonio+Felmer,+camino+a+R%C3%ADo+Fr%C3%ADo+-+Fundo+Bellavista,+km.9,+Nueva+Braunau,+Puerto+Varas,+Chile/@-41.390708,-73.4164634,34483m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x96181f814e3a15ab:0xc917556943935b31!2m2!1d-73.0929117!2d-41.3271123!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgAtraccionTuristica: "/los_muermos/MuseoAntonioFelmer.webp"
      },
      {
        nombre: "Parque Arqueológico Monte Verde",
        tiempo: "39 min",
        distancia: "42.5 km",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/Parque+Arqueologico+Monte+Verde+%22Vive+la+Prehistoria%22,+El+Salto+-+Camino+Monte+Verde,+km+8,2,+Puerto+Montt,+Los+Lagos/@-41.4521617,-73.3788308,17225m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x961811214881a71f:0x76cf376ca40f41a3!2m2!1d-73.2008565!2d-41.5075214!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgAtraccionTuristica: "/los_muermos/MonteVerdePilauco.webp"
      },
      {
        nombre: "Parque Nacional Hornopiren",
        tiempo: "52 min",
        distancia: "48 km",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/Parque+Nacional+Hornopiren,+Puerto+Montt,+Los+Lagos/@-41.4563315,-73.3559411,34448m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x96183c792744bce5:0x5b065954c7d8f125!2m2!1d-72.9964316!2d-41.478507!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgAtraccionTuristica: "/los_muermos/AtraccionHornopiren.webp"
      },
      {
        nombre: "Playa Estaquilla",
        tiempo: "57 min",
        distancia: "51 km",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/Fin+Pasarelas+Estaquilla,+Los+Muermos,+Los+Lagos/@-41.4232568,-73.7795415,34466m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x963d4aa22012ab8f:0xe6251f3194cb1456!2m2!1d-73.8359779!2d-41.3837526!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgAtraccionTuristica: "/los_muermos/PlayaEstaquilla.webp"
      },
      {
        nombre: "Playa Llico Bajo",
        tiempo: "1h 23 min",
        distancia: "67 km",
        linkMaps: "https://www.google.com/maps/dir/41%C2%B026'02.5%22S+73%C2%B023'47.2%22W/El+Balneario+Llico+Bajo+-+sector+llico+bajo+s%2Fn,+5480000+Los+Muermos,+Los+Lagos/@-41.3455847,-73.7843829,34507m/data=!3m2!1e3!4b1!4m12!4m11!1m3!2m2!1d-73.3964444!2d-41.4340278!1m5!1m1!1s0x963d49428164a389:0xcd1d598b4c922eb9!2m2!1d-73.8404783!2d-41.2866492!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
        imgAtraccionTuristica: "/los_muermos/PlayaLlico.webp"
      }
    ],
    imagenAtraccionesTuristicas: "/los_muermos/AtraccionHornopiren.webp",
  }
]