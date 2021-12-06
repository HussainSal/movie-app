import React, { useEffect, useState } from 'react';
import classes from './Genre.module.css';

function Genre(props) {

    const [fetchedGenre, setFetchedGenre] = useState();

    useEffect(() => {
        const genreHandler = async () => {
            const res = await fetch(` https://api.themoviedb.org/3/genre/${props.type}/list?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US`);
            const data = await res.json();
            setFetchedGenre(data.genres);
        }
        genreHandler();
    }, [props.type]);

    

    return (
        <div className={classes.Genre}>
            {fetchedGenre ?
                fetchedGenre.map((btn, i) => {
                    let selected = (element) => parseInt(element) === btn.id;
                    let matched = btn.id === parseInt(props.id[props.id.findIndex(selected)]);

                    if (matched) {
                        return (
                            <button style={{ backgroundColor: 'var(--quinaryColorLightBlue)', color: '#fff', transition: 'all .1s' }} onClick={props.onRemoveGenre} className={classes.Btn} key={btn.id} id={btn.id} >
                                {btn.name}
                            </button>
                        )
                    } else {
                        return (
                            <button onClick={props.onAddGenre} className={classes.Btn} key={btn.id} id={btn.id} >
                                {btn.name}
                            </button>
                        )
                    }


                })
                : null
            }
        </div>
    );
}

export default Genre;