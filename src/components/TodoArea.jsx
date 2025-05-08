import React, { useState } from 'react';
import Task from './Task';
import IconDropDown from './IconDropDown';
import Column from './Column';
import {in_progress_tasks,not_proceeding_tasks,closed_tasks} from '../contants/index'

const TodoArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedIconType, setSelectedIconType] = useState('checkbox');

  function type(icon){
    setSelectedIconType(icon);
  }
  const handleAdd = () => {
    if (!newTask.trim()) return;

    const newTodo = {
      id: todos.length + 1,
      task: `${newTask}`,
      label: todos.length + 1,
      type: selectedIconType,
      icon: todos.length + 1,
      crossed: false,
    };

    setTodos([...todos, newTodo]);
    setIsOpen(false);
    setNewTask('');
    setSelectedIconType('checkbox');
  };

  return (
    <div className='flex flex-row gap-[10px] w-full px-4'>
      {/* To Do */}
      <div className="flex flex-col bg-[#18191B] min-h-120 text-white w-1/6 rounded-sm">
        <h3 className="text-xs text-gray-400 uppercase py-2 px-3 mb-1">
          To do
          {todos.length >0 && 
          <div className='text-[#18191B] inline-block w-fit bg-white text-xs mx-1 px-2 mb-1'>
            {todos.length}
          </div>}
        </h3>
        <div className='w-full bg-[#161719] h-1 mb'></div>

        <div className='flex flex-col px-1 gap-1.5 mb-2'>
          {todos.map(({id,task,label,type,icon,crossed}) => (
            <Task
              key={id}
              task={task}
              label={label}
              type={type}
              icon={icon}
              crossed={crossed}
            />
          ))}

          {!isOpen && (
            <div className='flex flex-row p-2.5 cursor-pointer' onClick={() => setIsOpen(true)}>
              <img className='h-4 mt-0.5 mr-0.5' src="/assets/plus.svg" alt="add icon" />
              <p className='text-sm text-gray-300'>Create</p>
            </div>
          )}

          {isOpen && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAdd();
              }}
              className="flex flex-col p-2.5 border-2 bg-[#202020] rounded-sm border-[#629DF0]"
            >
              <textarea
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className='max-h-8 h-12 focus:outline-none border-0 text-sm placeholder-gray-500 resize-none custom-scrollbar overflow-auto'
                placeholder='What needs to be done?'
              />

              <div className='flex flex-row mt-4 justify-between items-center'>
                <IconDropDown type={type} icon={selectedIconType} />
                <img src="/assets/enter.svg" onClick={handleAdd} className='h-6 p-1 mb-0.5 mr-1 rounded-sm bg-[#262626] cursor-pointer' />
              </div>
            </form>
          )}
        </div>
      </div>
      {/* {Other Columns} */}
      <Column title={"Think About"} tasks={[]}/>
      <Column title={"In Progress"} tasks={in_progress_tasks}/>
      <Column title={"Not Proceeding"} tick={true} tasks={not_proceeding_tasks}/>
      <Column title={"Closed"} tick={true} tasks={closed_tasks}/>
      
      
    </div>
  );
};

export default TodoArea;