import { title } from 'process';
import { getGifs } from '../../src/helpers/getGifs';
import { url } from 'inspector';


describe('Pruebas en getGifs()', () => {
   
    test('Debe de retornar un arreglo de gifs', async() => {
      
        const gifs = await getGifs('One Punch');
        // console.log(gifs);
        // expect(gifs.length).toBeGreaterThan(0); // esta comprobación es mala
        
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        }); //esta puesba es mejor

    });
    
});