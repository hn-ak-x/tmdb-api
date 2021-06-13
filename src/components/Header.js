import React from 'react';
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieCard from "./MovieCard";
import Genres from "./Genres";

const Header = () => {

    return (
        <Router>
            <header className='header'>
                <div className="container">
                    <Link to='/movies'>Get Movies</Link>
                    <Link to='/genres'>Get Genres</Link>
                </div>
            </header>

            <div className="container">
                <Switch>
                    <Route path='/movies' exect> <MoviesList /> </Route>
                    <Route path='/movie/:id'> <MovieCard /> </Route>
                    <Route path='/genres'> <Genres /> </Route>
                </Switch>
            </div>

        </Router>
    )
}

export default Header;