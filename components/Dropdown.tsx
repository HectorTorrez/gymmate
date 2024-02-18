import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import Confirm from "@/components/Confirm";

import { MoreHorizontal } from "lucide-react";

export default function App() {
  return (
    <Dropdown closeOnSelect={false}>
      <DropdownTrigger>
        <Button size="sm" variant="bordered">
          <MoreHorizontal />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions">
        <DropdownItem key="delete" className="text-danger">
          <Confirm
            title="Do you want  to delete this user?"
            close="Close"
            confirm="Delete"
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
