import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import one from "../../assets/one.png";
import { BsFillTriangleFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getDatabase, push, ref, set } from "firebase/database";
import { onValue } from "firebase/database";

import moment from "moment"

import EmojiPicker from 'emoji-picker-react';


const Chatting = () => {

  const db = getDatabase();

  const currentUser = useSelector ((state)=> (state.massageus.value))
  const data = useSelector((state) => state.user.value.user);
  console.log(currentUser);
  
  console.log(data);

  const [msg, setMsg] = useState("");


const handleMsg = (event) => {
  setMsg(event.target.value);
};


const handleMsge = () => {
  console.log(msg);

  set(push(ref(db, "massage/")), {
    senderId: data.uid,
    senderName: data.displayName,
    reciverId: currentUser.id,
    reciverName: currentUser.name,
    msg: msg,
    time: moment().format("MMMM Do YYYY, h:mm:ss a"),
  });

  setMsg(""); 
};

  const msgRef = ref(db,"massage/")
  const [massage,setMassage] = useState ([])

  useEffect(()=> {
    onValue(msgRef,(snapshot)=> {
    let arr = []
    snapshot.forEach((item)=> {
      if (
        (data.uid == item.val().senderId && currentUser?.id == item.val().reciverId)
        || 
        ( data.uid == item.val().reciverId && currentUser?.id == item.val().senderId )
      )
      
      arr.push(item.val())
    })
    setMassage(arr)
  })
  },[currentUser?.id])
  console.log(massage);
  



  
    const [emoji,setEmoji] = useState (false)


    const hanldeEmoji = (emoj)=> {
      setMsg((okey)=> okey + emoj.emoji)
    }

  

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
                 {
                   currentUser?.name
                 }

                </h3>
                <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                  Online
                </h6>
              </div>
            </div>
            <div className=" tont-semibold text-[15px]">
              <span>
                <BsThreeDotsVertical className="text-[#1e1e1e80] font-bold" />
              </span>
            </div>
          </div>

          <div className="px-2 overflow-y-scroll friend h-[451px]">
            



            <div className="">
              <div className="relative">
                <div className="mt-[56px] text-center rounded-lg mr-10 mb-5">
                  
                   {
                    massage.map((user)=> (
                      data.uid == user.senderId ? 
                      <div>
            <div className="flex justify-end">
              <div className="relative">
                <div className="mt-[56px] text-center rounded-lg mr-10 mb-5">
                  <p className="py-3 bg-black text-white px-5 rounded-lg">
                    {
                      user.msg
                    }
                  </p>
                </div>

                <div className="absolute bottom-[19px] right-[33px]">
                  <p className="text-black">
                    <BsFillTriangleFill />
                  </p>
                </div>
              </div>
            </div>

            <div className="text-[12px]  font-medium mt-0 text-right mr-10">
              <p>
                {user.time}
              </p>
            </div>     
             </div> 
             : 
             <div>
              <div className="relative">
              <div className="bg-[#F1F1F1] w-[194px] h-[50px] mt-[56px] text-center rounded-lg ">
                <p className="py-3">
                  {
                    user.msg
                  }
                </p>
              </div>
              <div className="absolute bottom-[-1px] left-[-9px]">
                <p className="text-[#F1F1F1]">
                  <BsFillTriangleFill />
                </p>
              </div>
            </div>

            <div className="text-[12px]  font-medium mt-3">
              <p className="text-red-700">
                {user.time}
              </p>
            </div>
              </div>
                    ))
                   }
                  
                </div>

                
              </div>
            </div>



          </div>


          <div className="relative">
            
              <div className="absolute bottom-[150px] left-60">
                {
                  emoji && 
            <EmojiPicker onEmojiClick={hanldeEmoji}/>
                }
              </div>
            
            <div className="mt-[47px] border-b-2 border-black/20 "></div>
            <div className="flex mt-10 items-center">

              <div className="mb-10">
                <input
                  onChange={handleMsg}
                  value={msg}
                  className="bg-[#F1F1F1] outline-0 w-[500px] px-25 py-1 h-[45px]  rounded-lg"
                  type="text"
                  placeholder=""/>
                <span 
                onClick={(e)=> setEmoji (!emoji)}
                className="absolute bottom-[50px] text-[#707070] text-[25px] right-[170px] cursor-pointer">

                  <MdEmojiEmotions />
   
                </span>
                <span className="absolute bottom-[50px] text-[#707070] text-[24px] right-[130px] ">
                  <FaCamera />
                </span>
              </div>

              <div className="mb-10">
                <p 
                onClick={handleMsge}
                className="bg-black text-white  px-5 py-3 ml-5 rounded-lg cursor-pointer">
                  <BsFillSendFill />
                </p>
              </div>


            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Chatting;
