import { useEffect, useState } from "react";
import one from "../../assets/one.png";
import { getDatabase, ref, onValue } from "firebase/database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
const Friends = () => {

  const data = useSelector((state) => state?.user?.value?.user);

  const [accept, setAccept] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const acceptRef = ref(db, "AcceptRequest/");
    onValue(acceptRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        console.log(item.val(),'iluyg');
        if (data?.uid == item.val().reciverId) {
          arr.push(item.val())
        }
        
      });
      setAccept(arr)
    });
  }, []);
  console.log(accept);




  
  
  

  return (
    <div>
      <div
        className=" mt-[35px] w-[344px]  bg-white rounded-[20px] 
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] "
      >
        <div className="py-[13px] px-[20px] font-third ">
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">Friends</p>
            <span>
              <BsThreeDotsVertical className="text-[#1E1E1E] font-bold" />
            </span>
          </div>

          <div className="px-2 overflow-y-scroll friend h-[451px]">
            {
              accept.map((user)=> (
                <div
              className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                border-w-[100px] ">
              <div className="mb-[10px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={one} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    {user.senderName}
                  </h3>
                  {/* <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">Dinner?</h6> */}
                </div>
              </div>
              <div className="text-[#00000080] tont-semibold text-[10px]">
                <p>Today, 8:56pm</p>
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

export default Friends;
