import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // const onInputChange = (event) => {
    const onInputChange = ({ target }) => {
        // setInputValue(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length < 1) return;
        onNewCategory(inputValue.trim());
        // || categories.find(inputValue)
        // setCategories(categories => [inputValue, ...categories]);
        // onAddCategories = (categories) => {
            // console.log(setCategories);
        //     const retorna = [...categories, inputValue];
        //     console.log(retorna);
        //     return retorna;
        // };
        setInputValue('');


    }

    return (
        <form onSubmit={onSubmit}>

            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};