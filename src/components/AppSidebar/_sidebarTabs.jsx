'use client';

import { useState } from 'react';

import Button from '@/components/ui/Button/Button';

const SidebarTabsMenu = ({ sidebarTabs, initialTab, className = '', ...props }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <nav className="sidebarWrapper__tabGroup">
      {sidebarTabs.map((tab, key) => (
        <Button
          key={key}
          data-active={activeTab === tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`tabItem ${activeTab === tab.label ? 'tabItem--active' : ''}`}
        >
          {tab.icon && <span className="icon iconFill tabItem__icon">{tab.icon}</span>}
          <span className="tabItem__label">{tab.label}</span>
        </Button>
      ))}
    </nav>
  );
};

export default SidebarTabsMenu;
