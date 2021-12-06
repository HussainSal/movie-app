import React from 'react'
import { NavLink } from 'react-router-dom';

import imageTrending from '../../Assets/Image/TrendingIcon.png';
import imageMovie from '../../Assets/Image/MovieIcon.png';
import imageTv from '../../Assets/Image/TvIcon.png';
import imageSearch from '../../Assets/Image/SearchIcon.png';

import classes from './Nav.module.css';

export default function Nav() {

    return (
        <div id="Nav" className={classes.Nav}>
            <NavLink activeClassName={classes.ActiveLink} to="/trending"> <img className={classes.TrendingIcon} src={imageTrending} alt="trending" /> Trending</NavLink>
            <NavLink activeClassName={classes.ActiveLink} to="/movies"> <img className={classes.MovieIcon} src={imageMovie} alt="movie" /> Movies</NavLink>
            <NavLink activeClassName={classes.ActiveLink} to="/tvseries"> <img className={classes.TvSeriesIcon} src={imageTv} alt="tv" /> Tv Series</NavLink>
            <NavLink activeClassName={classes.ActiveLink} to="/search"> <img className={classes.SearchIcon} src={imageSearch} alt="search" /> Search</NavLink>
            
        </div>
    )
}
