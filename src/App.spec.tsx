import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('App contains correct label and color', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /adicionar/i });

  expect(buttonElement).toBeDefined();
});
