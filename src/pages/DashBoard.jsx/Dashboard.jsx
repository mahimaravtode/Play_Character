import React from 'react';
import { IoLogoDiscord } from 'react-icons/io5';
import GoogleImg from '../../assets/Google.png';

const Dashboard = () => {
  return (
    <div className='w-full flex items-center min-h-[50vh] justify-center  my-10'>
      <div className='w-full lg:w-[33%] mx-auto text-center px-10 '>
        <h1 className='text-xl md:text-2xl font-semibold my-2'>Welcome to Player Character Games!</h1>
        <p className='font-light text-sm md:text-md text-[#808080] mb-2'>
          At Player Character Games, we celebrate the creativity of Game Masters and the passionate ingenuity of Players, connecting like-minded adventurers for memorable experiences. Join us in shaping extraordinary stories and enriching the TTRPG community.
        </p>
        <h5 className='text-[#808080]'>Please select your preferred login method:</h5>
        <div className='flex flex-col lg:flex-row gap-4 mt-10'>
          <div className='flex items-center justify-center gap-5 px-10 rounded-md border-[#3b5998] text-[#3b5998] hover:text-white py-2 border-[1px] transition-all duration-300 hover:bg-[#3b5998]'>
            <IoLogoDiscord className='text-2xl' />
            <button className='font-light'>Log In via Discord</button>
          </div>
          <div className='flex items-center justify-center gap-4 px-10 rounded-md border-[#dd4b39] text-[#dd4b39] hover:text-white py-2 border-[1px] transition-all duration-300 hover:bg-[#dd4b39]'>
            <img src={GoogleImg} className='w-5' alt="Google Logo" />
            <button className='font-light'>Log In via Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
