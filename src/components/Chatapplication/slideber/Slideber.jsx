import React from 'react'
import ellipse from "../../../assets/ellipse.png"
import { GoHome } from "react-icons/go";
import { AiTwotoneMessage } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import vector from "../../../assets/vector.png"
const Slideber = () => {
  return (
    <div>


      <div className='bg-[#1E1E1E] w-[186px] h-[954px] my-[35px] rounded-[20px]'>
        <div>
          <img src={ellipse} alt="" className='px-[43px] py-[38px]'/>
        </div>

        <div className='bg-white relative w-[155px]  h-[89px] mt-[100px] ml-[30px] rounded-tl-[20px] rounded-bl-[20px]'>
          <GoHome className='w-[46px] absolute h-[43px] top-[25%] left-[35%]'/>
          <span className='bg-[#1E1E1E] w-[8px] h-[86px] absolute top-[2%] right-[0%] rounded-tl-[25px] rounded-bl-[25px] shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]'></span>
        </div>

        <div className='text-[] '> 
          <AiTwotoneMessage className='w-[60px] h-[60px] mt-[60px] ml-[70px]'/>
        </div>

        <div className='text-[#D8D8D8] '> 
          <FiSettings className='w-[50px] h-[50px] mt-[55px] ml-[75px]'/>
        </div>


        <div className='text-[#D8D8D8] '> 
          <img src={vector} alt="" className='w-[50px] h-[50px] mt-[250px] ml-[80px]'/>
        </div>

      </div>


    </div>
  )
}

export default Slideber