import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';

function Movie({id, coverImg, title, summary, genres}){
    return (
        <div>
            <img src={coverImg} alt={title} />
            {/* react-router-dom 의 Link 사용시 페이지가 새로고침되지 않음 */}
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
                {genres.map(g => 
                    <li key={g}>{g}</li>
                )}
            </ul>
        </div>
    );
}

export default Movie;

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}