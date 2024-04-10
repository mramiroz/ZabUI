import React from 'react';

interface PrevisProps {
  code: string;
}

export default function getPrevisComponent(code: string) {
  const Component = new Function('React', 'return ' + code)(React);

  return function Previs(_: PrevisProps) {
    return (
      <div className="px-6 py-4">
        <Component />
      </div>
    );
  };
}