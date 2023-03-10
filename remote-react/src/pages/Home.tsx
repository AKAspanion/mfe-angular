import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4">
      <div className="bg-base-200 p-4 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold">Hello from React Application</h1>
        <div className="p-4">
          <div className="navbar bg-base-200">
            <div className="navbar-start"></div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to={'/page-1'}>Sales</Link>
                </li>
                <li>
                  <Link to={'/page-2'}>Admin</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end"></div>
          </div>
        </div>
        <div className="bg-base-100 p-4 rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
