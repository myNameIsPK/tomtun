// import logo from './logo.svg';
import "./App.css";
import Menu from "./Menu";
import Diagram from './Diagram'

function App() {
  return (
    <div className="App">
      <Diagram />
      <header className="top-bar">
        <div className="CanteenName">ต้มตุ๋น</div>
      </header>
      <Menu />
    </div>
  );
}

export default App;
