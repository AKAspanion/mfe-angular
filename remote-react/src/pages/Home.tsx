import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="re-p-4">
      <div className="re-bg-base-200 re-p-4 re-rounded-xl re-shadow-xl">
        <h1 className="re-text-2xl re-font-bold">
          Hello from React Application
        </h1>
        <div className="re-p-4">
          <div className="re-navbar re-bg-base-200">
            <div className="re-navbar-start"></div>
            <div className="re-navbar-center re-lg:flex">
              <ul className="re-menu re-menu-horizontal re-px-1">
                <li>
                  <Link to={'/page-1'}>Sales</Link>
                </li>
                <li>
                  <Link to={'/page-2'}>Admin</Link>
                </li>
              </ul>
            </div>
            <div className="re-navbar-end"></div>
          </div>
        </div>
        <div className="re-bg-base-100 re-p-4 re-rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
