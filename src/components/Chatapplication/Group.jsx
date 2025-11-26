// import { BsThreeDotsVertical } from "react-icons/bs";

import { onValue, push } from "firebase/database";
import { useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
import one from "../../assets/one.png";

const Group = () => {
  const data = useSelector((state) => state?.user?.value?.user);

  const [show, setShow] = useState(false);

  const db = getDatabase();

  const [groupNames, setGroupName] = useState("");
  const [groupNameError, setGroupNameError] = useState("");

  const [tagNames, setTagName] = useState("");
  const [tagNamesError, setTagNameError] = useState("");

  const groupName = (event) => {
    setGroupName(event.target.value);
    setGroupNameError("");
  };

  const groupTagName = (event) => {
    setTagName(event.target.value);
    setTagNameError("");
  };

  const handleCreate = () => {
    if (!groupNames) {
      setGroupNameError("plase write your group name");
    }
    if (!tagNames) {
      setTagNameError("plase write your group tagname");
    }

    if (groupNames && tagNames) {
      set(push(ref(db, "GroupName/")), {
        groupName: groupNames,
        tagName: tagNames,
        groupCreator: data.uid,
      }).finally(() => {
        setGroupName("");
        setTagName("");
      });
    }
  };

  const groupRef = ref(db, "GroupName/");
  const [group, setGroup] = useState([]);

  useEffect(() => {
    onValue(groupRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        console.log(item.val());
        if (data.uid != item.val().groupCreator) {
          arr.push(item.val());
        }
      });
      setGroup(arr);
    });
  }, []);
  console.log(group);

  return (
    <div>
      <div className=" mt-[135px] w-[427px]  bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
        <div className="py-[13px] px-[20px] font-third ">
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">Group list</p>

            <div>
              {show ? (
                <button
                  onClick={() => setShow(!show)}
                  className="bg-black text-white px-5 py-1 cursor-pointer rounded-[8px]">
                  go back
                </button>
              ) : (
                <button
                  onClick={() => setShow(!show)}
                  className="bg-black text-white px-5 py-1 cursor-pointer rounded-[8px]">
                  create group
                </button>
              )}
            </div>
          </div>

          <div className="group overflow-y-scroll h-[347px] px-2">
            <div>
              {show ? (
                <div className=" mt-[17px] border-[#00000040] border-w-[100px] ">
                  <div className="rounded-[10px] absolute top-[30%] left-[30%] w-[1000px]  bg-emerald-200 text-center py-50">
                    <div className=" mt-[17px]  border-[#00000040] border-w-[100px] ">
                      <div>
                        <input
                          onChange={groupName}
                          value={groupNames}
                          className="border outline-0 w-100 py-3 px-3 rounded-[8px]"
                          type="text"
                          placeholder="group name"/>
                        <p>{groupNameError}</p>
                      </div>

                      <div>
                        <input
                          onChange={groupTagName}
                          value={tagNames}
                          className="border outline-0 w-100 py-3 px-3 rounded-[8px] mt-7"
                          type="text"
                          placeholder="group tagline"
                        />
                        <p>{tagNamesError}</p>
                      </div>

                      <button
                        onClick={handleCreate}
                        className="bg-black text-white py-3 px-5 rounded-[8px] text-[20px] w-100 mt-3 cursor-pointer hover:bg-white 
                                 duration-300 font-black hover:text-black">
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {group.map((user) => (
                    <div
                      className="flex items-center justify-between mt-[17px] border-b-1 border-[#00000040] 
                                    border-w-[100px] ">
                      <div className="mb-[0px] flex items-center gap-6">
                        <div className="mb-[10px]">
                          <img src={one} alt="" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[14px] text-[#000000]">
                            {user.groupName}
                          </h3>
                          <h6 className="text-[#4D4D4DBF] text-[12px] font-medium">
                            {user.tagName}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
