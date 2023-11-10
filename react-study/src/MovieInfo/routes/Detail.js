import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Movie from "../components/MovieComponent";

function Detail(){
    // Route의 URL의 
    const {id} = useParams();
    const [movie, setMovie] = useState();

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovie(json.data.movie);
    }

    useEffect(() => {
        getMovie();
    }, [])

    console.log(movie);

    return (
        <>
            {
                movie ? 
                <>
                    <h1>Detail</h1>
                    <Movie 
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image} 
                    title={movie.title} 
                    summary={movie.description_intro} 
                    genres={movie.genres}  />
                </>
                : <h1>loading...</h1>
            }
            {/* id, coverImg, title, summary, genres */}
        </>
    )
}

export default Detail;