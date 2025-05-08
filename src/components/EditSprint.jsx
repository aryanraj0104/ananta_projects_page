import React, { useState } from 'react';

const EditSprint = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    sprintName: '',
    startDate: '',
    endDate: '',
    sprintGoal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleClick = (e) =>{
    e.preventDefault()

    const name = e.target
    if(name === 'update' ){
        console.log(formData);
    }
    else if (name === 'cancel'){
        console.log("cancel");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#2B2C2E] rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-300 my-2">Edit Sprint : Sprint Beta</h2>
        <p className="block text-sm text-gray-300">Required fields are marked with an asterisk<span className="text-red-600">*</span></p>
        <form>
          <div>
            <label className="block text-sm text-gray-300 mt-1 py-1">
              Sprint name <span className="text-red-600">*</span>
              <input
                required
                name="sprintName"
                value={formData.sprintName}
                onChange={handleChange}
                type="text"
                placeholder="Sprint name"
                className="placeholder-gray-400 text-base w-50 block focus:outline-none focus:border-[#629DF0] mt-0.5 border-2 border-gray-500 bg-[#1F1F1F] text-gray-400 p-2 rounded-sm "
              />
            </label>
            <label className="block text-sm text-gray-300 mt-1 py-1">
              Start date <span className="text-red-600">*</span>
              <input
                required
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                type="datetime-local"
                className="w-50 block focus:outline-none focus:border-[#629DF0] mt-0.5 p-2 rounded-sm bg-[#1F1F1F] text-gray-400 border-2 border-gray-500 [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:h-5"
                />
            </label>
            <label className="block text-sm text-gray-300 mt-1 py-1">
              End Date <span className="text-red-600">*</span>
              <input
                required
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                type="datetime-local"
                className="w-50 block focus:outline-none focus:border-[#629DF0] mt-0.5 p-2 rounded-sm bg-[#1F1F1F] text-gray-400 border-2 border-gray-500 [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:h-5"
                />
            </label>
            <label className="block text-sm text-gray-300 mt-1 py-1">
              Sprint goal
              <textarea
                name="sprintGoal"
                value={formData.sprintGoal}
                onChange={handleChange}
                rows={5}
                className="text-base w-full focus:outline-none focus:border-[#629DF0] mt-0.5 border-2 border-gray-500 bg-[#1F1F1F] text-gray-400 p-2 rounded-sm"
              />
            </label>
          </div>

          <div className="flex justify-end space-x-2">
            <button
            name = 'cancel'
              type="button"
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-sm rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
            name = "update"
                type="submit"
                onClick={handleClick}
                className="text-base bg-[#6A9CF3] py-1 px-2 text-[#0B294D] font-semibold rounded-sm"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSprint;
