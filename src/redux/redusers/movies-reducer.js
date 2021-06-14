import {
    SET_CURRENT_PAGE,
    SET_CURRENT_PAGE_BY_GENRES,
    SET_MOVIE,
    SET_MOVIES,
    SET_MOVIES_WITH_GENRES
} from "../action-types";

const initialState = {
    movies: [],
    movie: [],
    moviesWithSelectedGenres: [],

    currentPage: 1,
    totalResults: 0,

    currentPageByGenres: 1,
    totalResultsByGenres: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES: {

            return {
                ...state,
                totalResults: action.payload.total_results,
                movies: action.payload.results
            }
        }
        case SET_MOVIE: {

            return {
                ...state,
                movie: action.payload
            }
        }
        case SET_CURRENT_PAGE: {

            return {
                ...state,
                currentPage: action.payload,
            }
        }
        case SET_MOVIES_WITH_GENRES: {

            return {
                ...state,
                totalResultsByGenres: action.payload.total_results,
                moviesWithSelectedGenres: action.payload.results
            }
        }
        case SET_CURRENT_PAGE_BY_GENRES: {

            return {
                ...state,
                currentPageByGenres: action.payload,
            }
        }
        default: return state
    }
}

export default reducer;