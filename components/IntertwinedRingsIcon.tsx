
import React from 'react';

const IntertwinedRingsIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100"
    width="100"
    height="50"
    className="stroke-current text-gold"
    fill="none"
    strokeWidth="6"
    aria-hidden="true"
  >
    {/* Background-colored stroke to create the 'under' part of the right ring */}
    <circle cx="130" cy="50" r="35" className="stroke-bordeaux" strokeWidth="10" />

    {/* Left ring, drawn on top */}
    <circle cx="70" cy="50" r="35" />

    {/* Right ring, drawn on top */}
    <circle cx="130" cy="50" r="35" />
  </svg>
);

export default IntertwinedRingsIcon;