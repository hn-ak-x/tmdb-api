import React from 'react';
import '../App.css';

import PosterPreview from "./PosterPreview";

const MovieCard = (movie) => {
    const {
        title,
        poster_path,
        overview,
        vote_average
    } = movie.movie;

    return (
        <div className='movie-card'>
            <PosterPreview url={poster_path}/>
            <div className='movie-info'>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
            <div className='movie-overview'>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MovieCard;