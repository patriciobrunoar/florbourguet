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
img/                         Imágenes del sitio
  logoFlor.svg                 Logo, versión coral (sidebar y fondos claros)
  logoFlor-white.svg           Logo, versión blanca (barra coral del footer)
  favicon.svg                  Ícono del logo, recortado para el favicon
  IlustEdit.png                Ilustración del hero de la Home
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

1. **Imágenes.** Ya están el logo y la ilustración del hero. El resto de los
   espacios sigue marcado con un bloque gris (`class="ph"`) y una etiqueta que
   dice qué va ahí. Reemplazá cada uno por `<img src="img/archivo.jpg"
   alt="descripción">`: los 3 círculos de "¿Qué hago?", las 3 fotos de viaje,
   los retratos de Quién soy / Asesoría / Clases y las imágenes de cada
   proyecto del portfolio.
2. **Redes.** Los links de LinkedIn, Instagram, TikTok y WhatsApp están en `#`.
3. **Email.** Figura `hola@florbourguet.com.ar` en `contacto.html`.
4. **Formulario.** En `contacto.html`, reemplazá `TU_ID` en el `action` por el
   ID de tu cuenta de [Formspree](https://formspree.io) (o el endpoint del
   servicio que uses). Mientras tanto el botón abre el programa de correo del
   visitante con el mensaje ya armado.
5. **Blog.** `blog.html` está en "próximamente" y trae, comentada, la plantilla
   de una nota para duplicar.
6. **Logos de agencias.** Hoy son texto; si tenés los SVG, se pueden reemplazar.

## Ver el sitio en local

```bash
python3 -m http.server 8000
# después abrí http://localhost:8000
```
