const MenuSectionItem = ({ leftIcon = '', label, rightIcon = '', className = '', onClick }) => {
  return (
    <li role="button" className={`menuSection__item ${className}`} onClick={onClick}>
      {leftIcon && <span className="icon iconL">{leftIcon}</span>}

      <span className="name">{label}</span>

      {rightIcon && <span className="icon iconR">{rightIcon}</span>}
    </li>
  );
};

export default MenuSectionItem;
