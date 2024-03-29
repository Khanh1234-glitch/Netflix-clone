import { useEffect, useState } from "react";
import style from "./Row.module.css";
import axios from "axios";

function Row({ title, isLargeRow = false, fetchUrl }) {
    const [movie, setMovies] = useState([]);
    const img_URL = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className={style.row}>
            <h2>{title}</h2>
            <div className={style.row__posters}>
                {movie?.map((movie, key) => (
                    <div key={key}>
                        <img
                            className={`${style.row__poster} ${isLargeRow && style.row__posterLarge}`}
                            src={`${img_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Row;
