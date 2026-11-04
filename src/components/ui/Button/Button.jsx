import './button.scss';

const Button = ({
  children,
  onClick,
  type = 'button',
  hasIcon = false,
  variant = 'primary',
  style = 'solid',
  size = 'md',
  className = '',
  ...props
}) => {
  // Al usar: <Button variant="primary"></Button>
  // Pintará: class="button button--primary"
  return (
    <button
      type={type}
      className={`
        ${hasIcon ? 'iconButton' : 'button'} 
        button--${variant} 
        button--${style} 
        button--${size} 
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
