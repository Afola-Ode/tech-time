import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card11, Card12, Card13, Card14 } from "../../images";

const Testimonies = [
  {
    name: "Suna Rome",
    img: Card11,
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    role: "product designer",
  },
  {
    name: "bella moon",
    img: Card12,
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    role: "product designer",
  },

  {
    name: "samuel fortune",
    img: Card13,
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    role: "product designer",
  },
  {
    name: "bryce jason",
    img: Card14,
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    role: "product designer",
  },
];

export default function Testimonial() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <Slider {...settings}>
      {Testimonies.map((item, index) => (
        <div className='bg-white p-4 rounded-md' key={index}>
          <p className='text-xs text-[#A1A1A1]'>{item.text}</p>
          <div className="flex mt-2">
            <img src={item.img} alt='' />
            <div className="ml-2">
              <h3 className='capitalize text-sm'>{item.name}</h3>
              <p className='capitalize text-xs'>{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
