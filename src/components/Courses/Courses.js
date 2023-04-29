import React, { useState } from "react";
import {
  Book,
  Clock,
  Grade,
} from "../../images";
import Courses from "./Data";

const Card = ({ course }) => {
  const {
    title,
    img,
    category,
    reviews,
    purchases,
    time,
    lessons,
    author,
    price,
    authorImg,
  } = course;

  return (
    <div className='bg-white shadow-md rounded-md p-4 w-1/2 md:w-1/3 lg:1/4 md:mx-5 my-3'>
      <img src={img} alt={title} />
      <div className='flex items-center justify-between my-3'>
        <button className='bg-[#1e5cce75] text-[#1e5dce] font-semibold px-5 py-2 rounded-full text-xs'>
          {category} 
        </button>
        <div className='flex items-center text-[#A1A1A1] text-xs font-semibold'>
          <span>{reviews}</span>
          <img src={Grade} alt='' className='mx-1' />
          <span>({purchases})</span>
        </div>
      </div>
      <h3 className='text-lg font-medium mb-3 mt-2'>{title}</h3>
      <div className='flex justify-between text-[#A1A1A1] text-xs font-semibold'>
        <div className='flex items-center '>
          <img src={Clock} alt='' className='w-4' />
          <span className='ml-2'>{time}</span>
        </div>
        <div className='flex items-center'>
          <img src={Book} alt='' className='w-4' />
          <span className='ml-2'>{lessons} Lessons</span>
        </div>
      </div>
      <div className='flex justify-between mt-5'>
        <div className='flex items-center'>
          <img src={authorImg} alt='' className='mr-2 w-8' />
          <span className='font-bold text-sm'>{author}</span>
        </div>
        <div>
          <span className='text-[#004DB3] font-bold text-sm'>${price}</span>
        </div>
      </div>
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const categories = ["All", ...new Set(Courses.map((course) => course.category))]; // Get unique categories

  const filteredCourses =
    activeTab === 0
      ? Courses
      : Courses.filter((course) => course.category === categories[activeTab]);

  return (
    <div className='page-container'>
      <div className='flex justify-center bg-[#F8F9FC]'>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`cursor-pointer py-2 px-4 text-gray-500 ${
              index === activeTab ? "bg-gray-200 font-medium text-gray-800" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className='flex flex-wrap justify-between bg-[#F8F9FC] py-6'>
        {filteredCourses.map((course, index) => (
          <Card course={course} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
