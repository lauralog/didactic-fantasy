import './../appHeader.scss';

import BreadcrumbDropdown from './_breadcrumbDropdown';

/**
 * Este componente es un componente simple encargado de renderizar el
 * elemento de breadcrumb individual (átomo).
 * Recibe como parámetros el objeto página que le provee de contenido
 * y el booleado isLast que indica si es o no el último elemento o
 * elemento activo que se utiliza para modificar los estilos CSS
 * @param {Object} props.breadcrumb - Objeto con el contenido del breadcrumb
 * @param {boolean} props.isLast - Indica si es el úlitmo elemento
 * @param {string} props.separator - Caracter utilizado para el separador
 * @returns {JSX.Element} Elemento <li> list item de breadcrumb
 */

const BreadcrumbItem = ({
  breadcrumb,
  isLast = false,
  separator = '/',
  className = '',
  ...props
}) => {
  const mockedChildrenPages = [
    '🎨 Proyectos de Diseño Interactivo I',
    '👤 Experiencia de Usuario',
    '💻 Programación para Diseñadores',
    '⌨️ Lenguajes de Programación',
    '🖥️ Interfaz y Cultura',
    '⚡ Computación Física',
    '🧩 Proyectos de Diseño Interactivo II',
    '💼 Prácticas',
  ];

  return (
    <li className="breadcrumbItem ">
      <div
        className={`breadcrumb relative ${isLast ? 'breadcrumb_last' : ''}  ${className}`}
        {...props}
      >
        <span className="icon icon_size-sm">{breadcrumb.icon}</span>

        <span className="breadcrumb__label">{breadcrumb.title}</span>

        {!isLast && <span className="breadcrumb__separator">{separator}</span>}
        <BreadcrumbDropdown pages={mockedChildrenPages} />
      </div>
    </li>
  );
};

export default BreadcrumbItem;
