import one from "../../assets/one.png";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";

const MyGroups = () => {


  const data = useSelector((state) => state?.user?.value?.user);


    const db = getDatabase();

    const groupRef = ref(db, "GroupName/");
      const [group, setGroup] = useState([]);
    
      useEffect(() => {
        onValue(groupRef, (snapshot) => {
          let arr = [];
          snapshot.forEach((item) => {
            console.log(item.val());
            if (data.uid == item.val().groupCreator) {
              arr.push(item.val());
            }
            
          });
          setGroup(arr);
        });
      }, []);
      console.log(group);


  return (

    <div>

      
      <div
        className="  w-[344px]  bg-white rounded-[20px] 
                 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
        <div className="py-[13px] px-[20px] font-third ">
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">My Groups</p>
            <span>
              <BsThreeDotsVertical className="text-[#1E1E1E] font-bold" />
            </span>
          </div>

          <div className="px-2 overflow-y-scroll mygroup h-[451px]">

            {
              group.map((user)=> (
                <div
              className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                     border-w-[100px] ">
              <div className="mb-[10px] flex items-center gap-6">
                <div className="mb-[10px]">
                  <img src={one} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#000000]">
                    {user.groupName}
                  </h3>
                  <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                    Dinner?
                  </h6>
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

export default MyGroups;
