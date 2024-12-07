import { all } from 'redux-saga/effects';
import pokemonSagas from './pokemonSagas';

export default function* rootSaga() {
  yield all([
    pokemonSagas(),
  ]);
}