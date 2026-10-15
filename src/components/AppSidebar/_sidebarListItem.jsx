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
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.page - Datos de la página que se mostrará.
 * @param {string} props.page.id - Identificador único de la página.
 * @param {React.ReactNode} props.page.icon - Icono que representa la página.
 * @param {string} props.page.title - Título visible de la página.
 * @param {boolean} [props.active=false] - Indica si la página está activa.
 * @param {Function} [props.onClick] - evento 'click'. La lógica de selección se define en el componente padre
 * @param {string} [props.className=''] - Clase CSS adicional opcional
 * @param {Object} props.props - Fallback para propiedades adicionales recibidas
 *
 * @returns {JSX.Element} Elemento de lista que representa una página del sidebar.
 */
const SidebarListItem = ({ page, active = false, onClick, className = '', ...props }) => {
  const { id, icon, title } = page;

  return (
    <li
      id={id}
      onClick={onClick}
      data-active={active}
      className={`pageList__item ${active ? 'pageList__item--active' : ''}`}
    >
      <span className="icon">{icon}</span>
      <span>{title}</span>
    </li>
  );
};

export default SidebarListItem;
