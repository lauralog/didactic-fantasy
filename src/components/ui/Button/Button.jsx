import './button.scss';
import { Children, isValidElement } from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  style = 'solid',
  size = 'md',
  className = '',
  ...props
}) => {
  // Automatización del antiguo onlyIcon
  // El botón detecta si solo tiene un hijo y si este es un span con la clase .icon
  // En caso afirmativo, se pinta la clase iconButton
  const childArray = Children.toArray(children);
  const hasIconChild =
    childArray.length === 1 &&
    isValidElement(childArray[0]) &&
    childArray[0].type === 'span' &&
    typeof childArray[0].props.className === 'string' &&
    childArray[0].props.className.split(/\s+/).includes('icon');

  // Al usar: <Button variant="primary"></Button>
  // Pintará: class="button button--primary"
  return (
    <button
      type={type}
      className={`button
        ${hasIconChild ? 'iconButton' : ''}
        button--${variant} 
        button--${style} 
        button-${size}
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
