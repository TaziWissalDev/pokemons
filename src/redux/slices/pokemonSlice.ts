import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonDetail, PokemonListItem, PokemonState } from '../../types/pokemon';

const initialState: PokemonState = {
  list: [],
  details: {},
  listLoading: false,
  error: null,
  nextUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20'
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    fetchPokemonList: (state) => {
      state.listLoading = true;
      state.error = null;
    },
    fetchPokemonListSuccess: (state, action: PayloadAction<{ results: PokemonListItem[]; nextUrl: string | null }>) => {
      state.list = [...state.list, ...action.payload.results];
      state.nextUrl = action.payload.nextUrl;
      state.listLoading = false;
    },
    fetchPokemonListFailure: (state, action: PayloadAction<string>) => {
      state.listLoading = false;
      state.error = action.payload;
    },
    fetchPokemonDetail: (state, action: PayloadAction<string>) => {
      state.error = null;
    },
    fetchPokemonDetailSuccess: (state, action: PayloadAction<PokemonDetail>) => {
      state.details[action.payload.name] = action.payload;
    },
    fetchPokemonDetailFailure: (state, action: PayloadAction<{ name: string; error: string }>) => {
      state.error = action.payload.error;
    }
  }
});

export const {
  fetchPokemonList,
  fetchPokemonListSuccess,
  fetchPokemonListFailure,
  fetchPokemonDetail,
  fetchPokemonDetailSuccess,
  fetchPokemonDetailFailure
} = pokemonSlice.actions;

export default pokemonSlice.reducer;