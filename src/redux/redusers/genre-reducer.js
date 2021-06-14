import {REMOVE_FROM_SELECTED_GENRES, SET_GENRES, SET_SELECTED_GENRES} from "../action-types/genres-action-types";

const initialState = {
    genres: [],
    selectedGenres: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES: {

            return {
                ...state,
                genres: action.payload.genres
            }
        }
        case SET_SELECTED_GENRES: {

            return {
                ...state,
                selectedGenres: [...state.selectedGenres, action.payload]
            }
        }
        case REMOVE_FROM_SELECTED_GENRES: {

            return {
                ...state,
                selectedGenres: state.selectedGenres.filter(genre => genre !== action.payload)
            }
        }
        default: return state
    }
}

export default reducer;