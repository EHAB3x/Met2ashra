import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
import { IroadmapContent } from "@/src/interfaces/index";
function useGetRoadmapContent(id: string) {
  return useQuery({
    queryKey: ["roadmapContent", id],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch(
        `https://ncodenfun.frevva.com/api/roadmaps/${id}/contents`,
        {
          headers: {
            authorization: `Bearer ${decrypt(
              token,
              import.meta.env.VITE_TOKEN_SECRET
            )}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      return data as IroadmapContent[];
    },
  });
}
export default useGetRoadmapContent;
