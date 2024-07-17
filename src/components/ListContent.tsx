"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Image1 from "../assets/images/1.png";
import Image2 from "../assets/images/2.png";
import Image3 from "../assets/images/3.png";
import Image4 from "../assets/images/4.png";

const ListContent = () => {
  const [listCards, setListCards] = useState([
    {
      id: 1,
      name: 'MARKETING',
      text: 'Platform﻿a yordamida marketing bo`limini avtomatlashtirishingiz va samaradorligini oshirishingiz, konversiyani o`lchashingiz mumkin',
      img: Image1
    },  
    {
      id: 2,
      name: 'MOLIYA',
      text: 'Moliya bo`limida barcha to`lovlar, xarajatlar va oylik ish haqi hamda qarzdorliklarning hisob-kitobi avtomatik amalga oshiriladi',
      img: Image2
    },
    {
      id: 3,
      name: 'SOTUV',
      text: 'Platforma yordamida sizga kelib tushayotgan so`rovlarni bir joyga yig`ishingiz, ularga tez va sifatli aloqaga chiqishingiz mumkin',
      img: Image3
    },
    {
      id: 4,
      name: 'XIZMAT KO`RSATISH',
      text: 'Siz doimiy mijozlaringiz bilan kunlik aloqani yaxshilash, sms-xabarlar yuborish va ko`plab xizmatlar ko`rsatishingiz mumkin.',
      img: Image4
    },
  ]);

  return (
    <div className='flex flex-col md:mx-28 mx-5 items-center mt-8 m-auto bg-white'>
      <div className='md:flex flex-1 justify-center'>
        {listCards.map((card) => (
          <div key={card.id} className='m-4 p-4 text-center'>
            <Image src={card.img} alt={card.name} className='mt-4 m-auto md:w-28 md:h-28 w-24 h-24' />
            <h1 className='text-2xl py-5 font-bold'>{card.name}</h1>
            <p className='mt-2'>{card.text}</p>
          </div>
        ))}
      </div>  
      <button type="submit" className='md:w-96 w-60 py-4 bg-yellow-400 font-[600] text-black rounded-2xl mt-8 md:text-2xl text-xl border-solid border-2 border-black'>NARXLARNI BILISH</button>
    </div>
  );
}

export default ListContent;
