import React from "react";
import { Book, Card1, Card11, Clock, Grade } from "../../images";
import Data from "./Data";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {Data.map((child, index) => (
        <div className='bg-white shadow-md rounded-md p-4 w-3/12'>
          <img src={Card1} alt='' />
          <div className='flex items-center justify-between my-3'>
            <button className='bg-[#1e5cce75] text-[#1e5dce] font-semibold px-5 py-2 rounded-full text-xs'>
              Design {child.name}
            </button>
            <div className='flex items-center text-[#A1A1A1] text-xs font-semibold'>
              <span>4.7k</span>
              <img src={Grade} alt='' className='mx-1' />
              <span>(32.7k+)</span>
            </div>
          </div>
          <h3 className='text-lg font-medium mb-3 mt-2'>
            Introduction to user research in ux design
          </h3>
          <div className='flex justify-between text-[#A1A1A1] text-xs font-semibold'>
            <div className='flex items-center '>
              <img src={Clock} alt='' className='w-4' />
              <span className='ml-2'>23hrs 50mins</span>
            </div>
            <div className=' flex items-center'>
              <img src={Book} alt='' className='w-4' />
              <span className='ml-2'>15 Lessons</span>
            </div>
          </div>
          <div className='flex justify-between mt-5'>
            <div className='flex items-center'>
              <img src={Card11} alt='' className='mr-2 w-8' />
              <span className='font-bold text-sm'>Leonard Victor</span>
            </div>
            <div>
              <span className='text-[#004DB3] font-bold text-sm'>$15.00</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
