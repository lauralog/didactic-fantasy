import './_blockEditMenu.scss';

const BlockEditionMenu = () => {
  return (
    <div>
      <div className="menuSection--search">Search actions...</div>

      <ul className="menuSection">
        <li className="label">Heading 1</li>
        <li>Turn into</li>
        <li>Color</li>
      </ul>

      <ul className="menuSection">
        <li>Copy link to block</li>
        <li>Duplicate</li>
        <li>Move to</li>
        <li>Delete</li>
      </ul>
    </div>
  );
};

export default BlockEditionMenu;
