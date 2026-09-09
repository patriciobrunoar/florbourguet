# florbourguet.com.ar

Sitio estático (HTML + CSS + JS, sin build ni dependencias) para Flor Bourguet.
Se puede publicar tal cual en cualquier hosting: subís la carpeta y listo.

## Estructura

```
index.html                  Home
quien-soy.html              Quién soy (about)
portfolio.html              Portfolio · listado de proyectos
asesoria-influencers.html   Asesoría influencers / marcas personales
clases.html                 Clases y charlas
modo-viajera.html           Modo viajera (coming soon)
blog.html                   Blog
contacto.html               Contacto
projects/*.html             18 fichas de proyecto (una por marca)
css/style.css               Toda la hoja de estilos
js/main.js                  Menú móvil, animación al scrollear y formulario
img/                        Imágenes del sitio (falta cargarlas)
```

Cada ítem del menú es una página propia. La navegación, el footer y los
metadatos viven repetidos en cada archivo: si cambiás uno, acordate de
replicarlo en el resto.

## Diseño

- **Tipografías**: Playfair Display (itálica) para los títulos y Figtree para
  los textos, servidas desde Google Fonts.
- **Colores** (definidos como variables en `css/style.css`):
  coral `#f86c6c`, turquesa `#43d5cd`, fondo `#f4f3f1`, tinta `#14100f`.
- Las bandas diagonales se arman con `clip-path`, sin imágenes.

## Qué falta completar

1. **Imágenes.** Todos los espacios están marcados con un bloque gris
   (`class="ph"`) y una etiqueta que dice qué va ahí. Reemplazá cada uno por
   `<img src="img/archivo.jpg" alt="descripción">`.
2. **Logo.** El isotipo es un SVG provisorio, está inline en cada página y en
   `img/favicon.svg`.
3. **Redes.** Los links de LinkedIn, Instagram, TikTok y WhatsApp están en `#`.
4. **Email.** Figura `hola@florbourguet.com.ar` en `contacto.html`.
5. **Formulario.** En `contacto.html`, reemplazá `TU_ID` en el `action` por el
   ID de tu cuenta de [Formspree](https://formspree.io) (o el endpoint del
   servicio que uses). Mientras tanto el botón abre el programa de correo del
   visitante con el mensaje ya armado.
6. **Blog.** `blog.html` está en "próximamente" y trae, comentada, la plantilla
   de una nota para duplicar.
7. **Logos de agencias.** Hoy son texto; si tenés los SVG, se pueden reemplazar.

## Ver el sitio en local

```bash
python3 -m http.server 8000
# después abrí http://localhost:8000
```
