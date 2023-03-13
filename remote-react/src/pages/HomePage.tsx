import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <p>This is the home page of react application.</p>
      <p>You can visit the standalone deployed React App here: </p>
      <a
        className="re-underline re-text-primary hover:re-text-gray-500"
        href="https://remote-react.netlify.app/"
        target="_blank">
        Standalone React
      </a>
    </div>
  );
}

export default HomePage;
