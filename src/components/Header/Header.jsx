"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import { MdKeyboardArrowRight, MdOutlineSearch } from "react-icons/md";

const Header = () => {
  return (
    <header className="h-20 flex items-center justify-between px-10">
      <img
        src="https://shopo.quomodothemes.website/assets/images/logo.svg"
        alt="logo"
      />

      <Input
        className="w-5/12"
        type="text"
        placeholder="Search Product..."
        endContent={
          <MdOutlineSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />

      <Button className="bg-black text-white" endContent={<MdKeyboardArrowRight size={20} />}>
        Become Seller
      </Button>
    </header>
  );
};

export default Header;
