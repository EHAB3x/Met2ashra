import { useMutation } from "react-query";
import { decrypt } from "../utils/Utilty";

interface Iprops {
  image: string;
}

const useEditImg = () => {
  const token = localStorage.getItem("token") || "";
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch(`https://ncodenfun.frevva.com/public/api/change-image`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${decrypt(
            token,
            import.meta.env.VITE_TOKEN_SECRET
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: data.image,
        }),
      }).then((response) => response.json()),
  });
};

export default useEditImg;
