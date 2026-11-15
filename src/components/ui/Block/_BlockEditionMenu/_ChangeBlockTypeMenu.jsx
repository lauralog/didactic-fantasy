// import '@/components/ui/CollapsibleMenu/collapsibleMenu.scss';

// Components
import { MenuSectionItem } from '@/components/ui/CollapsibleMenu/_collapsibleMenuItems';

const ChangeBlockTypeMenu = () => {
  return (
    // NESTED MENU - BLOCK TYPE
    // Modify >>>> Dynamic rendering
    <div className="menuWrapper menuWrapper--nested">
      <ul className="menuSection" role="menu" aria-label="Turn into">
        <MenuSectionItem leftIcon="title" label="Text" role="menuitem" />
        <MenuSectionItem leftIcon="format_h1" label="Heading 1" role="menuitem" />
        <MenuSectionItem leftIcon="format_h2" label="Heading 2" role="menuitem" />
        <MenuSectionItem leftIcon="format_h3" label="Heading 3" role="menuitem" />
        <MenuSectionItem leftIcon="format_h4" label="Heading 4" role="menuitem" />
      </ul>
    </div>
  );
};

export default ChangeBlockTypeMenu;
