import React from 'react';

interface FestivalmapProps {
  onBack: () => void;
  onNext: () => void;
}

const Festivalmap: React.FC<FestivalmapProps> = ({ onBack, onNext }) => {
  return (
    <div className="text-center flex flex-col items-center max-w-4xl w-full z-10" style={{ minHeight: '60vh' }}>
      <h1 className="font-cursive text-6xl md:text-8xl my-4 text-gold-shiny">
        Festivalmap
      </h1>

      <div className="flex-grow"></div> {/* This will push the buttons to the bottom */}
      
      <div className="mt-16 flex flex-col items-center space-y-4">
        <button
            onClick={onNext}
            className="btn-eggshell text-lg tracking-wider"
          >
          Anmeldung abschließen
        </button>
        <button
          onClick={onBack}
          className="text-gold-shiny/70 hover:text-gold-shiny transition-colors text-sm tracking-wider"
        >
          ← Zurück zu den Festivaldaten
        </button>
      </div>
    </div>
  );
};

export default Festivalmap;
