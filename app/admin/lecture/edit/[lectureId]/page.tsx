import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { TextInput } from "@/app/admin/_components/form/TextInput";
import { topicFormSchema } from "@/app/admin/_schemas/topicFormSchema";

export default async function Page({
  params,
}: {
  params: { lectureId: string };
}) {
  const { lectureId } = params;
  const { getPermission, isAuthenticated } = getKindeServerSession();
  const isAdmin = await getPermission("admin");

  if ((await isAuthenticated()) === false || !isAdmin?.isGranted) {
    return redirect("/");
  }

  const lecture = await prisma.lecture.findUnique({
    where: { id: lectureId },
  });

  if (!lecture) {
    return redirect("/admin/lecture");
  }
  return <div className="min-h-[calc(100vh-160px)] p-6 md:p-10"></div>;
}
