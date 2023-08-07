'use client'

// import React, { useState, useEffect, useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import {GrMail} from 'react-icons/gr'
import CopyPhone from './copyPhone';
import CopyEmail from './copyEmail';

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
        <div className='snap-start h-screen bg_dark text-white'>
            <div className="grid grid-cols-6 grid-rows-2 gap-0 font-bold text-5xl relative p-32">
                <div className='col-span-4 row-span-2'>
                    <p>Projects</p>
                </div>
                <div className='col-start-5 col-end-6 row-start-1 row-end-2 flex flex-col -mr-20 mt-8 z-10 text-right'>
                    <p className="text-rose-700 bg_dark rounded-full p-3">Jake Soulier</p>
                    <div className='p-3 text-base text-center'>
                        {/* <p>contacts</p> */}
                        <ul className=''>
                            <li className=''>
                                <CopyEmail />
                                {/* <span>test@gmail.com</span> */}
                                {/* <GrMail/> */}
                            </li>
                            <li className='flex items-center justify-center space-x-2 py-2'>
                                <CopyPhone />
                                
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-start-6 col-end-8 row-start-1 row-end-2 flex justify-center items-center text-center'>
                    <a className="bg-rose-700 hover:bg_dark border-8 border-rose-700 text_cream rounded-3xl" href="/resume">
                        <div className='rounded-t-2xl border-rose-700'>
                            <Image
                                src="/meLeanFor.jpg"
                                alt='Profile Pic'
                                width={230}
                                height={100}
                                className='rounded-t-xl border-b-8 border-rose-700'
                            />
                        </div>
                        <span className=''>Resume</span>
                    
                    </a>
                </div>
        
            </div>
        </div>
    </main>
  )
}


