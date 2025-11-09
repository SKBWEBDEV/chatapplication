import React from "react";
import ellipse from "../../../assets/ellipse.png";
import { GoHome } from "react-icons/go";
import { AiTwotoneMessage } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Slideber = () => {
const dispatch = useDispatch()
const sakib = useSelector((state)=> state.user.value.user)
console.log(sakib);

  

  const auth = getAuth();
  const navigate = useNavigate();
  
  const logOut = () => {
    console.log("ok cool");
    signOut(auth)
      .then(() => {
        localStorage.clear("")
        dispatch(user(null))
        navigate("/login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <div className="bg-[#1E1E1E] w-[186px] h-[1050px] my-[35px] rounded-[20px]">
        <div>
          <img src={ellipse} alt="" className="px-[43px] py-[38px]" />
          <div className="text-white font-bold text-center">
            <p>{sakib?.displayName}</p>
          </div>
        </div>

        <div className="bg-black hover:bg-white relative w-[155px] text-white hover:text-black h-[89px] mt-[80px] ml-[30px] rounded-tl-[20px] rounded-bl-[20px] transition-all duration-500">
          <GoHome className="w-[46px] absolute h-[43px] top-[25%] left-[35%] "/>
          <span className="bg-[#1E1E1E] w-[8px] h-[86px] absolute top-[2%] right-[0%] rounded-tl-[25px] rounded-bl-[25px] shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></span>
        </div>

        <div className="bg-[#1E1E1E] relative  w-[155px]  h-[89px] mt-[60px] ml-[30px] rounded-tl-[20px] 
        rounded-bl-[20px] hover:bg-white transition-all duration-500">
          <AiTwotoneMessage className="w-[60px] h-[60px]  absolute top-[20%] left-[35%] " />
          <span className="bg-[#1E1E1E] w-[8px] h-[86px] absolute top-[2%] right-[0%] rounded-tl-[25px] rounded-bl-[25px] shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></span>
        </div>
        
        <div className="bg-[#1E1E1E] relative text-white hover:text-black  w-[155px]  h-[89px] mt-[60px] ml-[30px] rounded-tl-[20px] rounded-bl-[20px] hover:bg-white transition-all duration-500">
          <FiSettings className="w-[60px] h-[60px]  absolute top-[20%] left-[35%] " />
          <span className="bg-[#1E1E1E] w-[8px] h-[86px] absolute top-[2%] right-[0%] rounded-tl-[25px] rounded-bl-[25px] shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></span>
        </div>


        <div className="bg-[#1E1E1E] relative text-white hover:text-black  w-[155px]  h-[89px] mt-[250px] ml-[30px] rounded-tl-[20px] rounded-bl-[20px] hover:bg-white transition-all duration-500">
          <ImExit onClick={logOut} className="w-[60px] h-[60px]  absolute top-[20%] left-[35%] cursor-pointer" />
          <span className="bg-[#1E1E1E] w-[8px] h-[86px] absolute top-[2%] right-[0%] rounded-tl-[25px] rounded-bl-[25px] shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></span>
        </div>


      </div>
    </div>
  );
};

export default Slideber;
