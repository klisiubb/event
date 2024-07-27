"use client";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import Link from "next/link";
import { toast } from "sonner";
import { CreateFormProps } from "../../_interfaces/createFormProps";

export const CreateForm: FC<CreateFormProps> = ({
  formSchema,
  defaultValues,
  route,
  mainNameText,
  mainNameSubText,
  labelText,
  descriptionText,
  placeholderText,
  fieldName,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { defaultValues: defaultValues.value },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(`/api/admin/${route}/create`, values);
      toast.success("Successfully created.");
      router.push(`/admin/${route}/edit/${response.data.id}`);
    } catch (error) {
      toast.error("An error occurred during creation.");
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <Card className="w-3/4 px-8 py-12">
      <h1 className="text-2xl text-primary font-semibold">{mainNameText}</h1>
      <p className="text-sm">{mainNameSubText}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
          <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labelText}</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder={placeholderText}
                    {...field}
                  />
                </FormControl>
                <FormDescription>{descriptionText}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-2 items-center justify-center pb-4">
            <Link href={`/admin/${route}`}>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </Link>
            {isSubmitting ? (
              <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </Button>
            ) : (
              <Button disabled={isSubmitting} type="submit">
                Create
              </Button>
            )}
          </div>
        </form>
      </Form>
    </Card>
  );
};
