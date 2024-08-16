import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/users/new`,
        {
          name,
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
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-light flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center p-16 border-2 border-primaryDark"
      >
        <h2 className="font-extrabold text-primaryDark my-4 mb-10 text-5xl">
          Sign Up
        </h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          className="p-2 my-2 outline-none text-black rounded-md bg-dark/75 placeholder:text-white/75 text-md"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 my-2 outline-none text-black rounded-md bg-dark/75 placeholder:text-white/75 text-md"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="p-2 my-2 outline-none text-black rounded-md bg-dark/75 placeholder:text-white/75 text-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primaryDark px-4 py-2 rounded-3xl text-white font-bold my-2 w-full hover:bg-black cursor-pointer"
        >
          Sign Up
        </button>
        <h4 className="my-2">Or</h4>
        <Link to="/login" className="hover:underline font-bold mt-2">
          Log In
        </Link>
      </form>
    </div>
  );
};

export default Register;
