import { Link } from "react-router-dom";

export default function Movie({ medium_cover_image, title, summary, genres, id }) {
    return (
        <div>
            <img
                src={medium_cover_image}
                alt=""
            />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}
