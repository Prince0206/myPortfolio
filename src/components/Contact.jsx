import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="lg:flex py-20 lg:justify-between w-full bg-secondary-dark px-6 sm:px-10 lg:px-[165px]">
      <div className="text-center lg:text-left sm:mx-auto max-w-[445px] h-[208px]">
        <h1 className="font-bold text-white lg:text-[88px] sm:text-[72px] text-[40px]">
          Contact
        </h1>
        <p className="text-gray-400">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I will get back to you as soon as possible.
        </p>
      </div>

      <form className="mx-auto min-w-[405px] flex flex-col">
        <input
          placeholder="NAME"
          className="border-b text-white outline-none py-2 border-white bg-secondary-dark"
          type="text"
        />
        <input
          placeholder="EMAIL"
          className="py-2 text-white outline-none mt-5 bg-secondary-dark border-b border-white"
          type="email"
          name=""
          id=""
        />
        <label className="text-gray-400 mt-7" htmlFor="">
          MESSAGE
        </label>
        <textarea
          className="text-white h-[107px] outline-none bg-secondary-dark border-b"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <a
          href="https://wa.me/233266386632"
          target="_blank"
          className="text-white mt-10 font-bold border-b-4 pb-1 block border-b-primary-green hover:text-primary-green tracking-wider" rel="noreferrer"
        >
          SEND MESSAGE
        </a>
      </form>
    </div>
  );
}
