import { BsThreeDotsVertical } from "react-icons/bs";
import { getDatabase, ref, onValue, push, remove, set } from "firebase/database";
import { useEffect, useState } from "react";
import one from "../../assets/one.png";
import { useSelector } from "react-redux";
const Fdrequest = () => {
  const data = useSelector((state) => state.user.value.user);
  console.log(data,'ratul');
  

  const db = getDatabase();
  const [requestList, setRequestList] = useState([]);

  const requestRef = ref(db, "FriendReques/");

  useEffect(() => {
    onValue(requestRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        console.log(item.val());
        
        if (data?.uid == item.val().reciverId) {
          arr.push({...item.val(),userId: item.key});
        }
      });
      setRequestList(arr);
    });
  }, []);
  console.log(requestList,'sabbir');

  

  const handleRequest = (item) => {
    console.log(item, "item");
    set(push(ref(db, "AcceptRequest/")), {
      reciverName: item.reciverName,
      reciverId: item.reciverId,
      senderName: item.senderName,
      senderId: item.senderId,
    })
    .then(()=> {
      remove(ref(db, "FriendReques/" +item.userId));
    })

  };






  return (
    <div>
      <div
        className=" mt-[35px] w-[427px]  bg-white rounded-[20px] 
                        shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
        <div className="py-[13px] px-[20px] font-third ">
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">Friends Request</p>
            <span>
              <BsThreeDotsVertical className="text-[#1E1E1E] font-bold" />
            </span>
          </div>

          <div className="px-2 overflow-y-scroll userlist h-[420px]">
            {
            requestList.map((user) => (
              <div
                className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                            border-w-[100px] "
              >
                <div className="mb-[0px] flex items-center gap-6">
                  <div className="mb-[10px]">
                    <img src={one} alt="" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[14px] text-[#000000]">
                    
                      {user.senderName}
                    </h3>
                  </div>
                </div>

              
                  <div
                    onClick={() => handleRequest(user)}
                    className="  hover:bg-amber-500 cursor-pointer duration-300 bg-black rounded-[5px]">
                    <button className="text-[18px] font-normal px-5 py-1 cursor-pointer text-white">
                      Accept
                    </button>
                  </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fdrequest;
