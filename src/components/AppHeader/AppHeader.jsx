import './appHeader.scss';

import pages from '@/models/pages.json';
import BreadcrumbList from './_breadcrumbList';
import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import { notifications } from '@/models/appData';

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

const AppHeader = ({
  activePage,
  isSidebarOpen,
  toggleSidebar,
  onSidebarHover,
  onSidebarLeave,
  className = '',
  ...props
}) => {
  console.log('páginas:', activePage, activePage.id);
  return (
    <header className={`appHeader ${className}`} {...props}>
      {/* SIDEBAR TOGGLE */}
      {/* Refactor >>> Button Component */}
      <Tooltip tooltipText="Lock sidebar open">
        <Button
          variant="secondary"
          style="ghost"
          className={`${isSidebarOpen ? 'hidden' : ''} mr-2`}
          onClick={toggleSidebar}
          onMouseEnter={onSidebarHover}
          onMouseLeave={onSidebarLeave}
        >
          {notifications.length > 0 && (
            <span className="iconButton__bubble iconButton__bubble--notification  iconButton__bubble_size-md">
              {notifications.length}
            </span>
          )}
          <span className="icon">menu</span>
        </Button>
      </Tooltip>
      {/* BREADCRUMBS */}
      <nav className="appHeader__navigation">
        <BreadcrumbList breadcrumbs={getBreadcrumbs(activePage.id, pages)} />
      </nav>

      {/* PAGE ACTIONS */}
      <div className="appHeader__actions">
        {/* Modify Button Component */}
        <Button
          variant="tertiary"
          style="ghost"
          size="sm"
          className={`${isSidebarOpen ? 'hidden' : ''} text-nowrap`}
        >
          {/* Refactor color & sizes */}
          <span className="text-fg4 text-sm font-regular">Edited {activePage.lastModified}</span>
        </Button>
        <Tooltip tooltipText={'Share with specific people'}>
          <Button variant="header" style="ghost">
            <span className="icon icon_size-md">people</span>
            <span className="w-fit text-nowrap">Share</span>
          </Button>
        </Tooltip>
        <Tooltip tooltipText={'Copy link'}>
          <Button variant="header" style="ghost">
            <span className="icon icon_size-md">link_2</span>
          </Button>
        </Tooltip>
        <Tooltip tooltipText={'Add to your favourites'}>
          <Button variant="header" style="ghost">
            <span className="icon icon_size-md">star</span>
          </Button>
        </Tooltip>

        <Tooltip tooltipText="Page settings and actions" className="">
          <Button variant="header" style="ghost">
            <span className="icon icon_size-md">more_horiz</span>
          </Button>
        </Tooltip>
      </div>
    </header>
  );
};

export default AppHeader;
