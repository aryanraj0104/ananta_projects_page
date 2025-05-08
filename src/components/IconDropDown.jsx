import React, { useState,useEffect,useRef } from 'react';

const IconDropDown = ({ icon, type }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className=" focus:outline-none text-xs px-1 text-gray-300 flex items-center"
        type="button"
      >
        <img className='h-5 ml-1' src={`/assets/${icon === 'checkbox'?'checkbox' : 'green-bookmark'}.svg`}/>
        <svg className="w-2.5 h-1.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute right-2.5 mt-2.5 w-fit  border-gray-400 rounded-md z-50">
          <ul className="py-1 text-sm text-gray-400">
            <li className="px-2 py-2 hover:bg-[#6A9CF333] rounded-sm shadow-md cursor-pointer" onClick={() => {type('checkbox');setDropdownOpen(false)}}><img src="/assets/checkbox.svg" className='h-5'/></li>
            <li className="px-2 py-2 hover:bg-[#6A9CF333] rounded-sm shadow-md cursor-pointer" onClick={() => {type('bookmark');setDropdownOpen(false)}}><img src="/assets/green-bookmark.svg" className='h-5'/></li>
          </ul>
        </div>
      )}    
    </div>
  );
};


export default IconDropDown;