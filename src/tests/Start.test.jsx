import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "./utils/renderWithRouter";
import App from '../App';

// const userEvent = event.setup();

describe('Testes a Rota "/"', () => {
  it('01 - Teste se um button é encontrado na tela', () => {
    renderWithRouter(<App />);
    
    const btnStart = screen.getByRole('button', { name: "Começar" });
    expect(btnStart).toBeInTheDocument();
  })

  it('02 - Teste se os elementos são encontrados na tela', async () => {
    renderWithRouter(<App />);
    
    const btnStart = screen.getByRole('button', { name: "Começar" });
    expect(btnStart).toBeInTheDocument();

    userEvent.click(btnStart);

    const labelOne = await screen.findByLabelText(/JOGADOR 1:/i);
    const labelTwo = screen.getByLabelText(/JOGADOR 2:/i);
    const labelTree = screen.getByLabelText(/RODADAS:/i);
    const btnInit = screen.getByRole('button', { name: /INICIAR/i });

    expect(labelOne).toBeInTheDocument();
    expect(labelTwo).toBeInTheDocument();
    expect(labelTree).toBeInTheDocument();
    expect(btnInit).toBeInTheDocument();
  })

  it('03 - Teste se o valores dos inputs são atribuidos da forma correta', async () => {
    const { history } = renderWithRouter(<App />);
    
    const btnStart = screen.getByRole('button', { name: "Começar" });
    expect(btnStart).toBeInTheDocument();

    userEvent.click(btnStart);

    const labelOne = await screen.findByLabelText(/JOGADOR 1:/i);
    const labelTwo = screen.getByLabelText(/JOGADOR 2:/i);
    const labelTree = screen.getByLabelText(/RODADAS:/i);
    const btnInit = screen.getByRole('button', { name: /INICIAR/i });

    await userEvent.type(labelOne, 'Robert');
    await userEvent.type(labelTwo, 'Gabriel');
    await userEvent.type(labelTree, '2');

    expect(labelOne).toHaveValue('Robert');
    expect(labelTwo).toHaveValue('Gabriel');
    expect(labelTree).toHaveValue(2);

    await userEvent.click(btnInit);

    expect(history.location.pathname).toBe('/match');
  });
});
