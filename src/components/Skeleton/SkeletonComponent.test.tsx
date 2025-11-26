import { render, screen } from '@testing-library/react';
import { SkeletonComponent } from './SkeletonComponent';

describe('SkeletonComponent', () => {
  test('renders skeleton placeholders', () => {
    const { container } = render(<SkeletonComponent />);
    expect(container).toBeInTheDocument();
  });
});
