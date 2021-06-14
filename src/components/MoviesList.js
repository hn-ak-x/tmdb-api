import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import '../App.css';

import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../services/service";
import MovieCard from "./MovieCard";
import {setCurrentPage} from "../redux/action-creators";
import {createPages} from "../utils/pagesCreator";

const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(({moviesReducer: {movies}}) => movies);
    const currentPage = useSelector(({moviesReducer: {currentPage}}) => currentPage);
    const totalResults = useSelector(({moviesReducer: {totalResults}}) => totalResults);

    const pagesCount = Math.ceil(totalResults/20)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getMovies(currentPage))
    }, [currentPage])

    return (
        <>
            <div className='cards-container'>
                {movies.map(movie => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <MovieCard movie={movie}/>
                    </Link>
                ))}
            </div>
            <div className='pages'>
                {pages.map((page, index) => (
                    <span
                        className={currentPage == page ? 'current-page' : 'page'}
                        onClick={() => dispatch(setCurrentPage(page))}
                        key={index}>{page}</span>
                ))}
            </div>
        </>
    )
}

export default MoviesList;