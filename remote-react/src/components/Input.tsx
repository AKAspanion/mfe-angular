import React from 'react';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<Omit<HTMLButtonElement, 'labels'>> & {
  children?: any;
};
function Input(props: ButtonProps) {
  return (
    <input
      {...props}
      type="text"
      className="re-bg-gray-50 re-border re-border-gray-300 re-text-gray-900 re-text-sm re-rounded-lg focus:re-ring-primary focus:re-border-primary re-outline-none focus:re-outline-none re-block re-w-full re-p-2.5"></input>
  );
}

export default Input;
