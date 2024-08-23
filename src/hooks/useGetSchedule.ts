import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
import { ISchedule } from "@/src/interfaces/index";
function useGetSchedule() {
  return useQuery({
    queryKey: ["Scheduled"],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch("https://ncodenfun.frevva.com/api/my-schedule", {
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
        },
      });
      const data = await res.json();
      return data as ISchedule[];
    },
  });
}
export default useGetSchedule;
