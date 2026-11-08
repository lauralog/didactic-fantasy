'use client';

import { notifications, user } from '@/models/appMenus';

import Button from '@/components/ui/Button/Button';

const SidebarTabsMenu = ({ user, className = '', ...props }) => {
  const news = true;
  return (
    <footer className={`sidebarWrapper__footer ${className}`}>
      {/* USER */}
      <div role="button" className="userToggle">
        {/* Refactor >>> Avatar Component */}
        <div className="userToggle__avatarWrapper relative">
          <div className="imageContainer">
            <img className="avatar" src={user.avatar} alt={`foto de perfil de ${user.username}`} />
          </div>
          {notifications.length > 0 && (
            <span className="bubbleAlert bubbleAlert--notification outline-1 outline-white bubbleAlert-sm !right-1.5"></span>
          )}
        </div>
        <span className="userToggle__username">{user.username}</span>
        <span className="icon userToggle__icon">chevron_right</span>
      </div>
      {/* BUTTONS */}
      {/* Refactor >>> Button Component */}
      <Button onlyIcon={true} variant="secondary" style="ghost">
        <span className="icon icon-md">help</span>
        {news && (
          <span
            className="
            bubbleAlert 
            bubbleAlert--new 
            bubbleAlert-sm 
            !top-1 !right-1"
          ></span>
        )}
      </Button>
      {/* Refactor >>> Button Component */}
      <Button onlyIcon={true} variant="secondary" style="ghost">
        <span className="icon icon-md">view_cozy</span>
      </Button>
    </footer>
  );
};

export default SidebarTabsMenu;
