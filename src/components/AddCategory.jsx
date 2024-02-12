import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // const onInputChange = (event) => {
    const onInputChange = ({ target }) => {
        // setInputValue(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // console.log('Hola mundo desde onSubmit');
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
        <form onSubmit={onSubmit} aria-label='form'>

            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};