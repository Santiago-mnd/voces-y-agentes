#!/usr/bin/env python3
import argparse
import json
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
PROYECTOS = ROOT / 'src' / 'data' / 'proyectos.json'
DESTINO = ROOT / 'public' / 'assets-images' / 'proyectos'
FULL_WIDTH = 1200
THUMB_WIDTH = 640
QUALITY = 75
MAX_HEIGHT = 1600
METHOD = 6
EXTENSIONS = {'.jpg', '.jpeg', '.png', '.tif', '.tiff', '.webp'}


def slugs_conocidos():
    try:
        datos = json.loads(PROYECTOS.read_text(encoding='utf-8'))
    except (OSError, ValueError):
        return set()
    return {p.get('slug') for p in datos.get('proyectos', [])}


def reunir(fuentes):
    archivos = []
    for fuente in fuentes:
        ruta = Path(fuente)
        if not ruta.exists():
            sys.exit(f'✗ no existe: {ruta}')
        if ruta.is_dir():
            encontrados = sorted(p for p in ruta.iterdir() if p.suffix.lower() in EXTENSIONS)
            if not encontrados:
                sys.exit(f'✗ sin imágenes en: {ruta}')
            archivos.extend(encontrados)
        elif ruta.suffix.lower() in EXTENSIONS:
            archivos.append(ruta)
        else:
            sys.exit(f'✗ formato no soportado: {ruta}')
    return archivos


def escalar(imagen, ancho, tope_alto):
    escala = min(ancho / imagen.width, tope_alto / imagen.height, 1)
    if escala == 1:
        return imagen.copy()
    return imagen.resize((round(imagen.width * escala), round(imagen.height * escala)), Image.LANCZOS)


def escribir(imagen, ancho, salida, calidad, tope_alto):
    derivada = escalar(imagen, ancho, tope_alto)
    limpia = Image.new('RGB', derivada.size)
    limpia.paste(derivada)
    limpia.save(salida, 'WEBP', quality=calidad, method=METHOD)
    return derivada.size, salida.stat().st_size


def main():
    parser = argparse.ArgumentParser(
        description='Genera las derivadas webp de una galería de /proyectos: '
                    'galeria-N.webp (ancho máximo 1200) y galeria-N-640.webp, '
                    'que son los dos anchos que declara el srcSet de Gallery.tsx. '
                    'Aplica la orientación del EXIF y luego lo descarta.',
        epilog='ejemplo: python3 scripts/optimize-gallery.py michis-aborteros ~/fotos/feria',
    )
    parser.add_argument('slug', help='slug de la colectiva, como aparece en proyectos.json')
    parser.add_argument('fuentes', nargs='+', help='imágenes o carpetas, en el orden que llevará la galería')
    parser.add_argument('--desde', type=int, default=1, metavar='N',
                        help='número de la primera foto, para agregar a una galería que ya existe (default: 1)')
    parser.add_argument('--forzar', action='store_true', help='sobrescribe archivos que ya estén ahí')
    parser.add_argument('--calidad', type=int, default=QUALITY, metavar='N',
                        help=f'calidad webp de 1 a 100 (default: {QUALITY})')
    parser.add_argument('--tope-alto', type=int, default=MAX_HEIGHT, metavar='PX',
                        help=f'alto máximo en px, para que las verticales de celular no carguen píxeles '
                             f'que el recorte 4:3 tira (default: {MAX_HEIGHT})')
    args = parser.parse_args()

    conocidos = slugs_conocidos()
    if conocidos and args.slug not in conocidos:
        sys.exit(f'✗ "{args.slug}" no está en proyectos.json. Slugs: {", ".join(sorted(conocidos))}')
    if args.desde < 1:
        sys.exit('✗ --desde empieza en 1')
    if not 1 <= args.calidad <= 100:
        sys.exit('✗ --calidad va de 1 a 100')
    if args.tope_alto < 1:
        sys.exit('✗ --tope-alto va en píxeles')

    archivos = reunir(args.fuentes)
    carpeta = DESTINO / args.slug
    carpeta.mkdir(parents=True, exist_ok=True)

    if not args.forzar:
        for i in range(len(archivos)):
            ya = carpeta / f'galeria-{args.desde + i}.webp'
            if ya.exists():
                sys.exit(f'✗ ya existe {ya.relative_to(ROOT)} — usa --desde o --forzar')

    total_origen = 0
    total_salida = 0
    for i, origen in enumerate(archivos):
        numero = args.desde + i
        with Image.open(origen) as bruta:
            imagen = ImageOps.exif_transpose(bruta).convert('RGB')

        tam_full, peso_full = escribir(imagen, FULL_WIDTH, carpeta / f'galeria-{numero}.webp', args.calidad, args.tope_alto)
        tam_thumb, peso_thumb = escribir(imagen, THUMB_WIDTH, carpeta / f'galeria-{numero}-640.webp', args.calidad, args.tope_alto)

        peso_origen = origen.stat().st_size
        total_origen += peso_origen
        total_salida += peso_full + peso_thumb
        print(f'galeria-{numero}  {origen.name}  {peso_origen // 1024} KB  →  '
              f'{tam_full[0]}x{tam_full[1]} {peso_full // 1024} KB  +  '
              f'{tam_thumb[0]}x{tam_thumb[1]} {peso_thumb // 1024} KB')

    ahorro = 100 - (total_salida * 100 // total_origen) if total_origen else 0
    print(f'\n✓ {len(archivos)} foto/s en {carpeta.relative_to(ROOT)}')
    print(f'  {total_origen // 1024} KB de origen → {total_salida // 1024} KB en el repo ({ahorro} % menos)')


if __name__ == '__main__':
    main()
