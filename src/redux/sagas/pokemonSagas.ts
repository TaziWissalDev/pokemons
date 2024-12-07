import { call, put, takeLatest, all } from 'redux-saga/effects';
import { pokemonApi } from '../../api/pokemon';
import {
  fetchPokemonList,
  fetchPokemonListSuccess,
  fetchPokemonListFailure,
  fetchPokemonDetail,
  fetchPokemonDetailSuccess,
  fetchPokemonDetailFailure
} from '../slices/pokemonSlice';

function* fetchPokemonListSaga(action: ReturnType<typeof fetchPokemonList>) {
  try {
    const data = yield call(pokemonApi.getList, action.payload);
    yield put(fetchPokemonListSuccess({
      results: data.results,
      nextUrl: data.next
    }));
  } catch (error) {
    yield put(fetchPokemonListFailure(error instanceof Error ? error.message : 'Failed to fetch Pokemon list'));
  }
}

function* fetchPokemonDetailSaga(action: ReturnType<typeof fetchPokemonDetail>) {
  try {
    const data = yield call(pokemonApi.getDetail, action.payload);
    yield put(fetchPokemonDetailSuccess(data));
  } catch (error) {
    yield put(fetchPokemonDetailFailure({ 
      name: action.payload,
      error: error instanceof Error ? error.message : 'Failed to fetch Pokemon details'
    }));
  }
}

export default function* pokemonSagas() {
  yield all([
    takeLatest(fetchPokemonList.type, fetchPokemonListSaga),
    takeLatest(fetchPokemonDetail.type, fetchPokemonDetailSaga)
  ]);
}