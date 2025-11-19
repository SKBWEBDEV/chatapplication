import one from "../../assets/one.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



const BlockUser = () => {

  const data = useSelector((state) => state?.user?.value?.user);


  const [blockList,setBlockList] = useState ([])
  const db = getDatabase();
  const blockRef = ref(db,"BlockUser/")

  useEffect(()=> {
    onValue(blockRef,(snapshot)=> {
      let arr = []
      snapshot.forEach((item)=> {
        console.log(item.val());
        if (data.uid == item.val().reciverId ) {
          arr.push({...item.val(), blockId: item.key})
        }
        
      })
      setBlockList(arr)
    })
  },[])

  console.log(blockList);



  const handleUnBlock = (item)=> {
    console.log(item,'okey');

    remove(ref(db,"BlockUser/" +item.blockId))
    
  }



  



  return (
    <div>
      <div
        className="  w-[344px] bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
        <div className="py-[13px] px-[20px] font-third ">
          <div className="flex justify-between ">
            <p className="text-[20px] font-semibold">Blocked Users</p>
            <span>
              <BsThreeDotsVertical className="text-[#1E1E1E] font-bold" />
            </span>
          </div>

          <div className="h-[455px] overflow-y-scroll blockuser px-2">


            {
              blockList.map((user)=> (
                 <div
            className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                           border-w-[100px] ">
            <div className="mb-[0px] flex items-center gap-6">
              <div className="mb-[10px]">
                <img src={one} alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-[14px] text-[#000000]">
                  {user.senderName}
                </h3>
                <h6 className="text-[#4D4D4DBF] text-[10px] font-medium">
                  Today, 8:56pm
                </h6>
              </div>
            </div>
            <div className="mb-[10px]">
              <button
              onClick={ ()=>  handleUnBlock (user)}
              className="px-[20px] bg-[#1E1E1E] text-white rounded-[5px] cursor-pointer">
                unblock
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

export default BlockUser;
