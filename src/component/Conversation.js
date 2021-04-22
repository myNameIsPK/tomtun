import React,{useContext,useState} from 'react'
import GlobalState from './GlobalState';

import './cssFile/Conversation.css'

const Conversation = () => {
    const [state, setState] = useContext(GlobalState);
 
    return (
        <div className = 'Aunt_conver'>
            <img src= {state.pic} />
            <h1 className = 'aunt_conver'>
                {state.conver}
            </h1>
        </div>
    )
}

export default Conversation
