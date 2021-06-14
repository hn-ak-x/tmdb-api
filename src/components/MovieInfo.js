import React, {useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../services/service";

const MovieInfo = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const movie = useSelector(({moviesReducer: {movie}}) => movie)

    useEffect(() => {
        dispatch(getMovie(location.pathname))
    }, [])

    return (
        <div>
            <h1>{movie.original_title}</h1>
            <Rating name="customized-10" readOnly value={movie.vote_average ? movie.vote_average : 0} max={10} />
            <p>{movie.overview}</p>
        </div>
    )
}

export default MovieInfo;