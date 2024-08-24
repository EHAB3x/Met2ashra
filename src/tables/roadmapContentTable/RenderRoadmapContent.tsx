import { IContents } from "@/src/interfaces";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

const RenderRoadmapContent = ({ data }: { data:  IContents[] }) => {
  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default RenderRoadmapContent;
