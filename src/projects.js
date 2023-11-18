import React from 'react';
import a1 from './images/pop.jpg'
import chat1 from './images/pop1.jpg'
import lanka from './images/pop2.jpg'
import cart from './images/pop3.jpg'
import bio from './images/harsh1.jpg'
import headphone from './images/headphone.png'
import content from './images/content-creator.png'


const Project = () =>{

    return(

        <div name='project' className='text-white  italic'>
        
        <div className='w-[100%] lg:h-[50vh] lg:flex bg-white text-black'>
    <div className=' lg:w-[50%]  '>
    <div className='w-[40vh] h-[40vh] mx-auto mt-10 rounded-xl text-center  shadow-2xl shadow-pink-300 cursor-pointer'>
    <img src={content} alt="" className='lg:ml-15 inline-block lg:p-4' />
    <h1 className='lg:text-2xl font-bold mt-2'>CONTENT CREATOR</h1>
    <p className='italic mt-4'>Harshita Shukla's gaming streams are a captivating fusion of virtual 
    enchantment and personalized entertainment, meticulously crafted to captivate every viewer in the gaming realm..</p>
    </div>
    </div>
    <div className=' lg:w-[50%]'>
    <div className='w-[40vh] h-[40vh] mx-auto mt-10 rounded-xl text-center  shadow-2xl shadow-pink-300 cursor-pointer'>
    <img src={headphone} alt="" className='lg:ml-15 p-4 inline ' />
    <h1 className='lg:text-2xl font-bold mt-2'>LIVE STREAMER</h1>
    <p className='italic mt-4'>With her captivating personality  
    she brings her enchanting performances to audiences around the world through live streaming platforms.</p>
    </div>
    </div>
    </div>
        <div className="mx-auto  overflow-y-scroll bg-cover bg-fixed  bg-no-repeat shadow-lg sm:w-80 lg:w-[100%]" style={{backgroundImage :   `url(${bio})` }}>
            <div>
            <h1 className='text-3xl underline text-center p-8 '>Some Of My Popular Videos</h1>

            </div>
            <div className='grid sm:grid-cols-3 md:grid-cols-m gap-4 lg:p-16 m-4 '>
                <div className='container p-4'>
                    <a href="https://www.youtube.com/watch?v=26HgZL01poc" target="_blank" rel="noreferrer" ><img src={a1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                   <a href="https://www.youtube.com/watch?v=cPir5QfPfSA" target="_blank" rel="noreferrer"><img src={lanka} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                   <a href="https://www.youtube.com/watch?v=wVMQtuvOpGs" target="_blank" rel="noreferrer"><img src={cart} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4 '>
                 <a href="https://www.youtube.com/watch?v=0eIFLfpUqTE" target="_blank" rel="noreferrer">  <img src={chat1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4  text-center border border-white rounded-2xl'>
                 {/* <a href="https://www.youtube.com/watch?v=0eIFLfpUqTE">  <img src={chat1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a> */}
                 <a href="https://www.youtube.com/@harshi__12/videos" target="_blank" rel="noreferrer" className="relative inline-block text-lg group mt-20" >
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-200 group-hover:-rotate-180 ease"></span>
<span class="relative">Watch em All</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
                </div>


         
        </div>
        </div>
        <div className='w-[100%] text-center h-auto'>
        
            {/* <a href='https://www.youtube.com/@harshi__12/videos' className='border '>watch all</a> */}
        </div>
        </div>
        
    )
}

export default Project;
