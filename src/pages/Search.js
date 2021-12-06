import React, {useEffect, useState} from 'react'
import MovieList from '../components/MovieList/MovieList';
import SearchForm from '../components/SearchForm/SearchForm';

function Search() {
    console.log('[Search.js]');
    const [fetchedData, setFetchedData] = useState([]);
    const [searchValue, setSearchValue] = useState();
    
    useEffect(()=> {
        const fetchSearchItem = async ()=> {
            const res = await fetch(searchValue && ` https://api.themoviedb.org/3/search/multi?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US&query=${searchValue}&page=1&include_adult=true`);
            const data = await res.json();
            setFetchedData(data.results);
        }
        searchValue && searchValue.trim().length >= 2 && fetchSearchItem();
    },[searchValue]);
    
    const getSearchData = (value)=> {
        setSearchValue(value);
    }


    return (
        <div style={{paddingBottom: '5rem'}}>
            <SearchForm InputValue={getSearchData} />
            {searchValue && searchValue.trim().length >= 2 && <MovieList movies={fetchedData} /> }
        </div>
    )
}

export default Search;