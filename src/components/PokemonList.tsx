import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { PokemonCard } from './PokemonCard';
import { LoadingSpinner } from './LoadingSpinner';
import { PokemonDetail } from '../types/pokemon';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { usePokemonList } from '../hooks/usePokemonList';
import { fetchPokemonDetail } from '../redux/slices/pokemonSlice';

interface PokemonListProps {
  onSelectPokemon: (pokemon: PokemonDetail) => void;
}

export const PokemonList = ({ onSelectPokemon }: PokemonListProps) => {
  const dispatch = useDispatch();
  const { list, details, listLoading } = useSelector((state: RootState) => state.pokemon);
  const { ref } = useInfiniteScroll();
  const { loading } = usePokemonList();

  const [loadingDetail, setLoadingDetail] = useState<string | null>(null);

  const handlePokemonClick = async (name: string) => {
    if (!details[name]) {
      setLoadingDetail(name); 
      await dispatch(fetchPokemonDetail(name));
    } else {
      onSelectPokemon(details[name]);
    }
  };

  useEffect(() => {
    if (loadingDetail && details[loadingDetail]) {
      onSelectPokemon(details[loadingDetail]);
      setLoadingDetail(null);
    }
  }, [loadingDetail, details, onSelectPokemon]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pokédex</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            onClick={() => handlePokemonClick(pokemon.name)}
          />
        ))}
      </div>

      {(loading || listLoading) && <LoadingSpinner />}

      <div ref={ref} className="h-20" />
    </div>
  );
};
