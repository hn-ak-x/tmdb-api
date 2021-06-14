import {REMOVE_FROM_SELECTED_GENRES, SET_GENRES, SET_SELECTED_GENRES} from "../action-types/genres-action-types";

const setGenres = (response) => ({type: SET_GENRES, payload: response});
const onAddToSelected = (payload) => ({type: SET_SELECTED_GENRES, payload});
const onRemoveFromSelectedGenres = (payload) => ({type: REMOVE_FROM_SELECTED_GENRES, payload})

export {
    setGenres,
    onAddToSelected,
    onRemoveFromSelectedGenres
}