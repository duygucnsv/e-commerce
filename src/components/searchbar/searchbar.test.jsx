import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { vi } from 'vitest';
import SearchBar from './SearchBar';

const mockSearch = vi.fn((query => {return (query)}))

describe('Searchbar', () => {
  it('renders form input and button', () => {
    render(<SearchBar search={mockSearch} />);

    fireEvent.input(screen.getByRole('searchbox', { target: { value: "search" } }))

    fireEvent.submit(screen.getByRole('button'))

  });
});