import React from 'react'
import classes from './Main.module.css';

export default function Main(props) {
    return (
        <div id="Main" className={classes.Main}>
            {props.children}
        </div>
    )
}
