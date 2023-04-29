import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className='bg-[#F8F9FC] pt-20'>
      <div className='max-w-3xl text-center text-sm mx-auto pb-5'>
        <h2 className='capitalize text-3xl lg:text-4xl text-[#000F24] font-bold text-center'>What our clients are saying</h2>
        <p className='capitalize'>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>

      <Testimonial />
    </div>
  );
};

export default Testimonials;
