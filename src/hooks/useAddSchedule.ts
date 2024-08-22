import { useMutation } from "react-query";
import { decrypt } from "@/src/utils/Utilty";

interface Iprops {
  roadmap_id: string;
  start_date: string;
  study_days: string[];
}

const useAddSchedule = () => {
  const token = localStorage.getItem("token") || "";
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch("https://ncodenfun.frevva.com/api/create-schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
        },
        body: JSON.stringify({
          roadmap_id: data.roadmap_id,
          start_date: data.start_date,
          study_days: data.study_days,
        }),
      }).then((response) => response.json()),
  });
};

export default useAddSchedule;
