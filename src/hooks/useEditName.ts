import { useMutation } from "react-query";
import { decrypt } from "../utils/Utilty";

interface Iprops {
  password: string;
  password_confirmation: string;
}

const useEditName = () => {
  const token = localStorage.getItem("token") || "";
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch(`https://ncodenfun.frevva.com/public/api/change-password`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: data.password,
          password_confirmation: data.password_confirmation,
        }),
      }).then((response) => response.json()),
  });
};

export default useEditName;
