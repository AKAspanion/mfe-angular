import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <React.Fragment>
      <div className="re-w-full re-h-screen re-p-4">
        <div className="re-flex re-flex-col re-p-12 re-items-center re-justify-center">
          <div className="re-text-5xl re-font-bold">404</div>
          <div className="re-text-xl">
            This page cannot be found in React App
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
