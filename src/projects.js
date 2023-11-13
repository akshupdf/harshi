import React from 'react';
import a1 from './images/pop.jpg'
import chat1 from './images/pop1.jpg'
import lanka from './images/pop2.jpg'
import cart from './images/pop3.jpg'

const Project = () =>{

    return(

        <div name='project' className='text-white  italic'>
        <div className='flex w-[100%] mt-10 '>
            <div className='w-[15%] ml-20'>
            <h1 className='text-4xl mt-4'>About Me</h1>
            </div>
            <div className='w-[60%] text-xl'>
            <p>
            Hey there! I'm Harshita Shukla, diving headfirst into the gaming world on YouTube.
             You can catch me live streaming all our gaming adventures, and guess what? I'm proudly rocking
              the title of Content Creator at Godlike Esports right now.

My moment in the spotlight? Well, that happened during the first season of the gaming extravaganza, Playground. 
I was part of the awesome team alongside Carryminathi and Dare Dragon. Fun times and epic gaming – that's what I'm all about!
              </p>
            </div>
            
           
        </div>
            <div>
            <h1 className='text-3xl underline text-center p-8 '>Some Of My Popular Videos</h1>

            </div>
            <div className='grid sm:grid-cols-3 md:grid-cols-m gap-4 p-16 m-4 '>
                <div className='container p-4'>
                    <a href="https://www.youtube.com/watch?v=26HgZL01poc"><img src={a1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                   <a href="https://www.youtube.com/watch?v=cPir5QfPfSA"><img src={lanka} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                   <a href="https://www.youtube.com/watch?v=wVMQtuvOpGs"><img src={cart} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4 '>
                 <a href="https://www.youtube.com/watch?v=0eIFLfpUqTE">  <img src={chat1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>

         
        </div>
        <div className='w-[100%] text-center h-auto'>
        <a href="https://www.youtube.com/@harshi__12/videos" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Watch em All</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
            {/* <a href='https://www.youtube.com/@harshi__12/videos' className='border '>watch all</a> */}
        </div>
        </div>
        
    )
}

export default Project;
