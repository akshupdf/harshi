import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu}  from 'react-icons/ai'
import {Link} from 'react-scroll'




const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleNav = () => { setNav(!nav); }

  const handleClose =()=> setNav(!nav)
  


  return (
<div className='w-screen flex justify-between items-center fixed  h-24 max-w-[1500px] '>
  

  <h1 className='w-auto text-3xl font-bold  text-white'>Harshi </h1>



      <ul className='hidden md:flex cursor-pointer'>
        <li className='p-2 bg-white rounded-xl h-10 m-2'><Link to="home" smooth={true} offset={50} duration={500} > Home</Link> </li>
        <li className='p-2 bg-white rounded-xl h-10 m-2'><Link to="project" smooth={true} offset={50} duration={500} > Popular</Link></li>
        <li className='p-2 bg-white rounded-xl h-10 m-2'><Link to="hobbies" smooth={true} offset={50} duration={500} > Hobbies</Link></li>
        <li className='p-2 bg-white rounded-xl h-10 m-2'><Link to="reach" smooth={true} offset={50} duration={500} > Reach Out</Link></li>
      </ul>
     

    <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
    </div>       
    <div className={nav ? 'fixed left-0 top-8 w-[60%] bg-black  h-full border-r border-r-gray-900 bg-gray-[#808080] ease-in-out duration-500' : 'fixed left-[-100%]'}>

    <h1 className='w-full text-3xl font-bold  text-[#808080]'>Harshi </h1>

   
      <ul className=  ' pt-10'>
      <li className='p-4 border-b border-[#808080]'><Link onClick={handleClose} to="home" smooth={true} offset={50} duration={500} > Home</Link></li>
        <li className='p-4 border-b border-[#808080]'><Link onClick={handleClose} to="project" smooth={true} offset={50} duration={500} > Popular</Link></li>
        <li className='p-4 border-b border-[#808080]'><Link onClick={handleClose} to="hobbies" smooth={true} offset={50} duration={500} > Hobbies</Link></li>
        <li className='p-4 border-b border-[#808080]'><Link onClick={handleClose} to="reach" smooth={true} offset={50} duration={500} > Reach Out</Link></li>
      </ul>
    </div>
    </div>
  
  );
}

export default Navbar;
