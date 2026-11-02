import './button.scss';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  style = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  // Al usar: <Button variant="primary"></Button>
  // Pintará: class="button button--primary"
  return (
    <button
      type={type}
      className={`button button--${variant} button--${style} button--${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
