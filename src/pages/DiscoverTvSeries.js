import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../store/auth-context';

import MovieList from '../components/MovieList/MovieList';
import Genre from '../components/UI/Genre';
import classes from './Style.module.css';

function DiscoverTvSeries() {
    const ctx = useContext(AuthContext);
    const [fetchedTvSeries, setFetchedTvSeries] = useState();
    const [genreId, setGenreId] = useState('');

    useEffect(() => {

        const fetchTvSeries = async () => {
            setFetchedTvSeries(false);
            const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US&sort_by=popularity.desc${genreId !=='' ? `&with_genres=${genreId.map(e => e)}` : '' }&page=${ctx.pageNo}&with_watch_monetization_types=flatrate`);
            const data = await res.json();
            console.log(data.results);
            setFetchedTvSeries(data.results);
            ctx.setFetchResponse(data.results);
        }
        fetchTvSeries();
        
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
            <h1 className={classes.Heading} >Discover TvSeries</h1>
            <Genre id={genreId ? genreId : []} onAddGenre={addGenreHandler} onRemoveGenre={removeGenreHandler} type="tv" />
            <MovieList movies={fetchedTvSeries} ShowPagination type='Tv Series' />
        </div>
    )
}

export default React.memo(DiscoverTvSeries);