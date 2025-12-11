
import { useDispatch, useSelector } from "react-redux";
import one from "../../assets/one.png";
import Slideber from './slideber/Slideber'
import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { userNameUpdate } from "../userSlice";


const Satting = () => {


  const data = useSelector ((state)=> state?.user?.value?.user)
  const db = getDatabase()
  const dispatch = useDispatch ()
  const auth = getAuth();
  const user = auth.currentUser;

  const [statusInput, setStatusInput] = useState("");
  const [latestStatus, setLatestStatus] = useState("");

  const [show,setShow] = useState (false)
  const [status,setStatus] = useState (false)
  const [name,setName] = useState ("")

  

  const handleSubmit = () => {
    setShow(!show)
  }

const handleUpdateName = () => {
  console.log(name);

  if (auth && user) {
    // Firebase Auth update
    updateProfile(user, { displayName: name })
      .then(() => {
        console.log("Profile updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });

    // Firebase Realtime Database update
    if (data?.uid) {
      set(ref(db, "users/" + data.uid), {
        username: name,
        email : data.email
      });
    }

    // Redux state update
    dispatch(userNameUpdate(name));

    // Optional: localStorage sync
    const updatedUserInfo = { ...data, displayName: name };
    localStorage.setItem("userInfo", JSON.stringify({ user: updatedUserInfo }))
    setName("");
  }
};





  const showStatus = () => {
    setStatus(!status)
  }


   const statusRef = ref(db, "status/");

  useEffect(() => {
    const unsubscribe = onValue(statusRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());  
      });

      const latest = arr[arr.length - 1]?.status || ""; 
      setLatestStatus(latest);
    });

    return () => unsubscribe();
  }, []);

  // Input handle
  const handleChange = (e) => {
    setStatusInput(e.target.value);
  };

  // Status update Firebase এ push করা
  const handleSubmitok = () => {
    if (!statusInput) return;
    push(statusRef, { status: statusInput });
    setStatusInput("");
  };

  




 
  

  return (
    <div className='px-10'>
      <div className='flex items-center gap-[50px]  '>
        <Slideber/>
        <div className='relative w-[538px] h-[859px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[20px] pt-[26px] pl-[26px] pr-[26px]'>



          <h3 className='font-bold text-[30px]'>Profile Settings</h3>
          <div className=" flex items-center gap-8 after:w-[455px] after:h-[2px] after:top-[230px] after:left-[30px]
            after:bg-[#000000]/25 after:absolute ">
            <img className="w-[100px] h-[100px] mt-[30px]" src={one} alt="" />
            <div>
              <p className="font-bold text-[25px]">{data?.displayName}</p>
              <p className="font-bold">
                {latestStatus}
              </p>
            </div>
          </div>

           <div className="mt-[70px]">
            <div>
              <p onClick={handleSubmit} className="cursor-pointer">Edit Profile Name.</p>
              {
                show && 
                <div className="flex  gap-4">
                <input
                // value={showDisplayName}
                onChange={(e)=> setName (e.target.value)}
                className="border outline-0 py-2 px-5 rounded-lg w-[290px]" type="text" placeholder="edit name"/>
                <p 
                onClick={handleUpdateName}
                className="text-white bg-black w-[100px] text-center py-1 rounded-lg font-semibold cursor-pointer">submit</p>
              </div>
              }
              
            </div>
            <div
             className="mt-[30px]">
              <p onClick={showStatus} className="cursor-pointer">Edit Profile Status Info..</p>
              {
                status && 
                <div className="flex gap-10">
               <input 
               onChange={handleChange}
               value={statusInput}
               className="border outline-0 px-5 py-2 rounded-lg" type="text" placeholder="profile status"/>
              <p 
                onClick={handleSubmitok}
                className="text-white bg-black w-[100px] text-center py-1 rounded-lg font-semibold cursor-pointer">submit</p>
             </div>
              }
             
            </div>
            <div className="mt-[30px]">
              <p>Edit Profile Photo.</p>
            </div>
            <div className="mt-[30px]">
              <p>Help.</p>
            </div>
           </div>




        </div>



        <div className='w-[538px] h-[859px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[20px]'>
          dk
        </div>
      </div>
    </div>
  )
}

export default Satting