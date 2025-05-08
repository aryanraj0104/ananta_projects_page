import React from 'react'
import { project_name } from '../contants'

const Task = ({task,label,type,icon,crossed,option,tick,number,link_tick}) => {
  return (
    <div className="flex-1 p-2.5 bg-[#252527] rounded-sm">
        <div className='flex flex-row justify-between'>
          <p className='text-sm break-words w-2/3'>{task}</p>
          {option && <img src="/assets/options.svg" className='h-4 mt-3 mx-0.5'/>}
        </div>
        <div className='flex flex-row mt-4 justify-between'>
            <div className='flex-row flex'>
                <img src={`/assets/${type==="bookmark"?"green-bookmark":"checkbox"}.svg`} className='h-4 mt-0.5'/>
                <label className={`${crossed && 'line-through'} text-gray-300 text-sm ml-0.5`}>{project_name}-{label}</label>
            </div>
            <div className='flex flex-row items-center'>
            {tick && <img src='assets/tick.svg' className='inline-block h-4.5 mx-0.5'/>}
            {number>0 && 
              <div className='text-[#18191B] inline-block bg-white text-xs mx-1 px-1.5'>
              {number}
              </div>
            }
            {link_tick && <img src='assets/tick.svg' className='inline-block h-4.5 mx-0.5'/>}
            <img src={`https://avatar.iran.liara.run/public/${icon%50}`} className='h-6'/>
            </div>
        </div>
    </div>
  )
}

export default Task
