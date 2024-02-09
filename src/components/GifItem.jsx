import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}

/* Tarea
    1. Añadir PropTypes, e instalarlos (npm i prop-types)
        A. tittle obligatorio
        B. url obligatorio

    2.Evaluar el snapshot
*/
GifItem.propTypes = {
    title: PropTypes .string.isRequired,
    url: PropTypes.string.isRequired
};
