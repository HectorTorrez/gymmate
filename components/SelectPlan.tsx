import React, { useState } from "react";
import { Button } from "@nextui-org/react";

export default function App() {
  const [view, setView] = useState("meal");

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
      {view === "meal" && <p>meal</p>}
    </div>
  );
}
