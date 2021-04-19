import Container1 from"./component/Container1"
import Container2 from"./component/Container2"
import GlobalState from './component/GlobalState';
import aunt from './component/pic/aunt_conversation.png'
import React,{useState} from 'react'
import './component/cssFile/App.css'

function App() {
  const [state, setState] = useState({
    rice:false,
    mama:false,
    pork:false,
    beef:false,
    krapao:false,
    karee:false,
    string: '',
    conver: 'วันนี้กินอะไรดีจ๊ะ?',
    pic : aunt})

  return (
    <GlobalState.Provider value={[state,setState]}>
        <div className="app">
          <Container1/>
          <Container2/>
        </div>
    </GlobalState.Provider>
  );
}

export default App;
