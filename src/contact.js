import React from "react";
import { FiInstagram, FiYoutube ,FiTwitter} from "react-icons/fi";



const Contact = () => {
    return (

        <div name='reach' className="text-white py-16 px-4" >

            <div className=" border-2 max-w-sm  p-4 "> 
        
                <h1 className="text-3xl bold p-2 "> Reach Out to me</h1>
                <p className="text-xl p-2"><span className="bg-gray-500">Email id: Contact@numengaming.com </span></p>
                <div className="flex">
                <h1 className="p-2 text-3xl"><a href="https://www.instagram.com/harshi__12"><FiInstagram /></a> </h1>
                <h1 className="p-2 text-3xl"><a href="https://www.youtube.com/@harshi__12"><FiYoutube /></a> </h1>
                <h1 className="p-2 text-3xl"><a href="https://twitter.com/harshi__12"><FiTwitter /></a> </h1>

                
            </div>            
            
            </div>
            <br></br>
            <hr></hr>
            
        </div>
    )

}
export default Contact;