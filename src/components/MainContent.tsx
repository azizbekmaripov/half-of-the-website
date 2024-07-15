"use client"

import { useState } from 'react';


const MainContent = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className='main-content text-start justify-center m-auto py-10 relative flex px-28'>
      <div className="text-white">
        <h1 className='text-5xl font-bold mb-4 ml-28'>Modme CRM - ta'lim markazlarni tizimlashtirish platformasi</h1>
        <p className='text-2xl mb-8 ml-28'>Markazingizni tizimlashtirish vaqti keldi!</p>
      </div>
      <div className='form-container max-w-md mx-auto'>
        <form action="#" method="post" className='flex flex-col gap-4 w-80'>
          <div className=''>
            <h1 className='text-yellow-400 text-2xl font-bold'>Demoga so'rov qoldiring</h1>
            <p className='text-center text-white w-[310px] text-sm'>va Modme haqida batafsil <strong>PREZINTATSIYAGA</strong> ega bo`ling!</p>
          </div>
          <input
            type="text"
            name="name"
            placeholder={focusedInput === 'name' ? '' : "Ismingiz"}
            onFocus={() => setFocusedInput('name')}
            onBlur={() => setFocusedInput(null)}
            className='p-3 border border-gray-300 rounded-xl'
          />
          <input
            type="text"
            name="center-name"
            placeholder={focusedInput === 'center-name' ? '' : "O'quv markazingiz nomi"}
            onFocus={() => setFocusedInput('center-name')}
            onBlur={() => setFocusedInput(null)}
            className='p-3 border border-gray-300 rounded-xl'
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder={focusedInput === 'phoneNumber' ? '' : "Telefon raqamingiz"}
            onFocus={() => setFocusedInput('phoneNumber')}
            onBlur={() => setFocusedInput(null)}
            className='p-3 border border-gray-300 rounded-xl'
          />
          <input
            type="text"
            name="telegram-handle"
            placeholder={focusedInput === 'telegram-handle' ? '' : "Telegram manzilingiz"}
            onFocus={() => setFocusedInput('telegram-handle')}
            onBlur={() => setFocusedInput(null)}
            className='p-3 border border-gray-300 rounded-xl'
          />
          <button type="submit" className='p-3 bg-yellow-400 font-[600] text-black rounded-2xl '>DEMO OLISH </button>
        </form>
        <p className='text-sm text-white text-center mt-4 w-80'>Sizning barcha ma'lumotlaringiz xavfsizligi qonun doirasida himoya qilinadi</p>
      </div>
    </div>
  );
}

export default MainContent;
