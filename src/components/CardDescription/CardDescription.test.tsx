import { render, screen, fireEvent } from '@testing-library/react';
import type { InitialState } from '../../common/utils/types';
import type { Dispatch, SetStateAction } from 'react';
import CardDescription from './CardDescription';
import { AppContext } from '../../common/context/AppContextProvider';

describe('CardDescription component', () => {
  test('renders titleMovie and description and favorite button when not in Mis Favoritos', () => {
    const mockSetSeccion = jest.fn() as unknown as Dispatch<SetStateAction<string | null>>;
    const mockSetFavorite = jest.fn() as unknown as Dispatch<SetStateAction<number[]>>;
    const contextValue: Partial<InitialState> = {
      setSeccionSelected: mockSetSeccion,
      setFavoriteValue: mockSetFavorite,
      favoriteValue: [],
    };

    render(
      <AppContext.Provider value={contextValue as InitialState}>
        <CardDescription
          id={1}
          image={''}
          title={'Lo mas visto'}
          titleMovie={'My Movie'}
          description={'Desc'}
          rating={5}
          date={'2025-01-01'}
        />
      </AppContext.Provider>
    );

    expect(screen.getByText('My Movie')).toBeInTheDocument();
    expect(screen.getByText('Desc')).toBeInTheDocument();
    expect(screen.getByLabelText('favorite')).toBeInTheDocument();
  });

  test('does not render favorite button when in Mis Favoritos', () => {
    const contextValue: Partial<InitialState> = { setSeccionSelected: (() => {}) as unknown as Dispatch<SetStateAction<string | null>>, setFavoriteValue: (() => {}) as unknown as Dispatch<SetStateAction<number[]>>, favoriteValue: [] };
    render(
      <AppContext.Provider value={contextValue as InitialState}>
        <CardDescription
          id={2}
          image={''}
          title={'Mis Favoritos'}
          titleMovie={'Fav Movie'}
          description={''}
          rating={7}
          date={'2025-01-01'}
        />
      </AppContext.Provider>
    );

    expect(screen.queryByLabelText('favorite')).toBeNull();
  });

  test('toggles favorite by calling setFavoriteValue (debounced via timeout)', () => {
    jest.useFakeTimers();
    const mockSetFavorite = jest.fn() as unknown as Dispatch<SetStateAction<number[]>>;
    const contextValue: Partial<InitialState> = { setSeccionSelected: (() => {}) as unknown as Dispatch<SetStateAction<string | null>>, setFavoriteValue: mockSetFavorite, favoriteValue: [] };

    render(
      <AppContext.Provider value={contextValue as InitialState}>
        <CardDescription
          id={11}
          image={''}
          title={'Resultado de Busqueda'}
          titleMovie={'T'}
          description={''}
          rating={6}
          date={'2025-01-01'}
        />
      </AppContext.Provider>
    );

    const btn = screen.getByLabelText('favorite');
    fireEvent.click(btn);

    // advance timers to trigger setTimeout
    jest.advanceTimersByTime(400);

    expect(mockSetFavorite).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
