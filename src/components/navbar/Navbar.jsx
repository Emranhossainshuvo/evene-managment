import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviderContext";
import "./navBar.css"


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut() 
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const navLinks = <>
        <NavLink to="/"><li> <a>Home</a></li></NavLink>
        <NavLink to="/special-service"><li> <a>Special service</a></li></NavLink>
        <NavLink to='/discount'><li> <a>Discount</a></li></NavLink>
        <NavLink to="/login"><li> <a>Login</a></li></NavLink>
    </>

    return (
        <div className="navbar mt-5 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <a className="normal-case text-xl font-mono">Flow Motion</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-neutral text-white">Log out</button>
                        :
                        <Link to="/login">
                            <button className="btn bg-[#68707a] hover:bg-[#30343a] text-white">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;