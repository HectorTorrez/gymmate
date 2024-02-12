"use client";
import { users } from "@/data/data";
import Navbar from "../../components/Navbar";
import React from "react";
import { Avatar } from "@nextui-org/react";
import Dropdown from "@/components/Dropdown";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1000px] m-auto flex flex-wrap">
        <ul className="flex flex-col gap-5 ">
          {users.map((user) => {
            return (
              <li className="flex items-center justify-between  " key={user.id}>
                <div className="flex gap-3 items-center">
                  <Avatar src={user.avatar} />
                  <p className="hidden sm:block">{user.name} - </p>
                  <p>{user.email}</p>
                  <p>- {user.age}</p>
                </div>
                <div className="">
                  <Dropdown />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
