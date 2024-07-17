"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const CombinedComponent = () => {
  const icons = [
    { href: "/", IconComponent: FaInstagram },
    { href: "/", IconComponent: FaYoutube },
    { href: "/", IconComponent: FaTelegramPlane }
  ];

  const [focusedInput, setFocusedInput] = useState(null);
  const [navbar, setNavbar] = useState(false);

  return (
    <div className='combined'>
      <nav className={`w-full relative md:py-20 ${navbar ? "bg-blue-950 bg-opacity-50 backdrop-blur-lg z-10" : "bg-transparent"}`}>
        <div className="justify-between px-4 mx-auto max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-4xl font-bold text-white pl-16 z-20">LOG<strong className='text-yellow-400'>O</strong></h2>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border z-20 transition-transform duration-500"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <MdClose size={35} className='text-yellow-400 top-0 right-0 transition-transform duration-500' />
                ) : (
                  <IoMdMenu size={35} className='text-yellow-400 top-0 right-0 transition-transform duration-500' />
                )}
              </button>
            </div>
          </div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 transition-all duration-500 ${navbar ? "block" : "hidden"} relative z-20`}>
            <ul className="items-center text-center md:justify-end justify-center text-white space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="cursor-pointer md:flex">
                <h3 className='md:text-end text-xl md:text-md font-medium'>+998 99 030 99 07 <br />
                  Toshkent sh. O'zbekiston
                </h3>
                <div className='flex justify-center py-4 md:px-8 md:py-1 md:text-center md:items-center'>
                  {icons.map(({ href, IconComponent }, index) => (
                    <Link key={index} href={href}>
                      <IconComponent className='w-11 h-11 md:w-11 md:h-11 px-2' />
                    </Link>
                  ))}
                </div>
              </li>
              <li className="cursor-pointer">
                <span className='text-center text-xl md:py-2 md:pr-4 font-bold'>Uz</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='main-content text-start justify-center m-auto py-3 relative flex flex-col md:flex-row px-4 md:px-28'>
        <div className="text-white md:ml-24 md:text-start text-center">
          <h1 className='text-2xl md:text-5xl font-bold md:mb-4 md:leading-tight'>Modme CRM - ta'lim markazlarni tizimlashtirish platformasi</h1>
          <p className='text-xl md:text-3xl py-4 mb-8'>Markazingizni tizimlashtirish vaqti keldi!</p>
        </div>
        <div className='form-container max-w-md mx-auto md:mt-[-78px]'>
          <form method="post" className='flex flex-col gap-4 md:w-[290px] w-80 m-auto'>
            <div className='w-full md:w-[310px] md:text-start text-center'>
              <h1 className='text-yellow-400 text-xl md:text-2xl font-bold'>Demoga so'rov qoldiring</h1>
              <p className='text-center text-white text-sm py-2'>va Modme haqida batafsil <strong>PREZINTATSIYAGA</strong> ega bo`ling!</p>
            </div>
            <input
              type="text"
              name="name"
              placeholder={focusedInput === 'name' ? '' : "Ismingiz"}
              onFocus={() => setFocusedInput('name')}
              onBlur={() => setFocusedInput(null)}
              className='p-3 pl-5 border border-gray-300 rounded-xl'
            />
            <input
              type="text"
              name="center-name"
              placeholder={focusedInput === 'center-name' ? '' : "O'quv markazingiz nomi"}
              onFocus={() => setFocusedInput('center-name')}
              onBlur={() => setFocusedInput(null)}
              className='p-3 pl-5 border border-gray-300 rounded-xl'
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder={focusedInput === 'phoneNumber' ? '' : "Telefon raqamingiz"}
              onFocus={() => setFocusedInput('phoneNumber')}
              onBlur={() => setFocusedInput(null)}
              className='p-3 pl-5 border border-gray-300 rounded-xl'
            />
            <input
              type="text"
              name="telegram-handle"
              placeholder={focusedInput === 'telegram-handle' ? '' : "Telegram manzilingiz"}
              onFocus={() => setFocusedInput('telegram-handle')}
              onBlur={() => setFocusedInput(null)}
              className='p-3 pl-5 border border-gray-300 rounded-xl'
            />
            <button type="submit" className='p-3 bg-yellow-400 font-[600] text-black rounded-2xl '>DEMO OLISH </button>
          </form>
          <p className='text-sm text-white md:pl-0 pl-5 text-center w-72 mt-2 md:w-80'>Sizning barcha ma'lumotlaringiz xavfsizligi qonun doirasida himoya qilinadi</p>
        </div>
      </div>
    </div>
  );
}

export default CombinedComponent;
