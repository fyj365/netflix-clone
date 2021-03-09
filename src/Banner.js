import React, {useState, useEffect}from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const[movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const results = await axios.get(requests.getAllTrending);
            setMovie(
                results.data.results[
                    Math.floor(Math.random() *  results.data.results.length)
                ]
            );
             return results;
        }
        fetchData();

    }, []);
    return (
        <header style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_title}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__desc">{movie?.overview}</div>
            </div>
            <div className="banner__fadebottom"></div>
        </header>

    )
}
export default Banner
