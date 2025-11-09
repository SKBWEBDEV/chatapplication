import one from "../../assets/one.png";
// import two from "../../assets/two.png";
// import three from "../../assets/three.png";
// import four from "../../assets/four.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useEffect, useState } from "react";

const FriendRequest = () => {

  const db = getDatabase();

  const [okey,setOkey] = useState ([])

  const userRef = ref(db,"firendRequest")

  let arr = []

 useEffect(()=> {
  
   onValue(userRef, (snapshot) => {
  console.log(snapshot.val(),"dod");
  snapshot.forEach((item)=> {
    arr.push(item.val())
  })
  setOkey(arr);
  
});
 },[])
// console.log(okey,"done");



const handleAccept = (item)=> {
  console.log('done',item);
    set(ref(db, 'acceptRequest/' + item.reciverName), {
      reciverName:item.reciverName
  });
}


  return (
    <div>
      <div
        className=" mt-[25px] w-[430px]  bg-white rounded-[20px] 
                    shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
        <div className="py-[13px] px-[20px] font-third ">
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">Friend  Request</p>
            <span>
              <BsThreeDotsVertical className="text-[#1E1E1E] font-bold" />
            </span>
          </div>



          <div className="px-2 overflow-y-scroll h-[430px] friendrequest">


            {
              okey.map((user)=> (
                 <div
            className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                        border-w-[100px] ">
            <div className="mb-[0px] flex items-center gap-6">
              <div className="mb-[10px]">
                <img src={one} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[14px] text-[#000000]">
                  {user.reciverName}
                </h3>
                {/* <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                  Dinner?
                </h6> */}
              </div>
            </div>
            <div 
            
            className="mb-[10px]">
              <button 
              onClick={()=>handleAccept(user)}
              className="px-[22px] hover:bg-red-600 duration-300 cursor-pointer bg-[#1E1E1E]  text-white rounded-[5px] ">
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

export default FriendRequest;
