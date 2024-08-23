import { useMutation } from "react-query";
import { decrypt } from "../utils/Utilty";

const useLogout = () => {
  const token = localStorage.getItem("token") || "";
  return useMutation({
    mutationFn: () =>
      fetch("https://ncodenfun.frevva.com/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
        },
      }).then((response) => response.json()),
  });
};

export default useLogout;
