import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExploreFoodIngred from '../Pages/ExploreFoodIngred';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente "ExploreFoodIngred"', () => {
  it('Verifica se o componente "ExploreFoodIngred" foi renderizado corretamente', () => {
    renderWithRouter(<ExploreFoodIngred />);
    const title = screen
      .getByRole('heading', { name: /Explorar Ingredientes de Comidas/i });
    const title2 = screen.getByRole('heading', { name: /explore ingredients/i });
    const profileIcon = screen.getByRole('img', { name: /profile icon/i });
    expect(title).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(profileIcon).toBeInTheDocument();
  });
  it('Testa se ao clicar no botão de profile, redireciona para a página de profile',
    () => {
      const { history } = renderWithRouter(<ExploreFoodIngred />);
      const profileBtn = screen.getByRole('img', { name: /profile icon/i });
      userEvent.click(profileBtn);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/profile');
    });
});