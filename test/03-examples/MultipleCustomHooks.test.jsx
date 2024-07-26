import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {
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

    test('debe de mostrar un Quote', () => { 
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
});