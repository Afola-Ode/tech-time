import React, { useState } from "react";
import { Add, Remove } from "../../images";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    
        <div className='border-b border-[#EAEAEA]'>
          <button
            type='button'
            className='flex justify-between items-center w-full py-4 px-6 text-sm lg:text-base text-left'
            onClick={handleAccordion}
          >
            <span className={isOpen ? "text-[#004DB3] font-bold" : "font-bold"}>
              {title}
            </span>
            <span className='ml-6 flex-shrink-0'>
              {isOpen ? <img src={Remove} alt='' /> : <img src={Add} alt='' />}
            </span>
          </button>
          {isOpen && (
            <div className='py-4 px-6'>
              <p className='text-[#A1A1A1]'>{content}</p>
            </div>
          )}
        </div>
  );
};

const FAQ = () => {
  const AccordionData = [
    {
      title: "is there a free trial available?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      title: "can i change my plan later?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      title: "are the courses lifetime?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      title: "do i get certified after taking courses?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      title: "how do i reach out to mentors?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      title: "do we get job ready after taking courses?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
  ];
  return (
    <section className='py-12'>
      <div className='page-container'>
        
    <div className='max-w-3xl mx-auto mt-8'>
    <h1 className='capitalize text-3xl lg:text-4xl text-[#000F24] font-bold text-center'>frequently asked questions</h1>
        <p className='capitalize text-[#A1A1A1] text-sm text-center mb-7'>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      {AccordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
    </div></section>
  );
};

export default FAQ;
