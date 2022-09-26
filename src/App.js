import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './screen/Home'
import Post from './screen/Post'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
