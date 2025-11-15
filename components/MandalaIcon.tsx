
import React from 'react';

interface MandalaIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const MandalaIcon: React.FC<MandalaIconProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="48" />
    <g transform="translate(50,50)">
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => (
        <g key={angle} transform={`rotate(${angle})`}>
          <circle cx="0" cy="0" r="38" />
          <path d="M 0 0 C 10 10, 20 25, 0 40" />
          <path d="M 0 0 C -10 10, -20 25, 0 40" />
        </g>
      ))}
      <circle cx="0" cy="0" r="10" />
    </g>
  </svg>
);

export default MandalaIcon;