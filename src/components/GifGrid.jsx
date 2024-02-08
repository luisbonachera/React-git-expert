// import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)
    console.log({ images, isLoading });

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const img = await getGifs(category);
    //     setImages(img);
    //     console.log(img);
    // }

    // useEffect(() => {
    //     getImages();
    //     // getGifs(category)
    //     //     .then(newImages => setImages(newImages));
    // }, []);



    return (
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>Cargando....</h2>)}
            
            <div className="card-grid">
                {images.map(({ id, title, url }) => (
                    <GifItem
                        key={id}
                        title={title}
                        url={url}
                    />
                ))}
            </div>

        </>
    );
};