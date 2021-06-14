import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenres, getMoviesByGenres} from "../services/service";
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom";
import {onAddToSelected, onRemoveFromSelectedGenres} from "../redux/action-creators/genres-action-creators";
import {createPages} from "../utils/pagesCreator";
import {setCurrentPageByGenres} from "../redux/action-creators";

const Genres = () => {
    const dispatch = useDispatch();
    const genres = useSelector(({genresReducer: {genres}}) => genres);
    const selectedGenres = useSelector(({genresReducer: {selectedGenres}}) => selectedGenres);
    const moviesWithSelectedGenres = useSelector(({moviesReducer: {moviesWithSelectedGenres}}) => moviesWithSelectedGenres);

    const currentPageByGenres = useSelector(({moviesReducer: {currentPageByGenres}}) =>currentPageByGenres);
    const totalResultsByGenres = useSelector(({moviesReducer: {totalResultsByGenres}}) => totalResultsByGenres);

    const pageCountG = Math.ceil(totalResultsByGenres/20)
    const pagesG =[]
    createPages(pagesG, pageCountG, currentPageByGenres)

    useEffect(() => {
        dispatch(getGenres())
    }, []);

    useEffect(() => {
            dispatch(getMoviesByGenres(selectedGenres, currentPageByGenres))
    }, [selectedGenres, currentPageByGenres]);

    return (
        <div>
            <div className='genres-container'>
                {genres.map(genre => (
                    <button
                        style={{backgroundColor: selectedGenres.includes(genre.id) ? '#fde0a0' : '#affffc'}}

                        onClick={() => {
                            const alreadySelected = selectedGenres.includes(genre.id)
                            dispatch(alreadySelected
                                ? onRemoveFromSelectedGenres(genre.id)
                                : onAddToSelected(genre.id))
                        }}

                        className='genre' key={genre.id}>
                        {genre.name}</button>
                ))}
            </div>
            <div className='cards-container'>
                {moviesWithSelectedGenres.map(movie => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <MovieCard movie={movie}/>
                    </Link>
                ))}
            </div>
            <div className='pages'>
                {pagesG.map((page, index) => (
                    <span
                        className={currentPageByGenres === page ? 'current-page' : 'page'}
                        onClick={() => dispatch(setCurrentPageByGenres(page))}
                        key={index}>{page}</span>
                ))}
            </div>
        </div>

    )
}

export default Genres;