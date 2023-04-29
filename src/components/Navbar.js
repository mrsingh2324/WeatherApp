import React from 'react';
function Navbar() {

  return (
    <nav className="bg-gray-800 p-8 m-[1vw] rounded-xl fixed w-[98vw]">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          My App
        </div>
        <div className="flex items-center gap-10">          
          <div className='flex flex-row gap-2 '>
            <button className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600">
              Home
            </button>
            <button className="ml-2 bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600">
              About
            </button>
            <button className="ml-2 bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
