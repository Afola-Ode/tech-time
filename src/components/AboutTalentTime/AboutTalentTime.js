import React from "react";
import {
  Crown,
  Man,
  Audio,
  Video,
  Live,
  Notes,
  Vector5,
  Vector6,
  Vector2,
  Boy,
  Mentors,
  Meetings,
  Meeting,
  Prices,
  Vector9,
  Vector7,
  Vector8,
} from "../../images";

const AboutTalentTime = () => {
  return (
    <section className='bg-[#F8F9FC]'>
      <section className='relative'>
        <img src={Vector6} alt='' className='absolute right-0 bottom-24 w-10' />
        <img src={Vector5} alt='' className='absolute right-0 top-24 w-10' />
        <div className='page-container flex relative'>
          <div className='md:flex lg:flex py-14 lg:pt-28 lg:pb-16'>
            <img
              src={Crown}
              alt=''
              className='absolute top-[2rem] lg:top-[5.5rem] left-2 lg:left-0 w-10'
            />
            <div className='w-full lg:w-2/3 text-center md:text-left lg:text-left'>
              <h1 className='text-2xl lg:text-4xl text-[#000F24] '>
                High quality video, audio & live classes
              </h1>
              <p className='capitalize text-[#A1A1A1] text-sm pt-3'>
                high-defination video is video of higher resolution and quality
                than standard definition. while there’s no standard meaning for
                high definition, generally any standard video image
              </p>
              <button className='blue_button mt-4'>View Courses</button>
              <div>
                <div className='flex my-4'>
                  <button className='bg-white flex py-2 px-4 text-sm font-semibold rounded-md justify-center items-center'>
                    <img src={Audio} alt='' />{" "}
                    <span className='ml-2 lg:ml-4'>Audio Classes</span>
                  </button>
                  <button className='bg-white flex py-2.5 px-4 text-sm font-semibold rounded-md justify-center items-center ml-3'>
                    <img src={Live} alt='' />{" "}
                    <span className='ml-2 lg:ml-4'>Live Classes</span>
                  </button>
                </div>
                <div className='flex my-4'>
                  <button className='bg-white flex py-2 px-4 text-sm font-semibold rounded-md justify-center items-center'>
                    <img src={Video} alt='' />{" "}
                    <span className='ml-2 lg:ml-4'>Recorded Classes</span>
                  </button>
                  <button className='bg-white flex py-2.5 px-4 text-sm font-semibold rounded-md justify-center items-center ml-3'>
                    <img src={Notes} alt='' />{" "}
                    <span className='ml-2 lg:ml-4'>50+ Notes</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <img src={Man} alt='' className='' />
            </div>
          </div>
        </div>
      </section>
      <section className='relative'>
        <div className='page-container'>
          <div className='lg:flex py-0 lg:py-16 justify-between'>
            <img
              src={Vector2}
              alt=''
              className='absolute hidden lg:block lg:top-6 left-2 lg:left-64 w-2'
            />
            <div className='w-full lg:mr-20 lg:w-1/2 text-center md:text-left lg:text-left'>
              <h1 className='text-2xl lg:text-4xl text-[#000F24] capitalize'>
                this is why we are best from others
              </h1>
              <p className='capitalize text-[#A1A1A1] text-sm pt-3 leading-loose'>
                high-defination video is video of higher resolution and quality
                than standard definition. while there’s no standard meaning for
                high definition, generally any standard video image
              </p>
              <img src={Boy} alt='' className='mt-5' />
            </div>
            <img
              src={Vector9}
              alt=''
              className='absolute hidden lg:block lg:top-5 right-80 w-14'
            />
            <div className='w-full md:mt-5 lg:w-1/2'>
              <div className='md:flex mb-3 md:my-3 lg:mb-5'>
                <div className='bg-white rounded-md p-5 my-3 md:my-0 lg:my-0 md:mr-5 lg:mr-5'>
                  <img src={Mentors} alt='' className='w-8 mb-4' />
                  <h5 className='capitalize text-sm'>experienced mentors</h5>
                  <p className='capitalize text-sm text-[#A1A1A1] leading-loose'>
                    high-defination video is video of higher resolution and
                    quality than standard definition. high-defination video is
                    video of higher resolution and quality than standard
                    definition.{" "}
                  </p>
                </div>
                <div className='bg-white rounded-md p-5'>
                  <img src={Meeting} alt='' className='w-8 mb-4' />
                  <h5 className='capitalize text-sm'>one-on-one meetings</h5>
                  <p className='capitalize text-sm text-[#A1A1A1] leading-loose'>
                    high-defination video is video of higher resolution and
                    quality than standard definition. high-defination video is
                    video of higher resolution and quality than standard
                    definition.{" "}
                  </p>
                </div>
              </div>
              <div className='md:flex lg:flex'>
                <div className='bg-white rounded-md p-5 my-3 md:my-0 md:mr-5 lg:my-0 lg:mr-5'>
                  <img src={Meetings} alt='' className='w-8 mb-4' />
                  <h5 className='capitalize text-sm'>one-on-one meetings</h5>
                  <p className='capitalize text-sm text-[#A1A1A1] leading-loose'>
                    high-defination video is video of higher resolution and
                    quality than standard definition. high-defination video is
                    video of higher resolution and quality than standard
                    definition.{" "}
                  </p>
                </div>
                <div className='bg-white rounded-md p-5'>
                  <img src={Prices} alt='' className='w-8 mb-4' />
                  <h5 className='capitalize text-sm'>affordable prices</h5>
                  <p className='capitalize text-sm text-[#A1A1A1] leading-loose'>
                    high-defination video is video of higher resolution and
                    quality than standard definition. high-defination video is
                    video of higher resolution and quality than standard
                    definition.{" "}
                  </p>
                </div>
              </div>
              <img
                src={Vector8}
                alt=''
                className='absolute lg:bottom-36 left-6 w-5'
              />
              <img
                src={Vector7}
                alt=''
                className='absolute lg:bottom-5 right-8 w-5'
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutTalentTime;
