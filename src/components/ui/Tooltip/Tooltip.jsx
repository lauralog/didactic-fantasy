import './tooltip.scss';

const Tooltip = ({ tooltipText, children, className = '', ...props }) => {
  return (
    // Necesito la referencia del padre para los estilo tb
    <span className={`tooltipWrapper`}>
      {children}
      <span className={`tooltip ${className}`} {...props}>
        {tooltipText}
      </span>
    </span>
  );
};

export default Tooltip;

/**
 * USAGE
 *
 * <Tooltip tooltipText="Lock sidebar open">
 *  <Component />
 * </Tooltip>
 */
