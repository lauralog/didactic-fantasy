'use client';
import './appSidebar.scss';

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

  return (
    <li
      id={id}
      role="button"
      onClick={onClick}
      data-active={isActive}
      className={` pageList__item ${isActive ? 'pageList__item--active' : ''}`}
    >
      <span className="icon">{icon}</span>
      <span className="label">{title}</span>
    </li>
  );
};

export default SidebarListItem;
