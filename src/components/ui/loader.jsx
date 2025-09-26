import React from 'react';

const Loader = () => {
  return (
<div className="flex flex-col gap-4 w-full min-h-screen items-center justify-center">
  <div className="w-28 h-28 border-8 text-blue-600 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-600 rounded-full">
    <div  height="1em" width="1em" className="animate-ping">
        <img src="./images/loaderimg.png" width={36} height={36} alt="" />
    </div>
  </div>
</div>
  );
};

export default Loader;