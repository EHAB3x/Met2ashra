import { useQuery } from "react-query";
import { decrypt } from "@/src/utils/Utilty";
function useGetCalender() {
  return useQuery({
    queryKey: ["schedule"],
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
      console.log(data.companies);
      return data;
    },
  });
}
export default useGetCalender;
