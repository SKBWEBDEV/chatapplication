import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import one from "../../assets/one.png";
import { BsFillTriangleFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

const Chatting = () => {
  return (
    <div>
      <div
        className=" mt-[35px] w-[689px]  bg-white rounded-[20px] 
                  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-5">

                    
        <div className="py-[13px] px-[20px] font-third ">


          
            <div
              className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                      border-w-[100px] ">
              <div className="mb-[10px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={one} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    Swathi
                  </h3>
                  <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                    Online
                  </h6>
                </div>
              </div>
              <div className=" tont-semibold text-[15px]">
                <span>
                  <BsThreeDotsVertical className="text-[#1E1E1E] font-bold" />
                </span>
              </div>
            </div>


            <div className="px-2 overflow-y-scroll friend h-[451px]">
             <div className="relative">
              <div className="bg-[#F1F1F1] w-[194px] h-[50px] mt-[56px] text-center rounded-lg ">
              <p className="py-3">Hey There !</p>
            </div>
            <div className="absolute bottom-[-1px] left-[-9px]">
              <p className="text-[#F1F1F1]"><BsFillTriangleFill/></p>
            </div>

             </div>

              <div className="text-[12px] text-black/20 font-medium mt-3">
              <p>Today, 2:01pm</p>
            </div>


            
             <div className="relative">
              <div className="bg-[#F1F1F1] w-[194px] h-[50px] mt-[56px] text-center rounded-lg ">
              <p className="py-3">Hey There !</p>
            </div>
            <div className="absolute bottom-[-1px] left-[-9px]">
              <p className="text-[#F1F1F1]"><BsFillTriangleFill/></p>
            </div>

             </div>

              <div className="text-[12px] text-black/20 font-medium mt-3">
              <p>Today, 2:01pm</p>
            </div>


            
            <div className="flex justify-end">
  <div className="relative">
    <div className="mt-[56px] text-center rounded-lg mr-10 mb-5">
      <p className="py-3 bg-black text-white w-[194px] rounded-lg">Hello...!</p>
    </div>

    <div className="absolute bottom-[19px] right-[33px]">
      <p className="text-black">
        <BsFillTriangleFill />
      </p>
    </div>
  </div>

</div>

    <div className="text-[12px] text-black/20 font-medium mt-0 text-right mr-10">
    <p>Today, 2:01pm</p>
  </div>




  <div className="flex justify-end">
  <div className="relative">
    <div className="mt-[56px] text-center rounded-lg mr-10 mb-5">
      <p className="py-3 bg-black text-white px-5 rounded-lg">I am good  and hoew about you?</p>
    </div>

    <div className="absolute bottom-[19px] right-[33px]">
      <p className="text-black">
        <BsFillTriangleFill />
      </p>
    </div>
  </div>

</div>

    <div className="text-[12px] text-black/20 font-medium mt-0 text-right mr-10">
    <p>Today, 2:01pm</p>
  </div>
  



            <div className="relative">
              <div className="bg-[#F1F1F1] w-[500px]  mt-[56px] rounded-lg ">
              <p className="py-3 px-5">I am doing well. Can we meet up tomorrow?</p>
            </div>
            <div className="absolute bottom-[-1px] left-[-9px]">
              <p className="text-[#F1F1F1]"><BsFillTriangleFill/></p>
            </div>

             </div>

              <div className="text-[12px] text-black/20 font-medium mt-3">
              <p>Today, 2:01pm</p>
            </div>




             <div className="flex justify-end">
  <div className="relative">
    <div className="mt-[56px] text-center rounded-lg mr-10 mb-5">
      <p className="py-3 bg-black text-white px-5 rounded-lg">Sure!</p>
    </div>

    <div className="absolute bottom-[19px] right-[33px]">
      <p className="text-black">
        <BsFillTriangleFill />
      </p>
    </div>
  </div>

</div>

    <div className="text-[12px] text-black/20 font-medium mt-0 text-right mr-10">
    <p>Today, 2:01pm</p>
  </div>


<div className="relative">
    <div className="mt-[47px] border-b-2 border-black/20 ">
  </div>
  <div className="flex mt-10 items-center">
    <div className="mb-10">
    <input className="bg-[#F1F1F1]  w-[500px] px-5 py-1 h-[45px] text-end rounded-lg" type="text" placeholder=""/>
    <span className="absolute bottom-[50px] text-[#707070] text-[25px] right-[150px] "><MdEmojiEmotions/></span>
    <span className="absolute bottom-[50px] text-[#707070] text-[24px] right-[110px] "><FaCamera /></span>
  </div>
  <div className="mb-10">
    <p className="bg-black text-white  px-5 py-3 ml-5 rounded-lg"><BsFillSendFill/></p>
  </div>
  </div>
</div>











          </div>
        </div>


      </div>
    </div>
  );
};

export default Chatting;
