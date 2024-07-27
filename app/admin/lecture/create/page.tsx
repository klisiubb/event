"use client";
import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { CreateForm } from "../../_components/form/create";
import {
  TopicFormSchema,
  topicFormSchema,
} from "../../_schemas/topicFormSchema";
import { redirect, useRouter } from "next/navigation";
import { createLecture } from "../../_actions/lectures/create";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Page() {
  const router = useRouter();
  const { isLoading, isAuthenticated, getPermissions } =
    useKindeBrowserClient();
  const { permissions } = getPermissions();
  const isAdmin = permissions ? permissions.includes("admin") : false;

  const form = useForm<TopicFormSchema>({
    resolver: zodResolver(topicFormSchema),
    defaultValues: { topic: "" },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isAuthenticated === false || isAdmin === false) {
    return redirect("/");
  }

  const onSubmit = async (values: TopicFormSchema) => {
    const response = await createLecture(values.topic);
    console.log(response);
    if (response.type === "ERROR") {
      response.message.map((msg) => toast.error(msg));
    } else {
      response.message.map((msg) => toast.success(msg));
      router.push(`/admin/lecture/edit/${response.id}`);
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)] p-6 md:p-10  flex items-center justify-center">
      <CreateForm
        form={form}
        fieldName={"topic"}
        route="lecture"
        mainNameText="Name your lecture:"
        mainNameSubText="How would you like to name this? You can change this later."
        labelText="Lecture name:"
        descriptionText="What will they learn?"
        placeholderText="e.g. 'React 18'"
        onSubmit={onSubmit}
      />
    </div>
  );
}
