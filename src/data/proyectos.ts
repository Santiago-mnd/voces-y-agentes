import raw from './proyectos.json';

export type EstadoProyecto = 'diseño' | 'piloto' | 'en-marcha' | 'finalizado';

export type VistaGaleria = 'grid' | 'carrusel';

export interface ProyectoCifra {
  valor: string;
  label: string;
}

export interface ProyectoTestimonio {
  texto: string;
  autor?: string;
}

export interface ProyectoRed {
  tipo: 'instagram' | 'tiktok' | 'facebook' | 'linkedin' | 'web';
  url: string;
}

export interface ProyectoMedia {
  logo?: string | null;
  galeria?: string[];
}

export interface Proyecto {
  slug: string;
  nombre: string;
  tagline?: string;
  tema: string;
  estado: EstadoProyecto;
  resumen: string;
  pasoPorVyA: string;
  adaptacion?: string;
  liderazgo?: string;
  cifras: ProyectoCifra[];
  testimonio: ProyectoTestimonio;
  consejo?: string;
  territorios: string[];
  redes?: ProyectoRed[];
  media?: ProyectoMedia;
  vistaGaleria?: VistaGaleria;
  fuente: string;
}

export const proyectos: Proyecto[] = (raw as { proyectos: Proyecto[] }).proyectos;

export const ESTADO_LABEL: Record<EstadoProyecto, string> = {
  'diseño': 'En diseño',
  'piloto': 'Piloto',
  'en-marcha': 'En marcha',
  'finalizado': 'Finalizado'
};

export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}

export function iniciales(nombre: string): string {
  return nombre
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
