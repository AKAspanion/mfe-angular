import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { selectInContainer, setAppName } from '../store/app';

function HomePage() {
  const [input, setInput] = useState('');
  const d = useDispatch();
  const is = useSelector(selectInContainer);

  const handleUpdate = () => {
    d(setAppName(input));
  };

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
      <div className="re-py-4">
        <h3 className="re-text-lg re-font-medium">Data sharing</h3>
        <p>Update the app name using the given input below.</p>
        <p>This data is shared among all other MFE's.</p>
        <p>Navigate to Angular app home page to see the updated name.</p>
        <div className="re-py-2">
          <Input
            value={input}
            placeholder="Enter new app name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
          <div className="re-p-1" />
          <Button label="Update" onClick={handleUpdate} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
