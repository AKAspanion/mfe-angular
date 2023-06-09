import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppName, selectIsStandalone, setAppName } from '../store/app';

function HomePage() {
  const isStandalone = useSelector(selectIsStandalone);
  const appName = useSelector(selectAppName);

  return (
    <div>
      <p>This is the home page of react application.</p>
      {!isStandalone && (
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
      <div className="re-py-4">
        {!isStandalone && (
          <h3 className="re-text-lg re-font-medium">Data sharing</h3>
        )}
        <p>Update the app name in Redux.</p>
        {!isStandalone && (
          <>
            <p>
              This data is shared with Angular shell, since it is subscribed to
              to this app's state change.
            </p>
            <p>Navigate to Angular app home page to see the updated name.</p>
          </>
        )}
        <div className="re-py-2">
          <UpdateName />
        </div>
        Current App name: <span className="re-font-bold">{appName}</span>
      </div>
    </div>
  );
}

const UpdateName = () => {
  const [input, setInput] = useState('');
  const d = useDispatch();

  const handleUpdate = () => {
    d(setAppName(input));
  };

  return (
    <>
      <input
        value={input}
        type="text"
        placeholder="Enter new app name"
        className="re-bg-gray-50 re-border re-border-gray-300 re-text-gray-900 re-text-sm re-rounded-lg focus:re-ring-primary focus:re-border-primary re-outline-none focus:re-outline-none re-block re-w-full re-p-2.5"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <div className="re-p-1" />
      <button
        type="button"
        onClick={handleUpdate}
        className="re-text-black re-bg-primary hover:re-bg-primary-focus re-font-medium re-rounded-lg re-text-sm re-px-5 re-py-2 focus:re-outline-none">
        Update
      </button>
    </>
  );
};

export default HomePage;
