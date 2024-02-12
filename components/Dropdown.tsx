import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function App() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" variant="bordered">
          Edit
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions">
        <DropdownItem key="new">New Routine</DropdownItem>
        <DropdownItem key="copy">New meal</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete user
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
