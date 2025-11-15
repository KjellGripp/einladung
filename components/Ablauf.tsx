import React from 'react';

interface FestivalDataProps {
  onBack: () => void;
  onNext: () => void;
}

const festivalInfo = [
  { label: 'Location', value: 'Festivalgelände' },
  { label: 'Einlass', value: '16 Uhr' },
  { label: 'Ankunft Brautpaar', value: '22:30 Uhr' },
  { label: 'Musikstart', value: '23 Uhr' },
];

const FestivalData: React.FC<FestivalDataProps> = ({ onBack, onNext }) => {
  return (
    <div className="text-center flex flex-col items-center max-w-4xl w-full z-10">
      <h1 className="font-cursive text-6xl md:text-8xl my-4 text-gold-shiny">
        Festivaldaten
      </h1>
      <p className="text-lg md:text-xl mt-6 text-gold-shiny max-w-md">
        Wir können es kaum erwarten, dieses Wochenende mit euch zu verbringen!
      </p>
      
      <div className="mt-12 w-full max-w-lg">
        <ul className="space-y-10">
          {festivalInfo.map((item) => (
            <li key={item.label} className="grid grid-cols-2 gap-6 items-center">
              {/* Left Column: Label */}
              <div className="text-right">
                <p className="font-cursive text-4xl md:text-5xl text-gold-shiny leading-tight">
                  {item.label}
                </p>
              </div>

              {/* Right Column: Value */}
              <div className="text-left border-l-2 border-gold/30 pl-6">
                <p className="text-gold-shiny text-lg md:text-xl">
                  {item.value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-16 flex flex-col items-center space-y-4">
        <button
            onClick={onNext}
            className="btn-eggshell text-lg tracking-wider"
          >
          Festivalmap
        </button>
        <button
          onClick={onBack}
          className="text-gold-shiny/70 hover:text-gold-shiny transition-colors text-sm tracking-wider"
        >
          ← Zurück zur Anmeldung
        </button>
      </div>
    </div>
  );
};

export default FestivalData;