import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchPokemonDetail } from '../redux/slices/pokemonSlice';

export const usePokemonDetails = () => {
  const dispatch = useDispatch();
  const { details } = useSelector((state: RootState) => state.pokemon);
  const [loading, setLoading] = useState<string | null>(null);

  const fetchDetails = useCallback(async (name: string) => {
    if (!details[name]) {
      setLoading(name);
      await dispatch(fetchPokemonDetail(name));
      setLoading(null);
    }
    return details[name];
  }, [dispatch, details]);

  return {
    loading,
    fetchDetails,
    details
  };
};