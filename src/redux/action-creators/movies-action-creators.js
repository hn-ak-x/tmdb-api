import {SET_MOVIE, SET_MOVIES} from "../action-types";

const setMovies = (response) => ({type: SET_MOVIES, payload: response});
const setMovie = (response) => ({type: SET_MOVIE, payload: response});

export {
    setMovies,
    setMovie
}
