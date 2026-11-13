/**
 * Este hook sirve para obtener los bloques de una página mediante el objeto activePage
 * que contiene la página activa como objeto. Se consulta el atributo "content", que
 * tiene guardados los uuids de los bloques que configuran el contenido de la página,
 * y se buscan bloques correspondientes a esos ids en el JSON que contiene los bloques
 *
 * Se podría añadir también el parámetro notionPages con todas las páginas para hacer
 * este hook reutilizable para cualquier página, pero no nos interesa ya que los bloques
 * que se tienen que pintar son los de la activePage tal y como funciona ahora la app
 *
 * @param {Object} activePage
 * @param {JSON} notionBlocks
 * @returns Array de objetos notionBlock
 */
const useGetActivePageBlocks = (activePage, notionBlocks) => {
  // En principio no hace falta recuperar el objeto entero de la página ya que
  // el hook está pensado para usarlo en appPage, que ya recibe activePage como
  // objeto por lo que debería de tener acceso a todos sus atributos
  const activePageBlocks = notionBlocks.filter((block) => activePage.content.includes(block.id));

  return activePageBlocks;
};

export default useGetActivePageBlocks;
