import { useMutation } from "react-query";
import { useAuth } from "../context/AuthContext";
interface Iprops {
  phone: string;
  password: string;
}

const useLogin = () => {
  const {login} = useAuth();

  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch("https://ncodenfun.frevva.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: data.phone,
          password: data.password,
        }),
      }).then((response) => response.json())
      .then((userData)=> login(userData))
  });
};

export default useLogin;
