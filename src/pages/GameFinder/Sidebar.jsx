import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
   <div className="top-0 h-screen  text-black p-5">
      <div className="text-md font-[300] mb-2 ">Game Fliters</div>

      <div className='flex flex-col gap-5'>
      <div className="relative inline-block">
      <select className="block appearance-none w-80 text-[#808080] bg-white border border-[#CCCCCC]  py-3 px-4  rounded leading-tight focus:outline-none  focus:border-blue-500">
        
        <option value="option1">Select Category</option>
        <option value="option2">Abstarct/Experiment</option>
        <option value="option3">Fantasy</option>
        <option value="option3">Historical</option>
        <option value="option3">Horror/cult</option>
        <option value="option3">Modern/Urban Fantasy</option>
        <option value="option3">Mystery/Crime</option>
        <option value="option3">Pulp/Adventure</option>
        <option value="option3">Science-Fiction</option>
      </select>
      <div className="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2">
      <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
      </div>
    </div>
      <div className="relative inline-block">
      <select className="block appearance-none w-80 text-[#808080] bg-white border border-[#CCCCCC]  py-3 px-4  rounded leading-tight focus:outline-none  focus:border-blue-500">
        
        <option value="option1">Select Game System</option>
        <option value="option2">Abstarct/Experiment</option>
        <option value="option3">Fantasy</option>
        <option value="option3">Historical</option>
        <option value="option3">Horror/cult</option>
        <option value="option3">Modern/Urban Fantasy</option>
        <option value="option3">Mystery/Crime</option>
        <option value="option3">Pulp/Adventure</option>
        <option value="option3">Science-Fiction</option>
      </select>
      <div className="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2">
      <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
      </div>
    </div>
      </div>
    </div>

  
    </div>
  );
};
 export default Sidebar;

