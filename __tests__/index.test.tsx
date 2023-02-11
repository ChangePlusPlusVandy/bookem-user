import { SideBar } from '@/components/SideBar';
import LoginPage from '@/pages/login';
import VolunteerPage from '@/pages/volunteer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from 'pages/index';

// mock next-auth
jest.mock('next-auth/react');

// mock next router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('Home', () => {
  it('home page rendered correctly', () => {
    // renders the component
    render(<HomePage />);

    // expect dashboard welcome message
    expect(
      screen.getByText('Your accomplishments at a glance:')
    ).toBeInTheDocument();

    // expect past activity on the right
    expect(screen.getByText('Past activity')).toBeInTheDocument();

    // expect upcoming events at the bottom
    expect(screen.getByText('Your events')).toBeInTheDocument();
  });
});

describe('Volunteer', () => {
  it('volunteer page rendered correctly', () => {
    // renders the component
    render(<VolunteerPage />);

    // expect future volunteer events
    expect(screen.getByText('Future volunteer events')).toBeInTheDocument();

    // expect search events placeholder
    expect(screen.getByPlaceholderText('Search events')).toBeInTheDocument();
  });
});

describe('Login', () => {
  it('login page rendered correctly', () => {
    // renders the component
    render(<LoginPage />);

    // expect message
    expect(screen.getByText('Logging you in')).toBeInTheDocument();

    // expeect Log in button
    expect(screen.getByText('Log in')).toBeInTheDocument();

    // expect create account button
    expect(screen.getByText('Create Account')).toBeInTheDocument();

    // expect an input for email
    expect(
      screen.getByPlaceholderText('Email or Username')
    ).toBeInTheDocument();

    // expect an input for password
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });
});

describe('Sidebar', () => {
  it('sidebar rendered correctly', () => {
    // renders the component
    render(<SideBar />);

    // expect 6 icons (profile and 5 routes)
    expect(screen.getAllByRole('img')).toHaveLength(6);

    // expect 5 links (5 routes)
    expect(screen.getAllByRole('link')).toHaveLength(5);
  });
});
