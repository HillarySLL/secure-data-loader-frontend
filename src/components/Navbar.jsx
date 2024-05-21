import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 px-10">
        <a className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          Secure Data Loader
        </a>
      </div>
      <div className="flex-none gap-2 mr-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="bg-neutral text-neutral-content rounded-full w-14">
              <div className="flex items-center justify-center h-full">
                <span className="text-xl">HS</span>
              </div>
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            {isAuthenticated ? (
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
