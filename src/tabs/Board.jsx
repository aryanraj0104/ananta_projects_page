import React from 'react'
import SearchBar from '../components/SearchBar'
import UserIcons from '../components/UserIcons'
import DropDown from '../components/DropDown'
import {type_options,group_options} from "../contants/index"
import Options from '../components/Options'

const Board = () => {
  return (
    <div className='flex flex-col'>
      {/* Top Features bar */}
      <div className='flex flex-row justify-between min-w-screen items-start p-4'>
        <div className=" flex flex-row">
          <SearchBar placeholder="Board" />
          <UserIcons/>
          <DropDown text = "Type" options={type_options}/>
        </div>

        <div className='flex flex-row gap-2 items-start'>
          <button className='text-base bg-[#6A9CF3] py-1 px-2 text-[#0B294D] font-semibold rounded-xs relative '>Complete Sprint</button>
          <img className='h-8 p-1 border border-gray-700 rounded-sm shadow-2xl' src="/assets/loop.svg" alt="loop icon"/>
          <DropDown text = "Group" options={group_options}/>
          <img className='h-8 p-1 border border-gray-700 rounded-sm shadow-2xl' src="/assets/slider.svg" alt="slider icon"/>
          <img className='h-8 p-1 border border-gray-700 rounded-sm shadow-2xl' src="/assets/graph-increase.svg" alt="graph-increase icon"/>
          {/* <img className='h-8 p-1.5 border border-gray-700 rounded-sm shadow-2xl' src="/assets/options.svg" alt="sprint options icon"/> */}
          <Options/>
        </div>
      </div>


      {/* Tasks area */}
      <div className='flex flex-row justify-between w-full'>
        
      </div>
    </div>
  )
}

export default Board
