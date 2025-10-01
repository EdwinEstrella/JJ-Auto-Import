import React from 'react';

export const Card: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => (
  <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg transition-colors duration-300 ${className}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => (
  <h3 className={`text-2xl font-bold text-brand-dark dark:text-white transition-colors duration-300 ${className}`}>
    {children}
  </h3>
);

export const CardDescription: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => (
  <p className={`text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300 ${className}`}>
    {children}
  </p>
);

export const CardContent: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );