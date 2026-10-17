// En este archivo voy a dejar definidas las estructuras de datos
// de los elementos que poblarían la app según este clon de notion
// Hay elementos que no voy a definir, como los Teamspaces y los usuarios
// También hay atributos que para este caso simplifico o no utilizo,
// como por ejemplo: el último usuario que ha modificado una página

interface NotionPage {
  id: string;
  title: string;
  icon: string;
  imgBanner: string;
  creationDate: string; // ISO 8601
  isShared: boolean; // Esto idealmente sería un array de usuarios: String
  isFavourite: boolean;
  lastModified: string; // DD/MM/AAAA
  content: string[]; // IDs de los bloques
  parent: String; // ID de la página padre si la tiene
}

// Las páginas contienen un array content que
// guarda el orden de renderizado los ids de
// los bloques, de esa forma los bloques no
// tienen ni necesitan de un att. en referencia a
// la página ya que se gestionan desde estas.
// Esto es mega ineficiente en la vida real pero
// para este ejercicio voy a hacerlo así

interface NotionBlock {
  id: string;
  content: any;
  type: string; // text, quote, heading, callout, toggle, code, page...
  createdBy: string; // usuario que ha creado el bloque
  lastModifiedBy: string; // usuario que ha creado el bloque
  creationDate: string;
  lastModifiedDate: string;
  // bgColor
  // textColor
}

interface NotionUser {
  mail: string;
  username: string;
  avatar: string;
}
