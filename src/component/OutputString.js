import GlobalState from './GlobalState';
import React, { useEffect,useContext,useState} from 'react';

const OutputString = () => {
    const [state, setState] = useContext(GlobalState);
    
    return (
        <div className = "outputstring">
            <h1>Input String</h1>
            <p>{state.string}</p>
        </div>
    )
}

export default OutputString
