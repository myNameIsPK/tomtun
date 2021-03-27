// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Menu from "./Menu";
import Diagram from './Diagram'
import { Sidebar } from './components/Sidebar'
import { HomePage } from './Pages/HomePage'

function App() {
  return (
    // <div className="App">
    //   <Diagram />
    //   <header className="top-bar">
    //     <div className="CanteenName">ต้มตุ๋น</div>
    //   </header>
    //   <Menu />
    //   <Sidebar />
    // </div>
    <BrowserRouter>
      <Diagram />
      <Sidebar />
      <Switch>
        <Route to='/home' component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
