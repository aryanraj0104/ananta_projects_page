import React from 'react'

const SearchBar = ({placeholder}) => {
  return (
    <div className="relative flex items-center self-start">
        <img src = "/assets/search.svg" alt="search icon" className="absolute h-4 top-2.5 left-1.5"/>
        <input
        className="w-38 bg-transparent placeholder:text-gray-400 text-gray-400 text-sm border border-gray-500 rounded-sm pl-6.5 pr-3 py-1.5  focus:outline-none"
        placeholder={`Search ${placeholder}`} 
        />
    </div>
)
}

export default SearchBar
