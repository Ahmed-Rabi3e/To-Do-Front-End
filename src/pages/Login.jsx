import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../main";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${server}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-light flex justify-center items-center">
      <form
        className="flex flex-col justify-center items-center p-16 border-2 border-primaryDark"
        onSubmit={submitHandler}
      >
        <h2 className="font-extrabold text-primaryDark my-4 mb-10 text-5xl">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 my-2 outline-none text-black rounded-md bg-dark/75 placeholder:text-white/75 text-md"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 my-2 outline-none text-black rounded-md bg-dark/75 placeholder:text-white/75 text-md"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-primaryDark px-4 py-2 rounded-3xl text-white font-bold my-2 w-full hover:bg-black cursor-pointer"
        >
          Login
        </button>
        <h4 className="my-2">Or</h4>
        <Link to="/register" className="font-bold hover:underline mt-2">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
