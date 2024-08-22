import { IroadmapContent, columns } from "./Columns";
import { DataTable } from "./DataTable";

const RenderRoadmapContent = ({ data }: { data: IroadmapContent[] }) => {
  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default RenderRoadmapContent;
