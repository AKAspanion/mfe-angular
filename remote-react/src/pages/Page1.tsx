import React from 'react';
import { Link } from 'react-router-dom';

function Page1() {
  return (
    <React.Fragment>
      <div>Page 1 from React App</div>
      <Link to="/page-2">Go to Page 2</Link>
    </React.Fragment>
  );
}

export default Page1;
