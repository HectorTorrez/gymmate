"use client";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import SelectPlan from "@/components/SelectPlan";
import React from "react";

export default function page() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div>
        <SelectPlan />
      </div>
    </>
  );
}
