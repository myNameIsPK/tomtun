import aunt from './pic/aunt_conversation.png'
import aunt_warning from './pic/aunt_conversation_warning.png'
import React,{useContext,useState} from 'react'
import GlobalState from './GlobalState';


const Conversation = ({ch_pic}) => {
    const [state, setState] = useContext(GlobalState);
 
    return (
        <div>
            <span>
                <img src= {state.pic} />
            </span>
            <h1 className = 'aunt_conver'>
                {state.conver}
            </h1>
        </div>
    )
}

export default Conversation
