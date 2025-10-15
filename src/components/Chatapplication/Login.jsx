import Here from "../../assets/here.png"
import Google from "../../assets/google.png"
// import { Link } from "react-router-dom"
import { useState } from "react";
const Login = () => {

const [email,setEmail] = useState ("")
const [errorEmail,setErrorEmail] = useState ("")


  const [password,setPassword] = useState ("")
  const [passwordError,setPasswordError] = useState ("")

  const handleEmail = (event)=> {
    setEmail(event.target.value);
    setErrorEmail("")
  }

    const passwordUpdate = (event)=> {
    setPassword(event.target.value)
    setPasswordError("")
  }


 const signUp = ()=> {

  if (!email) {
    setErrorEmail("give your email"); 
  }else{
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)) {
      setErrorEmail('give yuor right email');
      
      
    }
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
    <div className="">
      <div className="md:flex items-center">
        <div className="md:w-[50%]  flex md:justify-end justify-center">
          <div className="md:mr-[180px]">
            <h1 className="font-bold text-[28px] md:text-[34px] text-[#11175D] font-secondary">Login to your account!</h1>
          
          <div className="flex rounded-[8px] gap-[10px] items-center mt-[29px] border-[#03014C]/20 border-2 w-[220px] md:py-[22px] px-5 md:px-[35px] py-5"> 
            <img src={Google} alt="" />
            <p className="text-[13px] font-semibold font-primary text-[#03014C]">Login with Google</p>
          </div>


          <div className="relative mt-[40px] border-b-3 border-[#B8B8CE]">
            <input className=" py-[15px]  md:pr-[66px] md:w-[368px] w-80 outline-0 font-secondary text-[20px] font-semibold 
               text-[#11175D]" type="text" 
               onChange={handleEmail}
               placeholder="Ladushing691@gmail.com "/>
            <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] 
            left-[-12px] bg-white w-35 text-center tracking-[2px]">Email Address</p>
            
          </div>
          <div>
            <p className="mt-5 bg-gray-600 text-white font-bold text-center md:w-[368px] w-80 rounded-[8px]">{errorEmail}</p>
          </div>

           <div className="relative mt-[40px] border-b-3 border-[#B8B8CE]">
            <input className=" py-[15px]  pr-[66px] md:w-[368px] w-80 outline-0 font-secondary text-[20px] font-semibold 
             text-[#11175D]" type="text" 
             onChange={passwordUpdate}
             placeholder="Password"/>
            <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] 
            left-[-20px] bg-white w-30 text-center tracking-[2px]">Password</p>
            
          </div>
          <div>
            <p className="mt-5 bg-gray-600 text-white font-bold text-center md:w-[368px] w-80 rounded-[8px]">{passwordError}</p>
          </div>
           
           
           <div className="mt-[40px] ">
            <button
            onClick={signUp}
            className="text-[20px] w-60 md:w-[368px] bg-[#1E1E1E] rounded-full text-white py-[20px]  font-semibold font-secondary"><a href="">Login to Continue</a></button>
            <p className="mt-[30px] text-[#03014C] md:ml-22 text-[16px] md:text-[13px] font-primary font-normal">
              Don’t have an account ?  <span className="text-[#EA6C00]">Sign I n</span></p>
           </div>

          
          </div> 
        </div>
        <div className="md:w-[50%] w-full ">
          <img className="h-screen w-full object-cover" src={Here} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login