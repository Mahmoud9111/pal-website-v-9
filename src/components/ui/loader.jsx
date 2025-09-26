import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-60 backdrop-blur-sm z-50">
      <div className="relative">
        <div className="animate-spin rounded-full h-24 w-24 border-4 border-t-blue-500 border-r-blue-400 border-b-blue-300 border-l-blue-200 transition-all duration-300 ease-in-out shadow-lg"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full animate-pulse bg-blue-100 opacity-30"></div>
      </div>
    </div>
  );
};

export default Loader;