import Home from "./Components/Home";
import Nav from "./Components/Nav";
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
