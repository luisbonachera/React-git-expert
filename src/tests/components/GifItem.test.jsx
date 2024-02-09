import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components"


describe('Pruebas en <GitItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe haacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();

    });

    test('Debe de mostar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />);

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } =  screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostar el titulo en el componente', () => {
      
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
    

});
