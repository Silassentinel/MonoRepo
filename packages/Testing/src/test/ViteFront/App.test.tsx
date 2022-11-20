import { render, screen } from '@testing-library/react';
import App from '@silassentinel/vitefront/src/App';
import React from 'react';

describe('App.tsx tests', () => {
  test('check if all components are loaded correctly - home', () => {
    render(<App />);
    const val = screen.getByText('Home screen');
    expect(val).toBeInTheDocument();
  });

  test('check if all components are loaded correctly - about', () => {
    render(<App />);
    const val = screen.getByText('About');
    expect(val).toBeInTheDocument();
  });
});
