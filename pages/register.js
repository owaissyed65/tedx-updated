import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { profileColors } from "./utils/constants";
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";
import { auth, db } from "@/firebase/firebase";
// import Loader from "./components/Loader";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
const gprovider = new GoogleAuthProvider();
const fprovider = new FacebookAuthProvider();

const Register = () => {
  const Router = useRouter();
  const { currentUser, isLoading } = useAuth();
  useEffect(() => {
    if (!isLoading && currentUser) {
      Router.push("/");
    }
  }, [currentUser, isLoading]);
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, gprovider);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, fprovider);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const colorIndex = Math.floor(Math.random() * profileColors.length);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName,
        email,
        color: profileColors[colorIndex],
      });

      await setDoc(doc(db, "userChats", user.uid), {});

      await updateProfile(user, {
        displayName,
      });

      console.log(user);
      Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center bg-c1">
      <div className="flex items-center flex-col ">
        <div className="text-center">
          <div className="text-4xl font-bold">Create New Account</div>
          <div className="mt-3 text-c3">
            Connect and chat with anyone,anywhere
          </div>
        </div>
        <div className="flex items-center gap-2 w-full mt-10 mb-5">
          <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          w-1/2 h-14 rounded-md cursor-pointer p-[1px]"
            onClick={signInWithGoogle}
          >
            <div
              className="flex items-center justify-center gap-3
            text-white font-semibold bg-c1 w-full h-full rounded-md"
            >
              <IoLogoGoogle size={24} />
              <span>Login with Google</span>
            </div>
          </div>
          {/* <div className="flex items-center gap-2 w-full mt-5 mb-5"> */}
          <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          w-1/2 h-14 rounded-md cursor-pointer p-[1px]"
            onClick={signInWithFacebook}
          >
            <div
              className="flex items-center justify-center gap-3
            text-white font-semibold bg-c1 w-full h-full rounded-md"
            >
              <IoLogoFacebook size={24} />
              <span>Login with facebook</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-5 h-[1px] bg-c3"></span>
          <span className="font-semibold text-c3">OR</span>
          <span className="w-5 h-[1px] bg-c3"></span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-5 w-[500px] gap-3 bg-c1"
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full h-14 bg-c5 rounded-xl outline-none px-5 text-c3 border-none  "
            autoComplete="off"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-c5 rounded-xl outline-none px-5 text-c3 border-none  "
            autoComplete="off"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-14 bg-c5 rounded-xl outline-none px-5 text-c3 border-none  "
            autoComplete="off"
            required
          />
          <div className="text-right w-full text-c3">
            <span className="cursor-pointer">Forget Password?</span>
          </div>
          <button className="w-full h-14 rounded-xl outline-none border-none text- bg-gradient-to-r from-teal-400 to-yellow-200">
            Sign Up
          </button>
        </form>
        <div className="flex justify-center gap-1 text-c3 mt-2">
          <span>Already have an Account</span>
          <Link
            href="/login"
            className="font-semibold text-white underline-offset-2 underline cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
