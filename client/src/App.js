import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';

function App() {


  return (
    <div className="App">
      <Router>
      <Link to="/">Home page</Link>
        <Link to="/createpost">Create a post</Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
