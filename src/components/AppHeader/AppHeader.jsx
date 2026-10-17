import './appHeader.scss';

const AppHeader = ({ className = '', ...props }) => {
  return (
    <header className={`appHeader ${className}`} {...props}>
      hola soy el header
    </header>
  );
};

export default AppHeader;
