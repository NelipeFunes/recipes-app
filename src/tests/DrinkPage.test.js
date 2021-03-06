import React from 'react';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Drink from '../Pages/Drink';
import drinks from '../../cypress/mocks/drinks';

const SEARCH_BTN = 'search-top-btn';

describe('Testa o componente Drink', () => {
  it('Testa se o componente Drink renderiza corretamente', () => {
    renderWithRouter(<Drink />);
    const profileBtn = screen.getByTestId('profile-top-btn');
    const searchBtn = screen.getByTestId(SEARCH_BTN);
    const drinkText = screen.getByRole('heading', { name: /drinks/i });
    expect(searchBtn).toBeInTheDocument();
    expect(drinkText).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
  });

  it('Testa se o site é renderizado sem o input', () => {
    renderWithRouter(<Drink />);
    const input = screen.queryByRole('textbox');
    expect(input).toBeNull();
  });

  it('Testa se ao clicar no botão de search, aparece o input', () => {
    renderWithRouter(<Drink />);
    const searchBtn = screen.getByTestId(SEARCH_BTN);
    userEvent.click(searchBtn);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  it('Testa se ao clicar duas vezes no botão de search ele fica escondido', () => {
    renderWithRouter(<Drink />);
    const searchBtn = screen.getByTestId(SEARCH_BTN);
    userEvent.click(searchBtn);
    userEvent.click(searchBtn);
    const input = screen.queryByRole('textbox');
    expect(input).toBeNull();
  });

  it('Testa se ao clicar no botão de profile, redireciona para a página de profile',
    () => {
      const { history } = renderWithRouter(<Drink />);
      const profileBtn = screen.getByTestId('profile-top-btn');
      userEvent.click(profileBtn);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/profile');
    });
  it('Testa se o filtro All faz a requisição inicial', async () => {
    renderWithRouter(<Drink />);
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinks),
    });
    const allBtn = await screen.findByRole('button', { name: /all/i });
    await act(async () => {
      userEvent.click(allBtn);
    });
    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  });
});
