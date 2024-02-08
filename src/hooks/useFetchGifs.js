import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const img = await getGifs(category);
        setImages(img);
        setIsLoading(false);
        console.log(img);
    }

    useEffect(() => {
        getImages();
        // getGifs(category)
        //     .then(newImages => setImages(newImages));
    }, []);

    return {
        images,
        isLoading
    }
}


