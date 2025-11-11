import { BsThreeDotsVertical } from "react-icons/bs";
// import { MdAdd } from "react-icons/md";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useEffect, useState } from "react";
const Fdrequest = () => {

  
  const [done,setDone] = useState ([])
  const db = getDatabase();

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "FriendReques/");
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        arr.push(item.val())
      });
      setDone(arr)
    });
    
  },[]);
  console.log(done);



  const acceptRequest = ((item)=> {
    console.log(item);

     set(ref(db, 'acceptRequest/' +item.reciverName ), {
     reciverName : item.reciverName
  });
    
  })
  

  return (
    <div>
      <div
        className=" mt-[35px] w-[344px]  bg-white rounded-[20px] 
                        shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] "
      >
        <div className="py-[13px] px-[20px] font-third ">
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">Friend Requests</p>
            <span>
              <BsThreeDotsVertical className="text-[#1E1E1E] font-bold" />
            </span>
          </div>

          <div className="px-2 overflow-y-scroll userlist h-[455px]">

            {
              done.map((user)=> (
                <div
              className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                            border-w-[100px] ">
              <div className="mb-[0px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src="" alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    {user?.reciverName}
                  </h3>

                </div>
              </div>
              
              <div
              onClick={()=> acceptRequest (user)}
              className="  hover:bg-amber-500 cursor-pointer duration-300 bg-black   rounded-[5px]">
                <button className="text-[18px] font-normal px-5 py-1 cursor-pointer text-white">
                  Accept
                </button>
              </div>
            </div>
              ))
            }

            






          </div>
        </div>
      </div>
    </div>
  );
};

export default Fdrequest;