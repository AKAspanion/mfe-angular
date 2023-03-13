import React from 'react';
import { useSelector } from 'react-redux';
import { selectInContainer } from '../store/app';

function HomePage() {
  const is = useSelector(selectInContainer);
  return (
    <div>
      <p>This is the home page of react application.</p>
      {is && (
        <>
          <p>You can visit the standalone deployed React App here: </p>
          <a
            className="re-underline re-text-primary hover:re-text-gray-500"
            href="https://remote-react.netlify.app/"
            target="_blank">
            Standalone React
          </a>
        </>
      )}
    </div>
  );
}

export default HomePage;
