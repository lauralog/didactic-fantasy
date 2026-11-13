'use client';

import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

const SidebarTabsMenu = ({ user, className = '', ...props }) => {
  const news = true;
  return (
    <footer className={`sidebarWrapper__footer ${className}`}>
      {/* USER */}
      <div role="button" className="button button--ghost userToggle py-0">
        {/* Refactor >>> Avatar Component */}
        <div className="userToggle__avatarWrapper">
          <img className="avatar" src={user.avatar} alt={`foto de perfil de ${user.username}`} />
        </div>
        <span className="userToggle__username">{user.username}</span>
        <span className="icon userToggle__icon">chevron_right</span>
      </div>
      {/* BUTTONS */}
      <Tooltip tooltipText="What's new, help, contact, more...">
        <Button variant="sidebar" style="ghost">
          {news && (
            <span
              className="
            iconButton__bubble 
            iconButton__bubble--new 
            iconButton__bubble_size-sm"
            ></span>
          )}
          <span className="icon icon_size-md">help</span>
        </Button>
      </Tooltip>

      <Tooltip tooltipText="Library, trash, more...">
        <Button variant="sidebar" style="ghost">
          <span className="icon icon_size-md">view_cozy</span>
        </Button>
      </Tooltip>
    </footer>
  );
};

export default SidebarTabsMenu;
