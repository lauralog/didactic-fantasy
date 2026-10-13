import './appHeader.scss';

const AppHeader = ({ className = '', ...props }) => {
  return (
    <header className={`headerApp ${className}`} {...props}>
      hola soy el header
    </header>
  );
};

export default AppHeader;
