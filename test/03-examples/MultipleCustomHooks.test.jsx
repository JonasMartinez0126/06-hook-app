import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => { 
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks />);

        expect( screen.getByText('Loading...'));
        expect ( screen.getByText('Pokemons'));

        const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });
        expect(nextButton.disabled).toBeTruthy();
        //screen.debug();

    });

    test('debe de mostrar un Pokemon', () => { 
        useFetch.mockReturnValue({
            data: {
                name: "bulbasaur",
                id: 1,
                sprites: {
                    back_default: "back_default",
                    back_shiny: "back_shiny",
                    front_default: "front_default",
                    front_shiny: "front_shiny",
                }
            },
            isLoading: false,
            hasError: null
        });
        
        render(<MultipleCustomHooks />);
        expect( screen.getByText('bulbasaur') );

        screen.debug();
    });

    test('debe de llamar la funcion incrementar', () => {
        
        useFetch.mockReturnValue({
            data: {
                name: "bulbasaur",
                id: 1,
                sprites: {
                    back_default: "back_default",
                    back_shiny: "back_shiny",
                    front_default: "front_default",
                    front_shiny: "front_shiny",
                }
            },
            isLoading: false,
            hasError: null
        });

       

        
        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole("button", { name: "Next Pokemon" });
        fireEvent.click(nextButton);
 
        expect(mockIncrement).toHaveBeenCalled();

    });
});