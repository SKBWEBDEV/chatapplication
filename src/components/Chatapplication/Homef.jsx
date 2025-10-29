import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import Slideber from "./slideber/Slideber";
import Group from "./Group";
import Friends from "./Friends";
import User from "./User";
import FriendRequest from "./FriendRequest";
import MyGroups from "./MyGroups";
import UserList from "./UserList";
import BlockUser from "./BlockUser";

const Homef = () => {
  const auth = getAuth();

  const data = useSelector((state) => state.user.value);
  console.log(data);

  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  });

  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true);
    }
    setLoading(false);
  });

  if (loading) {
    return null;
  }
  return (
    <div>
      {verify ? (
        <div className=" flex px-[40px] ">
          <div className="mr-16">
            <Slideber />
          </div>

          <div>
            <div className="flex gap-30">
              <Group />
              <Friends />
              <UserList />
            </div>

            <div className="flex gap-30 mt-[35px]">
              <FriendRequest/>
              <MyGroups />
              <BlockUser/>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black h-screen flex text-center w-full justify-center items-center text-white">
          <div>
            <p className="font-bold text-[50px]">pleaces veryfi your email </p>
            <button className="bg-white cursor-pointer mb-4 hover:bg-blue-500 text-black w-60 py-3 mt-7 rounded-lg font-semibold transition">
              <Link to="/login">
                <span className="hover:text-white">go to login</span>
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homef;
