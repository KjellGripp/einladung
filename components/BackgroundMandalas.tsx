
import React from 'react';
import MandalaIcon from './MandalaIcon';

const BackgroundMandalas: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 text-gold/80">
      <MandalaIcon
        className="mandala"
        style={{
          width: '80vmin',
          height: '80vmin',
          top: '-40vmin',
          left: '-40vmin',
          animationDuration: '110s',
        }}
      />
       <MandalaIcon
        className="mandala"
        style={{
          width: '60vmin',
          height: '60vmin',
          bottom: '-30vmin',
          right: '-30vmin',
          animationDuration: '130s',
          animationDelay: '-10s'
        }}
      />
      <MandalaIcon
        className="mandala"
        style={{
          width: '40vmin',
          height: '40vmin',
          top: '5vmin',
          right: '-15vmin',
          animationDuration: '150s',
          animationDelay: '-25s'
        }}
      />
       <MandalaIcon
        className="mandala"
        style={{
          width: '50vmin',
          height: '50vmin',
          bottom: '2vmin',
          left: '-20vmin',
          animationDuration: '100s',
          animationDelay: '-5s'
        }}
      />
    </div>
  );
};

export default BackgroundMandalas;