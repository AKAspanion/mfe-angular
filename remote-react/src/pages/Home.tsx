import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <React.Fragment>
      <h1>Hello from React Application</h1>
      <Link to={'/page-1'}>Page 1</Link>
      <Link to={'/page-2'}>Page 2</Link>
      <Outlet />
    </React.Fragment>
  );
}
