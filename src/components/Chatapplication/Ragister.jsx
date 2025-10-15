import { useState } from "react";
import Reg from "../../assets/reg.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
const Ragister = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setErrorEmail("");
  };

  const nameUpdate = (event) => {
    setName(event.target.value);
    setErrorName("");
  };

  const passwordUpdate = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const signUp = () => {
    if (!email) {
      setErrorEmail("email is required");
    } else {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrorEmail("give yuor right email");
      }
    }
    if (!name) {
      setErrorName("give your right name");
    }
    if (!password) {
      setPasswordError("password is requried");
    } else {
      if (!/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/.test(password)) {
        setPasswordError(
          "at least one lowercase,one uppercase letter,one digit,one special characte,at least 8 characters "
        );
      }
    }
    if (email && name && password && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user, "user");
          toast.success("ragistation succesfully done");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        // transition={Bounce}
      />
      <div className="md:flex md:items-center ">
        <div className="md:w-[50%] flex md:justify-end justify-center">
          <div className="md:mr-[70px]">
            <h1 className="font-bold md:text-[34px] text-[23px] text-[#11175D] font-secondary">
              Get started with easily register
            </h1>
            <p className="text-[#808080] font-secondary md:text-[20px] font-normal">
              Free register and you can enjoy it
            </p>

            <div className="relative mt-[40px]">
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[55px] bg-white w-35 text-center tracking-[2px]">
                Email Address
              </p>
              <input
                className=" py-[15px] pl-[65px] outline-0 md:pr-[66px] md:w-[368px] font-secondary text-[20px] font-semibold 
            border-[#B8B8CE] rounded-[8px] border-3 text-[#11175D]"
                type="email"
                onChange={handleEmail}
                value={email}
                placeholder="Ladushing691@gmail.com "
              />

              <p className="mt-3 bg-gray-600 text-white font-bold text-center md:w-[368px] w-80 rounded-[8px]">
                {errorEmail}
              </p>
            </div>

            <div className="relative mt-[40px]">
              <input
                className=" py-[15px] pl-[65px]  outline-0 md:pr-[66px] md:w-[368px] font-secondary text-[20px] font-semibold 
            border-[#B8B8CE] rounded-[8px] border-3 text-[#11175D]"
                type="text"
                onChange={nameUpdate}
                value={name}
                placeholder="Ladushing GTG "
              />
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[45px] bg-white w-30 text-center tracking-[2px]">
                Ful name
              </p>
              <p className="mt-3 bg-gray-600 text-white font-bold text-center md:w-[368px] w-80 rounded-[8px]">
                {errorName}
              </p>
            </div>

            <div className="relative mt-[40px]  ">
              <input
                className=" py-[15px] pl-[65px]  outline-0 md:pr-[66px] md:w-[368px] font-secondary text-[20px] font-semibold 
            border-[#B8B8CE] rounded-[8px] border-3 text-[#11175D]"
                type={show ? "text" : "password"}
                onChange={passwordUpdate}
                placeholder="Password"
              />
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] 
            left-[20px] bg-white w-30 text-center tracking-[2px]">Password</p>

              <div className="absolute top-[40%] md:right-40 right-15">
                {show ? (
                  <FaEye onClick={() => setShow(!show)} />
                ) : (
                  <FaEyeSlash onClick={() => setShow(!show)} />
                )}
              </div>
            </div>
            <div>
              <p className="mt-5 bg-gray-600 text-white font-bold text-center md:w-[368px] w-80 rounded-[8px]">
                {passwordError}
              </p>
            </div>

            <div className="mt-[40px] ">
              <button
                onClick={signUp}
                className="text-[20px]  outline-0 w-50 md:w-[368px] bg-[#1E1E1E] rounded-full text-white 
            py-[20px]  font-semibold font-secondary cursor-pointer"
              >
                Sign up
              </button>
              <p className="mt-[30px] text-[#03014C] md:ml-22 text-[16px] md:text-[13px] font-primary font-normal">
                Already have an account ?
                <Link to="/login">
                  <span className="text-[#EA6C00]">Sign I n</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full mt-5 md:mt-0">
          <img className="h-screen w-full object-cover" src={Reg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ragister;
