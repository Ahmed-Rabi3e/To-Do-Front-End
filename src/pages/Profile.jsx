import React, { useContext, useEffect } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated) return navigate("/login");
  }, [isAuthenticated, user])

  return loading ? (
    <Loader />
  ) : (
    <div className="w-full h-[calc(100vh-64px)] bg-light flex justify-center items-center">
      <div className=" border-2 border-primaryDark p-8">
        <h2>
          Name :
          <span className="text-3xl text-primaryDark mx-2">{user?.name}</span>
        </h2>
        <p>
          Email :
          <span className="text-3xl text-primaryDark mx-2">{user?.email}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Profile;
