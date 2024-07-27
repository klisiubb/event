"use client";

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
import { ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { CreateFormProps } from "../../_interfaces/createFormProps";

export const CreateForm = <T,>({
  route,
  mainNameText,
  mainNameSubText,
  labelText,
  descriptionText,
  placeholderText,
  fieldName,
  onSubmit,
  form,
}: CreateFormProps<T>) => {
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
              <Button type="submit" disabled={isSubmitting}>
                Create
              </Button>
            )}
          </div>
        </form>
      </Form>
    </Card>
  );
};
