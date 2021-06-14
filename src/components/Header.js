import React, {useState} from 'react';
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import MoviesList from "./MoviesList";
import MovieInfo from "./MovieInfo";
import Genres from "./Genres";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <Router>
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                <header className='header'>
                    <div className="container-h">
                        <div className="header-links">
                            <div className="">
                                <Link to='/movies'>Get Movies</Link>
                                <Link to='/genres'>Get Genres</Link>
                            </div>
                            <div className='switch-checkbox'>
                                <label className='switch'>
                                    <input type="checkbox" onChange={() => setDarkMode(!darkMode)}/>
                                    <span className='slider round'></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <Switch>
                        <Route path='/movies' exect> <MoviesList /> </Route>
                        <Route path='/movie/:id'> <MovieInfo /> </Route>
                        <Route path='/genres'> <Genres /> </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Header;