import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className="re-text-black re-bg-primary hover:re-bg-primary-focus re-font-medium re-rounded-lg re-text-sm re-px-5 re-py-2 focus:re-outline-none">
      {props.label}
    </button>
  );
}

export default Button;
