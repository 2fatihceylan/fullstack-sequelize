import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
import NavBar from './Pages/NavBar';
import Post from './Pages/Post'
import Login from './Pages/Login';
import Registration from './Pages/Registration';

function App() {


  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<Post/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>

        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
