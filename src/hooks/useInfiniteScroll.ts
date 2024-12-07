import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchPokemonList } from '../redux/slices/pokemonSlice';

export const useInfiniteScroll = () => {
  const dispatch = useDispatch();
  const { nextUrl, listLoading } = useSelector((state: RootState) => state.pokemon);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });

  useEffect(() => {
    if (nextUrl && inView && !listLoading) {
      dispatch(fetchPokemonList(nextUrl));
    }
  }, [inView, nextUrl, dispatch, listLoading]);

  return { ref, listLoading };
};