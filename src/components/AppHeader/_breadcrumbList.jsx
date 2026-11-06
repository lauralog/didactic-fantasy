import BreadcrumbItem from './__breadcrumbItem';

/**
 * Este componente es el wrapper de los Breadcrumb Items
 * Necesita recibir un array de elementos que contiene los
 * niveles de navegación de las páginas.
 * El componente hace un map del array obteniendo un Breadcrumb Item
 * por cada objeto que encuentre en ese array.
 * @param {Array} breadcrumbs - Objeto con el contenido del breadcrumb
 * @param {string} props.separator - Caracter utilizado para el separador
 */

const BreadcrumbList = ({ breadcrumbs, className, ...props }) => {
  // console.log(breadcrumbs);
  return (
    <ol className="breadcrumbList">
      {breadcrumbs.map((breadcrumb, index) => (
        <BreadcrumbItem
          key={breadcrumb.id}
          breadcrumb={breadcrumb}
          isLast={index === breadcrumbs.length - 1}
        />
      ))}
    </ol>
  );
};

export default BreadcrumbList;
