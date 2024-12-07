import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../store/pokemonSlice';
import App from '../App';

const mockStore = configureStore({
  reducer: {
    pokemon: pokemonReducer
  }
});

describe('App Component', () => {
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
  });

  it('renders the Pokédex title', () => {
    expect(screen.getByText('Pokédex')).toBeInTheDocument();
  });

  it('displays loading spinner when loading state is true', () => {
    const loadingElement = screen.getByRole('status');
    expect(loadingElement).toBeInTheDocument();
  });
});