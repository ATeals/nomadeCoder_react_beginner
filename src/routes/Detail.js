import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

export default function Detail() {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json.data.movie);
                setLoading(false);
            });
    }, []);
    console.log(movie);
    return (
        <div>
            {loading ? (
                <div> loading... </div>
            ) : (
                <Movie
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    id={movie.id}
                />
            )}
        </div>
    );
}
