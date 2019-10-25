import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { App } from '../App';

beforeEach(cleanup); // clean the DOM!

describe('<App />', () => {
  it('renders the application', () => {
    const {queryByTestId, debug} = render(<App />);
    expect(queryByTestId('application')).toBeTruthy();
  });

  it('renders the application using darkmode', () => {
    const {queryByTestId, debug} = render(<App darkModeDefault />);
    expect(queryByTestId('application')).toBeTruthy();
    expect(queryByTestId('application').classList.contains('darkmode')).toBeTruthy();
  });
});
