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
    header: () => {
      return <div className="text-xl text-slate-700">What you will learn</div>;
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "link",
    header: () => {
      return <div className="text-xl text-slate-700">Link</div>;
    },
    cell: ({ row }) => (
      <div className="capitalize">
        <a
          className="p-2 rounded-[10px] text-white gradients"
          href={row.getValue("link")}
        >
          Go to course
        </a>
      </div>
    ),
  },
];
