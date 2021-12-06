import React, {useState} from 'react';
import classes from './SearchForm.module.css';

function SearchForm(props) {
    const [enteredValue, setEnteredValue] = useState('');

    const enteredValueChangeHandler = (event)=> {
        setEnteredValue(event.target.value);
        props.InputValue(event.target.value);

    }

    const formSubmitHandler = (event)=> {
        event.preventDefault();
    }

    return (
        <form className={classes.Form} onSubmit={formSubmitHandler}>
            <p>Search:</p>
            <input onChange={enteredValueChangeHandler} value={enteredValue} type="text" />   
        </form>
    );
}

export default SearchForm;