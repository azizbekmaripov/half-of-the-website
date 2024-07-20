'use client';

import React, { useState } from 'react';

const AboutResult = () => {
  const [resultNumbers, setResultNumber] = useState([
    {
      name: "O'quv markazlar soni",
      number: 300,
    },
    {
      name: "Filiallar soni",
      number: 500,
    },
    {
      name: "Guruhlar soni",
      number: 7250,
    },
    {
      name: "O'quvchilar soni",
      number: 40000,
    },
  ]);

  return (
    <div className='about-result md:flex md:flex-col items-center justify-center mt-11 md:h-96 h-[35rem]'>
      <div className='text-center mb-8'>
        <h1 className='md:text-3xl text-2xl md:pt-0 pt-3 font-bold text-white leading-10'>Modme platformasi foydalanuvchilari <br /> raqamlarda</h1>
      </div>
      <div className='md:flex md:flex-row justify-center md:space-x-8 px-7 md:px-0 gap-y-6 grid grid-cols-2'>
        {resultNumbers.map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <h1 className='text-xl p-3 font-medium mb-3 text-white'>{item.name}</h1>
            <div className='w-[150px] h-32 bg-yellow-400 text-black text-4xl font-bold rounded-3xl flex items-center justify-center'>
              {item.number}<span>+</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutResult;
