'use client';

import { useState } from 'react';

const SidebarTabsMenu = ({ sidebarTabs, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <nav className="flex gap-2">
      {sidebarTabs.map((tab, key) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`${activeTab === key ? 'active' : ''} inline-flex flex-nowrap capitalize`}
        >
          {tab.icon && <span className="icon">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default SidebarTabsMenu;
