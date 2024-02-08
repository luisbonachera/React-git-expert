import { useState } from "react";
import { AddCategory, GifGrid } from './components/';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // console.log(categories);

    const onAddCategory = (newCategory) => {
        const categoriesLowerCase = categories.map(c => c.toLowerCase());
        if (categoriesLowerCase.includes(newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [ ...cat, 'newCategory']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={event => onAddCategory(event)}
            />
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {categories.map(category =>
                <GifGrid
                    key={category}
                    category={category}
                />
            )}
            {/* Gif Item */}
        </>
    )
}

export default GifExpertApp
