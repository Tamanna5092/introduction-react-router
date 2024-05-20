import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className='header'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;