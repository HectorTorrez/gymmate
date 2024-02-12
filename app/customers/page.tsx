"use client";
import { users } from "@/data/data";
import Navbar from "../../components/Navbar";
import React from "react";
import { Avatar, Input } from "@nextui-org/react";
import Dropdown from "@/components/Dropdown";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center my-10 ">
        <Input
          label="Search your client"
          className="max-w-[300px]"
          startContent={<SearchIcon size={20} />}
        />
      </div>
      <div className="max-w-[1000px] m-auto flex flex-wrap justify-center">
        <ul className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
          {users.map((user) => {
            return (
              <li className="flex items-center justify-between  " key={user.id}>
                <Link
                  href={`/customers/${user.id}`}
                  className="flex gap-3 items-center"
                >
                  <Avatar src={user.avatar} />
                  <p>{user.email}</p>
                </Link>
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
