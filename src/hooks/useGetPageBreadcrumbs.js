/**
 * Función para recuperar los breadcrumbs de cualquier página
 * @param {Object} page
 * @param {Array} pages
 * @returns {Array}
 */
const useGetPageBreadcrumbs = (page, pages) => {
  // Fallback: si no existe la página, devolvemos un array vacío
  if (!page) return [];

  // Si la página no tiene ascendencia, devolvemos solo esa página
  if (page.parentId === '') {
    return [page];
  }

  // Obtener la página padre
  const parentPage = pages.find((p) => p.id === page.parentId);

  // Obtener los breadcrumbs del padre y añadir la página actual
  return [...useGetPageBreadcrumbs(parentPage, pages), page];
};

export default useGetPageBreadcrumbs;
