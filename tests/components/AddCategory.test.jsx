import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../src/components/AddCategory';



describe('Prueba en <AddCategory />', () => {
    
    test('Debe de cambiar el calor de la caja de texto', () => {
             
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        // screen.debug();

        fireEvent.input(input, { target: {value: 'Saitama'} });

        expect(input.value).toBe('Saitama');
        // screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
      
        const inputValue = 'Saitama';
        // TODO: mock funtion
        const onNewCategory = jest.fn();

        // render(<AddCategory onNewCategory={() => { }} />);
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        // screen.debug();
        
        fireEvent.submit(form);
        // screen.debug();

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });
    

});