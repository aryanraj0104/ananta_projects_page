import React, { useState,useEffect,useRef } from 'react';

const DropDown = ({ text, options }) => {
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
        className="text-gray-400 border border-gray-700 focus:outline-none  rounded-sm text-sm px-2 py-1.5 text-center flex items-center"
        type="button"
      >
        {text}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-fit bg-zinc-800 border border-gray-400 rounded-md shadow-md z-50">
          <ul className="py-1 text-sm text-gray-400">
          {options.map(({ href, option }) => (
            <li className="px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer" onClick={() => setDropdownOpen(false)}><a href={href}>{option}</a></li>
          ))}
          </ul>
        </div>
      )}    
    </div>
  );
};


export default DropDown;