import './appHeader.scss';

import pages from '@/models/pages.json';
import BreadcrumbList from './_breadcrumbList';
import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

import { notifications } from '@/models/appMenus';

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
          onlyIcon={true}
          variant="secondary"
          style="ghost"
          className={`${isSidebarOpen ? 'hidden' : ''} mr-2`}
          onClick={toggleSidebar}
          onMouseEnter={onSidebarHover}
          onMouseLeave={onSidebarLeave}
        >
          {notifications.length > 0 && (
            <span className="bubbleAlert bubbleAlert--notification  bubbleAlert-md">
              {notifications.length}
            </span>
          )}
          <span className="icon text-foreg">menu</span>
        </Button>
      </Tooltip>
      {/* BREADCRUMBS */}
      <nav className="appHeader__navigation">
        <BreadcrumbList breadcrumbs={getBreadcrumbs(activePage.id, pages)} />
      </nav>

      {/* PAGE ACTIONS */}
      <div className="appHeader__actions text-foreg">
        {/* Modify Button Component */}
        <Button
          // onlyIcon={true}
          variant="tertiary"
          style="ghost"
          // size="sm"
          className={`${isSidebarOpen ? 'hidden' : ''}`}
        >
          {/* Refactor color & sizes */}
          <span>Edited {activePage.lastModified}</span>
        </Button>
        <Tooltip tooltipText={'Share with specific people'}>
          {/* Refactor >>> Button Component */}
          <Button variant="secondary" style="ghost">
            <span className="icon icon-md text-foreg">people</span>
            <span className="w-fit">Share</span>
          </Button>
        </Tooltip>
        {/* Refactor >>> Button Component */}
        <Tooltip tooltipText={'Copy link'}>
          <Button onlyIcon={true} variant="secondary" style="ghost">
            <span className="icon icon-md text-foreg">link_2</span>
          </Button>
        </Tooltip>
        <Tooltip tooltipText={'Add to your favourites'}>
          {/* Refactor >>> Button Component */}
          <Button onlyIcon={true} variant="secondary" style="ghost">
            <span className="icon icon-md text-foreg">star</span>
          </Button>
        </Tooltip>

        <Tooltip tooltipText="Page settings and actions">
          {/* Refactor >>> Button Component */}
          <Button onlyIcon={true} variant="secondary" style="ghost">
            <span className="icon icon-md text-foreg">more_horiz</span>
          </Button>
        </Tooltip>
      </div>
    </header>
  );
};

export default AppHeader;
