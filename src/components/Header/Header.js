import React from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  Menu,
  Vector1,
  Vector2,
  Vector3,
  Lady,
  Arrow,
  Users,
  Vector4,
  Vector4mobile,
} from "../../images";

const Header = () => {
  return (
    <header className='bg-[#004DB3] relative'>
      <div className='page-container'>
        <nav className='flex justify-between items-center py-6'>
          <div className='logo'>
            <img src={Logo} alt='' className='w-16 md:w-28' />
          </div>
          <img src={Menu} alt='' className='md:hidden' />
          <div className='md:flex hidden'>
            <ul className='md:flex text-[#AAC4E6] items-center text-sm'>
              <li>
                <Link to='/' className='nav-link text-white'>
                  Home
                </Link>
              </li>
              <li className='nav-link'>About Us</li>
              <li className='nav-link'>Courses</li>
              <li className='nav-link'>Testimonial</li>
              <li className='nav-link'>Community</li>
            </ul>
            <button className='white_button'>Enroll Now</button>
          </div>
        </nav>
        <aside className='hidden md:flex justify-between w-1/3 items-center pt-10'>
          <img src={Vector1} alt='' className='w-2' />
          <img src={Vector2} alt='' className='w-2' />
        </aside>
        <section className='flex items-center justify-between flex-col md:flex-row'>
          <div className='text-white text-center md:text-left w-full md:w-5/12 mt-0 md:-mt-10'>
            <h1 className='text-3xl md:text-[2rem] lg:text-[2.7rem] leading-tight'>
              Grow your skills to <br /> advance your career
              <br />
              path{" "}
            </h1>
            <img src={Vector3} alt="" className="absolute -left-5 md:left-0 w-10" />
            <p className='capitalize pt-5 text-xs md:text-sm'>
              Build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>
            <div className='flex items-center mt-6 justify-center md:justify-start'>
              <button className='flex items-center border py-2 px-4 rounded-sm'>
                <span className='text-xs'>Get Started Now</span>
                <img src={Arrow} alt='' className='ml-4 w-2' />
              </button>
              <button className='white_button ml-2'>Enroll Now</button>
            </div>
            <div className='mt-4 w-full md:w-48 flex items-center justify-center md:justify-start'>
              <img src={Users} alt='' className="w-3/6 md:w-full" />
            </div>
          </div>
          <div className='w-4/5 md:w-24 md:-mr-20 md:-mb-56 flex justify-end -mt-6'>
            <img src={Vector4} alt='' className='hidden md:block' />
            <img src={Vector4mobile} alt='' className='md:hidden' />
          </div>
          <div>
            <img src={Lady} alt='' className='md:w-[25rem] lg:w-[35rem]' />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
