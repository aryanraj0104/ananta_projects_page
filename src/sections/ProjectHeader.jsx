import React from 'react';
import { Routes, Route,  NavLink  } from 'react-router-dom';
import Display from './Display';
import MenuElement from '../components/MenuElement';
import { menu_elements } from '../contants';

const ProjectHeader = () => {
  return (
    <>
    <div className='flex flex-col items-center top'>
      <div className='flex flex-row justify-between w-full'>
        <div className='flex flex-col self-start ml-4 mt-4'>
          <p className='text-xl text-gray-400'>Projects</p>
          <div className='flex flex-row h-16'>
            <img className='mt-2 h-8 bg-white p-1 rounded-sm' src='vite.svg' alt="project logo"/>
            <h1 className='text-2xl text-white font-bold mt-2 ml-2'>Chitti.</h1>
            <img className='h-8 mt-2 ml-2 p-2' src="/assets/options.svg" alt="options icon"/>
          </div>
        </div>
        <div className='flex flex-row self-end mb-2 gap-2 mr-2'>
          <img className='h-8 p-2 border border-gray-700 rounded-sm shadow-2xl' src="/assets/expand.svg" alt="expand icon"/>
          <img className='h-8 p-2 border border-gray-700 rounded-sm shadow-2xl' src="/assets/share.svg" alt="share icon"/>
          <img className='h-8 p-2 border border-gray-700 rounded-sm shadow-2xl' src="/assets/bolt.svg" alt="bolt icon"/>
        </div>
      </div>
      <nav className="menu-bar">
        {menu_elements.map((element)=> (
          <NavLink
          key={element.name}
          to={element.path}
          className={({ isActive }) => (isActive ? 'active' : '')} // Use isActive to apply active class
          >
          <MenuElement icon={element.icon} name={element.name} />
        </NavLink>))}
        <img className='-mr-1.5 -ml-1.5 h-6' src="/assets/down-arrow.svg" alt="arrow icon"/>
        <img className='h-6' src="/assets/plus.svg" alt="add icon"/>
      </nav>
    </div>
      <Routes>
        <Route path="/*" element={<Display />} />
      </Routes>
    </>
  );
};

export default ProjectHeader;
