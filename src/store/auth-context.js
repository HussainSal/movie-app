import React, {useState} from 'react';

const AuthContext = React.createContext({
    pageNo: 1,
    next: ()=>{},
    prev: ()=> {},
    setFetchResponse: ()=> {},
    response: null,
});

export const AuthContextProvider = (props)=> {
    const [pageNo, setPageNo] = useState(1);
    const [response, setResponse] = useState();

    const next = ()=> {
        setPageNo((currPage) => currPage+1);
    }
    const prev = ()=> {
        setPageNo((currPage) => currPage-1);
    }

    const setFetchResponse = (data)=> {
        setResponse(data)
    }

    const context = {pageNo, next, prev, setFetchResponse, response};
    
    return (
        <AuthContext.Provider value={context} >
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;