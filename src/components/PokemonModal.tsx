import { useState } from 'react';
import { X } from 'lucide-react';
import { PokemonDetail } from '../types/pokemon';
import { getPokemonImageUrl, getGifUrl } from '../utils/pokemonUtils';

interface PokemonModalProps {
  pokemon: PokemonDetail;
  onClose: () => void;
}

export const PokemonModal = ({ pokemon, onClose }: PokemonModalProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!pokemon) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      data-testid="pokemon-modal"
    >
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 relative min-h-[250px]">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                <img
                  src={getGifUrl(pokemon.id)}
                  alt={`${pokemon.name} animation`}
                  className="w-24 h-24"
                />
              </div>
            )}
            <img
              src={getPokemonImageUrl(pokemon.id)}
              alt={pokemon.name}
              className={`w-full h-64 object-contain transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold capitalize mb-4">{pokemon.name}</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-600">Height</p>
                <p className="font-semibold">{pokemon.height / 10}m</p>
              </div>
              <div>
                <p className="text-gray-600">Weight</p>
                <p className="font-semibold">{pokemon.weight / 10}kg</p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Types</h3>
              <div className="flex gap-2">
                {pokemon.types?.map((type) => (
                  <span
                    key={type.type.name}
                    className="px-3 py-1 rounded-full text-sm text-white bg-blue-500"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Stats</h3>
              <div className="space-y-2">
                {pokemon.stats?.map((stat) => (
                  <div key={stat.stat.name}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{stat.stat.name}</span>
                      <span>{stat.base_stat}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                        style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
