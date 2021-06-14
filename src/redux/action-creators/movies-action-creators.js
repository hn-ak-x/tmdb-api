import {
    SET_CURRENT_PAGE,
    SET_CURRENT_PAGE_BY_GENRES,
    SET_MOVIE,
    SET_MOVIES,
    SET_MOVIES_WITH_GENRES
} from "../action-types";

const setMovies = (response) => ({type: SET_MOVIES, payload: response});
const setMovie = (response) => ({type: SET_MOVIE, payload: response});
const setMoviesWithSelectedGenres = (response) => ({type: SET_MOVIES_WITH_GENRES, payload: response});
const setCurrentPage = (response) => ({type: SET_CURRENT_PAGE, payload: response});
const setCurrentPageByGenres = (response) => (({type: SET_CURRENT_PAGE_BY_GENRES, payload: response}));

export {
    setMovies,
    setMovie,
    setMoviesWithSelectedGenres,
    setCurrentPage,
    setCurrentPageByGenres
}
