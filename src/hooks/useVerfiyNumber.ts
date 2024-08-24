import { useMutation } from "react-query";
interface Iprops {
  phone: string;
  code: string;
}

const useVerfiyNumber = () => {
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch("https://ncodenfun.frevva.com/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: data.phone,
          code: "1234",
        }),
      }).then((response) => response.json()),
  });
};

export default useVerfiyNumber;
