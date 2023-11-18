import React from "react";
import { FiInstagram, FiYoutube ,FiTwitter} from "react-icons/fi";



const Contact = () => {
    return (

        <div name='reach' className="bg-white py-2 px-4 " >
       
            <div className="  max-w-sm  p-10 lg:ml-20 mt-4"> 
        
                <h1 className="text-3xl bold p-2 "> Reach Out to me</h1>
                <p className="text-xl p-2"><span className="bg-red-200">Email id: Contact@numengaming.com </span></p>
                <div className="flex">
                <h1 className="p-2 text-3xl"><a href="https://www.instagram.com/harshi__12"><FiInstagram /></a> </h1>
                <h1 className="p-2 text-3xl"><a href="https://www.youtube.com/@harshi__12"><FiYoutube /></a> </h1>
                <h1 className="p-2 text-3xl"><a href="https://twitter.com/harshi__12"><FiTwitter /></a> </h1>

                
            </div>            
            
            </div>
            <br></br>
           
            
        </div>
    )

}
export default Contact;