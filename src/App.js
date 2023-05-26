import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import "./App.css";
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogdetails/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
