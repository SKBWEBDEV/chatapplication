
import Reg from "../../assets/reg.png"

const Ragister = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-[50%] flex justify-end ">
          <div className="mr-[70px]">
            <h1 className="font-bold text-[34px] text-[#11175D] font-secondary">Get started with easily register</h1>
          <p className="text-[#808080] font-secondary text-[20px] font-normal">Free register and you can enjoy it</p>


          <div className="relative mt-[40px]">
            <input className=" py-[15px] pl-[65px] pr-[66px] w-[368px] font-secondary text-[20px] font-semibold 
            border-[#B8B8CE] rounded-[8px] border-3 text-[#11175D]" type="text" placeholder="Ladushing691@gmail.com "/>
            <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[55px] bg-white w-35 text-center tracking-[2px]">Email Address</p>
          </div>

           <div className="relative mt-[40px]">
            <input className=" py-[15px] pl-[65px] pr-[66px] w-[368px] font-secondary text-[20px] font-semibold 
            border-[#B8B8CE] rounded-[8px] border-3 text-[#11175D]" type="text" placeholder="Ladushing GTG "/>
            <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[45px] bg-white w-30 text-center tracking-[2px]">Ful name</p>
          </div>

           <div className="relative mt-[40px]">
            <input className=" py-[15px] pl-[65px] pr-[66px] w-[368px] font-secondary text-[20px] font-semibold 
            border-[#B8B8CE] rounded-[8px] border-3 text-[#11175D]" type="text" placeholder="Password "/>
            <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[45px] bg-white w-30 text-center tracking-[2px]">Password</p>
          </div>
           
           <div className="mt-[40px] ">
            <button className="text-[20px] w-[368px] bg-[#1E1E1E] rounded-full text-white py-[20px]  font-semibold font-secondary"><a href="">Sign up</a></button>
            <p className="mt-[30px] text-[#03014C] ml-22 text-[13px] font-primary font-normal">Already  have an account ? <span className="text-[#EA6C00]">Sign I n</span></p>
           </div>

          
          </div>
        </div>
        <div className="w-[50%] ">
          <img className="h-screen w-full object-cover" src={Reg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ragister