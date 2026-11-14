import { useEffect, useRef, useState } from 'react';

import './collapsibleMenu.scss';

const CollapsibleMenu = ({ trigger, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Guarda una referencia al contenedor que incluya el botón y el menú.
  // Se usará esta referencia para luego sabe si el usuario ha hecho click fuera y poder cambiar el estado a close.
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    // Si el menú no está opened no hacemos nada
    if (!isOpen) return;

    // Si el menú no está open...
    const handleOutsideClick = (ev) => {
      // Recibimos el evento Click
      // Event.target es el elemento donde el usuario ha hecho click
      // Comprobar si el ev.target está dentro de la referencia
      // y si no es así pasa el estado a opened = false -> closed
      if (!menuRef.current.contains(ev.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    // Limpiar el evento cuando el menú esté cerrado para no acumular clicks innecesarios
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className={`collapsibleMenu ${className}`}>
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
