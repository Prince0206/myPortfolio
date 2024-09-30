import React , {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiFirebase,
  DiMongodb,
  DiNodejs,
} from "react-icons/di";

import { SiTailwindcss, SiExpress} from 'react-icons/si'



export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className=" grid md:grid-cols-2 relative  lg:grid-cols-3 text-center gap-y-10 place-items-center sm:place-items-start pt-16 pb-20 ">
      <div data-aos="zoom-in" data-aos-delay="400" >
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px] sm:text-left">
            HTML
          </h1>
          <DiHtml5 className="text-4xl ml-2 text-primary-green" />
        </div>

        <p className="text-center sm:text-left">2 Years Experience</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="500">
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px] text-center sm:text-left">
            CSS
          </h1>
          <DiCss3 className="text-4xl ml-2 text-primary-green" />
        </div>
        <p className="text-center sm:text-left">{/* 2 Years Experience */}</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="600">
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px] sm:text-left">
            JAVASCRIPT
          </h1>
          <DiJsBadge className="text-4xl ml-2 text-primary-green" />
        </div>
        <p className="text-center sm:text-left">{/* 2 Years Experience */}</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="700">
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px]">REACT</h1>
          <DiReact className="text-4xl ml-2 text-primary-green" />
        </div>
        <p className="text-center sm:text-left">{/* 2 Year Experience */}</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="800">
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px]">FIREBASE</h1>
          <DiFirebase className="text-4xl ml-2 text-primary-green" />
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="900">
        {" "}
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px]">TAILWINDCSS</h1>
          <SiTailwindcss className="text-4xl ml-2 text-primary-green"/>
        </div>
        <p className="text-center sm:text-left">{/* 2 Year Experience */}</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="900">
        {" "}
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px]">MONGODB</h1>
          <DiMongodb className="text-4xl ml-2 text-primary-green" />
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="900">
        {" "}
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px]">NODE.JS</h1>
          <DiNodejs className="text-4xl ml-2 text-primary-green" />
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="900">
        {" "}
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px]">EXPRESS.JS</h1>
          <SiExpress className="text-4xl ml-2 text-primary-green" />
        </div>
      </div>
      <img
        className=" absolute -right-6 bottom-[20px] md:-right-10 md:-bottom-[30px] lg:-right-40 lg:-bottom-10"
        src="/images/Group2.png"
        alt=""
      />
      <hr className="bg-white w-full sm:hidden" />
    </div>
  );
}
