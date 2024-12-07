import { useState } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { getPokemonIdFromUrl, getPokemonImageUrl } from '../utils/pokemonUtils';

interface PokemonCardProps {
  name: string;
  url: string;
  onClick: () => void;
}

export const PokemonCard = ({ name, url, onClick }: PokemonCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const id = getPokemonIdFromUrl(url);

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer transform 
                 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      data-testid="pokemon-card"
    >
      <div className="relative aspect-square">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <LoadingSpinner />
          </div>
        )}
        <img
          src={getPokemonImageUrl(id)}
          alt={name}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <h2 className="text-xl font-bold capitalize mt-4 text-center">{name}</h2>
    </div>
  );
};
