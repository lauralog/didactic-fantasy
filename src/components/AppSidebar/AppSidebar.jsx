'use client';
import './appSidebar.scss';
// Data
import { sidebarTabs } from '@/models/appMenus';
import notionPages from '@/models/pages.json';
// Components
import SidebarTabsMenu from './_sidebarTabs';
import SidebarListItem from './_sidebarListItem';

const Sidebar = ({ activePageId, setActivePageId, className = '', ...props }) => {
  return (
    <aside className={`appSidebar ${className}`} {...props}>
      Sidebar header <br /> Search
      {/* TABS */}
      <SidebarTabsMenu sidebarTabs={sidebarTabs} initialTab={'home'} />
      {/* PAGES */}
      {/* ___Favs */}
      <nav className={`appSidebar__pagesNav ${className}`}>
        <ul className="pageList">
          <small>Favourites</small>
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
          <small>Shared</small>
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
          <small>Private</small>
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
