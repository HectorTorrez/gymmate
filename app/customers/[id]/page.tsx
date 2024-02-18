"use client";
import { useParams } from "next/navigation";
import SelectPlan from "@/components/SelectPlan";
import React, { useState } from "react";
import FormRoutine from "@/components/FormRoutine";
import NoSSR from "@/components/NoSSR";

export default function page() {
  const [view, setView] = useState("routine");
  const { id } = useParams();

  return (
    <section className="max-w-[1000px] m-auto">
      <div>
        <SelectPlan view={view} setView={setView} />
      </div>
      <div>
        {view === "routine" && (
          <div className="m-10">
            <NoSSR>
              <FormRoutine />
            </NoSSR>
          </div>
        )}
      </div>
    </section>
  );
}
