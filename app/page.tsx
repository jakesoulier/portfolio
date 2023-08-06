'use client'

// import React, { useState, useEffect, useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

export default function Home() {
  const [isDescriptionOnSecondPage, setDescriptionOnSecondPage] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const { scrollTop, clientHeight } = mainRef.current;
        setDescriptionOnSecondPage(scrollTop >= clientHeight);
      }
    };

    mainRef.current.addEventListener('scroll', handleScroll);

    return () => {
      mainRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <main ref={mainRef} className="bg_cream overflow-y-scroll snap-y snap-mandatory h-screen">

      {/* Page 1 */}
      <div className="snap-start h-screen flex flex-col justify-between">

        {!isDescriptionOnSecondPage && (
          // Description Section
          <div className="text-right font-bold p-32 text-5xl text_dark relative">
            <p className="mb-8">Hello World!</p>
            <p className="mb-16">
              I am <span className="text-rose-700">Jake Soulier</span>, a software developer<br/>
              that is looking to contribute to<br/>
              full-stack development
            </p>
            <a className="bg-rose-700 hover:bg_cream hover:text-rose-700 border-8 border-transparent hover:border-rose-700 text_cream rounded-full p-7" href="/resume">Resume</a>
          </div>
        )}

        {/* Image Section */}
        <Image
          src="/benchMan10.png"
          alt="Bench Jake With Backpack"
          width={550}
          height={300}
        />
      </div>

{/* Page 2 */}
<div className="snap-start h-screen bg_dark text-white">
  {isDescriptionOnSecondPage && (
    // Description Section
    <div className="text-right font-bold p-32 text-5xl text-transparent">
      

      {/* Making this a positioned element to control the z-index */}
      <div className="flex flex-col items-end">
        <p className="text-rose-700 -mb-8 mr-40 z-10 bg_dark p-3 rounded-full">Jake Soulier</p>
        <Image
        src="/meLeanFor.jpg"
        alt='Profile Pic'
        width={230}
        height={100}
        className='rounded-md -mt-24 z-0 border-8 border-rose-700'
        />
        <a className="bg-rose-700 hover:bg_dark  border-8 border-transparent hover:border-rose-700 text_cream rounded-b-3xl p-2 pt-5 -mt-4 w-[230px] text-4xl text-center" href="/resume">Resume</a>
      </div>
    </div>
    
  )}
  <p>Projects</p>
</div>



    </main>
  )
}


