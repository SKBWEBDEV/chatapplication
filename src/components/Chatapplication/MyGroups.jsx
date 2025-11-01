import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"
import { BsThreeDotsVertical } from "react-icons/bs";

const MyGroups = () => {
  return (
     <div>
           <div className="  w-[344px]  bg-white rounded-[20px] 
                 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
           
           
                   <div className="py-[13px] px-[20px] font-third ">
           
                     <div className="flex justify-between">
                       <p className="text-[20px] font-semibold">My Groups</p>
                       <span><BsThreeDotsVertical className="text-[#1E1E1E] font-bold"/></span>
                     </div>
           
           <div className="px-2 overflow-y-scroll mygroup h-[451px]">
            <div 
                     className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                     border-w-[100px] ">
                       
                       <div className="mb-[10px] flex items-center gap-6">
                         <div className="mb-[10px]">
                         <img src={one} alt="" />
                       </div>
                         <div>
                           <h3 className="font-semibold text-[14px] text-[#000000]">Raghav</h3>
                         <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">Dinner?</h6>
                         </div>
                       </div>
                       <div className="text-[#00000080] tont-semibold text-[10px]">
                         <p>Today, 8:56pm</p>
                       </div>
                     </div>
           
           
           
                     <div 
                     className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                     border-w-[100px] ">
                       
                       <div className="mb-[10px] flex items-center gap-6">
                         <div className="mb-[10px] relative">
                         <img src={two} alt="" />
                         <span className="bg-[#00FF75] w-[15px] h-[15px] absolute bottom-0 right-0 rounded-full border-3 border-white"></span>
                       </div>
                         <div>
                           <h3 className="font-semibold text-[14px] text-[#000000]">Swathi</h3>
                         <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">Sure!</h6>
                         </div>
                       </div>
                       <div className="text-[#00000080] tont-semibold text-[10px]">
                         <p>Today, 2:31pm</p>
                       </div>
                     </div>
           
           
           
                     <div 
                     className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                     border-w-[100px]">
                       
                       <div className="mb-[10px] flex items-center gap-6">
                         <div className="mb-[10px]">
                         <img src={three} alt="" />
                       </div>
                         <div>
                           <h3 className="font-semibold text-[14px] text-[#000000]">Kiran</h3>
                         <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">Hi.....</h6>
                         </div>
                       </div>
                      <div className="text-[#00000080] tont-semibold text-[10px]">
                         <p>Yesterday, 6:22pm</p>
                       </div>
                     </div>
     
     
     
                     <div 
                     className="flex items-center justify-between mt-[17px] ">
                       
                       <div className="mb-[10px] flex items-center gap-6">
                         <div className="mb-[10px]">
                         <img src={four} alt="" />
                       </div>
                         <div>
                           <h3 className="font-semibold text-[14px] text-[#000000]">Tejeshwini C</h3>
                         <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">I will call him today.</h6>
                         </div>
                       </div>
                       <div className="text-[#00000080] tont-semibold text-[10px]">
                         <p>Today, 12:22pm</p>
                       </div>
                     </div>


                     <div 
                     className="flex items-center justify-between mt-[17px] ">
                       
                       <div className="mb-[10px] flex items-center gap-6">
                         <div className="mb-[10px]">
                         <img src={four} alt="" />
                       </div>
                         <div>
                           <h3 className="font-semibold text-[14px] text-[#000000]">Tejeshwini C</h3>
                         <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">I will call him today.</h6>
                         </div>
                       </div>
                       <div className="text-[#00000080] tont-semibold text-[10px]">
                         <p>Today, 12:22pm</p>
                       </div>
                     </div>


                     <div 
                     className="flex items-center justify-between mt-[17px] ">
                       
                       <div className="mb-[10px] flex items-center gap-6">
                         <div className="mb-[10px]">
                         <img src={four} alt="" />
                       </div>
                         <div>
                           <h3 className="font-semibold text-[14px] text-[#000000]">Tejeshwini C</h3>
                         <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">I will call him today.</h6>
                         </div>
                       </div>
                       <div className="text-[#00000080] tont-semibold text-[10px]">
                         <p>Today, 12:22pm</p>
                       </div>
                     </div>


                     
                     <div 
                     className="flex items-center justify-between mt-[17px] ">
                       
                       <div className="mb-[10px] flex items-center gap-6">
                         <div className="mb-[10px]">
                         <img src={four} alt="" />
                       </div>
                         <div>
                           <h3 className="font-semibold text-[14px] text-[#000000]">Tejeshwini C</h3>
                         <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">I will call him today.</h6>
                         </div>
                       </div>
                       <div className="text-[#00000080] tont-semibold text-[10px]">
                         <p>Today, 12:22pm</p>
                       </div>
                     </div>
           
           </div>
                     
                   </div>
           
           
                 </div>
         </div>
  )
}

export default MyGroups