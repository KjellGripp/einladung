
import React, { useState } from 'react';
import IntertwinedRingsIcon from './components/IntertwinedRingsIcon';
import BackgroundMandalas from './components/BackgroundMandalas';
import Rsvp from './components/Rsvp';
import FestivalData from './components/Ablauf';
import Festivalmap from './components/LineUp';

type View = 'invitation' | 'rsvp' | 'ablauf' | 'festivalmap' | 'danke';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('invitation');
  const [isFading, setIsFading] = useState(false);

  const changeView = (view: View) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentView(view);
      setIsFading(false);
    }, 500); // Corresponds to transition duration
  };

  const InvitationView: React.FC = () => (
    <div className="text-center flex flex-col items-center max-w-2xl w-full z-10">
      <h2 className="text-2xl md:text-3xl tracking-widest uppercase font-light text-gold-shiny">
        Festivaleinladung
      </h2>

      <p className="text-lg md:text-xl tracking-wider mt-8 text-gold-shiny">
        zur Feier der Hochzeit von
      </p>

      <h1 className="font-cursive text-6xl md:text-8xl mt-4 text-gold-shiny">
        Glennie
      </h1>

      <div className="my-4 transform scale-125">
        <IntertwinedRingsIcon />
      </div>
      
      <h1 className="font-cursive text-6xl md:text-8xl text-gold-shiny">
        Kjell
      </h1>

      <div className="mt-8 pt-6 border-t border-gold/40 w-full max-w-sm">
        <p className="text-base md:text-lg tracking-wider text-gold-shiny">
          26.06.-28.06.2026
        </p>
        <p className="text-base md:text-lg tracking-wider mt-2 text-gold-shiny">
          in Surendorf
        </p>
      </div>
      <div className="mt-12">
        <button
          onClick={() => changeView('rsvp')}
          className="btn-eggshell text-lg tracking-wider"
        >
          Ich bin dabei!
        </button>
      </div>
    </div>
  );

  const DankeView: React.FC = () => (
    <div className="text-center flex flex-col items-center max-w-2xl w-full z-10">
      <h1 className="font-cursive text-6xl md:text-8xl my-4 text-gold-shiny">
        Vielen Dank!
      </h1>
      <p className="text-lg md:text-xl mt-6 text-gold-shiny max-w-md">
        Wir haben deine Rückmeldung erhalten und freuen uns riesig, diesen besonderen Tag mit dir zu teilen.
      </p>
      <div className="mt-12">
        <button
          onClick={() => changeView('invitation')}
          className="text-gold-shiny/70 hover:text-gold-shiny transition-colors text-sm tracking-wider"
        >
          Zurück zum Anfang
        </button>
      </div>
    </div>
  );


  const renderContent = () => {
    switch (currentView) {
      case 'invitation':
        return <InvitationView />;
      case 'rsvp':
        return <Rsvp onBack={() => changeView('invitation')} onConfirm={() => changeView('ablauf')} />;
      case 'ablauf':
        return <FestivalData onBack={() => changeView('rsvp')} onNext={() => changeView('festivalmap')} />;
      case 'festivalmap':
        return <Festivalmap onBack={() => changeView('ablauf')} onNext={() => changeView('danke')} />;
      case 'danke':
        return <DankeView />;
      default:
        return <InvitationView />;
    }
  };

  return (
    <main className="bg-bordeaux font-sans min-h-screen flex items-center justify-center p-4 selection:bg-eggshell selection:text-bordeaux overflow-hidden relative">
      <BackgroundMandalas />
      <div className={`transition-opacity duration-500 w-full flex justify-center ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {renderContent()}
      </div>
    </main>
  );
};

export default App;