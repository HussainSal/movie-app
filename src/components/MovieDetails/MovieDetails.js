import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import classes from './MovieDetails.module.css';



function MovieDetails(props) {


    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const noImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2O_mIRhxseMzEZB_rvzjC92FQmBsVxY3wIrFnGM-Oh6azjRI_InZDtPmihRINHJGVVO4&usqp=CAU';
    const movieNoImg = 'https://www.movienewsletters.net/photos/000000h1.jpg';

    return (
        <div className={classes.MovieDetails}>
            <div className={classes.InnerContainer}>

                <h1 className={classes.Heading}>{props.details.title} ({props.details.release_date})</h1>
                <p className={classes.TagLine}>{props.details.tagline}</p>

                <div className={classes.Details}>
                    <span className={classes.ImageContainer}>
                        <img src={props.details.image ? `${imgBaseUrl}/${props.details.image}` : movieNoImg} alt="movieImg" style={{ filter: props.loading ? 'blur(3px)' : 'blur(0)' }} />
                    </span>
                    <div className={classes.InnerDetails}>
                        <span className={classes.Genres}>
                            <h3>Genres :</h3> <h3>{props.details.genres && props.details.genres.map((e, i) => `${e.name} ${i < props.details.genres.length - 1 ? ',' : ''} `)}</h3>
                        </span>

                        <span className={classes.smallDetails}>
                            <p>Status : {props.details.status}</p>
                            <p>Release Date : {props.details.release_date}</p>
                            <p>Rating : {Math.ceil(props.details.rating)}</p>
                            <p>TagLink : {props.details.tagline}</p>
                        </span>
                        <span className={classes.MovieText}>
                            <p><b>description :</b> {props.text}</p>
                        </span>

                        <div className={classes.Credits}>
                            {props.movieCastDetail &&
                                props.movieCastDetail.map((cast,i) => {
                                    return <span id={i} key={cast.id}>
                                        <img src={cast.profile_path ? `${imgBaseUrl}${cast.profile_path}` : noImage} alt="action img" style={{ filter: props.loading ? 'blur(3px)' : 'blur(0)' }} />
                                        <p>{cast.name || cast.original_name}</p>
                                    </span>
                                })
                            }
                        </div>

                        <button className={classes.TrailerBtn}>
                            <a href={`https://www.youtube.com/watch?v=${props.VideoId}`} target="_blank" rel="noreferrer" >Watch Trailer</a>
                        </button>

                    </div>
                </div>

                <div className={classes.Similar}>
                    <h1 className={`${classes.Heading} ${classes.HeadingSimilar}`}>Similar {props.type === 'tv' ? 'Tv Series' : 'Movies'}</h1>
                    <MovieList className={classes.SimilarResults} movies={props.similar} type={props.type === 'tv' ? 'Tv Series' : 'Movie'} />
                </div>

            </div>
        </div>
    );
}

export default MovieDetails;







// youtubeVideoKey = AIzaSyBJEVSxM3MnHbR0EgDw27M-mjd4II-FYt4
// endpoint const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${process.env.REACT_APP_VIDEO_API_KEY}`);


///////credit = https://api.themoviedb.org/3/movie/550988/credits?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US