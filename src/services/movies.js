import axios from 'axios';
import {setMovies} from "../redux/action-creators";

const MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?api_key=353cdfadbe63044812af764705f64136'

export const getMovies = () => {

    return async (dispatch) => {
        const response = await axios.get(MOVIES_API)
        dispatch(setMovies(response.data))
    }
}

