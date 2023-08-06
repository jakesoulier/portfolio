'use client'
import Image from "next/image"
import { useScrolled } from "./hooks/useScrolled"

export default function Home() {
  useScrolled();

  return(
<main className="bg_cream relative">

{/* Sticky Div */}
<div className="sticky top-0 right-0 z-10 font-bold text-right p-32 text-5xl text_dark">
    <p className="mb-8">Hello World!</p>
    <p>
        I am <span className="text-rose-700">Jake Soulier</span>, a software developer<br/> 
        that is looking to contribute to<br/> 
        full-stack development
    </p>
</div>

{/* Image Section */}
<div className="flex flex-col justify-end">
    <Image 
        src="/benchMan10.png"
        alt="Bench Jake With Backpack"
        width={550}
        height={300}
    />
</div>

{/* Projects Div */}
<div className="h-screen bg_dark text-white">
    <p>Projects</p>
</div>

</main>

  )
}

