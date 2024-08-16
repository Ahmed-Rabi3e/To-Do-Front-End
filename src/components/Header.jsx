import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import logo from "../assets/to-do.png"

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <nav className="w-full h-16 bg-dark text-white px-8 py-4 flex items-center justify-between">
      <div>
        <Link to={"/"} className="text-2xl font-bold text-primaryDark">
          <img src={logo} alt="Logo" className="w-24" />
        </Link>
      </div>
      <div className="flex gap-4 items-center font-semibold font-mono">
        <Link to={"/"}>Tasks</Link>
        {isAuthenticated && <Link to={"/profile"}>Profile</Link>}
        {isAuthenticated ? (
          <button
            disabled={loading}
            onClick={logoutHandler}
            className="bg-primaryDark p-2 rounded text-light font-semibold"
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
