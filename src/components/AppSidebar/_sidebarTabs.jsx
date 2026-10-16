'use client';

import { useState } from 'react';

const SidebarTabsMenu = ({ sidebarTabs, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <nav className="appSidebar__tabGroup">
      {sidebarTabs.map((tab, key) => (
        <button
          key={key}
          data-active={activeTab === tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`tabItem ${activeTab === tab.label ? 'tabItem--active' : ''}`}
        >
          {tab.icon && <span className="icon tabItem__icon">{tab.icon}</span>}
          <span className="tabItem__label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default SidebarTabsMenu;
