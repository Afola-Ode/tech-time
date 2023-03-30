import React, { useState } from "react";
import { Add, Remove } from "../../images";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='py-12'>
      <div className='page-container'>
        <h1 className="capitalize text-center">frequently asked questions</h1>
        <p className="capitalize text-[#A1A1A1] text-sm text-center">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
        <div className='border-b border-gray-200'>
          <button
            type='button'
            className='flex justify-between items-center w-full py-4 px-6 text-lg font-medium text-left text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300'
            onClick={handleAccordion}
          >
            <span className={isOpen ? "text-[#004DB3] font-bold": "font-bold"}>Is there a free trial available?</span>
            <span className='ml-6 flex-shrink-0'>
              {isOpen ? <img src={Remove} alt='' /> : <img src={Add} alt='' />}
            </span>
          </button>
          {isOpen && (
            <div className='py-4 px-6'>
              <p className='text-[#A1A1A1]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
