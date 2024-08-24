import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileSchema } from "@/src/validations/profile";
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

import useLogin from "@hooks/useLogin";
import SuccessToast from "@components/toasts/SuccessToast";
import ErrorToast from "@components/toasts/ErrorToast";
import { useNavigate } from "react-router-dom";
import { encrypt } from "../utils/Utilty";
import { useAuth } from "../context/AuthContext";
const Profile = () => {
  const auth = useAuth();
  const user = auth?.user;
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof ProfileSchema>>({
    mode: "onBlur",
    resolver: zodResolver(ProfileSchema),
  });
  const { mutate } = useLogin();

  const submitForm: SubmitHandler<z.infer<typeof ProfileSchema>> = (data) => {
    mutate(data, {
      onSuccess(data) {
        localStorage.setItem(
          "token",
          encrypt(data.access_token, import.meta.env.VITE_TOKEN_SECRET)
        );
        if (data.access_token) {
          auth?.login(data);
          SuccessToast("Success login welcome to Met2ashara", navigate, "/");
        } else {
          ErrorToast(data.error.message);
        }
      },
    });
  };
  return (
    <div className="container mx-auto my-[88px] relative">
      <div className="flex sm:flex-row flex-col sm:gap-16 gap-8npm ">
        <div className="w-[250px] h-[250px]">
          <img
            src={user?.user.image_link}
            alt="user_img"
            className="w-[250px] h-[250px] rounded-full"
          />
        </div>

        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitForm)}
              className="sm:grid grid-cols-2 flex flex-col sm:gap-x-16 gap-4"
            >
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
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
                  name="img"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
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
                          placeholder="Please enter your Password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className= "col-span-2 flex justify-center">
                <Button
                  type="submit"
                  className="sm:w-[50%] w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Change Your Data
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
