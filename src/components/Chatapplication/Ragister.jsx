
import { useState } from "react";
import Reg from "../../assets/reg.png"

const Ragister = () => {

  const [email,setEmail] = useState ("")
  const [errorEmail,setErrorEmail] = useState ("")


  const [name,setName] = useState ("")
  const [errorName,setErrorName] = useState ("")


  const [password,setPassword] = useState ("")
  const [passwordError,setPasswordError] = useState ("")



  const handleEmail = (event)=> {
    setEmail(event.target.value);
    setErrorEmail("")
  }

  const nameUpdate = (event)=> {
    setName(event.target.value);
    setErrorName("")
  }

  const passwordUpdate = (event)=> {
    setPassword(event.target.value)
    setPasswordError("")
  }


 const signUp = ()=> {
  console.log(email);
  console.log(name);
  console.log(password);
  
  
  

  if (!email) {
    setErrorEmail("give your email"); 
  }else{
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)) {
      setErrorEmail('give yuor right email');
      
      
    }
  }
  if(!name){
    setErrorName("give your name")
  }
  if(!password){
    setPasswordError("give your password")
  }else{
    if (!/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/.test(password)) {
      setPasswordError("at least one lowercase,one uppercase letter,one digit,one special characte,at least 8 characters long")
    }
  }
 }






  
  return (
    <div>
      <div className="md:flex md:items-center ml-4 md:ml-0">
        <div className="md:w-[50%] flex justify-end ">
          <div className="md:mr-[70px]">
            <h1 className="font-bold text-[34px] text-[#11175D] font-secondary">Get started with easily register</h1>
          <p className="text-[#808080] font-secondary text-[20px] font-normal">Free register and you can enjoy it</p>


          <div className="relative mt-[40px]">
            <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[55px] bg-white w-35 text-center tracking-[2px]">Email Address</p>
            <input className=" py-[15px] pl-[65px] outline-0 pr-[66px] w-[368px] font-secondary text-[20px] font-semibold 
            border-[#B8B8CE] rounded-[8px] border-3 text-[#11175D]" type="email"
            onChange={handleEmail}
            value={email}
            placeholder="Ladushing691@gmail.com "/>

            <p className="mt-3 bg-gray-600 text-white font-bold text-center w-[368px] px-5 rounded-[8px]">{errorEmail}</p>
            
          </div>

           <div className="relative mt-[40px]">
            <input className=" py-[15px] pl-[65px] pr-[66px] outline-0 w-[368px] font-secondary text-[20px] font-semibold 
            border-[#B8B8CE] rounded-[8px] border-3 text-[#11175D]" type="text"
            onChange={nameUpdate}
            value={name}
            placeholder="Ladushing GTG "/>
            <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[45px] bg-white w-30 text-center tracking-[2px]">Ful name</p>
              <p className="mt-3 bg-gray-600 text-white font-bold text-center w-[368px] px-5 rounded-[8px]">{errorName}</p>

          </div>

           <div className="relative mt-[40px]">
            <input className=" py-[15px] pl-[65px] outline-0 pr-[66px] w-[368px] font-secondary text-[20px] font-semibold 
            border-[#B8B8CE] rounded-[8px] border-3 text-[#11175D]" type="text"
            onChange={passwordUpdate}
            placeholder="Password "/>
            <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[45px] bg-white w-30 text-center tracking-[2px]">Password</p>

            <p className="mt-3 bg-gray-600 text-white font-bold text-center w-[368px] px-5 rounded-[8px]">{passwordError}</p>
          </div>
           
           <div className="mt-[40px] ">
            <button
            onClick={signUp} className="text-[20px] outline-0 w-[368px] bg-[#1E1E1E] rounded-full text-white py-[20px]  font-semibold font-secondary cursor-pointer"><a href="#">Sign up</a></button>
            <p className="mt-[30px] text-[#03014C] ml-22 text-[13px] font-primary font-normal">Already  have an account ? <span className="text-[#EA6C00]">Sign I n</span></p>
           </div>

          
          </div>
        </div>
        <div className="md:w-[50%] mr-4">
          <img className="h-screen w-full object-cover" src={Reg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ragister