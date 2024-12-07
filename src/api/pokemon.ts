import { PokemonListResponse, PokemonDetail } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const pokemonApi = {
  getList: async (url: string): Promise<PokemonListResponse> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch Pokemon list');
    return response.json();
  },

  getDetail: async (name: string): Promise<PokemonDetail> => {
    const response = await fetch(`${BASE_URL}/pokemon/${name}`);
    if (!response.ok) throw new Error(`Failed to fetch Pokemon ${name}`);
    return response.json();
  }
};