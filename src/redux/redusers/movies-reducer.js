import {SET_MOVIE, SET_MOVIES} from "../action-types";

const initialState = {
    movies: [],
    movie: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES: {

            return {
                ...state,
                movies: action.payload.results
            }
        }
        case SET_MOVIE: {

            return {
                ...state,
                movie: action.payload
            }
        }
        default: return state
    }
}

export default reducer;