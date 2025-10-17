import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router";

const Forgote = () => {

const auth = getAuth();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleemail = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleForgote = ()=> {
    if (!email) {
      setEmailError("currect email requerd")
    }else{
      if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)) {
        setEmailError("give your right email")
      }
    }
    if (email && /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)) {
      sendPasswordResetEmail(auth, email)
  .then((user) => {
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  }

  return (
    <div className="bg-black h-screen w-full flex items-center justify-center">
      <div className="bg-white relative md:w-[500px] rounded-2xl px-10 py-12 shadow-lg">
        <h1 className="font-bold text-[25px] text-center mb-6">Forgot Password</h1>

        <div className="relative mb-6">
          <input
            type="email"
             value={email}
            onChange={handleemail}
            placeholder="Email Address"
            className="border-2 outline-0 w-full py-3 px-4 rounded-lg"
          />
          <p className="text-[13px] text-[#11175D] absolute -top-3 left-5 bg-white px-1">
            Email Address
          </p>
          <p className="mt-7 w-[250px]  text-center rounded-3xl text-red-500 font-bold">
          {emailError}
        </p>
        </div>

        <button
        onClick={handleForgote}
        className="bg-black cursor-pointer text-white w-60 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Reset Password
        </button>
        <button className="bg-black cursor-pointer text-white w-60 py-3 mt-5 rounded-lg font-semibold hover:bg-gray-800 transition">
         <Link to="/login">Go back</Link>
        </button>
      </div>
    </div>
  )
}

export default Forgote