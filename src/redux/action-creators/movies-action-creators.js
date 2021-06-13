import {SET_MOVIES} from "../action-types";

const setMovies = (response) => ({type: SET_MOVIES, payload: response});

export {
    setMovies
}
