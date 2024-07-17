'use client';

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className='video-player m-auto py-10 md:w-full w-full relative'>
      <div className='text-center m-auto justify-center md:w-[950px]'>
        <h1 className='text-yellow-400 text-4xl font-bold'>Modme CRM va LMS</h1>
        <p className='md:text-3xl text-xl md:px-0 px-4 py-8 text-white'>Biz 2020-yildan boshlab o`z faoliyatimizni olib boryapmiz. Ushbu davrda O`zbekistondagi Top-o`quv markazlarni avtomatlashtirish orqali ularning rivojlanishiga o`z hissamizni qo`shishga ulgurdik.</p>
      </div>

      <div className='video-wrapper' style={{ position: 'relative', paddingTop: '35.25%', width: '90%', height: "42vh", maxWidth: '980px', margin: 'auto' }}>
        <ReactPlayer
          className="video"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          url='https://youtu.be/RmiwR3QahIQ?si=QHkZ0Ty50tEX9HOR'
          playing={false}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                controls: 1
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
