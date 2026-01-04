import React from 'react';
import { Link, Outlet } from 'react-router';
import { FaFilm, FaHeart, FaPlus, FaUserShield, FaUser } from "react-icons/fa";
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const DashboardPage = () => {
    const  role  = "user";

    return (
        <div className='mx-auto'>
            <div className="drawer lg:drawer-open pb-10 min-h-[80vh]">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

                {/* Main content */}
                <div className="drawer-content">
                    <nav className="navbar bg-base-300">
                        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
                            ☰
                        </label>
                        <span className="px-4 font-semibold">MovieMaster Dashboard</span>
                    </nav>

                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 min-h-full bg-base-200">

                        <li>
                            <Link to="/">
                                🎬 Home
                            </Link>
                        </li>

                        <li className="menu-title">
                            <span>User</span>
                        </li>

                        <li>
                            <Link to="/movies/watchlist">
                                <FaHeart /> Watchlist
                            </Link>
                        </li>

                        <li>
                            <Link to="/movies/my-collection">
                                <FaFilm /> My Collection
                            </Link>
                        </li>

                        {role === "Admin" && (
                            <>
                                <li className="menu-title">
                                    <span>Admin</span>
                                </li>

                                <li>
                                    <Link to="/movies/add">
                                        <FaPlus /> Add Movie
                                    </Link>
                                </li>

                                <li>
                                    <span className="text-xs text-gray-400 flex items-center gap-2">
                                        <FaUserShield /> Admin Access
                                    </span>
                                </li>
                            </>
                        )}

                        <li className="mt-4">
                            <Link to="/dashboard/profile">
                                <FaUser /> Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />

            <ToastContainer
                position="top-center"
                autoClose={2000}
                theme="colored"
            />
        </div>
    );
};

export default DashboardPage;
