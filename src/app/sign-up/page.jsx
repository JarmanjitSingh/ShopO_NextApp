"use client";
import { Avatar, Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const page = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="mt-8 h-screen flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold mb-8">Register as a new user</h1>
      <div className="px-11 py-6 w-4/12 h-3/5 rounded-xl shadow-lg flex flex-col justify-evenly">
        <Input
          label="Full Name"
          variant="bordered"
          placeholder="Enter your name"
          className="w-full"
        />
         <Input
          label="Email Address"
          type="email"
          variant="bordered"
          placeholder="Enter your email"
          className="w-full"
        />
        <Input
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="w-full"
        />
        <div className="flex gap-2">
            <Avatar />
            <Button>Upload a file</Button>
          
        </div>
        <Button color="primary" className="w-full">
          Submit
        </Button>
        <div>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
