import { useMutation } from "react-query";
interface Iprops {
  phone: string;
  password: string;
  name: string;
  password_confirmation: string;
}

const useSignup = () => {
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch("https://ncodenfun.frevva.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          password: data.password,
          password_confirmation: data.password_confirmation,
        }),
      }).then((response) => response.json()),
  });
};

export default useSignup;
