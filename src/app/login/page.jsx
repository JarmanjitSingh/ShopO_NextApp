"use client";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const page = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Login to your account</h1>
      <div className=" px-11 py-6 w-4/12 h-96 rounded-xl shadow-lg flex flex-col justify-evenly">
        <Input
          label="Email"
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
        <div className="flex items-center justify-between">
          <Checkbox>Remember me</Checkbox>
          <Link href="/" className="text-blue-500">
            Forgot your password?
          </Link>
        </div>
        <Button color="primary" className="w-full">
          Submit
        </Button>
        <div>
          Not have any account?{" "}
          <Link href="/sign-up" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
