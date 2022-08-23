import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import MyProvider from '../context/MyProvider'

test('Check input elements', () => {
  render(<App />);
  const columnFilter = screen.getByTestId('column-filter');
  expect(columnFilter).toBeInTheDocument();

  const comparisonFilter = screen.getByTestId('comparison-filter');
  expect(comparisonFilter).toBeInTheDocument();

  const valueFilter = screen.getByTestId('value-filter');
  expect(valueFilter).toBeInTheDocument();
});

test('Checks if the button is on the page', () => {
  render(<App />);
  const buttonFilter = screen.getByTestId('button-filter');
  expect(buttonFilter).toBeInTheDocument();
});

it('Check the api return', async () => {
  render(<MyProvider><App /></MyProvider>);
  const planetName = await screen.findByText( /Alderaan/i);
  expect(planetName).toBeInTheDocument();
});