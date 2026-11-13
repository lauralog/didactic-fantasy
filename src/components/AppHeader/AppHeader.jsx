import './appHeader.scss';

// Components
import BreadcrumbList from './_breadcrumbList';
import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

// Data
import pages from '@/models/pages.json';
import { notifications } from '@/models/appData';

// Hooks
import useGetPageBreadcrumbs from '@/hooks/useGetPageBreadcrumbs';

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

  const breadcrumbs = useGetPageBreadcrumbs(activePage, pages);

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
        <BreadcrumbList breadcrumbs={breadcrumbs} />
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
