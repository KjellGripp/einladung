
import React, { useState } from 'react';

interface MenuProps {
  onBack: () => void;
  onConfirm: () => void;
}

const mainCourses = [
  {
    title: 'Tranchiertes Kalbsfilet',
    description: 'mit Rosmarinkartoffeln, Speckbohnen und Jus',
  },
  {
    title: 'Gebratenes Dorschfilet',
    description: 'mit gemischtem Gemüse, Bratkartoffeln und Senfsauce',
  },
  {
    title: 'Steinpilzravioli (vegetarisch)',
    description: 'in Nussbutter gebraten mit Frühlingslauch und Cherrytomaten, dazu Rucola und Parmesan',
  },
];

const Menu: React.FC<MenuProps> = ({ onBack, onConfirm }) => {
  const [selection, setSelection] = useState<string | null>(null);

  const MenuDivider: React.FC = () => (
    <div className="text-center text-gold-shiny text-xl tracking-widest my-8">
      ***
    </div>
  );

  return (
    <div className="text-center flex flex-col items-center max-w-2xl w-full z-10">
      <h1 className="font-cursive text-6xl md:text-8xl my-4 text-gold-shiny">
        Menüauswahl
      </h1>

      <div className="w-full max-w-xs my-8 border-t border-gold/40"></div>

      <div className="w-full max-w-lg text-gold-shiny">
        {/* Vorspeise */}
        <div>
          <h2 className="font-cursive text-4xl md:text-5xl text-gold-shiny">Vorspeisenteller</h2>
          <p className="mt-2 text-lg">Tomate-Mozzarella, Anti-Pasti, Bruschetta, Argentinische Wildgarnele</p>
        </div>

        <MenuDivider />

        {/* Hauptgang */}
        <div>
          <h2 className="font-cursive text-4xl md:text-5xl text-gold-shiny mb-6">Hauptgang</h2>
          <fieldset className="space-y-4">
            <legend className="sr-only">Wähle einen Hauptgang</legend>
            {mainCourses.map((course) => (
              <label
                key={course.title}
                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 text-left ${
                  selection === course.title ? 'border-eggshell bg-gold/10' : 'border-gold/40 hover:border-gold'
                }`}
              >
                <input
                  type="radio"
                  name="main-course"
                  value={course.title}
                  checked={selection === course.title}
                  onChange={(e) => setSelection(e.target.value)}
                  className="sr-only" // Visually hidden, but accessible
                  aria-labelledby={`${course.title}-title`}
                  aria-describedby={`${course.title}-desc`}
                />
                <h3 id={`${course.title}-title`} className="text-xl font-bold text-eggshell">{course.title}</h3>
                <p id={`${course.title}-desc`} className="mt-1 text-base">{course.description}</p>
              </label>
            ))}
          </fieldset>
        </div>

        <MenuDivider />

        {/* Dessert */}
        <div>
          <h2 className="font-cursive text-4xl md:text-5xl text-gold-shiny">Dessertteller</h2>
          <p className="mt-2 text-lg">Panna Cotta, Mousse au chocolat und ein saisonales Sorbet</p>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center space-y-4 w-full max-w-xs">
        <button
          onClick={onConfirm}
          disabled={!selection}
          className="btn-eggshell text-lg tracking-wider w-full disabled:opacity-50 disabled:cursor-not-allowed"
          aria-disabled={!selection}
        >
          Auswahl bestätigen
        </button>
        <button
          onClick={onBack}
          className="text-gold-shiny/70 hover:text-gold-shiny transition-colors text-sm tracking-wider"
        >
          ← Zurück zum Tagesablauf
        </button>
      </div>
    </div>
  );
};

export default Menu;