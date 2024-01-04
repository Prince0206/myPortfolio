import React from "react";
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import {FaLaptopCode} from 'react-icons/fa'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className=" sm:flex items-center justify-between ">
      <div className="sm:flex items-center">
      <h1 className="relative z-20 text-center text-[24px] sm:text-[32px] py-5 font-black font-test">
        Prince Larbi Wireko
      </h1>
      <FaLaptopCode className="hidden sm:block text-3xl ml-2 text-primary-green"/>
      </div>


      <div className="flex w-[174px]  mx-auto sm:mx-0 sm:w-40 text-xl relative z-20 sm:justify-between justify-around   ">
        <Link to="https://github.com/Prince0206 " target="_blank">
        <SiGithub/>
        </Link>

        <Link to="https://www.linkedin.com/in/prince-larbi-wireko-619264131/" target="_blank">
        <SiLinkedin />
        </Link>

        <Link to="mailto:princewireko@ymail.com?subject=subject&cc=cc@example.com" target="_blank">
        <SiGmail />
        </Link>

        <Link to="https://wa.me/233266386632" target="_blank">
        <SiWhatsapp />
        </Link>
       

        

      </div>
    </div>
  );
}
