import React from 'react'
import OurHistory from '../components/About/OurHistory'
import Leadership from "../components/About/Leadership";
import Department from "../components/About/Department";
import MissionScreen from "../components/MissionScreen";
import AnimatedSection from '../components/About/OurHistory'


// src/pages/About.js
export default function About() {
  return (
       <main>
            <div>

<section class="container-max section-padding">
  <div
    class=" flex items-center justify-center px-3 lg:px-10 py-[3rem]  pattern max-w-[1480px] mx-auto"
  >
    <div class="basis-1/4 hidden lg:flex justify-center rounded">
      <img src="department/1.png" alt="" class="rounded-md" />
    </div>
    <div
      class="lg:basis-1/2 flex flex-col gap-8 items-center text-center lg:w-[100%]"
    >
      
    </div>
    <div class="basis-1/5 hidden lg:flex justify-center rounded">
      <img src="department/2.png" alt="" class="rounded-md" />
    </div>
  </div>



  <div
    class=" flex items-center justify-center"
  >
  
    <div className="text-3xl md:text-4xl font-medium text-primary-dark lg:basis-1/2  text-center"
    >
      By connecting the Word to the world, we see transformed lives, stronger families, and communities renewed in Christ.
    </div>

  </div>
 
  <div
    class=" flex items-center justify-center px-3 lg:px-10 py-[5rem] pattern max-w-[1480px] mx-auto"
  >
    <div class="basis-1/5 hidden lg:flex justify-center rounded">
      <img src="department/3.png" alt="" class="rounded-md" />
    </div>
    <div
      class="lg:basis-1/2 flex flex-col gap-8 items-center text-center lg:w-[80%]"
    >
      
      
    </div>
    <div class="basis-1/4 hidden lg:flex justify-center rounded">
      <img src="department/4.png" alt="" class="rounded-md" />
    </div>
  </div>

  <div
    class="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-6 px-6 lg:px-20 py-[5rem] pattern max-w-[1480px] mx-auto animate__animated animate__zoomIn"
  >
    <div class="space-y-8">
      <div class="flex flex-col md:flex-row md:items-start">
        <div class="md:w-1/4 font-semibold text-xl text-gray-800 mb-2 md:mb-0">
          Our Mission
        </div>
        <div class="md:w-3/4 text-2xl text-gray-700">
          To raise a generation that bridges gaps in society by redirecting hearts back to God.
        </div>
      </div>

      <hr class="border-t-2 border-gray-300 my-2" />

      <div class="flex flex-col md:flex-row md:items-start">
        <div class="md:w-1/4 font-semibold text-xl text-gray-800 mb-2 md:mb-0">
          Our Vision
        </div>
        <div class="md:w-3/4 text-2xl text-gray-700">
          A thriving community of servant-leaders influencing every sphere—business, arts, government, technology—for His glory.
        </div>
      </div>
    </div>

    <div class="h-full flex items-center justify-center">
      <img src="/gallery/bridge1.png" alt="Bridge" class="max- h-auto" />
    </div>
  </div>
</section>


<OurHistory/>

<Leadership/>

<Department/>

<MissionScreen />

     </div>
       </main>
  )
}
