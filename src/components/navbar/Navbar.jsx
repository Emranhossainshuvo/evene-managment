import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <NavLink to="/"><li> <a>Home</a></li></NavLink>
        <NavLink to="/about"><li> <a>About</a></li></NavLink>
        <NavLink to='/contract'><li> <a>Contract</a></li></NavLink>
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
                <a className="btn bg-slate-600 text-white">Login</a>
            </div>
        </div>
    );
};

export default Navbar;