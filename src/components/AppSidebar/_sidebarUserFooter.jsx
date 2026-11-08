'use client';

const SidebarTabsMenu = ({ user, className = '', ...props }) => {
  const news = true;
  return (
    <footer className={`sidebarWrapper__footer ${className}`}>
      {/* USER */}
      <div role="button" className="iconButton userToggle">
        {/* Refactor >>> Avatar Component */}
        <div className="userToggle__avatarWrapper">
          <img className="avatar" src={user.avatar} alt={`foto de perfil de ${user.username}`} />
        </div>
        <span className="userToggle__username">{user.username}</span>
        <span className="icon userToggle__icon">chevron_right</span>
      </div>
      {/* BUTTONS */}
      {/* Refactor >>> Button Component */}
      <button className="iconButton">
        <span className="icon icon-md">help</span>
        {news && (
          <span
            className="
            bubbleAlert 
            bubbleAlert--new 
            bubbleAlert-sm 
            top-1 right-1"
          ></span>
        )}
      </button>
      {/* Refactor >>> Button Component */}
      <button className="iconButton">
        <span className="icon icon-md">view_cozy</span>
      </button>
    </footer>
  );
};

export default SidebarTabsMenu;
