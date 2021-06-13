import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import '../App.css';

import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../services/service";

const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(({moviesReducer: {movies}}) => movies)

    useEffect(() => {
        dispatch(getMovies())
    }, [])

    return (
        <div className='cards-container'>
            {movies
                .map(movie => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        {movie.title}
                    </Link>
            ))}
        </div>
    )
}

export default MoviesList;