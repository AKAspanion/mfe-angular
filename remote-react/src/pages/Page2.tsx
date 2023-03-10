import React from 'react';
import { Link } from 'react-router-dom';

function Page2() {
  return (
    <React.Fragment>
      <div>Page 2 from React App</div>
      <Link to="/page-1">Go to Page 1</Link>
    </React.Fragment>
  );
}

export default Page2;
