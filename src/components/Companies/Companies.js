import React from "react";
import { Zoom, Slack, Stripe, Monday, Dropbox } from "../../images";

const Companies = () => {
  return (
    <section className='bg-[#CCDBF0]'>
      <div className="flex items-center justify-between max-w-[21rem] md:max-w-4xl mx-auto py-6">
        <img src={Zoom} alt='' className='w-10 md:w-24' />
        <img src={Stripe} alt='' className='w-10 md:w-20' />
        <img src={Monday} alt='' className='w-24 md:w-36' />
        <img src={Slack} alt='' className='w-14 md:w-24' />
        <img src={Dropbox} alt='' className='w-20 md:w-32' />
      </div>
    </section>
  );
};

export default Companies;
