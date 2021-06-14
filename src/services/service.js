import axios from 'axios';
import {setMovie, setMovies, setMoviesWithSelectedGenres} from "../redux/action-creators";
import {setGenres} from "../redux/action-creators/genres-action-creators";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=353cdfadbe63044812af764705f64136';

export const getMovies = (currentPage) => {

    return async (dispatch) => {
        const response = await axios.get(BASE_URL + '/movie/popular?' + API_KEY + '&page=' + currentPage)
        dispatch(setMovies(response.data))
    }
}

export const getMovie = (location) => {

    return async (dispatch) => {
        const response = location && await axios.get(BASE_URL + location + '?' + API_KEY)
        dispatch(setMovie(response.data))
    }
}

export const getGenres = () => {

    return async (dispatch) => {
        const response = await axios.get(BASE_URL + '/genre/movie/list?' + API_KEY)
        dispatch(setGenres(response.data))
    }
}

export const getMoviesByGenres = (selectedGenres, currentPage) => {

    return async (dispatch) => {
        const response = selectedGenres && await axios.get(
            BASE_URL +'/discover/movie?sort_by=popularity.desc&' +API_KEY+ '&page=' + currentPage
            + '&with_genres=' + selectedGenres.join(',')
        )
        dispatch(setMoviesWithSelectedGenres(response.data))
        console.log(response.data)
    }
}