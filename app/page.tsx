'use client'

// import React, { useState, useEffect, useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

// import CopyPhone from './copyPhone';
import CopyText from './copyText';
import Card from './card';

import {AiFillPhone, AiFillHtml5} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import { FaArrowAltCircleDown } from 'react-icons/fa'
import { BiLogoReact } from 'react-icons/bi'


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
                <FaArrowAltCircleDown 
                    size="2em"
                    className="hover-border"
                    style={{ display: 'inline-block'}}
                    onClick={() => { 
                        if (mainRef.current) {
                            // Set the scrollTop to scroll by the height of the viewport.
                            mainRef.current.scrollTop = mainRef.current.clientHeight;
                        }
                    }}
                />
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
            {/* Grid Layout */}
            <div className="snap-start h-screen bg_dark text-white grid grid-cols-[4fr,1fr] grid-rows-1 gap-0 font-bold text-5xl relative p-32">
                <div className='flex flex-col gap-5'>
                    <p className='w-full'>Projects</p>  
                    <div className='flex'>
                        <Card
                            languages={["React", "JavaScript", "HTML", "CSS"]}
                        />
                        {/* <Card />
                        <Card /> */}
                    </div>
                    
                    
                </div>
                {/* Name and Contact info */}
                {/* <div className='flex flex-col z-10 text-right'>
                    <p className="text-rose-700 bg_dark rounded-full p-3">Jake Soulier</p>
                    <div className='p-3 text-base text-center'>
                        <ul className=''>
                            <li className=''>
                                <CopyText copy = 'example@gmail.com'>
                                    <GrMail/>
                                </CopyText>
                            </li>
                            <li className='flex items-center justify-center space-x-2 py-2'>
                                <CopyText copy = '(801)111-1111'>
                                    <AiFillPhone/>
                                </CopyText>
                                
                            </li>
                        </ul>
                    </div>
                </div> */}
                {/* selfie */}
                <div className='flex flex-col items-start text-center'>
                {/* <div className='col-start-6 col-end-8 row-start-1 row-end-2 flex justify-center items-center text-center'> */}
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
                        <div className=''>Resume</div>
                    
                    </a>
                    <div className='text-base text-center' style={{ width: '246px' }}>
                        <CopyText copy = 'example@gmail.com'>
                            <GrMail/>
                        </CopyText>
                        <CopyText copy = '(801)111-1111'>
                            <AiFillPhone/>
                        </CopyText>
                    </div>
                </div>
                
        
            </div>
    </main>
  )
}


