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

interface NotionBlock {
  id: string;
  content: any;
  type: string; // text, quote, heading, callout, toggle, code, page...
  createdBy: string; // usuario que ha creado el bloque
  lastModifiedBy: string; // usuario que ha creado el bloque
  creationDate: string;
  lastModifiedDate: string;
}

interface NotionUser {
  mail: string;
  username: string;
  avatar: string;
}
