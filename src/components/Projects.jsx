import React from "react";
import Button from "./Button";
import ProjCard from "./ProjCard";
import projects from "../data.json"

export default function Projects() {
 



  return (
    <div className="pt-10 pb-10 ">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold lg:text-[88px] sm:text-[72px] text-[40px]">
          Projects
        </h1>
        <a
          href="https://wa.me/233266386632"
          target="_blank"
          className="font-bold border-b-4 pb-2 border-b-primary-green hover:text-primary-green tracking-wider" rel="noreferrer"
        >
          CONTACT ME
        </a>
      </div>

      <div className="sm:grid   md:grid-cols-2 lg:grid-cols-3 gap-x-20 pt-10">
        {projects.map((item,i)=>{
          return <ProjCard key={i} data={item}  />

        })}
        {/* <ProjCard state={showButton} show={show} hide={hide} />
        <ProjCard state={showButton} show={show} hide={hide} />
        <ProjCard state={showButton} show={show} hide={hide} />
        <ProjCard state={showButton} show={show} hide={hide} />
        <ProjCard state={showButton} show={show} hide={hide} />
        <ProjCard state={showButton} show={show} hide={hide} /> */}
      </div>
    </div>
  );
}
