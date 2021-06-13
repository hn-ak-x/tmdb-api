import {SET_MOVIES} from "../action-types";

const initialState = {
    movies: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES: {

            return {
                ...state,
                movies: action.payload.results
            }
        }

        default: return state
    }
}

export default reducer;