import { Link } from "react-router-dom";
const NavBar = () =>{

    return(
    <div className="NavBarContainer">
        <Link to="/" className="linkbar">Home page</Link>
        <Link to="/createpost" className="linkbar">Create a post</Link>
        <Link to="/login" className="linkbar">Login</Link>
        <Link to="/registration" className="linkbar">Register</Link>
    </div>
    )
}
export default NavBar;