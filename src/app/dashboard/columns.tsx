"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Data } from "@/lib/data";
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "first_name",
    header:({column}) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          First Name <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header:({column}) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Email <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "Phone",
    header:({column}) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Phone <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "birthday",
    header:({column}) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Birthday <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
];
