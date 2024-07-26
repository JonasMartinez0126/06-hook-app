const { renderHook } = require("@testing-library/react");
const { useForm } = require("../../src/hooks/useForm");
const { act } = require("react-dom/test-utils");

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Jonas',
        email: 'test@test.com'
    };

    test('debe de regresar la informacion por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm) );
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputchange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook( () => useForm(initialForm) );

        const { onInputchange } = result.current;

        act(() => {
            onInputchange({
                target : {
                    name: 'name',
                    value: newValue
                }
            });
        });

        expect( result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('debe de realizar el reset del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook( () => useForm(initialForm) );

        const { onInputchange, onResetForm } = result.current;

        act(() => {
            onInputchange({
                target : {
                    name: 'name',
                    value: newValue
                }
            });
            onResetForm();
        });

        expect( result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});