import useEditName from "@hooks/useEditName";
import { EditNameSchema } from "@/src/validations/editName";
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
const EditName = ({ userData }) => {
  const { mutate: mutateName } = useEditName();
  const form = useForm<z.infer<typeof EditNameSchema>>({
    mode: "onBlur",
    resolver: zodResolver(EditNameSchema),
  });
  const handleNameSubmit: SubmitHandler<z.infer<typeof EditNameSchema>> = (
    data
  ) => {
    if (data) {
      mutateName(data, {
        onSuccess: () => {
          console.log("j");
          userData.SetUserName(data.name);
        },
        onError: (error) => console.log("j"),
      });
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(handleNameSubmit)}
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
                      placeholder="Enter Your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <Button className="mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                    Save Name
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
export default EditName;
