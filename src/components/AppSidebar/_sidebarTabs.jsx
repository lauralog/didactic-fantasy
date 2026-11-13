'use client';

import { useState } from 'react';

import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

const SidebarTabsMenu = ({ sidebarTabs, initialTab, className = '', ...props }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <nav className="sidebarWrapper__tabGroup">
      {sidebarTabs.map((tab, key) => (
        <Tooltip key={key} tooltipText={tab.tooltip}>
          <Button
            key={key}
            data-active={activeTab === tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`tabItem ${activeTab === tab.label ? 'tabItem--active' : ''}`}
          >
            {tab.icon && <span className="icon iconFill tabItem__icon">{tab.icon}</span>}
            <span className="tabItem__label">{tab.label}</span>
          </Button>
        </Tooltip>
      ))}
    </nav>
  );
};

export default SidebarTabsMenu;
