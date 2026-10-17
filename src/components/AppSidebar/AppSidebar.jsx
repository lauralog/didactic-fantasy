'use client';
import './appSidebar.scss';
// Data
import { notifications, sidebarTabs } from '@/models/appMenus';
import notionPages from '@/models/pages.json';
// Components
import SidebarTabsMenu from './_sidebarTabs';
import SidebarListItem from './_sidebarListItem';

const Sidebar = ({ activePageId, setActivePageId, className = '', ...props }) => {
  console.log(notifications);
  return (
    <aside className={`appSidebar ${className}`} {...props}>
      {/* HEADER */}
      <header className="appSidebar__header">
        <div className="headerGroup flex-1">
          {/* Refactor >>> Button Component */}
          <button className="headerGroup__iconButton">
            <span className="icon icon_size-md">thumbnail_bar</span>
          </button>
        </div>
        <div className="headerGroup">
          {/* Refactor >>> Button Component */}
          <button className="headerGroup__iconButton">
            {notifications.length > 0 && (
              <span className="notificationBlubble">{notifications.length}</span>
            )}
            <span className="icon icon_size-md">inbox</span>
          </button>
          {/* Refactor >>> Button Component */}
          <button className="headerGroup__iconButton">
            <span className="icon icon_size-md">edit_square</span>
          </button>
        </div>
      </header>
      {/* SEARCHBAR */}
      <div className="appSidebar__search">
        <div className="inputWrapper searchbar" tab-index="0" aria-label="search or ask">
          <input type="text" className="searchbar__input" placeholder="Busca una página..." />
          <span className="searchbar__shortcut">⌘K</span>
        </div>
      </div>
      {/* TABS */}
      <SidebarTabsMenu
        className={`appSidebar__tabGroup ${className}`}
        sidebarTabs={sidebarTabs}
        initialTab={'home'}
      />
      {/* PAGES */}
      {/* Refactor >>> Convertir pageList's a componente */}
      {/* ___Favs */}
      <nav className={`appSidebar__pagesNav ${className}`}>
        <ul className="pageList">
          <small className="pageList__title">Favourites</small>
          {notionPages
            .filter(({ isFav }) => isFav === true)
            .map((page) => (
              <SidebarListItem
                key={page.id}
                page={page}
                active={page.id === activePageId}
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
      <SidebarTabsMenu sidebarTabs={sidebarTabs} initialTab={'home'} />
    </aside>
  );
};

export default Sidebar;
