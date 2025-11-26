import { render, screen } from '@testing-library/react';
import type { Results } from '../../common/utils/types';
import { PreviewCards } from './PreviewCards';

jest.mock('../CardDescription/CardDescription', () => () => <div data-testid="card-mock">CardMock</div>);

describe('PreviewCards component', () => {
  test('renders title and maps data to CardDescription (mocked)', () => {
    const data: Results[] = [
      { id: 1, adult: false, backdrop_path: '', genre_ids: [], original_language: 'en', original_title: 'T', overview: 'o', popularity: 0, poster_path: 'p.jpg', release_date: '2025-01-01', title: 'T', video: false, vote_average: 5, vote_count: 0 }
    ];

    render(<PreviewCards title={'Lo mas visto'} data={data} />);

    expect(screen.getByText('Lo mas visto')).toBeInTheDocument();
    expect(screen.getByTestId('card-mock')).toBeInTheDocument();
  });
});
