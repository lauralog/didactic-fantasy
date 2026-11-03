import './appHeader.scss';

import pages from '@/models/pages.json';
import BreadcrumbList from './_breadcrumbList';
import Button from '@/components/ui/Button/Button';

// Esto creo que podría ser un hook porque hay anidación de páginas en el sidebar tb
// Pero aún no sé cómo se hace un custom hook
// Refactor >>> a utils/getBreadcrumbs o a hooks/useGetBreadcrumbs
const getBreadcrumbs = (activePageId, pages) => {
  // Nota: para hacer esta función he usado la IA, los prompst que he utilizado
  // están recogidos en el README.md en el apartado ## Uso de IA
  const page = pages.find((p) => p.id === activePageId);
  // 1. Fallback si no existe página
  if (!page) return [];
  // 2. Si page no tiene parent.id, devuelve solamente la página actual
  if (page.parentId === '') {
    return [page];
  }
  // 3. Aquí está la chicha recursiva.
  return [...getBreadcrumbs(page.parentId, pages), page];
};

const AppHeader = ({ activePage, isSidebarOpen, toggleSidebar, className = '', ...props }) => {
  console.log('páginas:', activePage, activePage.id);
  return (
    <header className={`appHeader ${className}`} {...props}>
      {/* SIDEBAR TOGGLE */}
      <Button
        className={`p-1 bg-transparent text-foreg border-0 ${isSidebarOpen ? '' : 'hidden'} ${className}`}
        onClick={toggleSidebar}
      >
        <span className="icon">menu</span>
      </Button>
      {/* BREADCRUMBS */}
      <nav className="appHeader__navigation">
        <BreadcrumbList breadcrumbs={getBreadcrumbs(activePage.id, pages)} />
      </nav>

      {/* PAGE ACTIONS */}
      <div className="appHeader__actions">
        {/* Refactor >>> Button Component */}
        <button className="iconButton iconButton_wText">
          <span className="icon icon_size-md">people</span>
          <span className="w-fit text-nowrap">Share</span>
        </button>
        {/* Refactor >>> Button Component */}
        <button className="iconButton">
          <span className="icon icon_size-md">link_2</span>
        </button>
        {/* Refactor >>> Button Component */}
        <button className="iconButton">
          <span className="icon icon_size-md">star</span>
        </button>
        {/* Refactor >>> Button Component */}
        <button className="iconButton">
          <span className="icon icon_size-md">more_horiz</span>
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
