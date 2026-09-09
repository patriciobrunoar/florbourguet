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
3. **Email.** En `contacto.html`, el atributo `data-fallback-email` del
   formulario tiene el placeholder `TU_EMAIL@florbourguet.com.ar` — reemplazalo
   por tu dirección real (se usa para armar el link `mailto:` mientras no haya
   un backend real conectado).
4. **Formulario.** En `contacto.html`, reemplazá `TU_ID` en el `action` por el
   ID de tu cuenta de [Formspree](https://formspree.io) (o el endpoint del
   servicio que uses). Mientras tanto el botón abre el programa de correo del
   visitante con el mensaje ya armado.
5. **Blog.** `blog.html` sólo tiene el hero (con la única frase del texto que
   habla de escribir) y, comentada, la plantilla de una nota para duplicar
   cuando haya posts. No agregué ninguna bajada ni mensaje de "próximamente"
   porque no estaba en tus textos — si querés un texto ahí, decime qué poner.
6. **Logos de agencias.** "GREY group, DDB, FCB&FiRe, JOY, McCANN, Wunderman
   Thompson, Ogilvy" están como texto plano. Ese listado no está en el PDF que
   compartiste: lo tomé de las capturas de referencia del diseño que me
   pasaste al principio. Si son las agencias correctas, decime y les paso los
   logos reales cuando me los mandes; si no, decime cuáles sacar.

## Textos: qué es 100% tuyo y qué tuve que inventar para que el sitio funcione

Todo el copy narrativo (los párrafos de Quién soy, Portfolio, Asesoría,
Clases, Modo viajera y las 18 fichas de marca) es tu texto tal cual, palabra
por palabra. Un sitio de varias páginas necesita además títulos de sección,
textos de botón y demás — ahí donde tu documento no daba una frase para
usar, elegí entre tres opciones, en este orden: (a) una frase corta ya
presente en el propio documento y que aplicaba al contexto, (b) tus propias
instrucciones en el chat (los nombres del menú, "coming soon"), o (c) texto
mínimo mío, siempre señalado acá:

- **Texto mío, no de tus documentos:** dentro de `data-fallback-email`
  (placeholder, no se ve en la página) y las etiquetas de los campos del
  formulario (Nombre / Email / Asunto / Mensaje), que son necesarias para que
  el formulario funcione.
- **Texto de las capturas de referencia que me mandaste, no del PDF/DOCX:**
  los nombres de las agencias ("GREY group", "DDB"...) y los títulos
  "Mis comienzos" / "Mi mientras tanto" / "Mi hoy" en `quien-soy.html`
  (los tomé de las capturas que me mostraste del diseño de esa página).
- **Dos correcciones menores a erratas del PDF:** en el proyecto Coca-Cola
  arreglé un espacio de más antes de una coma (artefacto de la extracción
  del PDF en dos columnas), y en "Hablemos de fútbol" corregí "como en en
  los debates" (palabra duplicada) a "como en los debates". En ambos casos
  mantuve las palabras, sólo até ese detalle de tipeo. Si preferís que quede
  calcado incluso con esos detalles, decime y lo revierto.

Todo lo demás (encabezados de sección como "Agencias y marcas", "Marca
personales", "Clases y charlas", los títulos de las 3 tarjetas de "¿Qué
hago?", el título "Contacto") usa palabras que están literalmente en tu PDF,
reubicadas donde hacen falta como encabezado.

## Ver el sitio en local

```bash
python3 -m http.server 8000
# después abrí http://localhost:8000
```
