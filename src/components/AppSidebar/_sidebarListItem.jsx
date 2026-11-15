'use client';
import './appSidebar.scss';

// Hooks
import { useState } from 'react';

// Components
import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';

/**
 * Componente que representa un elemento de página en el sidebar,
 * en el apartado /home, que muestra la lista de páginas.
 * Está pensado para usarse dentro de un pageGroup en appSidebar.
 *
 * Recibe los datos de una página y permite indicar si está activa,
 * además de ejecutar una acción al hacer clic sobre ella.
 *
 * El estado de la página activa se gestiona desde el componente
 * padre (`page.jsx`), que determina qué página está seleccionada
 * y pasa el resultado a través de la prop `active`.
 *
 * @component
 *
 * @param {Object} props - fallback de propiedades del componente con operador spread.
 * @param {Object} page - Datos de la página que se mostrará.
 * @param {boolean} active - Indica si la página está activa.
 * @param {Function} onClick - evento 'click'. La lógica de selección se define en el componente padre
 * @param {Object} props.props - Fallback para propiedades adicionales recibidas
 *
 * @returns {JSX.Element} Elemento de lista que representa una página del sidebar.
 */
const SidebarListItem = ({ page, isActive = false, onClick, className = '', ...props }) => {
  const { id, icon, title } = page;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      id={id}
      role="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-active={isActive}
      data-hovered={isHovered}
      className={` pageList__item ${isActive ? 'pageList__item--active' : ''}`}
    >
      {isHovered && (
        <Button style="ghost" size="xs" className="dropdownToggle">
          <span className="icon icon_size-xs m-0">chevron_right</span>
        </Button>
      )}
      <span className="icon icon_size-sm">{icon}</span>
      <span className="label">{title}</span>
      {isHovered && (
        <span className="actionButtons">
          <Tooltip tooltipText="Add a page inside">
            <Button style="ghost" size="xs">
              <span className="icon icon_size-sm m-0">add</span>
            </Button>
          </Tooltip>
          <Tooltip tooltipText="Remove, rename, and more...">
            <Button style="ghost" size="xs">
              <span className="icon icon_size-sm m-0">more_horiz</span>
            </Button>
          </Tooltip>
        </span>
      )}
    </li>
  );
};

export default SidebarListItem;
