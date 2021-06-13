import {combineReducers} from "redux";

import moviesReducer from './movies-reducer';
import genresReducer from './genre-reducer';

export const reducer = combineReducers({
    moviesReducer,
    genresReducer
})