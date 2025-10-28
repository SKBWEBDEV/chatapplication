import { FaEnvelope, FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
const Homef = () => {
  const data = useSelector(state=> (state.user.value))
  console.log(data);
  const [veryfi,setVeryfi] = useState(false)
  const auth = getAuth();

   onAuthStateChanged(auth, (user) => {
  if (user.emailVerified) { 
    console.log(user);
    setVeryfi(true)
  } else{
    setVeryfi(false)
  }
});
  return (
    <div>
      {
        veryfi ? 
         <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex flex-wrap justify-between items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold text-indigo-600">
          Welcome Home
        </h1>

        <div className="flex items-center gap-4 text-gray-600 w-full sm:w-auto justify-center sm:justify-end">
          <FaEnvelope className="hover:text-indigo-500 cursor-pointer" size={18} />
          <FaBell className="hover:text-indigo-500 cursor-pointer" size={18} />
          <FaUserCircle className="text-2xl sm:text-3xl hover:text-indigo-500 cursor-pointer" />
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        className="text-center mt-12 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
          Login Successful ✅
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Welcome back! You have successfully logged in.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-indigo-700 transition-all text-sm sm:text-base"
        >
          Explore Dashboard
        </motion.button>
      </motion.div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10">
        {[
          { title: "Profile", desc: "View and update your profile details" },
          { title: "Messages", desc: "Check your latest messages" },
          { title: "Settings", desc: "Manage your account preferences" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md p-6 text-center"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mb-10 px-4">
        <button className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition-all text-sm sm:text-base">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div> 
        
        
        : 
        
              <motion.div 
  className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-indigo-300 text-center px-4 sm:px-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.7 }}
>
  <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md">
    <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-3 sm:mb-4">
      Please Verify Your Email 📩
    </h2>

    <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
      A verification link has been sent to your email.  
      Please check your inbox and verify your account to continue.
    </p>

    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-indigo-600 text-white text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl shadow-md hover:bg-indigo-700 transition-all w-full sm:w-auto"
    >
      Resend Verification Email
    </motion.button>
  </div>

  <p className="mt-6 text-gray-700 text-sm sm:text-base">
    Didn’t receive the email?{" "}
    <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
      Check spam folder
    </span>.
  </p>
</motion.div>
      }
    </div>
  )
}

export default Homef