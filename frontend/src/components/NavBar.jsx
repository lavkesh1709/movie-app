import {Link} from 'react-router-dom';
import '../css/Navbar.css'; // Assuming you have a CSS file for styling the NavBar
function NavBar(){
    return <nav className="navbar">
        <div className="navvbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to ="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
            
    </nav>
}
export default NavBar;