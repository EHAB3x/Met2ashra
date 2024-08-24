import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { EditPasswordSchema } from "@/src/validations/editPassword";
import useEditPassword from "@hooks/useEditPassword";
const EditPassword = () => {
  const { mutate: mutatePassword } = useEditPassword();
  const form = useForm<z.infer<typeof EditPasswordSchema>>({
    mode: "onBlur",
    resolver: zodResolver(EditPasswordSchema),
  });
  const handlePasswordSubmit: SubmitHandler<
    z.infer<typeof EditPasswordSchema>
  > = (data) => {
    if (data.password !== data.password_confirmation) {
      console.log("j");
      return;
    }

    if (data) {
      mutatePassword(data, {
        onSuccess: (data) => {
          console.log("j");
        },
        onError: (error) => console.log("j"),
      });
    }
  };
  return (
    <div className="sm:col-span-2 col-span-1">
      <Form {...form}>
        <form
          className="flex flex gap-4"
          onSubmit={form.handleSubmit(handlePasswordSubmit)}
        >
          <div className="mb-4 w-full">
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
          <div className="mb-4 w-full">
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
  );
};
export default EditPassword;
