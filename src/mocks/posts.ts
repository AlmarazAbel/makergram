export interface Post {
  id: number | string;
  profile: {
    username: string;
    avatar_url: string;
  };
  image_url: string;
  caption: string;
  likes: number;
  isLiked: boolean;
  created_at: Date;
  updated_at?: Date;
}

// Lista de posts para home y ranking
export const posts: Post[] = [
{
    id: 1,
    profile: { username: "lucas_3d_prints", avatar_url: "https://i.pravatar.cc/150?img=11" },
    image_url: "https://images.pexels.com/photos/30620861/pexels-photo-30620861.jpeg",
    caption: "¡Por fin salió impecable! 32 horas de impresión en PLA de seda dorado. El nivel de detalle en las capas es increíble, valió la pena cada segundo de espera. 😎✨ #3dprinting #maker",
    likes: 540,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2), // hace 2 horas
  },
  {
    id: 2,
    profile: { username: "sofia_maker", avatar_url: "https://i.pravatar.cc/150?img=5" },
    image_url: "https://images.pexels.com/photos/19376296/pexels-photo-19376296.jpeg",
    caption: "Organizando el taller para la semana. ¿Hay algo más satisfactorio que ver todos tus filamentos de colores perfectamente ordenados? ¿Cuál es su marca favorita? 🎨🧵",
    likes: 890,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 8), // hace 8 horas
  },
  {
    id: 3,
    profile: { username: "marcos_labs", avatar_url: "https://i.pravatar.cc/150?img=8" },
    image_url: "https://images.pexels.com/photos/19871842/pexels-photo-19871842.jpeg",
    caption: "Imprimiendo un prototipo funcional en PETG para un cliente. Esta Ender está hecha una guerrera, lleva semanas trabajando sin parar sin una sola falla. 🛠️🦾",
    likes: 412,
    isLiked: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24), // hace 1 día
  },
  {
    id: 4,
    profile: { username: "valen_resin_art", avatar_url: "https://i.pravatar.cc/150?img=9" },
    image_url: "https://images.pexels.com/photos/12268465/pexels-photo-12268465.jpeg",
    caption: "La precisión de la resina es otra cosa... Miren los detalles de esta mini para D&D recién salida del baño de alcohol isopropílico. ¡Ahora toca curar y pintar! 🎨👾",
    likes: 920,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // hace 2 días
  },
  {
    id: 5,
    profile: { username: "matias_filament", avatar_url: "https://i.pravatar.cc/150?img=12" },
    image_url: "https://images.pexels.com/photos/32396955/pexels-photo-32396955.jpeg",
    caption: "Primera capa perfecta... no hay placer visual que supere esto. Nivelar la cama manualmente valió la pena esta vez. 📐🤤",
    likes: 310,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // hace 3 días
  },
  {
    id: 6,
    profile: { username: "camila_3d", avatar_url: "https://i.pravatar.cc/150?img=1" },
    image_url: "https://images.pexels.com/photos/31137405/pexels-photo-31137405.jpeg",
    caption: "Diseñé e imprimí este soporte modular para mis herramientas de electrónica. Todo encaja a la perfección. ¡Amo el diseño paramétrico! 💻🔧",
    likes: 745,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // hace 4 días
  },
  {
    id: 7,
    profile: { username: "julian_propmaker", avatar_url: "https://i.pravatar.cc/150?img=2" },
    image_url: "https://images.pexels.com/photos/36439579/pexels-photo-36439579.jpeg",
    caption: "Empezando un casco de Iron Man a escala real. Va a requerir un montón de lija, masilla y postprocesado, ¡pero el hype de que empiece a tomar forma es total! 🦾🔴",
    likes: 1105,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // hace 5 días
  },
  {
    id: 8,
    profile: { username: "emilia_creations", avatar_url: "https://i.pravatar.cc/150?img=10" },
    image_url: "https://images.pexels.com/photos/20877038/pexels-photo-20877038.jpeg",
    caption: "Probando filamento flexible (TPU) por primera vez para hacer unas fundas protectoras. El secreto definitivamente está en imprimir lento, ¡muy lento! 🐢👣",
    likes: 289,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6), // hace 6 días
  },
  {
    id: 9,
    profile: { username: "tomas_fdm", avatar_url: "https://i.pravatar.cc/150?img=14" },
    image_url: "https://images.pexels.com/photos/19835322/pexels-photo-19835322.jpeg",
    caption: "Al fin solucioné mis problemas de 'stringing' (hilos en la impresión). Bajé la temperatura del extrusor 5 grados y configuré la retracción a 6mm. ¡Santo remedio! 🛠️🔬",
    likes: 198,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // hace 7 días
  },
  {
    id: 10,
    profile: { username: "martina_prints", avatar_url: "https://i.pravatar.cc/150?img=23" },
    image_url: "https://images.pexels.com/photos/30669280/pexels-photo-30669280.jpeg",
    caption: "Un timelapse de la impresión de hoy. Ver cómo sube capa por capa es casi hipnótico... ¿Quién más se queda minutos enteros mirando su impresora trabajar? 🌀👀",
    likes: 674,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8), // hace 8 días
  },
  {
    id: 11,
    profile: { username: "nico_makerspace", avatar_url: "https://i.pravatar.cc/150?img=33" },
    image_url: "https://images.pexels.com/photos/13624760/pexels-photo-13624760.jpeg",
    caption: "Mantenimiento preventivo de domingo: limpieza de boquilla, tensión de correas y lubricación de ejes. Cuiden sus máquinas y ellas cuidarán sus impresiones. ⚙️🧼",
    likes: 154,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9), // hace 9 días
  },
  {
    id: 12,
    profile: { username: "clara_tech3d", avatar_url: "https://i.pravatar.cc/150?img=34" },
    image_url: "https://images.pexels.com/photos/17509941/pexels-photo-17509941.jpeg",
    caption: "Impresión de engranajes mecánicos en Nylon para un proyecto de robótica escolar. La resistencia mecánica de este material es de otro planeta. 🤖🦾",
    likes: 422,
    isLiked: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 11), // hace 11 días
  }
];
