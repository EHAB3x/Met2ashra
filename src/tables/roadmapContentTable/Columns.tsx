import { ColumnDef } from "@tanstack/react-table";

export interface IroadmapContent {
  id: string;
  name: string;
  contents: {
    id: string;
    description: string;
    link: string;
  }[];
}

export const columns: ColumnDef<IroadmapContent>[] = [
  {
    accessorKey: "description",
    header: "What you will learn",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "link",
    header: "link",
    cell: ({ row }) => (
      <div className="capitalize">
        <a href={row.getValue("link")}>Go to course</a>
      </div>
    ),
  },
];
