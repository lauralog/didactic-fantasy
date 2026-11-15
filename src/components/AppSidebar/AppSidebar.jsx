'use client';
import './appSidebar.scss';
import { useState } from 'react';

// Data
import { notifications, sidebarTabs, user } from '@/models/appData';
import notionPages from '@/models/pages.json';
// Components
import SidebarTabsMenu from './_sidebarTabs';
import SidebarListItem from './_sidebarListItem/SidebarListItem';
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
  const [sidebarWidth, setSidebarWidth] = useState(300);

  /**
   * Función para redimensionar el ancho del sidebar con eventos de mouse
   * @param {*} event
   * @returns
   */
  const handleResizeMouseDown = (event) => {
    if (event.button !== 0) return;

    event.preventDefault();
    const sidebar = event.currentTarget.parentElement;
    const handleMouseMove = (moveEvent) => {
      const sidebarLeft = sidebar.getBoundingClientRect().left;
      setSidebarWidth(moveEvent.clientX - sidebarLeft);
    };
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <aside
      className={`appSidebar min-w-[220px] max-w-[480px] ${isSidebarOpen ? 'appSidebar--open' : isSidebarHovered ? 'appSidebar--floating' : 'appSidebar--closed'} ${className}`}
      style={{ width: `${sidebarWidth}px` }}
      onMouseEnter={onSidebarHover}
      onMouseLeave={onSidebarLeave}
      {...props}
    >
      <div className={`sidebarWrapper`}>
        {/* HEADER */}
        <header className="sidebarWrapper__header">
          <div className="headerGroup flex-1">
            <Button variant="sidebar" onClick={toggleSidebar}>
              <span className="icon icon_size-md">thumbnail_bar</span>
            </Button>
          </div>
          <div className="headerGroup">
            <Tooltip tooltipText="Inbox notifications">
              <Button variant="sidebar">
                {notifications.length > 0 && (
                  <span className="iconButton__bubble iconButton__bubble--notification  iconButton__bubble_size-md">
                    {notifications.length}
                  </span>
                )}
                <span className="icon icon_size-md">inbox</span>
              </Button>
            </Tooltip>
            <Tooltip tooltipText="New...">
              <Button variant="sidebar">
                <span className="icon icon_size-md">edit_square</span>
              </Button>
            </Tooltip>
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
        <SidebarTabsMenu className={className} sidebarTabs={sidebarTabs} initialTab={'home'} />

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
      <div className="appSidebar__resizeHandle" onMouseDown={handleResizeMouseDown} />
    </aside>
  );
};

export default Sidebar;
