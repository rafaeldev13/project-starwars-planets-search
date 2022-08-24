import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import MyProvider from '../context/MyProvider'
import mockAPI from './mockApi'
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import { act } from 'react-dom/test-utils';

it('Check input elements', () => {
  render(<MyProvider><App /></MyProvider>);
  const columnFilter = screen.getByTestId('column-filter');
  expect(columnFilter).toBeInTheDocument();

  const comparisonFilter = screen.getByTestId('comparison-filter');
  expect(comparisonFilter).toBeInTheDocument();

  const valueFilter = screen.getByTestId('value-filter');
  expect(valueFilter).toBeInTheDocument();
});

it('Checks if the button is on the page', () => {
  render(<MyProvider><App /></MyProvider>);
  const buttonFilter = screen.getByTestId('button-filter');
  expect(buttonFilter).toBeInTheDocument();
});

it('Check the api return', async () => {
  render(<MyProvider><App /></MyProvider>);
  const planetName = await screen.findByText( /Alderaan/i);
  expect(planetName).toBeInTheDocument();
});

it('check filter less than', async () => {
  global.fetch = jest.fn(
    function(url) {
      return Promise.resolve({
        json: () => Promise.resolve(mockAPI)
      })
    }
  );
renderWithRouter(<App />);
const columnFilter = await screen.findByTestId("column-filter")
const comparisonFilter = await screen.findByTestId("comparison-filter")
const value = await screen.findByTestId("value-filter")
const filterButton = await screen.findByTestId("button-filter")
const planetAlderaan = await screen.findByText(/Alderaan/i)
userEvent.selectOptions(columnFilter, "rotation_period")
userEvent.selectOptions(comparisonFilter, "menor que")
userEvent.type(value, '400')
userEvent.click(filterButton)
expect(planetAlderaan).toBeInTheDocument();
});

 it('check input comparisonFilter', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAPI)
    });

    act(() => {
      render(<App />);
    });

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const comparisonFilter = screen.getByTestId("comparison-filter");
    const buttonFilter = screen.getByTestId("button-filter");

    userEvent.selectOptions(comparisonFilter, "maior que");
    userEvent.selectOptions(comparisonFilter, "maior que");
    userEvent.click(buttonFilter);
    userEvent.selectOptions(comparisonFilter, "menor que");
    userEvent.click(buttonFilter);
    userEvent.selectOptions(comparisonFilter, "igual a");
    userEvent.click(buttonFilter);
  })