'use client';

import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import './tooltip.scss';

const Tooltip = ({ tooltipText, children, className = '', ...props }) => {
  const wrapperRef = useRef(null);
  const [position, setPosition] = useState(null);

  const handleMouseEnter = () => {
    const rect = wrapperRef.current.getBoundingClientRect();

    setPosition({
      top: rect.bottom + 4,
      left: rect.left + rect.width / 2,
    });
  };

  return (
    <span
      ref={wrapperRef}
      className="tooltipWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setPosition(null)}
    >
      {children}

      {position &&
        createPortal(
          <span
            className={`tooltip ${className}`}
            style={{
              top: position.top,
              left: position.left,
            }}
            {...props}
          >
            {tooltipText}
          </span>,
          document.body,
        )}
    </span>
  );
};

export default Tooltip;
