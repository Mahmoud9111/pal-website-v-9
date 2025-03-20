import React from 'react';

export function Button({ children, variant, size, className, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md focus:outline-none';
  const variantStyles = {
    ghost: 'bg-transparent hover:bg-gray-100',
    // Add other variants as needed
  };
  const sizeStyles = {
    icon: 'p-2',
    // Add other sizes as needed
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
