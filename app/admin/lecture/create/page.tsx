"use client";
import React from "react";
import { CreateForm } from "../../_components/form/create";
import { createLectureSchema } from "../../_schemas/createLectureSchema";

export default function Page() {
  return (
    <div className="min-h-[calc(100vh-160px)] p-6 md:p-10  flex items-center justify-center">
      <CreateForm
        formSchema={createLectureSchema}
        fieldName={"topic"}
        defaultValues={{ ["topic"]: "" }}
        route="lecture"
        mainNameText="Name your lecture:"
        mainNameSubText="How would you like to name this? You can change this later."
        labelText="Lecture name:"
        descriptionText="What will they learn?"
        placeholderText="e.g. 'React 18'"
      />
    </div>
  );
}
