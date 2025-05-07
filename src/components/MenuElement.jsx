import React from 'react'

const MenuElement = ({icon,name}) => {
  return (
      <p className='flex text-md text-gray-400 hover:-mt-1 hover:pb-1 '><img className='h-3 mt-1.5 pr-1' src={icon}  alt={`${name} icon`}/>{name}</p>
  )
}

export default MenuElement
