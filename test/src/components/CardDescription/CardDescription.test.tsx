import { render } from "@testing-library/react";
import CardDescription from '../../../../src/components/CardDescription/CardDescription';

describe('Testing <CardDescription />', () => {

  test('CardDescription should receive some data in props', () => {
    const title = 'Lo mas visto';
    const props = {
      id: 1,
      image: 'https://image.tmdb.org/t/p/w400/sample.jpg',
      title: 'Lo mas visto jajaja' as 'Lo mas visto' | 'Resultado de Busqueda' | 'Mis Favoritos',
      titleMovie: 'Sample Movie',
      description: 'This is a sample movie description.',
      rating: 7.5,
      date: '2025-01-01',
    }
    const { container, getByText } = render(<CardDescription {...props} />);

    expect(container).toMatchSnapshot();
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(title)).toBeTruthy();
  });
})