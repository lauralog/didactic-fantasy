import { useEffect, useRef, useState } from 'react';
// createPortal: Permite renderizar HTML dentro de document.body,
// independientemente de quién sea el padre de ese HTML.
import { createPortal } from 'react-dom';

import './collapsibleMenu.scss';

const CollapsibleMenu = ({ trigger, children, className = '' }) => {
  // Estado para guardar si el menú está opened o closed
  const [isOpen, setIsOpen] = useState(false);
  // Estado para guardar la posición del trigger
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
  });
  // Guarda una referencia al contenedor que incluya el botón y el menú.
  // Se usará esta referencia para luego sabe si el usuario ha hecho click fuera y poder cambiar el estado a close.
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (!isOpen && menuRef.current) {
      // getBoundingClientRect(): devuelve las dimensiones y la
      // posición del elemento respecto a la ventana del navegador.
      const rect = menuRef.current.getBoundingClientRect();
      // rect.top: inicio arriba
      // rect.left: inicio izquierda
      // rect.width: ancho
      // rect.height: altura

      // Calcular posición manualmente
      // Nota a futuro: cambiar para hacerlo responsive
      setMenuPosition({
        top: rect.top + rect.height / 2,
        left: rect.left - 265 - 8,
      });
      // Colocación:
      // Centrado verticalmente respecto al trigger.
      // A la izqda del trigger, dejando 8 píxeles de separación.
      // Suponiendo que el menú mide 265 píxeles de ancho.
    }

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

      {/* <div className={`collapsibleMenu__panel ${isOpen ? 'collapsibleMenu__panel--open' : ''}`}>
        {children}
      </div> */}
      {isOpen &&
        createPortal(
          <>
            <div className="collapsibleMenu__overlay" onClick={() => setIsOpen(false)} />

            <div
              className="collapsibleMenu__panel"
              style={{
                top: menuPosition.top,
                left: menuPosition.left,
              }}
            >
              {children}
            </div>
          </>,
          document.body,
        )}
    </div>
  );
};

export default CollapsibleMenu;
