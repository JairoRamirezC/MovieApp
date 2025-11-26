import { render, screen, fireEvent } from '@testing-library/react';
import { InputSearch } from './InputSearch';

describe('InputSearch component', () => {
  test('renders input with placeholder and logo image', () => {
    render(<InputSearch />);

    expect(screen.getByPlaceholderText('Encuentra tu pelicula favorita')).toBeInTheDocument();
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  test('shows error when typing less than 3 chars and input value reflects change', () => {
    render(<InputSearch />);
    const input = screen.getByPlaceholderText('Encuentra tu pelicula favorita');
    fireEvent.change(input, { target: { value: 'ab' } });

    expect(screen.getByText('El valor debe tener al menos 3 caracteres')).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe('ab');
  });

  test('clears error when typing valid value and input value updates', () => {
    render(<InputSearch />);
    const input = screen.getByPlaceholderText('Encuentra tu pelicula favorita');

    fireEvent.change(input, { target: { value: 'ab' } });
    expect(screen.getByText('El valor debe tener al menos 3 caracteres')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'abcd' } });
    expect(screen.queryByText('El valor debe tener al menos 3 caracteres')).toBeNull();
    expect((input as HTMLInputElement).value).toBe('abcd');
  });

  test('ignores input that starts with a space', () => {
    render(<InputSearch />);
    const input = screen.getByPlaceholderText('Encuentra tu pelicula favorita');
    fireEvent.change(input, { target: { value: ' abc' } });

    // value that starts with a space should be ignored and value should remain empty
    expect((input as HTMLInputElement).value).toBe('');
  });
});
