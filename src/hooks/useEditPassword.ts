import { useMutation } from "react-query";
import { decrypt } from "../utils/Utilty";

interface Iprops {
  name: string;
}

const useEditPassword = () => {
  const token = localStorage.getItem("token") || "";
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch(`https://ncodenfun.frevva.com/public/api/change-name`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
        }),
      }).then((response) => response.json()),
  });
};

export default useEditPassword;
