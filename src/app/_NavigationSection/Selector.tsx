import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Selector() {
  return (
    <Select>
      <SelectTrigger className="w-full md:w-52">
        <SelectValue placeholder="All class" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select your choice</SelectLabel>
          <SelectItem value="First Class">First Class</SelectItem>
          <SelectItem value="Second Class">Second Class</SelectItem>
          <SelectItem value="Third Class">Third Class</SelectItem>
          <SelectItem value="Fourth Class">Fourth Class</SelectItem>
          <SelectItem value="Fifth Class">Fifth Class</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
