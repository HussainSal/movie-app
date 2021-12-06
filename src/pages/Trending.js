import React, { useEffect, useState } from 'react'
import classes from './Style.module.css';
import MovieList from '../components/MovieList/MovieList'
// import Pagination from '../components/Pagination/Pagination';


function Trending() {
    console.log('[Trending.js]');
    const [fetchedTrending, setFetchedTrending] = useState();

    useEffect(()=> {
        const fetchTrending = async ()=> {
            const res = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=847ab230a96a2f52bc3f647f23dc84a4&page=1');
            const data = await res.json();
            setFetchedTrending(data.results);
        }
        fetchTrending();
    }, [])

    

    return (
        <div className={classes.Response}>
            <h1 className={classes.Heading} >Trending Today</h1>
            <MovieList movies={fetchedTrending} />
        </div>
    )
}

export default React.memo(Trending);