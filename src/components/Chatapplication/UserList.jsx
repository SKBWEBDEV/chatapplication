import one from "../../assets/one.png";
// import two from "../../assets/two.png";
// import three from "../../assets/three.png";
// import four from "../../assets/four.png";
// import five from "../../assets/five.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAdd } from "react-icons/md";

import { getDatabase, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserList = () => {

  const sakib = useSelector((state)=> state.user.value.user)
  console.log(sakib.uid);
  


const db = getDatabase();

const [userList,setUserList] = useState([])

let arry = []

const userRef = ref(db,"users")

useEffect(()=> {
onValue(userRef, (snapshot)=> {
  // console.log(snapshot.val());
snapshot.forEach((item)=> {
  // console.log(item.key);
  if (sakib.uid !== item.key) {
     arry.push(item.val())
  }
 
})

setUserList(arry);

  
})
},[])


// console.log(userList);

const handleReQuest = (item)=> {
  console.log('done',item);
  set(ref(db,"firendRequest/" + item.username),{
    senderName:sakib.displayName,
    reciverName:item.username
  })
}

  return (
    <div>
      <div className=" mt-[35px] w-[344px]  bg-white rounded-[20px] 
                    shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
        <div className="py-[13px] px-[20px] font-third ">
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">User List</p>
            <span>
              <BsThreeDotsVertical className="text-[#1E1E1E] font-bold" />
            </span>
          </div>

          <div className="px-2 overflow-y-scroll userlist h-[455px]">




            {
              userList.map((user)=>(
                   <div className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                        border-w-[100px] ">
              <div className="mb-[0px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={one} alt="" />
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


              <div className=" px-[5px] py-[5px] hover:bg-amber-500 cursor-pointer duration-300 bg-black tont-semibold text-[10px] rounded-[5px]">
                <span
                onClick={()=>handleReQuest(user)}
                className="text-[30px] font-bold text-white">
                  <MdAdd />
                </span>
              </div>
            </div>
              ))
            }
            
              
             
              
            

            

            {/* <div
              className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                        border-w-[100px] ">
              <div className="mb-[0px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={two} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    Swathi
                  </h3>
                  <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                    Today, 2:31pm
                  </h6>
                </div>
              </div>
              <div className=" px-[5px] py-[5px] bg-black tont-semibold text-[10px] rounded-[5px]">
                <span className="text-[30px] font-bold text-white">
                  <MdAdd />
                </span>
              </div>
            </div>

            <div
              className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                        border-w-[100px]">
              <div className="mb-[0px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={three} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    Kiran
                  </h3>
                  <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                    Yesterday, 6:22pm
                  </h6>
                </div>
              </div>
              <div className=" px-[5px] py-[5px] bg-black tont-semibold text-[10px] rounded-[5px]">
                <span className="text-[30px] font-bold text-white">
                  <MdAdd />
                </span>
              </div>
            </div>

            <div
              className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                        border-w-[100px]">
              <div className="mb-[0px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={four} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    Tejeshwini C
                  </h3>
                  <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                    Today, 12:22pm
                  </h6>
                </div>
              </div>
              <div className=" px-[5px] py-[5px] bg-black tont-semibold text-[10px] rounded-[5px]">
                <span className="text-[30px] font-bold text-white">
                  <MdAdd />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-[17px] ">
              <div className="mb-[0px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={five} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    Tejeshwini C
                  </h3>
                  <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                    I will call him today.
                  </h6>
                </div>
              </div>
              <div className=" px-[5px] py-[5px] bg-black tont-semibold text-[10px] rounded-[5px]">
                <span className="text-[30px] font-bold text-white">
                  <MdAdd />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-[17px] ">
              <div className="mb-[0px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={five} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    Tejeshwini C
                  </h3>
                  <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                    I will call him today.
                  </h6>
                </div>
              </div>
              <div className=" px-[5px] py-[5px] bg-black tont-semibold text-[10px] rounded-[5px]">
                <span className="text-[30px] font-bold text-white">
                  <MdAdd />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-[17px] ">
              <div className="mb-[0px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={five} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    Tejeshwini C
                  </h3>
                  <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                    I will call him today.
                  </h6>
                </div>
              </div>
              <div className=" px-[5px] py-[5px] bg-black tont-semibold text-[10px] rounded-[5px]">
                <span className="text-[30px] font-bold text-white">
                  <MdAdd />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-[17px] ">
              <div className="mb-[0px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={five} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    Tejeshwini C
                  </h3>
                  <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                    I will call him today.
                  </h6>
                </div>
              </div>
              <div className=" px-[5px] py-[5px] bg-black tont-semibold text-[10px] rounded-[5px]">
                <span className="text-[30px] font-bold text-white">
                  <MdAdd />
                </span>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
