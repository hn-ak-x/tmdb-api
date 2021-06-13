import axios from 'axios';
import {setMovie, setMovies} from "../redux/action-creators";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=353cdfadbe63044812af764705f64136';

export const getMovies = () => {

    return async (dispatch) => {
        const response = await axios.get(BASE_URL + '/movie/popular' + API_KEY)
        dispatch(setMovies(response.data))
    }
}

export const getMovie = (location) => {

    return async (dispatch) => {
        const response = await axios.get(BASE_URL + location + API_KEY)
        dispatch(setMovie(response.data))
    }
}
