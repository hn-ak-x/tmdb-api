import React, {useEffect} from 'react';
import '../App.css';

import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../services/movies";

const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(({moviesReducer: {movies}}) => movies)

    useEffect(() => {
        dispatch(getMovies())
    }, [])

    return (
        <div className='cards-container'>
            {/*{movies.map(movie => <div>{movie.title}</div>)}*/}
        </div>
    )
}

export default MoviesList;