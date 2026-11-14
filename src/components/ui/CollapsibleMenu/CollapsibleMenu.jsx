import { useState } from 'react';

import './collapsibleMenu.scss';

const CollapsibleMenu = ({ trigger, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={`collapsibleMenu ${className}`}>
      {trigger({
        isOpen,
        toggleMenu,
      })}

      <div className={`collapsibleMenu__panel ${isOpen ? 'collapsibleMenu__panel--open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default CollapsibleMenu;
