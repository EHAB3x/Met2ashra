import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
import { Iroadmap } from "@/src/interfaces/index";
function useGetRoadmaps() {
  return useQuery({
    queryKey: ["roadmaps"],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch("https://ncodenfun.frevva.com/api/roadmaps", {
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data as Iroadmap[];
    },
  });
}
export default useGetRoadmaps;
