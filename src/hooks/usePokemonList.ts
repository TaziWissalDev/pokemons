import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchPokemonList } from '../redux/slices/pokemonSlice';

export const usePokemonList = () => {
  const dispatch = useDispatch();
  const { list, listLoading } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchPokemonList('https://pokeapi.co/api/v2/pokemon?limit=20'));
    }
  }, [dispatch, list.length]);

  return { loading: listLoading };
};