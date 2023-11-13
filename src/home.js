import React from "react";
import bio from './images/bio.jpg'

const Home = () => {
    return (

        <div className="mx-auto  overflow-y-scroll bg-cover bg-fixed  bg-no-repeat shadow-lg sm:w-80 lg:w-[100%]" style={{backgroundImage :   `url(${bio})` }}>
        <div className="mt-40 h-[80vh]">
            <h1 className=" lg:text-7xl sm:text-6xl  drop-shadow-2xl  italic text-white stroke-cyan-500 ">Harshita Shukla</h1>
        </div>

        </div> 
    )

}
export default Home;