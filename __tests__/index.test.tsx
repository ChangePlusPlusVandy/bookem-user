import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders correctly', () => {
    // renders the component
    render(<Home />);

    // expect the screen now to have a button
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
