import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import ThemeToggle from './ThemeToggle';
// import { AuthContext } from '../provider/AuthContext';
// import Avatar from './Avatar';

const Navbar = () => {
    // const { user, loading } = useContext(AuthContext);

    const handleLoadingOnNav = () => {
        // if (loading) {
        //     return <span className="loading loading-spinner loading-md"></span>
        // }
        const user = '';

        return user ? " " : (
            <div className="flex items-center gap-2">
                <Link
                    to={"/auth/login"}
                    className="md:px-7 btn border-[#f97316] hover:bg-[#f97316] hover:text-white"
                >
                    Login
                </Link>
                <Link
                    to={"/auth/signup"}
                    className="md:px-7 btn bg-[#f97316] hover:bg-[#bb4f02] text-white"
                >
                    Register
                </Link>
            </div>
        );

    }

    const links = <>
        <NavLink to={"/"} className=" font-bold">Home</NavLink>
        <NavLink to={"/movies"} className="lg:ml-6  font-bold">All Movies</NavLink>
        <NavLink to={"/my-collection"} className="lg:ml-6 font-bold">My Collection</NavLink>
    </>
    return (
        <nav className="bg-base-100/20 shadow-sm">
            <div className='navbar lg:w-11/12 mx-auto '>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" onClick={(e) => e.stopPropagation()} onFocus={(e) => e.stopPropagation()} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-\[9999\] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={"/"} className="font-bold text-xl sm:text-2xl ">Movie<span className='text-[#f97316]'>Master</span> Pro </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className='pr-5'>
                        <ThemeToggle></ThemeToggle>
                    </div>
                    
                    {
                        handleLoadingOnNav()
                    }
                </div>



            </div>
        </nav>
    );
};

export default Navbar;