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

## Sistema de clases

Este proyecto usa el sistema de clases BEM.

Se ha enriquecido este sistema considerando variantes de componentes, que se marcan de la siguiente manera:
.clase_propiedad-variante

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

## Roadmap

### Must Do

- [x] Theming via CSS/Tailwind variables + themes
- [x] App global content management (pages)
- [x] App Sidebar html/scss
- [ ] App Header html/scss
- [ ] Tooltip Component
- [ ] Pop-up Menu Component for contextual menus
- [ ] Collapsable sidebar interaction
- [ ] App Page Block management

### Should Do

- Refactor Buttons into ui/Button component/s
- Refactor '[#hex]' colors (including TW themes que el dark mode no funciona si no)
- [ ] Sidebar/ add onMouseEnter + State management for page actions
- Layout sensitive position tooltip component

### Could Do

- Refactor tabs into component
- ui/Avatar component
- Refactor all [px] units into tailwind units
- Sidebar/ Refactor components
- Block interactive color change
- Breadcrumb functionality and responsive -> difícil
- App Header actions/ Marcar página como favorita en botón (y tiene que modificar los datos de pages.json -> set isFav = true)

## Datos curiosos

- Utilizo siempre ...props como fallback de propiedades aunque realmente no hace falta
- margin-inline-end es una propiedad que añade margen a un elemento

<!-- Borrar antes de hacer push
- Para hacer el compoennte Breadcrumb he intentado seguir el modelo de la librería de shadcn para ver cómo están hechos y entenderlos y también porque me parece una buena idea crear esqueletos de ese estilo, aunque cuando hacemos componentes para una app directamente con su propio DS definido etc. creo que no son tan útiles ya que no necesitan esa flexibilidad que sí necesitan componentes de librerías para adaptarse a cualquier DS.
 -->
