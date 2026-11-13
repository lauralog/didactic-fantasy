This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize.

## Sistema de clases y arquitectura

Este proyecto usa el sistema de clases BEM.

Se ha enriquecido este sistema considerando variantes de componentes, que se marcan de la siguiente manera:
.clase_propiedad-variante

### Organización de archivos y uso de prioridad de capas de tailwind

1. @layer utilities: clases en línea. Usar sass me permite tener mis archivos de estilos separados y agrupados en otras capas de menor prioridad, dejando libre la capa utilities que es la que tiene mayor prioridad en Tailwind y en la que se colocan las clases en línea que se indican en className.
   De esta forma utilizo esto para personalizar los estilos de los componentes al usarlos, afectando únicamente a ese componente.
   Por ejemplo, esto es muy útil cuando quieres marcar que un botón ocupe w-full sin la necesidad de crear una variante nueva para ello, de modo que tú tienes tu botón con un w-fit, que es lo habitual, y cuando quieras que tenga w-full, que suele ocurrir en casos más específicos como cuando tienes un dialog o un pop-up, le pones la clase al usarlo y listo. Creo que así queda más limpio.
2. @layer components: ficheros con estilos relativos a un componente específico. Esta capa la utilizo para los ficheros scss que contienen las clases de un componente o conjunto de componentes y que se encuentran en la misma carpeta que el jsx del componente al que estilan.
3. @layer theme: temas. Esta capa la uso para configurar las variables de cada tema, en mi caso el 'light' y el 'dark' mode.
4. @layer base: básicos. Para estilos básicos, normalmente aquí guardo los selectores genéricos para tener unos estilos base. También el útil para meter estilos de reseteo del user agent.

## Roadmap

### Must Do

- [x] Theming via CSS/Tailwind variables + themes
- [x] App global content management (pages)
- [x] App Sidebar html/scss
- [x] App Header html/scss
- [x] Tooltip Component (basic)
- [x] Collapsible sidebar interaction (basic)
- [PASSfn] Sidebar animations (branch sidebar-animations)
- [x] Page content bocks & Block Component (basic)
- [ ] Pop-up/Overlayed Menu Component for contextual menus
  - [ ] Sidebar Pages (sidebarListItem) -> onMouseEnter variant
    - [ ] sidebarListItem buttons -> onClick page options
  - [ ] Block Handler -> onClick variant contextual menu
- [ ] Responsive layout
- [x] Refactor Buttons into ui/Button component/s
- [x] App Page Block management??? >>> Block Component

### Should Do

- Tooltip: content hierarchy (changes text-color)
- Refactor '[#hex]' colors (including TW themes que el dark mode no funciona si no)
- [ ] Sidebar/ add onMouseEnter + State management for page actions
- Tooltip: Layout sensitive position tooltip component

### Could Do

- Refactor tabs into component
- ui/Avatar component
- Refactor all [px] units into tailwind units
- Sidebar/ Refactor components
- Block interactive color change
- Breadcrumb functionality and responsive -> difícil
- App Header actions/ Marcar página como favorita en botón (y tiene que modificar los datos de pages.json -> set isFav = true)

### Marcas en el código

- Refactor
- Modify

## Datos curiosos

- Utilizo siempre ...props como fallback de propiedades aunque realmente no hace falta
- margin-inline-end es una propiedad que añade margen a un elemento

<!-- Borrar antes de hacer push
- Para hacer el compoennte Breadcrumb he intentado seguir el modelo de la librería de shadcn para ver cómo están hechos y entenderlos y también porque me parece una buena idea crear esqueletos de ese estilo, aunque cuando hacemos componentes para una app directamente con su propio DS definido etc. creo que no son tan útiles ya que no necesitan esa flexibilidad que sí necesitan componentes de librerías para adaptarse a cualquier DS.
 -->

## Uso de IA

### Función getBreadcrumbs en appHeader.jsx

Función para obtener un array de breadcrumbs para pasárselo a BreadcrumbList.
He usado la IA para agilizar esta tarea ya que sabía lo que necesitaba y cómo lo quería pero no sabía muy bien por dónde empezar a hacerlo ni los métodos exactos para realizar una búsqueda recursiva.
Por las limitaciones de tiempo y como hay otras tareas que resolver para completar el ejercicio, voy a seguir con eso y posteriormente estudiaré lo que hace exactamente la función para entenderla completamente.

Prompt 1:
"Tengo la estructura de datos (código de models/pages.json), y un app header que contiene unos breadcrumbs así (código de appHeader.jsx).
necesito hacer llegar un array con los breadcrumbs al componente BreadcrumbList que contenga el id, título e icono de cada página. Para ello me gustaría tener una función que configure dicho array buscando de manera recursiva el elemento parentId de cada página, hasta que el resultado sea un string vacío, que indica que dicha página no tiene ningún parent page más (siendo el primer nivel de navegación y terminando ahí), la página inicial por la que esta función debe empezar a buscar es la que se pasa como prop activePage al appHeader."

Este prompt devolvió lo que le pedí pero decidí simplificarlo para ahorrarme dentro de esta función la configuración de la estructura del nuevo array y así simplificarla para que me resulte más fácil comprender lo que hace.

Prompt 2:
"Para simplificar la función, podrías hacer que el array devuelva las páginas completas en lugar de solamente los atributos seleccionados aunque sea menos eficiente?"
