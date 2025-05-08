import React, { useRef, useState } from 'react'

const TodoArea = () => {
  const todoList = []
  const task = useRef()
  const type = useRef()
  const [isOpen,setIsOpen] = useState(false)
  const handleAdd = () =>{
      console.log("added")
      setIsOpen(false)
  }

  return (
    <div className='flex flex-row gap-[10px] w-full px-4 '>
        {/* first To Do */}
        <div className="flex flex-col bg-[#18191B] text-white w-1/5 rounded-sm ">
            <h3 className="text-xs text-gray-400 uppercase py-2 px-3 mb-1">To do
                <div className='text-[#18191B] inline-block w-fit bg-white text-xs mx-1 px-2 mb-1'>4</div>
            </h3>
            <div className='w-full bg-[#161719] h-1 mb'></div>
            <div className='flex flex-col px-1 gap-1.5 mb-2'>
                <div className="flex-1 p-2.5 bg-[#252527] rounded-sm">
                    <p className='text-sm w-2/3'>Student progress bar in desktop apps</p>
                    <div className='flex flex-row mt-4 justify-between'>
                        <div className='flex-row flex'>
                            <img src="/assets/green-bookmark.svg" className='h-4 mt-0.5'/>
                            <label className='text-gray-300 text-sm ml-0.5'>CHITTI-33</label>
                        </div>
                        <img src={`https://avatar.iran.liara.run/public/${3%4}`} className='h-6'/>
                    </div>
                </div>
                <div className="flex-1 p-2.5 bg-[#252527] rounded-sm">
                    <p className='text-sm w-2/3'>Shift subscription type to individual course</p>
                    <div className='flex flex-row mt-4 justify-between'>
                        <div className='flex-row flex'>
                            <img src="/assets/checkbox.svg" className='h-4 mt-0.5'/>
                            <label className='text-gray-300 text-sm ml-0.5'>CHITTI-33</label>
                        </div>
                        <img src={`https://avatar.iran.liara.run/public/${2%4}`} className='h-6'/>
                    </div>
                </div>

                {/* Create Button */}
                {!isOpen && <div className='flex flex-row p-2.5'>
                    <img className='h-4 mt-0.5 mr-0.5' src="/assets/plus.svg" alt="add icon" onClick={()=>setIsOpen(true)}/>
                    <p className='text-sm text-gray-300'>Create</p>
                </div>}
                {/* text fieid area */}
                {isOpen && <div className='focus:outline-[#629DF0]'><form className="flex flex-col p-2.5 bg-[#252527] rounded-sm focus:border-[#629DF0]">
                    <textarea type='text' className='max-h-8 h-12 focus:outline-none border-0 text-wrap text-sm w-2/3 placeholder-gray-500 resize-none custom-scrollbar overflow-auto' placeholder='What needs to be done?' ref={task}/>
                    <div className='flex flex-row mt-4 justify-between'>
                        <div className='flex-row flex'>
                            <img src="/assets/green-bookmark.svg" className='h-4 mt-0.5'/>
                        </div>
                        <img src="/assets/enter.svg" onClick={handleAdd} className='h-6'/>
                    </div>
                </form></div>}
            </div>
        </div>
  
    </div>
  )
}

export default TodoArea
