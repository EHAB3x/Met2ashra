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

import SuccessToast from "@components/toasts/SuccessToast";
import ErrorToast from "@components/toasts/ErrorToast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useEditName from "../hooks/useEditName";
import useEditImg from "../hooks/useEditImg";
import useEditPassword from "../hooks/useEditPassword";
import { EditImgSchema } from "../validations/editImg";
import { EditNameSchema } from "../validations/editName";
import { EditPasswordSchema } from "../validations/editPassword";

const Profile = () => {
  const auth = useAuth();
  const user = auth?.user;
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof ProfileSchema>>({
    mode: "onBlur",
    resolver: zodResolver(ProfileSchema),
  });

  const { mutate: mutateName } = useEditName();
  const { mutate: mutateImg } = useEditImg();
  const { mutate: mutatePassword } = useEditPassword();

  // Handle name submission
  const handleNameSubmit: SubmitHandler<z.infer<typeof EditNameSchema>> = (
    data
  ) => {
    if (data) {
      mutateName(data, {
        onSuccess: () => SuccessToast("Name updated successfully!"),
        onError: (error) => ErrorToast(error.message),
      });
    }
  };

  // Handle image submission
  const handleImageSubmit: SubmitHandler<z.infer<typeof EditImgSchema>> = (
    data
  ) => {
    if (data) {
      mutateImg(data, {
        onSuccess: () => SuccessToast("Image updated successfully!"),
        onError: (error) => ErrorToast(error.message),
      });
    }
  };

  // Handle password submission with confirmation
  const handlePasswordSubmit: SubmitHandler<
    z.infer<typeof EditPasswordSchema>
  > = (data) => {
    if (data.password !== data.password_confirmation) {
      ErrorToast("Passwords do not match");
      return;
    }

    if (data) {
      mutatePassword(data, {
        onSuccess: (data) => {
          SuccessToast(
            "Password updated successfully! Redirecting...",
            navigate,
            "/"
          );
        },
        onError: (error) => ErrorToast(error.message),
      });
    }
  };

  return (
    <div className="container mx-auto mt-[88px]">
      <div className="flex sm:flex-row flex-col sm:gap-16 gap-8">
        <div className="w-[250px] h-[250px]">
          <img
            src={user?.user.image_link}
            alt="user_img"
            className="w-[250px] h-[250px] rounded-full"
          />
        </div>

        <div>
          <Form {...form}>
            <form className="flex flex-col gap-4">
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
                          placeholder="Enter Your Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <Button
                        onClick={form.handleSubmit(handleNameSubmit)}
                        className="mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                      >
                        Save Name
                      </Button>
                    </FormItem>
                  )}
                />
              </div>

              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <Button
                        onClick={form.handleSubmit(handleImageSubmit)}
                        className="mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                      >
                        Save Image
                      </Button>
                    </FormItem>
                  )}
                />
              </div>

              {/* Password and Confirm Password Inputs */}
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
                          placeholder="Enter Password"
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
                          placeholder="Confirm Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <Button
                        onClick={form.handleSubmit(handlePasswordSubmit)}
                        className="mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                      >
                        Save Password
                      </Button>
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
