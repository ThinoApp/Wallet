import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { trash2 } from "@/utils/icons";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Aliment = {
  id: number;
  amount: number;
  label: string;
  date: string;
  price: number;
};

export const columns: ColumnDef<Aliment>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "amount",
    header: "Quantité",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const aliment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 hover:!bg-red ">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="text-white bg-secondary border-red"
          >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="hover:bg-red"
              onClick={() =>
                navigator.clipboard.writeText(aliment.id.toString())
              }
            >
              Copier l'identifiant
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-red flex justify-between items-center">
              Supprimer
              <span className="scale-75">{trash2}</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-red">
              Modifier
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
