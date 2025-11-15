
import React from 'react';

interface RsvpProps {
  onBack: () => void;
  onConfirm: () => void;
}

const Rsvp: React.FC<RsvpProps> = ({ onBack, onConfirm }) => {
  return (
    <div className="text-center flex flex-col items-center max-w-2xl w-full z-10">
      <h1 className="font-cursive text-6xl md:text-8xl my-4 text-gold-shiny">
        Wir freuen uns auf Euch!
      </h1>
      <p className="text-lg md:text-xl mt-6 text-gold-shiny max-w-md">
        Bitte gebt uns bis zum 26.04.2026 Bescheid, ob ihr dabei sein könnt.
      </p>
      
      <div className="mt-8 w-full max-w-sm">
        <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Eure Namen" 
              aria-label="Eure Namen"
              className="w-full bg-bordeaux border border-gold/40 rounded-full px-4 py-2 text-gold-shiny placeholder-gold/60 focus:outline-none focus:ring-2 focus:ring-gold" 
            />
            <div className="flex justify-center">
                <button onClick={onConfirm} type="button" className="btn-eggshell w-full">Zusagen</button>
            </div>
        </div>
      </div>
      
      <div className="mt-12">
        <button
          onClick={onBack}
          className="text-gold-shiny/70 hover:text-gold-shiny transition-colors text-sm tracking-wider"
        >
          ← Zurück zur Einladung
        </button>
      </div>
    </div>
  );
};

export default Rsvp;