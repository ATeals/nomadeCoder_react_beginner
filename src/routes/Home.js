import Movie from "../components/Movie";
import { useState, useEffect } from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovides] = useState([]);

    const getMovies = async () => {
        const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
        const json = await res.json();
        setLoading(false);
        setMovides(json.data.movies);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            medium_cover_image={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            id={movie.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
