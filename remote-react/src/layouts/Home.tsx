import React, { useEffect } from 'react';
import { Link, Outlet, redirect } from 'react-router-dom';

function Home() {
  return (
    <div className="re-bg-base-200 re-rounde-xl re-flex">
      <div className="re-w-56 re-flex re-pt-6 re-flex-col re-gap-2 re-bg-gray-100 re-p-4 re-h-screen">
        <div className="re-px-2 re-text-2xl re-font-bold">React</div>
        <div className="re-group">
          <Link
            className="hover:re-bg-primary re-flex re-items-center re-p-2 re-text-base re-font-normal re-text-gray-900 re-rounded-lg dark:re-text-white"
            to={'/page-1'}>
            <svg
              fill="currentColor"
              role="img"
              className="re-flex-shrink-0 re-w-6 re-h-6 re-text-gray-500 re-transition re-duration-75 dark:re-text-gray-400 group-hover:re-text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48">
              <path d="M13 16.5q-1.25 0-2.125-.875T10 13.5V7q0-1.25.875-2.125T13 4h22q1.25 0 2.125.875T38 7v6.5q0 1.25-.875 2.125T35 16.5Zm0-3h22V7H13v6.5ZM7 44q-1.25 0-2.125-.875T4 41v-3.5h40V41q0 1.25-.875 2.125T41 44Zm-3-8 7.25-16.2q.4-.8 1.125-1.3t1.575-.5h20.1q.85 0 1.575.5t1.125 1.3L44 36Zm13-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm6 8h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm6 8h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Z" />
            </svg>
            <span className="re-text-gray-900 re-flex-1 re-ml-3 re-whitespace-nowrap group-hover:re-text-white">
              Sales
            </span>
          </Link>
        </div>
        <div className="re-group">
          <Link
            className="hover:re-bg-primary re-flex re-items-center re-p-2 re-text-base re-font-normal re-text-gray-900 re-rounded-lg dark:re-text-white"
            to={'/page-2'}>
            <svg
              fill="currentColor"
              role="img"
              className="re-flex-shrink-0 re-w-6 re-h-6 re-text-gray-500 re-transition re-duration-75 dark:re-text-gray-400 group-hover:re-text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48">
              <path d="M34.55 34.5q1.3 0 2.2-.95.9-.95.9-2.25t-.9-2.2q-.9-.9-2.2-.9-1.3 0-2.25.9t-.95 2.2q0 1.3.95 2.25t2.25.95Zm-.05 6.25q1.65 0 3-.7t2.3-2q-1.3-.7-2.6-1.05-1.3-.35-2.7-.35-1.4 0-2.725.35-1.325.35-2.575 1.05.95 1.3 2.275 2t3.025.7ZM24 44q-6.9-1.6-11.45-7.825Q8 29.95 8 21.9V9.95l16-6 16 6v13.5q-.7-.35-1.5-.625T37 22.45v-10.4l-13-4.8-13 4.8v9.85q0 3.8 1.225 7t3.125 5.625q1.9 2.425 4.2 4.025 2.3 1.6 4.45 2.3.3.6.9 1.35.6.75 1 1.15-.45.25-.95.375-.5.125-.95.275Zm10.65 0q-3.9 0-6.65-2.775-2.75-2.775-2.75-6.575 0-3.9 2.75-6.675t6.65-2.775q3.85 0 6.625 2.775t2.775 6.675q0 3.8-2.775 6.575Q38.5 44 34.65 44ZM24 24.05Z" />
            </svg>
            <span className="re-text-gray-900 re-flex-1 re-ml-3 re-whitespace-nowrap group-hover:re-text-white">
              Admin
            </span>
          </Link>
        </div>
      </div>
      <div className="re-p-6">
        <h1 className="re-text-2xl re-font-bold re-pb-4">
          Hello from React Application
        </h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
