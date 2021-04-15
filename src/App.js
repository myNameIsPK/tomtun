import Container1 from"./component/Container1"
import Container2 from"./component/Container2"
import GlobalState from './component/GlobalState';
import React,{useState} from 'react'

function App() {
  const [state, setState] = useState({
    rice:false,
    mama:false,
    pork:false,
    beef:false,
    krapao:false,
    karee:false})

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
