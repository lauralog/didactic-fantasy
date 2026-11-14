const Divider = ({ direction = 'x', className = '' }) => {
  return (
    <div className={className}>
      <span
        className={`
          block bg-foreg/10
          ${direction === 'x' ? 'w-full h-px' : 'h-full w-px'}
        `}
      />
    </div>
  );
};

export default Divider;
