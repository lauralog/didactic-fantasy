export const MenuSectionItem = ({
  leftIcon = '',
  label,
  rightIcon = '',
  className = '',
  onClick,
}) => {
  return (
    <li role="button" className={`menuSection__item ${className}`} onClick={onClick}>
      {leftIcon && <span className="icon iconL">{leftIcon}</span>}

      <span className="name">{label}</span>

      {rightIcon && <span className="icon iconR">{rightIcon}</span>}
    </li>
  );
};

export const MenuFooterSection = ({ user, element }) => {
  return (
    <div className="menuSection menuSection--infoFooter">
      {/* Label */}
      <div className="menuSection--infoFooter__label">Last edited</div>
      {/* Last edition User */}
      {user && (
        <div className="menuSection--infoFooter__user">
          <span className="avatarWrapper">
            <img className="avatar" src={user.avatar} alt={`foto de perfil de ${user.username}`} />
          </span>
          <span className="username">{user.username}</span>
        </div>
      )}
      {/* Last edition Date */}
      <div className="menuSection--infoFooter__lastModifiedDate">{element?.lastModified}</div>
      {/* Words and chars data */}
      {element?.words && element?.chars && (
        <div className="menuSection--infoFooter__blockCharacters">
          {element.words} words, {element.chars} characters
        </div>
      )}
    </div>
  );
};

// export default MenuSectionItem;
