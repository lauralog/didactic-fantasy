'use client';
import './appSidebar.scss';
// Data
import { notifications, sidebarTabs, user } from '@/models/appMenus';
import notionPages from '@/models/pages.json';
// Components
import SidebarTabsMenu from './_sidebarTabs';
import SidebarListItem from './_sidebarListItem';
import SidebarUserFooter from './_sidebarUserFooter';
import Tooltip from '@/components/ui/Tooltip/Tooltip';
import Button from '@/components/ui/Button/Button';

const Sidebar = ({
  activePageId,
  setActivePageId,
  isSidebarOpen,
  toggleSidebar,
  isSidebarHovered,
  onSidebarHover,
  onSidebarLeave,
  className = '',
  ...props
}) => {
  return (
    <aside
      className={`appSidebar ${isSidebarOpen ? 'appSidebar--open' : isSidebarHovered ? 'appSidebar--floating' : 'appSidebar--closed'} ${className}`}
      onMouseEnter={onSidebarHover}
      onMouseLeave={onSidebarLeave}
      {...props}
    >
      <div className="sidebarWrapper">
        {/* HEADER */}
        <header className="sidebarWrapper__header">
          <div className="headerGroup flex-1">
            <Tooltip tooltipText="Close sidebar">
              {/* Refactor >>> Button Component */}
              <Button
                className="button iconButton"
                onClick={toggleSidebar}
                variant="secondary"
                style="ghost"
              >
                <span className="icon icon_size-md">thumbnail_bar</span>
              </Button>
            </Tooltip>
          </div>
          <div className="headerGroup">
            {/* Refactor >>> Button Component */}
            <button className="iconButton">
              {notifications.length > 0 && (
                <span className="iconButton__bubble iconButton__bubble--notification  iconButton__bubble_size-md">
                  {notifications.length}
                </span>
              )}
              <span className="icon icon_size-md">inbox</span>
            </button>
            {/* Refactor >>> Button Component */}
            <button className="iconButton">
              <span className="icon icon_size-md">edit_square</span>
            </button>
          </div>
        </header>
        {/* SEARCHBAR */}
        <div className="sidebarWrapper__search">
          <div className="inputWrapper searchbar" tab-index="0" aria-label="search or ask">
            <input type="text" className="searchbar__input" placeholder="Busca una página..." />
            <span className="searchbar__shortcut">⌘K</span>
          </div>
        </div>
        {/* TABS */}
        <SidebarTabsMenu
          className={`sidebarWrapper__tabGroup ${className}`}
          sidebarTabs={sidebarTabs}
          initialTab={'home'}
        />
        {/* PAGES */}
        {/* Refactor >>> Convertir pageList's a componente */}
        {/* ___Favs */}
        <nav className={`sidebarWrapper__pagesNav ${className}`}>
          <ul className="pageList">
            <small className="pageList__title">Favourites</small>
            {notionPages
              .filter(({ isFav }) => isFav === true)
              .map((page) => (
                <SidebarListItem
                  key={page.id}
                  page={page}
                  isActive={page.id === activePageId}
                  onClick={() => setActivePageId(page.id)}
                />
              ))}
          </ul>

          {/* ___Shared */}
          <ul className="pageList">
            <small className="pageList__title">Shared</small>
            {notionPages
              .filter(({ isShared }) => isShared === true)
              .map((page) => (
                <SidebarListItem
                  key={page.id}
                  page={page}
                  active={page.id === activePageId}
                  onClick={() => setActivePageId(page.id)}
                />
              ))}
          </ul>

          {/* ___Private */}
          <ul className="pageList">
            <small className="pageList__title">Private</small>
            {notionPages
              .filter(({ isShared }) => !isShared)
              .map((page) => (
                <SidebarListItem
                  key={page.id}
                  page={page}
                  active={page.id === activePageId}
                  onClick={() => setActivePageId(page.id)}
                />
              ))}
          </ul>
        </nav>
        {/* USER MENU */}
        <SidebarUserFooter user={user} />
      </div>
    </aside>
  );
};

export default Sidebar;
