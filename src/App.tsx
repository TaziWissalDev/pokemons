import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { PokemonList } from './components/PokemonList';
import { PokemonModal } from './components/PokemonModal';
import { PokemonDetail } from './types/pokemon';

function App() {
  const [started, setStarted] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(null);

  if (!started) {
    return <LandingPage onStart={() => setStarted(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <PokemonList onSelectPokemon={setSelectedPokemon} />
      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
}

export default App;