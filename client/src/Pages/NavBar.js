import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavBar = () =>{

    const navigate = useNavigate();

    async function logout(event){

        event.preventDefault();

        sessionStorage.removeItem('access-token');

        navigate('/login');
    }

    return(
    <div className="NavBarContainer">
        <Link to="/" className="linkbar">Home page</Link>
        <Link to="/createpost" className="linkbar">Create a post</Link>
        <Link to="/login" className="linkbar">Login</Link>
        <Link to="/registration" className="linkbar">Register</Link>

        <button onClick={logout}>Logout</button>
    </div>
    )
}
export default NavBar;