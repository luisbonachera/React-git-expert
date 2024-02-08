
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=1wyA0L3MhIuddzv23UmtLFMQtlp9qBaS&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    // console.log(data);

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    // console.log('🚀 ~ gifs ~ gifs:', gifs);

    return gifs;
};