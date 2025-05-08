import React from 'react'
import Task from './Task'

const Column = (props) => {
  return (
    <div className="flex flex-col bg-[#18191B] min-h-120 text-white w-1/6 rounded-sm">
        <h3 className="text-xs text-gray-400 uppercase py-2 px-3 mb-1">
          {props.title}
          {props.tasks.length>0 && <div className='text-[#18191B] inline-block bg-white text-xs mx-1 px-2 mb-1'>
            {props.tasks.length}
          </div>}
          {props.tick && <img src='assets/tick.svg' className='inline-block h-6 mx-2 -mt-0.5'/>}
        </h3>
        <div className='w-full bg-[#161719] h-1 mb'></div>

        <div className='flex flex-col px-1 gap-1.5 mb-2'>
          
          {props.tasks.map(({id,task,label,type,icon,crossed,option,tick,number,link_tick}) => (
            <Task
              key={id}
              task={task}
              label={label}
              type={type}
              icon={icon}
              crossed={crossed}
              option={option}
              tick={tick}
              number={number}
              link_tick={link_tick}
            />
          ))}
        </div>
      </div>
  )
}

export default Column
