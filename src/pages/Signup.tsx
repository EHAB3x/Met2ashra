import SignupPic from "@assets/svg/Signup.svg?react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/src/validations/signup";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import useSignup from "@hooks/useSignup";
import useVerfiyNumber from "@hooks/useVerfiyNumber";

import SuccessToast from "@components/toasts/SuccessToast";
import { useNavigate } from "react-router-dom";
import { encrypt } from "../utils/Utilty";
// import ErrorToast from "@components/toasts/ErrorToast";
const Signup = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof SignupSchema>>({
    mode: "onBlur",
    resolver: zodResolver(SignupSchema),
  });
  const { mutate: signupMutate } = useSignup();
  const { mutate: verifyMutate } = useVerfiyNumber();

  const submitForm: SubmitHandler<z.infer<typeof SignupSchema>> = (data) => {
    signupMutate(data, {
      onSuccess() {
        verifyMutate(
          { phone: data.phone, code: "1234" },
          {
            onSuccess: (responseData) => {
              const token = responseData.token;
              console.log(responseData);

              localStorage.setItem(
                "token",
                encrypt(token, import.meta.env.VITE_TOKEN_SECRET)
              );
              SuccessToast(
                "Account Created and Phone Verified Successfully",
                navigate,
                "/"
              );
            },
          }
        );
      },
    });
  };

  return (
    <div className="flex sm:flex-row flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-500 to-white">
        <div className="text-center">
          <div className=" p-4 rounded-full inline-block mb-4">
            <SignupPic className="h-[400px] " />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold  mb-6 text-center">
            Create New Account
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name </FormLabel>

                      <FormControl>
                        <Input
                          className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter Your Name "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile number</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter Your Mobile Number"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Please enter your Password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="password_confirmation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Please enter Confirm your Password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
                <a href="/" className="text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <Button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                Sign up
              </Button>
            </form>
          </Form>

          <div className="my-6 text-center">
            <p>Or Sign up with</p>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white p-2 rounded-full flex items-center">
              <i className="fab fa-apple"></i>
            </button>
            <button className="bg-red-500 text-white p-2 rounded-full flex items-center">
              <i className="fab fa-google"></i>
            </button>
            <button className="bg-blue-700 text-white p-2 rounded-full flex items-center">
              <i className="fab fa-facebook"></i>
            </button>
          </div>

          <div className="text-center mt-6">
            <Link to={"/"} className="text-blue-500 hover:underline">
              Go Home Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
