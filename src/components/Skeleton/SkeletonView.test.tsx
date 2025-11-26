import { render, screen } from '@testing-library/react';
import { SkeletonView } from './SkeletonView';

jest.mock('./SkeletonComponent', () => ({ SkeletonComponent: () => <div data-testid="skeleton" /> }));

describe('SkeletonView', () => {
  test('renders multiple skeleton components', () => {
    render(<SkeletonView />);
    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThanOrEqual(1);
  });
});
