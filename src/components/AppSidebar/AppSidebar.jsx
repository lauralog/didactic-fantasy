'use client';
import './appSidebar.scss';
// Data
import { sidebarTabs } from '@/models/appMenus';
// Components
import SidebarTabsMenu from './_sidebarTabs';

const Sidebar = ({ className = '', ...props }) => {
  return (
    <aside className={`appSidebar ${className}`} {...props}>
      hola soy el sidebar
      {/* Tabs */}
      <SidebarTabsMenu sidebarTabs={sidebarTabs} initialTab={'home'} />
      {/* Pages */}
      <ul className="navSection mt-4">
        <small>Page group</small>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
      </ul>
      <ul className="navSection mt-4">
        <small>Page group</small>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
      </ul>
      <ul className="navSection mt-4">
        <small>Page group</small>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
        <li className="nav__item">Page item</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
