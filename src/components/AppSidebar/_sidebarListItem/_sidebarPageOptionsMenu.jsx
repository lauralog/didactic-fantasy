// import '@/components/ui/CollapsibleMenu/collapsibleMenu.scss';
import { user } from '@/models/appData';

// Components
import {
  MenuSectionItem,
  MenuFooterSection,
} from '@/components/ui/CollapsibleMenu/_collapsibleMenuItems';
import Divider from '@/components/ui/Divider';

const SidebarPageOptionsMenu = ({ page }) => {
  console.log(page);
  return (
    <div className="menuWrapper">
      {/* SECTION */}
      <ul className="menuSection">
        <div className="menuSection__label">Page</div>
        {page.isFav ? (
          <MenuSectionItem leftIcon="star_shine" label="Remove from Favourites" />
        ) : (
          <MenuSectionItem leftIcon="star" label="Add to Favourites" />
        )}
      </ul>

      {/* SECTION */}
      <Divider className="px-2" />
      <ul className="menuSection">
        <MenuSectionItem leftIcon="link_2" label="Copy link" rightIcon="" />
        <MenuSectionItem leftIcon="edit_square" label="Rename" rightIcon="keyboard_command_key" />
        <MenuSectionItem leftIcon="turn_right" label="Move to" rightIcon="keyboard_command_key" />
      </ul>

      {/* SECTION */}
      <Divider className="px-2" />
      <ul className="menuSection">
        <MenuSectionItem leftIcon="cached" label="Turn into Wiki" />
      </ul>

      {/* SECTION */}
      <Divider className="px-2" />
      <ul className="menuSection">
        <MenuSectionItem
          leftIcon="north_east"
          label="Open in new tab"
          rightIcon="keyboard_command_key"
        />
        <MenuSectionItem
          leftIcon="split_scene_right"
          label="Open in side peek"
          rightIcon="keyboard_option_key"
        />
      </ul>

      {/* FOOTER */}
      <Divider className="px-2" />
      <MenuFooterSection element={page} user={user} />
    </div>
  );
};

export default SidebarPageOptionsMenu;
