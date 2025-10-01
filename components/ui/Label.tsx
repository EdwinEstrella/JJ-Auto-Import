import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
  return (
    <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300 ${className}`} {...props}>
      {children}
    </label>
  );
};

export default Label;