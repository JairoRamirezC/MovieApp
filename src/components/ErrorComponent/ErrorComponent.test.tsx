import { render, screen } from '@testing-library/react';
import { ErrorComponent } from './ErrorComponent';

describe('ErrorComponent', () => {
  test('renders the error message', () => {
    render(<ErrorComponent />);
    expect(screen.getByText(/Error al cargar Resultado de Busqueda/i)).toBeInTheDocument();
  });
});
