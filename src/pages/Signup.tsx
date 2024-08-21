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
// import SuccessToast from "@components/toasts/SuccessToast";
// import ErrorToast from "@components/toasts/ErrorToast";
// import { useNavigate } from "react-router-dom";
const Signup = () => {
  //   const navigate = useNavigate();
  const form = useForm<z.infer<typeof SignupSchema>>({
    mode: "onBlur",
    resolver: zodResolver(SignupSchema),
  });
  const { mutate } = useSignup();
  const submitForm: SubmitHandler<z.infer<typeof SignupSchema>> = (data) => {
    mutate(data, {
      onSuccess(data) {
        console.log(data);

        // if (data.code) {
        //   SuccessToast("Success login welcome to Met2ashara", navigate, "/");
        // } else {
        //   ErrorToast(data.error.message);
        // }
      },
    });
  };
  return (
    <div className="flex min-h-screen">
      {/* Left Section with Logo */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-500 to-white">
        <div className="text-center">
          <div className=" p-4 rounded-full inline-block mb-4">
            <SignupPic className="h-[400px] " />
          </div>
        </div>
      </div>

      {/* Right Section with Form */}
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
                Log in
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
            <p className="text-gray-600">
              Don’t have an account?
              <Link to={"/signup"} className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
