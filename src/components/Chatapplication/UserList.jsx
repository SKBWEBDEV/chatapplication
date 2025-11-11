import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useEffect, useState } from "react";
import four from "../../assets/four.png"
import { useSelector } from "react-redux";
const UserList = () => {

  const data = useSelector((state) => state.user.value.user)
  console.log(data?.uid,'ok');
  

    const db = getDatabase();



  const [okey, setOkey] = useState([]);

  useEffect(() => {
  const userRef = ref(db, "users/");
  
    onValue(userRef, (snapshot) => {
        let arr = [];
      snapshot.forEach((item) => {

        console.log(item.key);
        
       if (data?.uid !== item.key) {
        arr.push(item.val());
       }
        
      });
      setOkey(arr);
    });
  }, []);
  console.log(okey);



  const friendRequest = (item)=> {
    console.log(item);
     set(ref(db, 'FriendReques/' +item.username), {
      senderName : data.displayName,
      reciverName : item.username

  });
  }

  return (
    <div>
      <div
        className=" mt-[35px] w-[344px]  bg-white rounded-[20px] 
                    shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] "
      >
        <div className="py-[13px] px-[20px] font-third ">
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">User List</p>
            <span>
              <BsThreeDotsVertical className="text-[#1E1E1E] font-bold" />
            </span>
          </div>

          <div className="px-2 overflow-y-scroll userlist h-[455px]">
            {okey.map((user) => (
              <div
                className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                        border-w-[100px] "
              >
                <div className="mb-[0px] flex items-center gap-6">
                  <div className="mb-[10px]">
                    <img src={four} alt="" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[14px] text-[#000000]">
                      {user.username}
                    </h3>
                    <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                      {user.email}
                    </h6>
                  </div>
                </div>

                <div
                onClick={()=> friendRequest (user)}
                className=" px-[5px] py-[5px] hover:bg-amber-500 cursor-pointer duration-300 bg-black tont-semibold text-[10px] rounded-[5px]">
                  <span className="text-[30px] font-bold text-white">
                    <MdAdd />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
