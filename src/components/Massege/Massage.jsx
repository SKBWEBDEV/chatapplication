// import ellipse from "../../../assets/ellipse.png";
// import { GoHome } from "react-icons/go";
// import { AiTwotoneMessage } from "react-icons/ai";
// import { FiSettings } from "react-icons/fi";
// import { ImExit } from "react-icons/im";

// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Slideber from "../Chatapplication/slideber/Slideber";
import Friends from "../Chatapplication/Friends";
import Chatting from "../Chatapplication/Chatting";

const Massage = () => {
  // const data = useSelector((state)=> (state?.user?.value))
  return (
    <div className="px-20">
      {/* <div className="bg-[#1E1E1E] w-[186px] h-[1050px] my-[35px] rounded-[20px]"> */}
        {/* <div>
          <img src="" alt="" className="px-[43px] py-[38px]" />
          <div className="text-white font-bold text-center">
            <p>{data?.displayName || data?.user.displayName}</p>
          </div>
        </div> */}

        <div className="flex gap-20">
          <Slideber/>
          <Friends/>
          <Chatting/>
        </div>



        {/* <div className="bg-[#1E1E1E] hover:bg-white relative w-[155px] text-white hover:text-black h-[89px] mt-[80px] ml-[30px] 

        rounded-tl-[20px] rounded-bl-[20px] transition-all duration-500">
          <Link to="/home"><GoHome className="w-[46px] absolute h-[43px] top-[25%] left-[35%] "/></Link>
          <span className="bg-[#1E1E1E] w-[8px] h-[86px] absolute top-[2%] right-[0%] rounded-tl-[25px] rounded-bl-[25px] shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></span>
        </div> */}

        {/* <div className="bg-[#1E1E1E] relative  w-[155px]  h-[89px] mt-[60px] ml-[30px] rounded-tl-[20px] 
        rounded-bl-[20px] hover:bg-white transition-all duration-500">
          <Link to="/msg"><AiTwotoneMessage className="w-[60px] h-[60px]  absolute top-[20%] left-[35%] " /></Link>
          
          <span className="bg-[#1E1E1E] w-[8px] h-[86px] absolute top-[2%] right-[0%] rounded-tl-[25px] rounded-bl-[25px] shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></span>
        </div>
        
        <div className="bg-[#1E1E1E] relative text-white hover:text-black  w-[155px]  h-[89px] mt-[60px] ml-[30px] rounded-tl-[20px] 
        rounded-bl-[20px] hover:bg-white transition-all duration-500">
          <FiSettings className="w-[60px] h-[60px]  absolute top-[20%] left-[35%] " />
          <span className="bg-[#1E1E1E] w-[8px] h-[86px] absolute top-[2%] right-[0%] rounded-tl-[25px] rounded-bl-[25px] shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></span>
        </div>


        <div className="bg-[#1E1E1E] relative text-white hover:text-black  w-[155px]  h-[89px] mt-[250px] ml-[30px] 
        rounded-tl-[20px] rounded-bl-[20px] hover:bg-white transition-all duration-500">
          <ImExit  className="w-[60px] h-[60px]  absolute top-[20%] left-[35%] cursor-pointer" />
          <span className="bg-[#1E1E1E] w-[8px] h-[86px] absolute top-[2%] right-[0%] rounded-tl-[25px] rounded-bl-[25px] 
          shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></span>
        </div> */}


      {/* </div> */}
    </div>
  )
}

export default Massage