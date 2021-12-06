import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../store/auth-context';

import MovieList from '../components/MovieList/MovieList';
import Genre from '../components/UI/Genre';
import classes from './Style.module.css';

function DiscoverMovies() {
    const ctx = useContext(AuthContext);

    const [fetchedMovies, setFetchedMovies] = useState();
    const [genreId, setGenreId] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            setFetchedMovies(false);
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US&sort_by=popularity.desc${genreId ? `&with_genres=${genreId.map(e => e)}` : '' }&page=${ctx.pageNo}&with_watch_monetization_types=flatrate`);
            const data = await res.json();
            setFetchedMovies(data.results);
            ctx.setFetchResponse(data.results);
        }
        fetchMovies();
    }, [genreId, ctx.pageNo])

    const addGenreHandler = (event)=> {
        setGenreId((prevState => [...prevState, event.target.id]));
    }
    const removeGenreHandler = (event)=> {
        let newGenreId = genreId.filter(item => +item !== +event.target.id)
        setGenreId(newGenreId);
    }
    
    return (
        <div className={classes.Response}>
            <h1 className={classes.Heading} >Discover Movies</h1>
            <Genre id={genreId ? genreId : []} onAddGenre={addGenreHandler} onRemoveGenre={removeGenreHandler} type="movie" />
            <MovieList ShowPagination type='Movie' movies={fetchedMovies} />
        </div>
    )
}

export default React.memo(DiscoverMovies);