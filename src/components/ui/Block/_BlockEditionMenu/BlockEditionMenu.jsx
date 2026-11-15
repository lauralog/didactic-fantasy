import { useId } from 'react';

// Components
import Divider from '@/components/ui/Divider';
import CollapsibleMenu from '@/components/ui/CollapsibleMenu/CollapsibleMenu';
import { MenuSectionItem } from '@/components/ui/CollapsibleMenu/_collapsibleMenuItems';
import ChangeBlockTypeMenu from './_ChangeBlockTypeMenu';
import ChangeBlockColorsMenu from './_ChangeBlockColorsMenu';

// Data
import { user } from '@/models/appData';

const BlockEditionMenu = () => {
  // Hook nativo de react que genera un id automáticamente para identificar elementos del html
  // Se supone que se usa mucho en formularios
  const searchInputId = useId();

  // Mocked data
  const block = {
    lastModified: 'Yesterday at 09:56 AM',
    words: 9,
    chars: 28,
  };

  return (
    <div className="menuWrapper">
      <div className="menuSection menuSection--search">
        <label className="sr-only" htmlFor={searchInputId}>
          Search actions
        </label>
        <input
          type="text"
          name="block-edition-menu-actions-search"
          id={searchInputId}
          placeholder="Search actions..."
        />
      </div>

      {/* SECTION */}
      <div className="menuSection">
        {/* He tenido que  poner divs en esta sección porque al tener otro Menú anidado salta un error de que 
        un li no puede contener otros lis dentro de él y esto causa un 'hidration error', 
        a parte de que supongo que a nivel semántico es extremadamente incorrecto*/}
        <div className="menuSection__label">Heading 1</div>
        <div>
          {/* Change Block Type */}
          <CollapsibleMenu
            placement="right"
            trigger={({ toggleMenu }) => (
              <MenuSectionItem
                leftIcon="cached"
                label="Turn into"
                rightIcon="chevron_right"
                onClick={toggleMenu}
              />
            )}
          >
            <ChangeBlockTypeMenu />
          </CollapsibleMenu>
        </div>
        {/* Change Block Color */}
        {/* <CollapsibleMenu
          placement="right"
          trigger={({ toggleMenu }) => (
            <MenuSectionItem
              leftIcon="imagesearch_Roller"
              label="Color"
              rightIcon="chevron_right"
              onClick={toggleMenu}
            />
          )}
        >
          <ChangeBlockColorsMenu />
        </CollapsibleMenu> */}
        <MenuSectionItem leftIcon="imagesearch_Roller" label="Color" rightIcon="chevron_right" />
      </div>

      {/* SECTION */}
      <Divider className="px-2" />

      <ul className="menuSection">
        <MenuSectionItem leftIcon="link_2" label="Copy link to block" rightIcon="chevron_right" />
        <MenuSectionItem leftIcon="content_copy" label="Duplicate" rightIcon="chevron_right" />
        <MenuSectionItem leftIcon="turn_right" label="Duplicate" rightIcon="chevron_right" />
        <MenuSectionItem
          leftIcon="delete"
          label="Delete"
          rightIcon="chevron_right"
          // className="button--danger"
          className="[&:hover]:!text-danger"
        />
      </ul>
      {/* SECTION */}
      <Divider className="px-2" />

      <MenuSectionItem leftIcon="chat" label="Comment" rightIcon="chevron_right" />
      <MenuSectionItem leftIcon="edit_square" label="Suggest edits" rightIcon="chevron_right" />

      {/* SECTION */}
      <Divider className="px-2" />

      <MenuSectionItem leftIcon="smart_toy" label="Ask AI" rightIcon="chevron_right" />
      <MenuSectionItem leftIcon="psychology" label="Skills" rightIcon="chevron_right" />
      <Divider className="px-2" />

      {/* BLOCK INFO FOOTER */}
      {/* Refactor >>>>> CollapsibleMenu/MenuFooterSection */}
      <div className="menuSection menuSection--infoFooter">
        <div className="menuSection--infoFooter__label">Last edited</div>
        <div className="menuSection--infoFooter__user">
          <span className="avatarWrapper">
            <img className="avatar" src={user.avatar} alt={`foto de perfil de ${user.username}`} />
          </span>
          <span className="username">{user.username}</span>
        </div>
        <div className="menuSection--infoFooter__lastModifiedDate">{block.lastModified}</div>
        <div className="menuSection--infoFooter__blockCharacters">
          {block.words} words, {block.chars} characters
        </div>
      </div>
    </div>
  );
};

export default BlockEditionMenu;
