import React from 'react'
import Link from "next/link";
// import { useState, useEffect } from 'react';
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const icons = [
    { href: "/", IconComponent: FaInstagram },
    { href: "/", IconComponent: FaYoutube },
    { href: "/", IconComponent: FaTelegramPlane }
  ];

  return (
    <nav className='flex justify-between w-full mb-16 mt-20 px-28  relative text-white'>
      <Link href="/" className='flex flex-center pl-28'>
        <h1 className='text-4xl font-bold py-4'>LOG<strong className='text-yellow-500'>O</strong></h1>
      </Link>
      <div className='sm:flex justify-end hidden px-12 py-3 items-center'>
        <div className='flex gap-3 md:gap-5'>
          <h3 className='text-end text-md font-medium'>+998 99 030 99 07 <br />
            Toshkent sh. O'zbekiston
          </h3>
        </div>
        <div className='flex px-8 py-1 text-center items-center'>
          {icons.map(({ href, IconComponent }, index) => (
            <Link key={index} href={href}>
              <IconComponent className='w-12 h-12 px-2' />
            </Link>
          ))}
        </div>
        <span className='text-xl py-2 font-bold'>Uz</span>
      </div>
    </nav>
  )
}

export default Navbar