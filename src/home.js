import React from "react";
import bio from './images/test1.jpeg'

const Home = () => {
    return (
        <div>
        <div className="mx-auto hidden md:inline-block overflow-y-scroll bg-cover bg-fixed  bg-no-repeat shadow-lg sm:w-80 lg:w-[100%]" style={{backgroundImage :   `url(${bio})` }}>
        <div className="mt-40 h-[80vh]">
            {/* <h1 className=" lg:text-5xl ml-10 italic sm:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text animate-neon ">Harshita Shukla</h1> */}
        </div>
        </div>
        <div className="h-[60vh] lg:hidden">
        <img src={bio} alt="" className="pt-40"/>

        </div>
        </div> 
    )

}
export default Home;