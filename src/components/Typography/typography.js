import React from 'react';


const Typography = ({ children, variant, className }) => {
  let Element;
  let currentClassName = 'text-lg font-serif';
  switch (variant) {
    case 'h1':
      Element = 'h1';
      currentClassName = 'text-4xl font-bold';
      break;
    case 'h2':
      Element = 'h2';
      currentClassName = 'text-3xl';
      break;
    case 'h3':
      Element = 'h3';
      currentClassName = 'text-2xl';
      break;
    case 'h4':
      Element = 'h4';
      currentClassName = 'text-1xl';
      break;
    case 'h5':
      Element = 'h5';
      currentClassName = 'text-lg';
      break;
    case 'h6':
      Element = 'h6';
      currentClassName = 'text-md';
      break;
    default:
      Element = 'p';
      currentClassName = 'text-3xl';
  }

  return (
    <Element className={`${currentClassName} ${className}`}>
      {children}
    </Element>
  );
};

export default Typography

