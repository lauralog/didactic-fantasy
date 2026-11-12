import './button.scss';
import { Children, isValidElement } from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'secondary',
  style = 'ghost',
  size = 'md',
  className = '',
  ...props
}) => {
  // Automatización del antiguo onlyIcon
  // El botón detecta si su último hijo es un span con la clase .icon
  // En caso afirmativo, se pinta la clase iconButton
  const childArray = Children.toArray(children);
  const lastChild = childArray[childArray.length - 1];
  const hasIconChild =
    isValidElement(lastChild) &&
    lastChild.type === 'span' &&
    typeof lastChild.props.className === 'string' &&
    lastChild.props.className.split(/\s+/).includes('icon');

  // Al usar: <Button variant="primary"></Button>
  // Pintará: class="button button--primary"
  return (
    <button
      type={type}
      className={`button
        button--${variant} 
        button--${style} 
        button-${size}
        ${hasIconChild ? 'iconButton' : ''}
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
