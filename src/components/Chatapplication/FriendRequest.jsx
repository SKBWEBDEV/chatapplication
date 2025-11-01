import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";
import { BsThreeDotsVertical } from "react-icons/bs";

const FriendRequest = () => {
  return (
    <div>
      <div
        className=" mt-[25px] w-[430px]  bg-white rounded-[20px] 
                    shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
        <div className="py-[13px] px-[20px] font-third ">
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">Friend  Request</p>
            <span>
              <BsThreeDotsVertical className="text-[#1E1E1E] font-bold" />
            </span>
          </div>



          <div className="px-2 overflow-y-scroll h-[430px] friendrequest">
            <div
            className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                        border-w-[100px] ">
            <div className="mb-[0px] flex items-center gap-6">
              <div className="mb-[10px]">
                <img src={one} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[14px] text-[#000000]">
                  Raghav
                </h3>
                <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                  Dinner?
                </h6>
              </div>
            </div>
            <div className="mb-[10px]">
              <button className="px-[22px] bg-[#1E1E1E] text-white rounded-[5px] ">
                Accept
              </button>
            </div>
          </div>




          <div
            className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                        border-w-[100px] ">
            <div className="mb-[0px] flex items-center gap-6">
              <div className="mb-[10px]">
                <img src={two} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[14px] text-[#000000]">
                  Swathi
                </h3>
                <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                  Sure!
                </h6>
              </div>
            </div>
            <div className="mb-[10px]">
              <button className="px-[22px] bg-[#1E1E1E] text-white rounded-[5px] ">
                Accept
              </button>
            </div>
          </div>



          <div
            className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                        border-w-[100px]">
            <div className="mb-[0px] flex items-center gap-6">
              <div className="mb-[10px]">
                <img src={three} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[14px] text-[#000000]">
                  Kiran
                </h3>
                <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                  Hi.....
                </h6>
              </div>
            </div>
            <div className="mb-[10px]">
              <button className="px-[22px] bg-[#1E1E1E] text-white rounded-[5px] ">
                Accept
              </button>
            </div>
          </div>



          <div
           className="flex items-center justify-between mt-[17px] ">
            <div className="mb-[0px] flex items-center gap-6">
              <div className="mb-[10px]">
                <img src={four} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[14px] text-[#000000]">
                  Tejeshwini C
                </h3>
                <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                  I will call him today.
                </h6>
              </div>
            </div>
            <div className="mb-[10px]">
              <button className="px-[22px] bg-[#1E1E1E] text-white rounded-[5px] ">
                Accept
              </button>
            </div>
          </div>
          

          <div
           className="flex items-center justify-between mt-[17px] ">
            <div className="mb-[0px] flex items-center gap-6">
              <div className="mb-[10px]">
                <img src={four} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[14px] text-[#000000]">
                  Tejeshwini C
                </h3>
                <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                  I will call him today.
                </h6>
              </div>
            </div>
            <div className="mb-[10px]">
              <button className="px-[22px] bg-[#1E1E1E] text-white rounded-[5px] ">
                Accept
              </button>
            </div>
          </div>


          <div
           className="flex items-center justify-between mt-[17px] ">
            <div className="mb-[0px] flex items-center gap-6">
              <div className="mb-[10px]">
                <img src={four} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[14px] text-[#000000]">
                  Tejeshwini C
                </h3>
                <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                  I will call him today.
                </h6>
              </div>
            </div>
            <div className="mb-[10px]">
              <button className="px-[22px] bg-[#1E1E1E] text-white rounded-[5px] ">
                Accept
              </button>
            </div>
          </div>


          <div 
          className="flex items-center justify-between mt-[17px] ">
            <div className="mb-[0px] flex items-center gap-6">
              <div className="mb-[10px]">
                <img src={four} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[14px] text-[#000000]">
                  Tejeshwini C
                </h3>
                <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                  I will call him today.
                </h6>
              </div>
            </div>
            <div className="mb-[10px]">
              <button className="px-[22px] bg-[#1E1E1E] text-white rounded-[5px] ">
                Accept
              </button>
            </div>
          </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
