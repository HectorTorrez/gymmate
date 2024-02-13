import React, { useState } from "react";
import { Button } from "@nextui-org/react";

export default function App({
  view,
  setView,
}: {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <div className="flex gap-5 justify-center mt-5">
        <Button
          variant={view === "routine" ? "bordered" : "solid"}
          onClick={() => setView("routine")}
        >
          Routine
        </Button>
        <Button
          variant={view === "meal" ? "bordered" : "solid"}
          onClick={() => setView("meal")}
        >
          Meal
        </Button>
        <Button
          variant={view === "note" ? "bordered" : "solid"}
          onClick={() => setView("note")}
        >
          Note
        </Button>
      </div>
    </div>
  );
}
