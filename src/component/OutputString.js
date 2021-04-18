import GlobalState from './GlobalState';
import React, { useEffect,useContext,useState} from 'react';

const OutputString = () => {
    const [state, setState] = useContext(GlobalState);
    
    return (
        <div className = "outputstring">
            <h1 className = 'header-output'>Input String</h1>
            <p className = 'output'>{state.string}</p>
        </div>
    )
}

export default OutputString
