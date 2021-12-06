import React, { useContext } from 'react';
import classes from './Pagination.module.css';
import AuthContext from '../../store/auth-context';


function Pagination(props) {
    const ctx = useContext(AuthContext);

    const nextPageHandler = () => {

        if (ctx.response.length < 5) { return; }
        ctx.next();
    }
    const prevPageHandler = () => {
        if (ctx.pageNo === 1) { return; }
        ctx.prev();
    }


    return (
        <div className={classes.pagination}>
            <button
                className={ctx.pageNo === 1 ? classes.NotAllowed : ''}
                onClick={prevPageHandler}
                id="prev" >
                <span style={{ transform: 'rotate(180deg)', display: 'inline-block', marginRight: '2px' }}>
                    &#10146;
                </span>
                Prev
            </button>

            <h4 className={classes.currentPage}>{ctx.pageNo}</h4>

            <button
                className={ctx.response && ctx.response.length < 5 ? classes.NotAllowed : '' }
                onClick={nextPageHandler}
                id="next" >
                Next<span style={{ marginLeft: '2px' }}>&#10146;</span>
            </button>

        </div>
    );
}

export default Pagination;