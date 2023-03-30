import React from "react";
import {
  Discord,
  Facebook,
  Instagram,
  Logo,
  Twitter,
  Youtube,
} from "../../images";

const Footer = () => {
  return (
    <footer className='bg-[#000F24] py-3 text-white'>
      <div className='page-container flex py-20 flex-wrap'>
        <div className='w-full md:w-full mb-10 lg:mb-0 lg:w-[20%]'>
          <img src={Logo} alt='' className='w-20 mb-4' />
          <p className='text-xs my-4'>
            Reach out to us on any of our social media networks
          </p>
          <div className='flex items-center'>
            <img src={Facebook} alt='' className='w-5 mr-3' />
            <img src={Twitter} alt='' className='w-5 mr-3' />
            <img src={Youtube} alt='' className='w-5 mr-3' />
            <img src={Instagram} alt='' className='w-5 mr-3' />
            <img src={Discord} alt='' className='w-5 mr-3' />
          </div>
        </div>
        <div className='w-full md:w-1/4 mb-6 lg:mb-0 lg:w-1/4'>
          <h4 className='text-xl font-medium mb-4'>Useful Links</h4>
          <ul className='capitalize'>
            <li className='mb-3'>Home</li>
            <li className='mb-3'>about us</li>
            <li className='mb-3'>our courses</li>
            <li className='mb-3'>testimonials</li>
            <li className='mb-3'>our community</li>
          </ul>
        </div>
        <div className='w-full md:w-1/4 mb-6 lg:mb-0 lg:w-1/4'>
          <h4 className='text-xl font-medium mb-4'>Community</h4>
          <ul className='capitalize'>
            <li className='mb-3'>help centers</li>
            <li className='mb-3'>partners</li>
            <li className='mb-3'>suggestion</li>
            <li className='mb-3'>blog</li>
            <li className='mb-3'>newsletter</li>
          </ul>
        </div>
        <div className='w-full md:w-1/2 mb-6 lg:mb-0 lg:w-[30%]'>
          <h4 className='text-xl font-medium mb-4'>Subscribe Us</h4>
          <form className='capitalize w-full'>
            <input
              type='email'
              className='bg-[#2A2A2B] text-[#424141] border-[#054FB3] border-2 pt-[0.6rem] pb-[0.6rem] focus:outline-none text-xs rounded-l-sm pl-2 lg:w-[60%]'
              placeholder='nft123@gmail.com'
            />
            <button className='bg-[#054FB3] p-2.5 text-sm'>Send Message</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
