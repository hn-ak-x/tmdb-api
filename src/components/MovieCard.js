import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../services/service";

const MovieCard = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const movie = useSelector(({moviesReducer: {movie}}) => movie)

    useEffect(() => {
        dispatch(getMovie(location.pathname))
    }, [])

    return (
        <div>
            {movie.title}
        </div>
    )
}

export default MovieCard;