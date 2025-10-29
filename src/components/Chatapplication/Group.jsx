import { BsThreeDotsVertical } from "react-icons/bs";
import friends from "../../assets/friends.png"
import friendsOne from "../../assets/friendsOne.png"
import friendsTwo from "../../assets/friendsTwo.png"
const Group = () => {
  return (
    <div>
      <div className="mt-[135px] w-[427px] h-[347px] bg-white rounded-[20px] 
      shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">


        <div className="py-[13px] px-[20px] font-third ">

          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">Group list</p>
            <span><BsThreeDotsVertical className="text-[#1E1E1E] font-bold"/></span>
          </div>

          <div className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
          border-w-[100px] ">
            <div className="mb-[10px]">
              <img src={friends} alt="" />
            </div>
            <div className="mb-[10px]">
              <h3 className="font-semibold text-[18px] text-[#000000]">Friends Reunion</h3>
              <h6 className="text-[#4D4D4DBF] font-medium">Hi Guys, Wassup!</h6>
            </div>
            <div className="mb-[10px]">
              <button className="px-[22px] bg-[#1E1E1E] text-white rounded-[5px] ">Join</button>
            </div>
          </div>



          <div className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
          border-w-[100px] ">
            <div className="mb-[10px]">
              <img src={friendsOne} alt="" />
            </div>
            <div className="mb-[10px]">
              <h3 className="font-semibold text-[18px] text-[#000000]">Friends Reunion</h3>
              <h6 className="text-[#4D4D4DBF] font-medium">Hi Guys, Wassup!</h6>
            </div>
            <div className="mb-[10px]">
              <button className="px-[22px] bg-[#1E1E1E] text-white rounded-[5px] ">Join</button>
            </div>
          </div>



          <div className="flex items-center justify-between mt-[17px] ">
            <div className="mb-[10px]">
              <img src={friendsTwo} alt="" />
            </div>
            <div className="mb-[10px]">
              <h3 className="font-semibold text-[18px] text-[#000000]">Friends Reunion</h3>
              <h6 className="text-[#4D4D4DBF] font-medium">Hi Guys, Wassup!</h6>
            </div>
            <div className="mb-[10px]">
              <button className="px-[22px] bg-[#1E1E1E] text-white rounded-[5px] ">Join</button>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Group