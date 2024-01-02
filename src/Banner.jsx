import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "./Request";

function Banner() {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    };
    return (
        <header
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
            className="banner"
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__button">
                    <button>Play</button>
                    <button>My List</button>
                </div>

                <h1 className="banner_description">
                    {truncate(
                        `${movie?.overview}
                    `,
                        150
                    )}
                </h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    );
}

export default Banner;
