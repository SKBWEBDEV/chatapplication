import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useEffect, useState } from "react";
import four from "../../assets/four.png";
import { useSelector } from "react-redux";
import { TiMinus } from "react-icons/ti";
const UserList = () => {
  const data = useSelector((state) => state.user.value?.user);
  console.log(data?.uid, "ok");

  const db = getDatabase();

  const [okey, setOkey] = useState([]);

  useEffect(() => {
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        console.log(item.key);

        if (data?.uid !== item.key) {
          arr.push({ ...item.val(), userid: item.key });
        }
      });
      setOkey(arr);
    });
  }, []);
  console.log(okey);

  const friendRequest = (item) => {
    console.log(item,'ibrahim');
    set(push(ref(db, "FriendReques/")), {
      senderName: data.displayName,
      senderId: data?.uid,
      reciverName: item.username,
      reciverId: item.userid,
    });
  };

  const [requestList, setRequestList] = useState([]);

  useEffect(() => {
    const requestRef = ref(db, "FriendReques/");
    onValue(requestRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().reciverId + item.val().senderId);
      });
      setRequestList(arr);
    });
  }, []);

  console.log(requestList);




  const [accRequest, setAccRequest] = useState([]);

  useEffect(() => {
    const requestRef = ref(db, "AcceptRequest/");
    onValue(requestRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().reciverId + item.val().senderId);
      });
      setAccRequest(arr);
    });
  }, []);

  console.log(accRequest);



  const [block, setBlock] = useState([]);

  useEffect(() => {
    const requestRef = ref(db, "BlockUser/");
    onValue(requestRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().reciverId + item.val().senderId);
      });
      setBlock(arr);
    });
  }, []);

  console.log(accRequest);




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

                {
                   block.includes(data?.uid + user.userid) ||
                  block.includes(user.userid + data?.uid) ? 
                  <div className=" px-[5px] py-[5px] hover:bg-amber-500 cursor-pointer duration-300 bg-black tont-semibold text-[10px] rounded-[5px]">
                    <span className="text-[14px] font-normal text-white">
                      block
                    </span>
                  </div> 
                  :
                accRequest.includes(data?.uid + user.userid) ||
                  accRequest.includes(user.userid + data?.uid) ? 
                  <div className=" px-[5px] py-[5px] hover:bg-amber-500 cursor-pointer duration-300 bg-black tont-semibold text-[10px] rounded-[5px]">
                    <span className="text-[14px] font-normal text-white">
                      friend
                    </span>
                  </div> 
                  :
                requestList.includes(data?.uid + user.userid) ||
                requestList.includes(user.userid + data?.uid) ? (
                  <div className=" px-[5px] py-[5px] hover:bg-amber-500 cursor-pointer duration-300 bg-black tont-semibold text-[10px] rounded-[5px]">
                    <span className="text-[30px] font-bold text-white">
                      <TiMinus />
                    </span>
                  </div>
                ) : 
                  (
                  <div
                    onClick={() => friendRequest(user)}
                    className=" px-[5px] py-[5px] hover:bg-amber-500 cursor-pointer duration-300 bg-black tont-semibold text-[10px] 
                    rounded-[5px]">
                    <span className="text-[30px] font-bold text-white">
                      <MdAdd />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
