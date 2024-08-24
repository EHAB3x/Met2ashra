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
import useEditImg from "@/src/hooks/useEditImg";
import { EditImgSchema } from "@/src/validations/editImg";
const EditImg = () => {
  const { mutate: mutateImg } = useEditImg();
  const form = useForm<z.infer<typeof EditImgSchema>>({
    mode: "onBlur",
    resolver: zodResolver(EditImgSchema),
  });
  const handleImageSubmit: SubmitHandler<z.infer<typeof EditImgSchema>> = (
    data
  ) => {
    if (data) {
      mutateImg(data, {
        onSuccess: () => {
          console.log("j");
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
          onSubmit={form.handleSubmit(handleImageSubmit)}
        >
          <div className="mb-4">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter Your img"
                      type="file"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <Button className="mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                    Save Img
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
export default EditImg;
