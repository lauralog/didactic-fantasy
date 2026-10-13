import './button.scss';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) {
  // Al usar: <Button variant="primary"></Button>
  // Pintará: class="button button--primary"
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
