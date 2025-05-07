import React, { useState, useRef, useEffect } from "react";
import EditSprint from "./EditSprint";

const Options = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  const handleEditSprint = () => {
    setDropdownOpen(false);
    setShowModal(true);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <img
        src="/assets/options.svg"
        alt="Edit sprint icon"
        className={`h-8 p-1.5 border border-gray-700 rounded-sm shadow-2xl cursor-pointer transition ${
          dropdownOpen ? "border-2 border-[#1761CE]" : ""
        }`}
        onClick={() => setDropdownOpen((prev) => !prev)}
      />

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-43  bg-zinc-800 border border-gray-400 rounded-md shadow-md z-50">
          <ul className="py-1 text-sm text-gray-400">
            <li className="px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer" onClick={() => setDropdownOpen(false)}>Start stand-up</li>
            <li className="px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer" onClick={handleEditSprint}>Edit sprint</li>
            <li className="px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer" onClick={() => setDropdownOpen(false)}>Manage workflow</li>
            <li className="px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer" onClick={() => setDropdownOpen(false)}>Manage custom filters</li>
            <li className="px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer" onClick={() => setDropdownOpen(false)}>Configure board</li>
          </ul>
        </div>
      )}

      {showModal && (
        <EditSprint setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Options;
