"use client";
import React from "react";
import { navItems } from "@/static/data";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Avatar, Badge } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <div className="w-5/12 flex justify-between items-center h-full text-white px-10 font-bold">
        {navItems.map((item) => {
          const isActive = pathname === item.url;
          return (
            <Link
              href={item.url}
              key={item.url}
              className={isActive ? "text-green-500" : ""}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-between w-36 text-white h-full ">
        <Badge content="0" color="success" size="sm" className="text-white">
          <BsHeart size={26} className="cursor-pointer" />
        </Badge>
        <Badge content="0" color="success" size="sm" className="text-white">
          <AiOutlineShoppingCart size={28} className="cursor-pointer" />
        </Badge>
        <Avatar className="bg-transparent border text-white cursor-pointer" onClick={()=> router.push("/login")} />
      </div>
    </>
  );
};

export default NavItems;
